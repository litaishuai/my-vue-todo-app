<template>
  <div class="LearnVuex">
    <button type="button" @click="handleClick">Clik me</button>
    <p>{{ store.state.step.count }}</p>
    <slot></slot>
  </div>
</template>
<script setup>
import store from '../store';
const handleClick = () => {
  store.commit('increse');
}
</script>
<style>
.LearnVuex {
  display: block;
}
</style>