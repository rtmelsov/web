<script setup lang="ts">
  import Locales from './components/Locales.vue'
  import Navigation from "./components/Navigation.vue";
  import './styles/main_page.scss'
</script>
<template>
  <div class="app">
    <Locales />
    <Navigation />
    <RouterView />
  </div>
</template>
