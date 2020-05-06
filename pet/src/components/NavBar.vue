<template>
  <div class="conjunto_navbar">
    <b-navbar>
      <b-navbar-item slot="brand" class="columns slogan">
        <div class="clearfix column is-6-mobile">
          <p>Bem-vindo {{ user.name }} ao melhor atendimento de animais de estimação em São Carlos</p>
        </div>
        <div class="column end login-area">
            <Login :user="user"/>
            <Register :user="user"/>
        </div>
      </b-navbar-item>

      <b-navbar-item slot="brand" class="columns infos">
        <img class="column is-4-mobile is-3-desktop" src />
        <div class="column is-offset-5 is-8-mobile is-4-desktop">
          <div class="columns">
            <div class="column">
              <p>
                <span>Ligue Hoje:</span>
              </p>
              <p>(+55) 16 9999 9999</p>
            </div>
            <div class="column">
              <p><span>Horário de funcionamento:</span></p>
              <p>Seg - Sex : 09:00 - 20:00</p>
            </div>
          </div>
        </div>
      </b-navbar-item>

      <b-navbar-item slot="start" class="menu">
        <router-link to="/">
          <b-button class="btn-login">Início</b-button>
        </router-link>
        <router-link to="/products">
          <b-button class="btn-login">Produtos</b-button>
        </router-link>
        <router-link to="/services">
          <b-button class="btn-login">Serviços</b-button>
        </router-link>
        <router-link v-if="user.cargo == 'client'" to="/pets">
          <b-button class="btn-login">Pets</b-button>
        </router-link>
      </b-navbar-item>

      <b-navbar-item slot="end" class="menu">
        <Apoiment v-if="user.cargo == 'client'" :user="user"/>
        <RegisterData v-if="user.cargo == 'client'" :user="user" colection='pets' stringColection='Pet'/>
        <RegisterData v-if="user.cargo == 'admin'" :user="user" colection='services' stringColection='Serviço'/>
        <RegisterData v-if="user.cargo == 'admin'" :user="user" colection='products' stringColection='Produto'/>
      </b-navbar-item>
    </b-navbar>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import Apoiment from '@/components/Apoiment.vue'
import RegisterData from '@/components/RegisterData.vue'

export default {
  name: 'NavBar',
  data () {
    return {
      user: {}
    }
  },
  components: {
    Login,
    Register,
    Apoiment,
    RegisterData
  },
  created () {
    this.user = localStorage.getObj('user')
    if (this.user == null) {
      this.user = {}
      this.user.email = ''
      this.user.password = ''
      this.user.name = ''
      this.user.cargo = ''
    }
  }
}
</script>

<style src="@/scss/_NavBar.scss" lang="scss" />
