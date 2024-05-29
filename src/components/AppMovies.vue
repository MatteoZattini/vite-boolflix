<script>
import store from '../data/store.js'

export default {
    name: "AppMovies",

    components: {

    },

    data() {
        return {
            store,
        }
    },

    methods: {
       
    },

    mounted() {

    }
};



</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>movies</h1>
            </div>
            <div class="col-12 d-flex flex-wrap">
                <div v-for="movie in store.movies" class="movie-box text-center">
                    <div>
                        <img :src="'https://image.tmdb.org/t/p/original'+ movie.poster_path" alt="">
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