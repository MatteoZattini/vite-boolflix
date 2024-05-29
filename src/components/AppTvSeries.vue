<script>
import store from './data/store.js'

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