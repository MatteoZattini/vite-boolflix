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
        
    },

    mounted() {

    }
};



</script>

<template>
    <main>
        <AppMovies />
        <AppTvSeries />
    </main>
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