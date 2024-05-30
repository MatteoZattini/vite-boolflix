<script>
import store from '../data/store.js'

export default {
    name: "AppTvSeries",

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
                <h1>TV Series</h1>
            </div>
            <div class="col-12 d-flex flex-wrap">
                <div v-for="show in store.series" class="movie-box text-center">
                    <div>
                        <img :src="'https://image.tmdb.org/t/p/original'+ show.poster_path" alt="">
                    </div>
                    <div>
                        <h4>{{ show.name }}</h4>
                    </div>
                    <div>
                        <h5>{{ show.original_name }}</h5>
                    </div>
                    <div class="d-flex justify-content-center">
                        <div class="flag" :class="`fi, fi-`+ show.original_language"></div>
                    </div>
                    <div>
                        <span>{{ show.original_language }}</span>
                    </div>
                    <div>
                        <span v-if="(show.vote_average / 2) >= 0.5"><i class="fa-solid fa-star"></i></span>
                        <span v-if="(show.vote_average / 2) >= 1.5"><i class="fa-solid fa-star"></i></span>
                        <span v-if="(show.vote_average / 2) >= 2.5"><i class="fa-solid fa-star"></i></span>
                        <span v-if="(show.vote_average / 2) >= 3.5"><i class="fa-solid fa-star"></i></span>
                        <span v-if="(show.vote_average / 2) >= 4.5"><i class="fa-solid fa-star"></i></span>
                        <span class="ms-2">{{ (show.vote_average / 2).toFixed(0) }}</span>
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

.flag {
    width: 24px;
    height: 18px;
}
</style>