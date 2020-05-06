<template>
  <div>
    <b-button class="btn-login" @click="isOpened=true">Marque um Serviço</b-button>
    <b-modal :active.sync="isOpened">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <h1>Apoiment</h1>
            <h3></h3>

            <b-field label="Email">
              <b-input
                type="date"
                v-model="struct.data.date"
                name="email"
              ></b-input>
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
      struct: {
        table: 'apoiments',
        data: {
          user_id: this.user.id
        }
      }
    }
  },
  methods: {
    apoiment () {
      this.$store.dispatch('saveData', this.struct)
      this.isOpened = false
    }
  }
}
</script>
