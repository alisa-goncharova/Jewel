<script setup lang="ts">
   import Sidebar from './components/Sidebar.vue';
   import { RouterView } from 'vue-router';
</script>

<template>
    <Sidebar/>
    <div class="content">
        <RouterView/>
    </div>
</template>
