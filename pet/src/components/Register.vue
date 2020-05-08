<template>
  <div class="btn-login">
    <b-button @click="isOpened=true"> Cadastro </b-button>
    <b-modal :active.sync="isOpened">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <h1>Cadastro</h1>
            <h3></h3>

          <b-field v-if="user.cargo == 'admin'" label="Cargo">
              <b-select
              placeholder="Selecione um cargo"
              expanded
              v-model="struct.data.cargo"
              name="cargo"
            >
              <option key="admin" value="admin">Administrador</option>
              <option key="client" value="client">Cliente</option>
            </b-select>
          </b-field>
          <b-field label="Nome">
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
            <b-field label="Senha">
              <b-input
                type="password"
                v-model="struct.data.password"
                name="password"
              ></b-input>
            </b-field>
            <b-field label="Senha Novamente">
              <b-input
                type="password"
                v-model="struct.data.repet_password"
                name="repet_password"
              ></b-input>
            </b-field>

            <button @click="register()" class="button btn-save-data">Cadastrar</button>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>

export default {
  name: 'Register',
  props: ['user'],
  data () {
    return {
      isOpened: false,
      struct: {
        table: 'users',
        data: {
          cargo: 'client'
        }
      }
    }
  },
  methods: {
    register () {
      this.isOpened = false
      this.$store.dispatch('saveData', this.struct)
      this.$buefy.toast.open({
        duration: 5000,
        message: 'Usuário adicionado com sucesso! Por favor recarregue a página.',
        position: 'is-top-right',
        type: 'is-success'
      })
      this.$emit('reload')
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
