<template>
  <b-modal :active.sync="isOpened">
    <div class="card">
      <div class="card-content">
        <div class="content">
          <h1>Apoiment</h1>
          <h3></h3>

          <b-field label="Email">
            <b-input
              type="email"
              v-model="user.email"
              name="email"
            ></b-input>
          </b-field>
          <b-field label="Password">
            <b-input
              type="password"
              v-model="user.password"
              name="password"
            ></b-input>
          </b-field>

          <button @click="apoiment()" class="button is-primary">Apoiment</button>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>

export default {
  name: 'Apoiment',
  props: ['isOpened'],
  data () {
    return {
      apoiment: {}
    }
  },
  methods: {
    apoiment () {
      this.$store.dispatch('RegisterApoiment', this.apoiment)
      this.isOpened = false
    }
  }
}
</script>
