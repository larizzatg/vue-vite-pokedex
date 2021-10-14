<script setup lang="ts">
import { computed } from "@vue/reactivity";

interface PokedexCardProps {
  number: number;
  name: string;
}

const props = defineProps<PokedexCardProps>();
</script>

<template>
  <li>{{ number }} - {{ name }}</li>
</template>
