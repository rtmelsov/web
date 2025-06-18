<script setup lang="ts">
import {useLocaleStore} from "../stores/locale.ts";
const locale = useLocaleStore();
</script>

<template>
  <div class="description">
    <p>
      {{locale.translate('description')}}
    </p>
  </div>
</template>
