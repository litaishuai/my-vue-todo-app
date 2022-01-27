export default {
  state() {
    return {
      isWritingStep: true
    }
  },
  mutations: {
    change(state) {
      state.isWritingStep = !state.isWritingStep;
    },
    show(state) {
      state.isWritingStep = true;
      // console.log("This is show");
    },
    clear(state) {
      state.isWritingStep = false;
      // console.log("This is clear")
    }
  },
  actions: {

  }
}