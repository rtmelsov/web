<script setup lang="ts">
import { localeList } from "../locale";
import {useLocaleStore} from "../stores/locale.ts";
const locale = useLocaleStore();
</script>

<template>
  <div class="locales" v-for="loc in localeList" :key="loc">
    <button @click="locale.changeLocale(loc)">{{locale.translate(loc)}}</button>
  </div>
</template>
