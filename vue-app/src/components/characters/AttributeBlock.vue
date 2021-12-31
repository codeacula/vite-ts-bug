<template lang="pug">
.attribute-block
  ul
    li
      label Name
        input(v-model='character.name')
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { Character } from "../../definitions/character";

defineProps({
  character: {
    type: Object as PropType<Character>,
    required: true,
  },
});
</script>
