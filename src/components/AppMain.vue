<script>
import axios from 'axios';
import store from '../data/store.js';

export default {
    name: "AppMain",
    apiKey: "e2184cda789bdddc2b90d342e9e82aa8",

    data() {
        return {
            store,
            userInput: "",
        }
    },

    methods: {
        getMovies() {
            console.log(this.userInput)
            const options = {
                method: 'GET',
                url: 'https://api.themoviedb.org/3/search/movie',
                params: { query: this.userInput, include_adult: 'false', language: 'it-IT', page: '1' },
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
                params: { query: this.userInput, include_adult: 'false', language: 'it-IT', page: '1' },
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
                    <input v-model="userInput" type="text" class="form-control" placeholder="Cerca un film">
                    <button @click="getMovies(), getSeries()" class="btn btn-secondary" type="button"
                        id="button-addon2">search</button>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>movies</h1>
            </div>
            <div class="col-12 d-flex flex-wrap">
                <div v-for="movie in store.movies" class="movie-box text-center">
                    <div>
                        immagine
                    </div>
                    <div>
                        <h4>{{ movie.title }}</h4>
                    </div>
                    <div>
                        <h5>{{ movie.original_title }}</h5>
                    </div>
                    <div>
                        <span>{{ movie.original_language }}</span>
                    </div>
                    <div>
                        <span>{{ movie.vote_average }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>TV Series</h1>
            </div>
            <div class="col-12 d-flex flex-wrap">
                <div v-for="show in store.series" class="movie-box text-center">
                    <div>
                        immagine
                    </div>
                    <div>
                        <h4>{{ show.name }}</h4>
                    </div>
                    <div>
                        <h5>{{ show.original_name }}</h5>
                    </div>
                    <div>
                        <span>{{ show.original_language }}</span>
                    </div>
                    <div>
                        <span>{{ show.vote_average }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.movie-box {
    width: calc(100% / 5);
    border: 1px solid white;
    margin-bottom: 3rem;

}
</style>