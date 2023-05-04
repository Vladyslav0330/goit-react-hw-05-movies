const theMostPopularApi = () => {
    const API_KEY = 'dbb209971c0a849ca6d954f6b026b870';
    const BASE_URL = 'https://api.themoviedb.org/3/trending/';
    return fetch(`${BASE_URL}movie/day?api_key=${API_KEY}`).then(response => {
        if (response.ok) {
            return response.json();
        }
        return new Promise.reject(
      new Error(`Something went wrong, try again later`))
    });
}

export default theMostPopularApi;