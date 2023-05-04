const movieSearchApi = query => {
  const API_KEY = 'dbb209971c0a849ca6d954f6b026b870';
  const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
  return fetch(`${BASE_URL}?api_key=${API_KEY}&query=${query}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      return new Promise.reject(
        new Error(`Something went wrong. Please, try again later`)
      );
    }
  );
};

export default movieSearchApi;
