<template lang="pug">
.app
  nav.nav
    ul
      li
        router-link(:to='{ name: "home" }') Home
      li
        router-link(:to='{ name: "character" }') Character
  router-view
</template>

<script setup lang="ts"></script>

<style>
@import url("css/main.css");
</style>

<style scoped>
.nav ul {
  list-style-type: none;
}
</style>
