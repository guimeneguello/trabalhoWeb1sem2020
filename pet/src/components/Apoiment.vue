<template>
  <div>
    <b-button class="btn-login" @click="isOpened=true">Marque um Serviço</b-button>
    <b-modal :active.sync="isOpened">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <h1>Apoiment</h1>
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

            <button @click="apoiment()" class="button is-primary">Apoiment</button>
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
  },
  methods: {
    apoiment () {
      this.$store.dispatch('saveData', this.struct)
      this.isOpened = false
    }
  }
}
</script>
