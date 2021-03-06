const DB_NAME = 'petdb'
const DB_VERSION = 1
let DB

export default {

  async getDb () {
    return new Promise((resolve, reject) => {
      if (DB) { return resolve(DB) }
      console.log('OPENING DB', DB)
      const request = window.indexedDB.open(DB_NAME, DB_VERSION)

      request.onerror = e => {
        console.log('Error opening db', e)
        reject(e)
      }

      request.onsuccess = e => {
        DB = e.target.result
        resolve(DB)
      }

      request.onupgradeneeded = e => {
        console.log('onupgradeneeded')
        const db = e.target.result
        db.createObjectStore('users', { autoIncrement: true, keyPath: 'id' })
        db.createObjectStore('pets', { autoIncrement: true, keyPath: 'id' })
        db.createObjectStore('services', { autoIncrement: true, keyPath: 'id' })
        db.createObjectStore('apoiments', { autoIncrement: true, keyPath: 'id' })
        db.createObjectStore('products', { autoIncrement: true, keyPath: 'id' })

        this.saveData({
          table: 'users',
          data: {
            name: 'admin',
            cargo: 'admin',
            email: 'admin@pet.com',
            password: 'admin',
            repet_password: 'admin'
          }
        })
      }
    })
  },

  async deleteData (struct) {
    const db = await this.getDb()

    return new Promise(resolve => {
      const trans = db.transaction([struct.table], 'readwrite')
      trans.oncomplete = () => {
        resolve()
      }

      const store = trans.objectStore(struct.table)
      store.delete(struct.data.id)
    })
  },

  async getDatas (table) {
    const db = await this.getDb()

    return new Promise(resolve => {
      const trans = db.transaction([table], 'readonly')
      trans.oncomplete = () => {
        resolve(table)
      }

      const store = trans.objectStore(table)
      var datas = []

      store.openCursor().onsuccess = e => {
        var cursor = e.target.result
        if (cursor) {
          datas.push(cursor.value)
          cursor.continue()
          localStorage.setObj(table, datas)
        }
      }
    })
  },

  async getDatasClient (table) {
    const db = await this.getDb()

    return new Promise(resolve => {
      const trans = db.transaction([table], 'readonly')
      trans.oncomplete = () => {
        resolve(table)
      }

      const store = trans.objectStore(table)
      var datas = []
      localStorage.setObj(table, datas)
      var user = localStorage.getObj('user')

      store.openCursor().onsuccess = e => {
        var cursor = e.target.result
        if (cursor) {
          if (cursor.value.user_id === user.id) {
            datas.push(cursor.value)
            localStorage.setObj(table, datas)
          }
          cursor.continue()
        }
      }
    })
  },

  async login (user) {
    const db = await this.getDb()
    const table = 'users'

    return new Promise(resolve => {
      const trans = db.transaction([table], 'readonly')
      trans.oncomplete = () => {
        resolve(table)
      }

      const store = trans.objectStore(table)

      store.openCursor().onsuccess = e => {
        const cursor = e.target.result
        if (cursor) {
          if (cursor.value.email === user.email) {
            localStorage.setObj('user', cursor.value)
          }
          cursor.continue()
        }
      }
    })
  },

  async saveData (struct) {
    const db = await this.getDb()

    return new Promise(resolve => {
      const trans = db.transaction([struct.table], 'readwrite')
      trans.oncomplete = () => {
        resolve()
      }

      const store = trans.objectStore(struct.table)
      store.put(struct.data)
    })
  }
}
