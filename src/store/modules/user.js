// 每一个 Vuex 应用的核心就是 store（仓库）。“store”基本上就是一个容器，
//它包含着你的应用中大部分的状态 (state)。Vuex 和单纯的全局对象有以下两点不同：
// Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，
//若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
// 你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。
//这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。

// 例子
const state = {
  name: "真好"
};

const mutations = {
  setName: (state, val) => {
    //设置方法名称
    state.name = val;
  }
};

const actions = {
  setNameAction({ commit }, val) {
    //设置方法名称
    commit("setName", val);
  }
};
export default {
  namespaced: false,
  state,
  mutations,
  actions
};
