<script setup>

 import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';


</script>

<template>
    <div>
        <Navbar/>
        <RouterView/>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    created() {
        this.$store.dispatch('datanial')
}}
</script>