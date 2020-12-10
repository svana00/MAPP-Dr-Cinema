import fetch from 'node-fetch';

const AUTHENTICATIONENDPOINT = 'https://api.kvikmyndir.is/authenticate';
const CINEMASENDPOINT = 'http://api.kvikmyndir.is/theaters';
const MOVIEENDPOINT = 'http://api.kvikmyndir.is/movies';

export const token = () => {
  const payload = {
    username: 'RoseTheFl0wer',
    password: 'smaforritmarosv',
  };
  return fetch(AUTHENTICATIONENDPOINT, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  }).then(async (response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    }
    throw new Error('did not work ', response);
  }).catch((error) => { console.log(error); });
};

export async function getAllCinemas() {
  let finalToken = await token();
  finalToken = finalToken.token;
  return fetch(CINEMASENDPOINT, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': finalToken,
      'Accept-Charset': 'utf-8',
    },
  }).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    }
    throw new Error('error ', response);
  }).catch((error) => { console.log('THIS ERROR', error); });
}

export const getAllMoviesForCinema = (cinemaId, finalToken) => ({
  getMovies: () => fetch(MOVIEENDPOINT, {
    method: 'GET',
    headers: {
      'x-access-token': finalToken,
    },
  })
    .then((d) => d.json())
    .then(async (movies) => {
      const temp = [];
      for (let x = 0; x < movies.length; x += 1) {
        for (let y = 0; y < movies[x].showtimes.length; y += 1) {
          if (movies[x].showtimes[y].cinema.id === cinemaId) {
            const genreStr = await GetGenres(movies[x].genres);
            temp.push({
              id: movies[x].id,
              name: movies[x].title,
              image: movies[x].poster,
              releaseYear: movies[x].year,
              genres: genreStr,
              duration: movies[x].durationMinutes,
              plot: movies[x].plot,
              showtimes: movies[x].showtimes[y],
            });
          }
        }
      }
      return temp;
    }),
});

export const GetGenres = (genreArray) => {
  let genreStr = '';
  for (let x = 0; x < genreArray.length; x += 1) {
    genreStr += `${genreArray[x].Name}\n`;
  }
  return genreStr;
};
