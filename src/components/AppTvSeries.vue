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
    <div class="container" :class="store.magic2" style="max-height: 90vh; overflow: auto;">
        <div class="row">
            <div class="col-12">
                <h1 style="text-shadow: 2px 2px 8px #000;">TV Series</h1>
            </div>
            <div class="col-12 d-flex flex-wrap">
                <div v-for="show in store.series" class="movie-box text-center position-relative">
                    <div class="img-box">
                        <img class="object-fit-cover" :src="'https://image.tmdb.org/t/p/original'+ show.poster_path" alt="">
                    </div>
                    <div class="hover-card position-absolute top-0 start-0">
                        <div>
                            <h4>{{ show.name }}</h4>
                        </div>
                        <div  v-if="show.name != show.original_name">
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
    </div>
</template>

<style scoped>
.container::-webkit-scrollbar {
  display: none;
}
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
    transition: 600ms ease-in-out;
    opacity: 0;
}


.img-box {
    width: 100%;
    height: 28rem;
    border-radius: 20px;
}

.movie-box {
    width: calc(100% / 4 - 1rem);
    /* border: 1px solid white; */
    margin-bottom: 3rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

}

img {
    width: 100%;
    height: 100%;
    object-position: top;
    border-radius: 20px;
}

.flag {
    width: 24px;
    height: 18px;
}
</style>