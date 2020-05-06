<template>
  <div>
    <h1>{{ stringColection }}</h1>
    <div class="columns flex-wrap">
      <div class="column is-12-mobile is-3 collection-card" v-for="dataSingle in datasColection" :key="dataSingle.id">
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
    this.$store.dispatch('getDatas', this.colection)
    this.datasColection = localStorage.getObj(this.colection)
  },
  methods: {
    async deletar (dataSingle) {
      console.log('delete', dataSingle.id)
      await this.$store.dispatch('deleteData', {
        table: this.colection,
        data: dataSingle
      })
      this.$store.dispatch('getDatas', this.colection)
      this.datasColection = localStorage.getObj(this.colection)
    },
    editar (dataSingle) {
      console.log('edit', dataSingle.id)
    }
  }
}
</script>
<style src="@/scss/_Content.scss" lang="scss" />
