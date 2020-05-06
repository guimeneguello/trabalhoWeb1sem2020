import Vue from 'vue'
import Vuex from 'vuex'

import idb from '@/api/idb'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tables: {
      services: localStorage.getItem('services'),
      users: localStorage.getItem('users'),
      pets: localStorage.getItem('pets'),
      products: localStorage.getItem('products'),
      apoiments: localStorage.getItem('apoiments')
    },
    user: localStorage.getItem('user')
  },
  getters: {
    user: state => state.user,
    services: state => state.tables.services,
    users: state => state.tables.users,
    pets: state => state.tables.pets,
    products: state => state.tables.products,
    apoiments: state => state.tables.apoiments
  },
  mutations: {},
  actions: {
    async deleteData (context, struct) {
      console.log('store is being asked to delete ' + struct.data.id)
      await idb.deleteData(struct)
    },
    async getDatas (context, table) {
      context.state.tables[table] = []
      await idb.getDatas(table)
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
