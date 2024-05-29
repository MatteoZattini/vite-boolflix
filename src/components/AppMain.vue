<script>
import axios from 'axios';
import store from '../data/store.js';
import AppMovies from './AppMovies.vue';
import AppTvSeries from './AppTvSeries.vue';

export default {
    name: "AppMain",
    apiKey: "e2184cda789bdddc2b90d342e9e82aa8",

    components: {
        AppMovies,
        AppTvSeries,
    },

    data() {
        return {
            store,
            
        }
    },

    methods: {
        getMovies() {
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

        getSeries() {
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
    },

    mounted() {

    }
};



</script>

<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <div class="input-group w-50 mb-3">
                    <input v-model="store.userInput" type="text" class="form-control" placeholder="Cerca un film">
                    <button @click="getMovies(), getSeries()" class="btn btn-secondary" type="button"
                        id="button-addon2">search</button>
                </div>
            </div>
        </div>
    </div>
    <AppMovies />
    <AppTvSeries />
</template>

<style scoped>
.movie-box {
    width: calc(100% / 5);
    border: 1px solid white;
    margin-bottom: 3rem;

}

img {
    width: 100%;
}
</style>