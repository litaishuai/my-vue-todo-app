export default {
  state() {
    return {
      todos: [
        { id: 1, list: ['家庭作业'], createTime: '2022年1月1日', taskTitle: '刷数据结构', done: true, important: false, steps: [{ title: '打开Edge', done: false }, { title: '观看视频', done: false }], remark: '这是非常重要的学习任务' },
        {
          id: 2, list: ['家庭作业'], createTime: '2022年1月2日', taskTitle: '写前端项目', done: false, important: true, steps: [{ title: '打开VScode', done: false },
          { title: '写代码', done: false }], remark: '这是一个十分重要的学习任务'
        },
      ]
    }
  },
  mutations: {
    done(state, payload) {
      // 理论上说存在着性能优化的空间
      state.todos.find(todo => todo.id === payload.id).done = !state.todos.find(todo => todo.id === payload.id).done;
    },
    important(state, payload) {
      state.todos[payload.id].important = !state.todos[payload.id].done;
      state.todos.find(todo => todo.id === payload.id).important = !state.todos.find(todo => todo.id === payload.id).important;
    },
    title(state, payload) {
      state.todos[payload.id].title = payload.title;
    }
  },
  getters: {
    getAll: (state) => {
      return state.todos;
    },
    getDoneById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id).done;
    },
    getImportantById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id).important;
    },
    getTitleById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id);
    }
  }
}