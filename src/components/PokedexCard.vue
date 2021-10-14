<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { Pokemon } from "../types";

const props = defineProps<{ pokemon: Pokemon }>();
</script>

<template>
  <li>{{ pokemon.id }} - {{ pokemon.name }}</li>
</template>
