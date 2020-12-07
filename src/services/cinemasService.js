import fetch from 'node-fetch';

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ZmNlMGRkNTE2ZjczZjE2NjQ4OThjNTkiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IlLDs3Nsw61uIEVybGEgVMOzbWFzZMOzdHRpciIsImVtYWlsIjoicm9zbGluZXJsYTI2MDlAZ21haWwuY29tIiwidXNlcm5hbWUiOiJyb3NldGhlZmwwd2VyIiwicGFzc3dvcmQiOiIkMmEkMDgkc2c4QS9UdFlmaEFhdnBINC45ems0LkZ3N2RFYlh5TXc0RC5jejJYNkxYMVZyNUVIMnozREciLCJkb21haW4iOiJsb2NhbGhvc3QiLCJtZXNzYWdlIjoiTGVhcm5pbmcgaG93IHRvIG1ha2UgYW4gYXBwIGluIHNjaG9vbCB0aGF0IHJlbGllcyBvbiBpbmZvIGZyb20gYW4gZXh0ZXJuYWwgYXBpIiwiaWF0IjoxNjA3MzQwODA1LCJleHAiOjE2MDc0MjcyMDV9.cyWF15frBNjKyD2zTq1piXLYfB1WZjVNds2mapeX6Tc';
const CINEMASENDPOINT = 'http://api.kvikmyndir.is/theaters';
const MOVIEENDPOINT = 'http://api.kvikmyndir.is/movies'

export default function getAllCinemas() {
  return fetch(CINEMASENDPOINT, {
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
