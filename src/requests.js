const API_KEY = 'f332cb1b03e6cf14ce013bda7e0043ae'

export default {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`/top_rated/all/week?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchMystery:`discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchSciFi:`discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchWestern:`discover/movie?api_key=${API_KEY}&with_genres=37`,
    fetchAnimation:`discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchTV:`discover/movie?api_key=${API_KEY}&with_genres=10770`,
}

