<template>
  <div class="TaskInfoPannel">
    <div class="closeWrapper">
      <span class="close" @click="props.handlePannel">{{ '❌' }}</span>
    </div>
    <div class="TaskDesc">
      <div class="TaskTitleArea">
        <input type="checkbox" class="taskIsDone" />
        <p contenteditable="true" class="taskTitle"></p>
        <input type="checkbox" class="taskIsImportant" />
      </div>
      <div class="TaskSteps">
        <button
          v-if="store.state.step.isWritingStep"
          @click="store.commit('clear')"
          type="button"
          class="addStepBut"
        >
          <pre>+    添加步骤</pre>
        </button>
        <div v-if="!store.state.step.isWritingStep"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
// import { defineProps } from 'vue';
import store from '../store';
</script>
<style lang="scss">
.TaskInfoPannel {
  border-left: solid 2px gray;
  width: 30vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: rgb(251, 251, 251);
}
.closeWrapper {
  text-align: right;
}
.close {
  padding: 4px;
  cursor: pointer;
  opacity: 0.7;
}
.close:hover {
  background-color: gray;
}
// opacity: 0.7;
// }

.TaskDesc {
  width: 25vw;
  border: solid 1px whitesmoke;
  margin: 0;
  padding: 8px;
  margin: 0 auto;
  background-color: white;
}
.TaskTitleArea {
  width: 100%;
  min-height: max-content;
  display: flex;
  align-items: center;
  gap: 5px;
  .taskIsDone {
    border-radius: 50%;
  }
  .taskTitle {
    outline: none;
    // border: none;
    font-size: larger;
    font-weight: bolder;
    width: 20vw;
  }
  // .taskIsImportant {
  // }
}
.TaskSteps {
  .addStepBut {
    color: blue;
    outline: none;
    border: none;
    background-color: white;
    font-weight: bold;
    font-size: larger;
    cursor: pointer;
  }
}
</style>