import Vue from 'vue'
import Vuex from 'vuex'

import idb from '@/api/idb'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tables: [],
    user: localStorage.getItem('user')
  },
  getters: {
    user: state => state.user
  },
  mutations: {},
  actions: {
    async deleteData (context, struct) {
      console.log('store is being asked to delete ' + struct.data.id)
      await idb.deleteData(struct)
    },
    async getDatas (context, table) {
      context.state.tables[table] = []
      const datas = await idb.getDatas(table)
      datas.forEach(c => {
        context.state.tables[table].push(c)
      })
    },
    async saveData (context, struct) {
      await idb.saveData(struct)
    },
    async login (context, user) {
      await idb.login(user)
    }
  },
  modules: {}
})
