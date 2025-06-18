<script setup lang="ts">
  import {useLocaleStore} from "../stores/locale.ts";
  const locale = useLocaleStore();
</script>

<template>
  <div class="header">
    <h1 class="title">{{locale.translate('name')}}</h1>
  </div>
</template>
