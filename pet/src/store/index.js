import Vue from 'vue'
import Vuex from 'vuex'

import idb from '@/api/idb'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tables: [],
    name: localStorage.getItem('name')
  },
  getters: {
    name: state => state.name
  },
  mutations: {},
  actions: {
    async deleteData (context, struct) {
      console.log('store is being asked to delete ' + struct.data.id)
      await idb.deleteData(struct)
    },
    async getDatas (context, struct) {
      context.state.tables[struct.table] = []
      const datas = await idb.getDatas(struct)
      datas.forEach(c => {
        context.state.tables[struct.table].push(c)
      })
    },
    async saveData (context, struct) {
      await idb.saveData(struct)
    }
  },
  modules: {}
})
