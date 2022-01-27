<template>
  <div class="TodoItem">
    <!-- 内容修改需要进一步的提升， -->
    <input type="checkbox" class="isDone" v-model="done" />
    <div class="TitleLabel">
      <input
        type="text"
        class="taskTitle"
        placeholder="请输入你的任务内容"
        readonly
        @click="props.handlePannel"
      />
      <br />
      <div class="labels">
        <!-- <span v-for="i of store.state.todos[taskId].list" :key="i">{{ i }}</span> -->
      </div>
    </div>
    <input type="checkbox" class="taskImportance" v-model="important" />
  </div>
</template>
<script setup="props">
import { computed, defineProps } from 'vue';
import store from '../store';
const done = computed({
  get: () => {
    return store.getters.getDoneById(props.taskId);
  },
  set: () => {
    store.commit({
      type: 'done',
      id: props.taskId,
    })
  }
});
const important = computed({
  get: () => {
    return store.getters.getImportantById(props.taskId);
  },
  set: () => {
    store.commit({
      type: 'important',
      id: props.taskId,
    })
  }
});
const props = defineProps({
  taskId: Number,
  handlePannel: Function,
});
</script>
<style scoped>
.TodoItem {
  align-items: center;
  border: solid 2px rgb(226, 224, 224);
  padding: 10px;
  display: flex;
  align-items: center;
  position: relative;
}
.TitleLabel {
  width: 100%;
  padding-left: 10px;
}
.labels {
  display: flex;
  gap: 20px;
}
.labels span {
  background-color: gray;
  color: white;
  padding: 3px;
  border-radius: 3px;
  font-size: smaller;
}
.isDone {
  flex: 1;
}
.taskTitle {
  flex: 100;
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 20px;
  font-size: larger;
  font-weight: bolder;
  cursor: pointer;
}
.taskImportance {
  flex: 1;
}
</style>