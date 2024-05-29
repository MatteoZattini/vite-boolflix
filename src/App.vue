<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import store from './data/store.js'

export default {
    name: "App",

    components: {
        AppMain,
        AppHeader
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
<AppHeader />
<AppMain />
</template>

<style>
</style>