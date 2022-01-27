<template>
  <div class="ListPannel">
    <main>
      <header>
        <h1>这是任务的标题</h1>
        <div class="menu">
          <span class="menuTitle">...</span>
          <div class="menuContent">
            <p>排序依据</p>
            <p>主题</p>
            <p>显示已完成的任务</p>
            <p>使用电子邮件发送</p>
          </div>
        </div>
      </header>
      <section class="TaskArea">
        <!-- 增加事件委托 -->
        <TodoItem v-for="todo of store.getters.getAll" :taskId="todo.id" :key="todo.id" />
      </section>
      <section class="AddTask">
        <span class="AddTaskIcon">+</span>
        <input type="text" autofocus class="inputTask" placeholder="添加任务" />
      </section>
    </main>
    <aside>
      <TaskInfoPannel v-if="isShowPannel" :handlePannel="handlePannel" />
    </aside>
  </div>
</template>
<script setup>
import TodoItem from './TodoItem.vue';
import TaskInfoPannel from './TaskInfoPannel.vue';
import store from '../store';
import { ref } from 'vue';
let isShowPannel = ref(true);
const handlePannel = () => {
  isShowPannel.value = !isShowPannel.value
}
</script>
<style scoped>
.ListPannel {
  display: flex;
  width: 100%;
  height: 100%;
}
main {
  height: 100vh;
  width: 100%;
  position: relative;
}
</style>
<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.menu {
  position: relative;
  z-index: 100;
}
.menuContent {
  display: none;
  position: absolute;
  min-width: 200px;
  top: -30px;
  right: 20px;
  border: solid 0.1px whitesmoke;
  padding: 5px;
  border-collapse: collapse;
  p {
    padding: 8px 10px;
    margin: 0px;
    cursor: pointer;
  }
  p:hover {
    background-color: rgb(245, 238, 238);
  }
}
.menuTitle {
  display: inline-block;
  min-width: 20px;
  min-height: 20px;
  text-align: right;
}
.menu:hover .menuContent {
  display: block;
}
</style>
<style lang="scss" scoped>
.AddTask {
  display: flex;
  gap: 20px;
  align-items: baseline;
  font-size: large;
  border: solid 2px black;
  border-radius: 5px;
  margin: 3px;
  padding: 3px 5px;
  position: absolute;
  bottom: 5vh;
  right: 0;
  left: 50px;
  .AddTaskIcon {
    margin-left: 20px;
    display: inline-block;
    width: 30px;
    font-size: 30px;
    line-height: 30px;
    height: 30px;
    padding: 0;
    text-align: center;
  }
  .inputTask {
    border: none;
    font-size: larger;
    font-weight: bold;
    outline: none;
  }
}
.AddTask:hover {
  opacity: 1;
}
</style>