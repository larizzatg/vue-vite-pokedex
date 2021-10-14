<script setup lang="ts">
import { computed } from "@vue/reactivity";

interface PokedexCardProps {
  number: number;
  name: string;
}

const props = defineProps<PokedexCardProps>();

const displayName = computed(() => {
  return props.name[0].toUpperCase() + props.name.substring(1);
});
</script>

<template>
  <li>{{ number }} - {{ displayName }}</li>
</template>
