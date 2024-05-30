
import axios from 'axios';
import store from '../data/store.js';

const leMieFunzioni = {

        getMovies: function() {
            console.log(store.userInput)
            const options = {
                method: 'GET',
                url: 'https://api.themoviedb.org/3/search/movie',
                params: { query: store.userInput, include_adult: 'false', language: 'it-IT', page: '1' },
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjE4NGNkYTc4OWJkZGRjMmI5MGQzNDJlOWU4MmFhOCIsInN1YiI6IjY2NTczMmU3MTIzMjQ1ODQwOTU5OTdmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f5HPxSWhlP9Qdsl2L62ghkvR-SZ0laiBbw-hiqSxdK0'
                }
            };

            axios
                .request(options)
                .then(function (response) {
                    console.log(response.data);
                    store.movies = response.data.results
                    console.log(store.movies)
                })
                .catch(function (error) {
                    console.error(error);
                });

        },

        getSeries: function() {
            const options = {
                method: 'GET',
                url: 'https://api.themoviedb.org/3/search/tv',
                params: { query: store.userInput, include_adult: 'false', language: 'it-IT', page: '1' },
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjE4NGNkYTc4OWJkZGRjMmI5MGQzNDJlOWU4MmFhOCIsInN1YiI6IjY2NTczMmU3MTIzMjQ1ODQwOTU5OTdmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f5HPxSWhlP9Qdsl2L62ghkvR-SZ0laiBbw-hiqSxdK0'
                }
            };

            axios
                .request(options)
                .then(function (response) {
                    console.log(response.data);
                    store.series = response.data.results
                    console.log(store.series)
                })
                .catch(function (error) {
                    console.error(error);
                });
        }
};

export default leMieFunzioni;