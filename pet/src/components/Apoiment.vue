<template>
  <div>
    <b-button class="btn-login" @click="isOpened=true">Marque um Serviço</b-button>
    <b-modal :active.sync="isOpened">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <h1>Agendamento</h1>
            <h3></h3>

            <b-field label="Data">
              <b-input
                type="date"
                v-model="struct.data.date"
                name="data"
              ></b-input>
            </b-field>

            <b-field label="Serviço">
              <b-select
                placeholder="Selecione um serviço"
                expanded
                v-model="struct.data.service_id"
                name="service"
              >
                <option v-for="service in services" :key="service.id" :value="service.id">{{service.name}}</option>
              </b-select>
            </b-field>

            <b-field label="Seu pet">
              <b-select
                placeholder="Selecione um pet"
                expanded
                v-model="struct.data.pet_id"
                name="pet"
              >
                <option v-for="pet in pets" :key="pet.id" :value="pet.id">{{pet.name}}</option>
              </b-select>
            </b-field>

            <button @click="apoiment()" class="button is-primary">Agendar</button>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>

export default {
  name: 'Apoiment',
  props: ['user'],
  data () {
    return {
      isOpened: false,
      services: {},
      pets: {},
      struct: {
        table: 'apoiments',
        data: {
          user_id: this.user.id
        }
      }
    }
  },
  created () {
    this.$store.dispatch('getDatas', 'services')
    this.services = localStorage.getObj('services')

    this.$store.dispatch('getDatas', 'pets')
    this.pets = localStorage.getObj('pets')
  },
  methods: {
    apoiment () {
      this.$store.dispatch('saveData', this.struct)
      this.isOpened = false
      this.$buefy.toast.open({
        duration: 5000,
        message: 'Serviço agendado com sucesso!',
        position: 'is-top-right',
        type: 'is-success'
      })
    }
  }
}
</script>
