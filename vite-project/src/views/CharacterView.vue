<template lang="pug">
#character-view
  h1.title Character
  AttributeBlock(:character='currentCharacter')
</template>

<script setup lang="ts">
import { getCharacter } from "../logic";
import AttributeBlock from "../components/characters/AttributeBlock.vue";

const currentCharacter = getCharacter();
console.log(currentCharacter);
</script>
