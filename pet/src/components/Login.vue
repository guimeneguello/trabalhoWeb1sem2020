<template>
  <div class="btn-login" >
    <b-button v-if="user.name.length > 0" @click="logoff()"> Sair </b-button>
    <b-button v-if="user.name.length == 0" @click="isOpened=true"> Entrar </b-button>
    <b-modal :active.sync="isOpened">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <h1>Entrar</h1>
            <h3></h3>

            <b-field label="Email">
              <b-input type="email" v-model="user.email" name="email"></b-input>
            </b-field>
            <b-field label="Senha">
              <b-input type="password" v-model="user.password" name="password"></b-input>
            </b-field>

            <button @click="login()" class="button btn-save-data">Entrar</button>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: ['user'],
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
    login () {
      this.isOpened = false
      this.$store.dispatch('login', this.user)
      this.$emit('reload')
      this.$buefy.toast.open({
        duration: 5000,
        message: 'Login realizado com sucesso, por favor recarregue a pagina!',
        position: 'is-top-right',
        type: 'is-success'
      })
      this.$router.push({ name: 'home' })
    },
    logoff () {
      this.user.email = ''
      this.user.password = ''
      this.user.name = ''
      this.user.cargo = ''
      localStorage.setObj('user', this.user)
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
