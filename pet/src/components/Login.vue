<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <h1>Login</h1>
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

        <button @click="login()" class="button is-primary">Login</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  props: ['opened'],
  data () {
    return {
      user: {}
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.user)
      this.opened = false
      this.$emit('closeModal', { opened: this.opened })
    }
  }
}
</script>
