<template>
  <div id="App" @click="handleSubmit">
    <ListPannel />
  </div>
</template>

<script setup>
import ListPannel from './components/ListPannel.vue';
import store from './store';
const handleSubmit = (e) => {
  if (e.target.nodeName !== 'PRE') {
    store.commit('show');
  }
}
</script>

<style>
body {
  margin: 0;
  /* overflow: hidden; */
}
#app {
}
</style>
