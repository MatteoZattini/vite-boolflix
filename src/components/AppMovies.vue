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
                <h1>FILMS</h1>
            </div>
            <div class="col-12 d-flex flex-wrap">
                <div v-for="movie in store.movies" class="movie-box text-center position-relative">
                
                    <div class="img-box">
                        <img class="object-fit-cover" :src="'https://image.tmdb.org/t/p/original'+ movie.poster_path" alt="">
                    </div>
                    <div class="hover-card position-absolute top-0 start-0">
                        <div>
                            <h4>{{ movie.title }}</h4>
                        </div>
                        <div v-if="movie.title != movie.original_title">
                            <h5>{{ movie.original_title }}</h5>
                        </div>
                        <!-- <div class="description">
                            <span>{{ movie.overview }}</span>
                        </div> -->
                        <div class="d-flex justify-content-center">
                            <div class="flag" :class="`fi, fi-`+ movie.original_language"></div>
                        </div>
                        <div>
                            <span>{{ movie.original_language }}</span>
                        </div>
                        <div>
                            <span v-if="(movie.vote_average / 2) >= 0.5"><i class="fa-solid fa-star"></i></span>
                            <span v-if="(movie.vote_average / 2) >= 1.5"><i class="fa-solid fa-star"></i></span>
                            <span v-if="(movie.vote_average / 2) >= 2.5"><i class="fa-solid fa-star"></i></span>
                            <span v-if="(movie.vote_average / 2) >= 3.5"><i class="fa-solid fa-star"></i></span>
                            <span v-if="(movie.vote_average / 2) >= 4.5"><i class="fa-solid fa-star"></i></span>
                            <span class="ms-2">{{ (movie.vote_average / 2).toFixed(0) }}</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* .description {
    width: 100%;
    max-height: 10rem;
    font-size: 15px;
} */

.hover-card {
    width: 100%;
    height: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: -1;
    border-radius: 20px;
}

img:hover {
    opacity: 0;
}


.img-box {
    width: 100%;
    height: 28rem;
    border-radius: 20px;
}

.movie-box {
    width: calc(100% / 4 - 1rem);
    height: auto;
    /* border: 1px solid white; */
    margin-bottom: 3rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    border-radius: 20px;
}

img {
    width: 100%;
    height: 100%;
    object-position: top;
    border-radius: 25px;
}

.flag {
    width: 24px;
    height: 18px;
}

</style>