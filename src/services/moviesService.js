import fetch from 'node-fetch';

const UPCOMINGENDPOINT = 'http://api.kvikmyndir.is/upcoming';

function getAllUpcomingMovies(token) {
  return fetch(UPCOMINGENDPOINT, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': token,
      'Accept-Charset': 'utf-8',
    },
  }).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    }
    throw new Error('error ', response);
  }).catch((error) => { console.log(error); });
}

export default getAllUpcomingMovies;
