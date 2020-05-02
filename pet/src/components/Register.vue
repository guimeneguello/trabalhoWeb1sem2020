<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <h1>Register</h1>
        <h3></h3>

       <b-field label="Name">
          <b-input
            type="name"
            v-model="struct.data.name"
            name="text"
          ></b-input>
        </b-field>
       <b-field label="Email">
          <b-input
            type="email"
            v-model="struct.data.email"
            name="email"
          ></b-input>
        </b-field>
        <b-field label="Password">
          <b-input
            type="password"
            v-model="struct.data.password"
            name="password"
          ></b-input>
        </b-field>
        <b-field label="Repet Password">
          <b-input
            type="password"
            v-model="struct.data.repet_password"
            name="repet_password"
          ></b-input>
        </b-field>

        <button @click="register()" class="button is-primary">Register</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Register',
  props: ['opened'],
  data () {
    return {
      struct: {
        table: 'users',
        data: {
          cargo: 'client'
        }
      }
    }
  },
  methods: {
    async register () {
      await this.$store.dispatch('saveData', this.struct)
    }
  }
}
</script>
