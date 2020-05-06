<template>
  <div class="background columns flex-wrap">
    <div class="column is-12-mobile is-3 service-card" v-for="service in services" :key="service.id">
      <div class="service-info shadow">
        <h1>{{ service.name }}</h1>
        <img :src="service.previewImage" class="service-image"/>
        <p>{{ service.descricao }}</p>
        <div v-if="user.cargo == 'admin'" class="service-bottons">
          <b-button color="red" @click="deletar(service)">Delete</b-button>
          <!-- b-button @click="editar(service)">Edit</b-button -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ContentServices',
  data () {
    return {
      user: {},
      services: {}
    }
  },
  created () {
    this.user = localStorage.getObj('user')
    this.$store.dispatch('getDatas', 'services')
    this.services = localStorage.getObj('services')
  },
  methods: {
    async deletar (service) {
      console.log('delete', service.id)
      await this.$store.dispatch('deleteData', {
        table: 'services',
        data: service
      })
      this.$store.dispatch('getDatas', 'services')
      this.services = localStorage.getObj('services')
    },
    editar (service) {
      console.log('edit', service.id)
    }
  }
}
</script>
<style src="@/scss/_Content.scss" lang="scss" />
