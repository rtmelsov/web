<script setup lang="ts">
import {useLocaleStore} from "../stores/locale.ts";
import {navigationList} from "../statics/navigation_list.ts";

const locale = useLocaleStore();
</script>

<template>
  <div class="navigation">
    <RouterLink v-for="navigation in navigationList" class="element" active-class="selected" :to="navigation">{{locale.translate(navigation)}}</RouterLink>
  </div>
</template>
