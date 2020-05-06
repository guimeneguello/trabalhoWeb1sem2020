<template>
  <div>
    <h1>{{ stringColection }}</h1>
    <div class="columns flex-wrap">
      <div class="column is-12"><p v-if="datasColection.length == 0">Não há registrados de {{ stringColection }}.</p></div>
      <div class="column is-12-mobile is-3 collection-card"
      v-for="dataSingle in datasColection" :key="dataSingle.id">
        <div class="collection-info shadow">
          <h1>{{ dataSingle.name }}</h1>
          <img :src="dataSingle.previewImage" class="collection-image"/>
          <p>{{ dataSingle.descricao }}</p>
          <div v-if="user.cargo == permission" class="collection-bottons">
            <b-button color="red" @click="deletar(dataSingle)">Delete</b-button>
            <!-- b-button @click="editar(service)">Edit</b-button -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ContentColection',
  props: ['colection', 'stringColection', 'permission'],
  data () {
    return {
      user: {},
      datasColection: {}
    }
  },
  created () {
    this.user = localStorage.getObj('user')
    if (this.user == null) {
      this.user = {
        email: '',
        password: '',
        name: '',
        cargo: ''
      }
    }
    this.loadCollection()
  },
  methods: {
    async deletar (dataSingle) {
      console.log('delete', dataSingle.id)
      await this.$store.dispatch('deleteData', {
        table: this.colection,
        data: dataSingle
      })
      this.loadCollection()
      this.$emit('reload')
    },
    editar (dataSingle) {
      console.log('edit', dataSingle.id)
    },
    loadCollection () {
      if (this.permission === 'client') {
        console.log('client', this.user.id)
        this.$store.dispatch('getDatasClient', this.colection)
      } else {
        console.log('aberto', this.permission)
        this.$store.dispatch('getDatas', this.colection)
      }
      this.datasColection = localStorage.getObj(this.colection)
    }
  }
}
</script>
<style src="@/scss/_Content.scss" lang="scss" />
