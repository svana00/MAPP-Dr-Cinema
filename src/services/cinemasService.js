import fetch from 'node-fetch';

const AUTHENTICATIONENDPOINT = 'https://api.kvikmyndir.is/authenticate';
const CINEMASENDPOINT = 'http://api.kvikmyndir.is/theaters';
const MOVIESENDPOINT = 'http://api.kvikmyndir.is/movies';

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

export const GenresToString = (genres) => {
  let genresStr = '';
  for (let i = 0; i < genres.length; i += 1) {
    genresStr += `${genres[i].Name}\n`;
  }
  return genresStr;
};

export const getAllMoviesForCinema = (cinemaId, finalToken) => ({
  getMovies: () => fetch(MOVIESENDPOINT, {
    method: 'GET',
    headers: {
      'x-access-token': finalToken,
    },
  })
    .then((d) => d.json())
    .then(async (movies) => {
      const cinemaMovies = [];
      for (let i = 0; i < movies.length; i += 1) {
        for (let j = 0; j < movies[i].showtimes.length; j += 1) {
          if (movies[i].showtimes[j].cinema.id === cinemaId) {
            const genresStr = GenresToString(movies[i].genres);
            cinemaMovies.push({
              id: movies[i].id,
              name: movies[i].title,
              image: movies[i].poster,
              releaseYear: movies[i].year,
              genres: genresStr,
              duration: movies[i].durationMinutes,
              plot: movies[i].plot,
              showtimes: movies[i].showtimes[j],
            });
          }
        }
      }
      return cinemaMovies;
    }),
});
