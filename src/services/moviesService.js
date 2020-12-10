import fetch from 'node-fetch';
import { token } from './cinemasService';

const UPCOMINGENDPOINT = 'http://api.kvikmyndir.is/upcoming';

const GenresToString = (genres) => {
  let genresStr = '';
  for (let i = 0; i < genres.length; i += 1) {
    genresStr += `${genres[i].Name}\n`;
  }
  return genresStr;
};

const TrailerObjectsToUrl = (trailers) => {
  let urlStr = '';
  const urlArray = [];
  for (let i = 0; i < trailers.length; i += 1) {
    for (let j = 0; j < trailers[i].results.length; j += 1) {
      urlStr = `${trailers[i].results[j].url}`;
      urlArray.push(urlStr);
    }
  }
  return urlArray;
};

async function getAllUpcomingMovies() {
  let finalToken = await token();
  finalToken = finalToken.token;
  return fetch(UPCOMINGENDPOINT, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': finalToken,
      'Accept-Charset': 'utf-8',
    },
  }).then((d) => d.json())
    .then(async (upcomingMovies) => {
      const movies = [];
      for (let x = 0; x < upcomingMovies.length; x += 1) {
        const genreStr = await GenresToString(upcomingMovies[x].genres);
        const urlArray = await TrailerObjectsToUrl(upcomingMovies[x].trailers);
        movies.push({
          id: upcomingMovies[x].id,
          name: upcomingMovies[x].title,
          image: upcomingMovies[x].poster,
          releaseDate: upcomingMovies[x]['release-dateIS'],
          trailers: urlArray,
          genres: genreStr,
          plot: upcomingMovies[x].plot,
        });
      }
      return movies;
    });
}

export default getAllUpcomingMovies;
