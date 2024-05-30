<script>
import axios from 'axios';
import store from '../data/store.js';
import functions from '../data/funzioni.js';

export default {
    name: "AppHeader",

    data() {
        return {
            store,
            functions,
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
        },

        showTab() {

            if (store.magic == "d-none") {
                store.magic = "d-block"
                store.magic2 = "d-none"
                store.magic3 = "d-none"
                store.magic4 = "d-block"
            } else if (store.magic == "d-block") {
                store.magic = "d-none"
                store.magic2 = "d-block"
                store.magic3 = "d-block"
                store.magic4 = "d-none"
            } else {
                return ""
            }
        },

    },

    mounted() {
        
    }
};



</script>

<template>
    <header class="d-flex align-items-center">
        <div class="container-fluid">
            <div class="row">
                <div class="col-6 d-flex align-items-center justify-content-between">
                    <div class="me-3 ms-5 text-danger">
                        <h2 style="text-shadow: 2px 2px 8px #000;">Boolflix</h2>
                    </div>
                    <!-- <div class="me-3">
                        <span>Home</span>
                    </div> -->
                    <div>
                        <div @click="showTab()" class="me-3 btn bg-white text-danger fw-bold" style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;">
                            <span :class="store.magic3">Serie TV</span>
                        </div>
                        <div @click="showTab()" id="film" class="me-3 btn bg-white text-danger fw-bold" style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;">
                            <span :class="store.magic4">Film</span>
                        </div>

                    </div>
                    <!-- <div class="me-3">
                        <span>Originali</span>
                    </div>
                    <div class="me-3">
                        <span>Aggiunti di recente</span>
                    </div>
                    <div class="me-3">
                        <span>La mia lista</span>
                    </div> -->
                </div>
                <div class="col-6 d-flex justify-content-center">
                    <div class="input-group w-50 mt-2 mb-2">
                        <input v-model="store.userInput" type="text" class="form-control" placeholder="Cerca un film">
                        <button @click="getMovies(), getSeries()" class="btn btn-secondary" type="button"
                            id="button-addon2">search</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
header {
    height: 10vh;
}
</style>