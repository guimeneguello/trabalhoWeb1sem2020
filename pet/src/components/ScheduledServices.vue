<template>
  <div v-if="user.name.length > 0">
    <h1>Sua Agenda</h1>
    <div class="columns flex-wrap">
      <div class="column is-12"><p v-if="datasColection.length == 0">Não há agendamentos marcados.</p></div>
      <div class="column is-12-mobile is-3 collection-card"
      v-for="dataSingle in datasColection" :key="dataSingle.id">
        <div class="collection-info shadow">
          <h1>{{ dataSingle.service.name }}</h1>
          <div class="collection-image">
            <p>{{ dataSingle.pet.name }}</p>
            <img :src="dataSingle.pet.previewImage"/>
          </div>

          <p>adendado para {{ dataSingle.date }}</p>
          <div class="collection-bottons">
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
  name: 'ScheduledServices',
  data () {
    return {
      user: {},
      datasColection: []
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
        table: 'apoiments',
        data: dataSingle
      })
      this.loadCollection()
      this.$emit('reload')
    },
    editar (dataSingle) {
      console.log('edit', dataSingle.id)
    },
    loadCollection () {
      if (this.user.cargo === 'client' || this.user.cargo === 'admin') {
        console.log('client', this.user.id)
        this.$store.dispatch('getDatasClient', 'apoiments')
        var apoimentsColection = localStorage.getObj('apoiments')
        var servicesColection = localStorage.getObj('services')
        var petsColection = localStorage.getObj('pets')
        apoimentsColection.forEach(apoiment => {
          apoiment.service = servicesColection.find(service => service.id === apoiment.service_id)
          apoiment.pet = petsColection.find(pet => pet.id === apoiment.pet_id)
          this.datasColection.push(apoiment)
        })
      }
    }
  }
}
</script>
<style src="@/scss/_Content.scss" lang="scss" />
