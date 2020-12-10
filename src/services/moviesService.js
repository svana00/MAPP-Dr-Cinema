import fetch from 'node-fetch';
import { GetGenres, token } from './cinemasService';

const UPCOMINGENDPOINT = 'http://api.kvikmyndir.is/upcoming';

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
      const temp = [];
      for (let x = 0; x < upcomingMovies.length; x += 1) {
        const genreStr = await GetGenres(upcomingMovies[x].genres);
        temp.push({
          id: upcomingMovies[x].id,
          name: upcomingMovies[x].title,
          image: upcomingMovies[x].poster,
          releaseDate: upcomingMovies[x]['release-dateIS'],
          // trailers: upcomingMovies[x].trailer,
          genres: genreStr,
          plot: upcomingMovies[x].plot,
        });
      }
      return temp;
    });
}

export default getAllUpcomingMovies;
