import { createStore, createLogger } from 'vuex';
import step from './module/step';
import todos from './module/todos';
const debug = process.env.NODE_ENV !== 'production'
export default createStore({
  modules: {
    step, todos
  },
  plugins: debug ? [createLogger()] : [],
  strict: process.env.NODE_ENV !== 'production'
})