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
    if (genres[i].Name){
      genresStr += `${genres[i].Name}\n`;
    }
  }
  return genresStr.slice(0,-1);
};

const TrailerObjectsToUrl = (trailers) => {
  const urlArray = [];
  for (let i = 0; i < trailers.length; i += 1) {
    for (let j = 0; j < trailers[i].results.length; j += 1) {
      urlArray.push(`${trailers[i].results[j].url}`);
    }
  }
  return urlArray;
};

const peopleToString = (people) => {
  var peopleString = '';
  for (let i = 0; i < people.length; i += 1) {
    peopleString += `${people[i].name}\n`;
  }
  return peopleString.slice(0,-1);
}

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
          if (movies[i].showtimes[j].cinema.id === cinemaId || movies[i].showtimes[j].cinema.toString() === cinemaId.toString() ) {
            var showtimes = Array(movies[i].showtimes[j])
            const genresStr = GenresToString(movies[i].genres);
            cinemaMovies.push({
              id: movies[i].id,
              name: movies[i].title,
              image: movies[i].poster,
              releaseYear: movies[i].year,
              genres: genresStr,
              duration: movies[i].durationMinutes,
              plot: movies[i].plot,
              showtimes: showtimes,
            });
          }
        }
      }
      return cinemaMovies;
    }),
});

export const getAllMovies = (finalToken) => ({
  getMovies: () => fetch(MOVIESENDPOINT, {
    method: 'GET',
    headers: {
      'x-access-token': finalToken,
    },
  })
    .then((d) => d.json())
    .then(async (movies) => {
      const allMovies = [];
      for (let i = 0; i < movies.length; i += 1) {
        const genresStr = GenresToString(movies[i].genres);
        const urlArray = await TrailerObjectsToUrl(movies[i].trailers);
        const directors = await peopleToString(movies[i].directors_abridged);
        const actors = await peopleToString(movies[i].actors_abridged);
        var certificate = ''
        if (!movies[i].certificate) {
          certificate = movies[i].certificateIS.number
        }else {
          certificate = movies[i].certificate.number
        }
        allMovies.push({
          id: movies[i].id,
          name: movies[i].title,
          image: movies[i].poster,
          releaseYear: movies[i].year,
          duration: movies[i].durationMinutes,
          plot: movies[i].plot,
          rating: movies[i].ratings.imdb,
          ageLimit: certificate,
          otherTitles: movies[i].alternativeTitles,
          actors: actors,
          directors: directors,
          trailers: urlArray,
          genres: genresStr,
        });
      }
      return allMovies;
    }),
});
