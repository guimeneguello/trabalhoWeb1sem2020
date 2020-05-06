<template>
  <div class="conjunto_navbar">
    <b-navbar>
      <b-navbar-item slot="brand" class="columns slogan">
        <div class="clearfix column is-6-mobile">
          <p>Welcome to The Best Pets Care at Melboune</p>
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
                <span>Call Today :</span>
              </p>
              <p>(+62) 254 0124</p>
            </div>
            <div class="column">
              <p>Open Hours :</p>
              <p>Mon - Fri : 09:00am - 20:00pm</p>
            </div>
          </div>
        </div>
      </b-navbar-item>

      <b-navbar-item slot="start" class="menu">
        <router-link to="/">
          <b-button class="btn-login">Home</b-button>
        </router-link>
        <router-link to="/products">
          <b-button class="btn-login">Produtos</b-button>
        </router-link>
        <router-link to="/services">
          <b-button class="btn-login">Serviços</b-button>
        </router-link>
      </b-navbar-item>

      <b-navbar-item slot="end" class="menu">
        <Apoiment v-if="user.cargo == 'client'" :user="user"/>
        <Service v-if="user.cargo == 'admin'" :user="user"/>
      </b-navbar-item>
    </b-navbar>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import Apoiment from '@/components/Apoiment.vue'
import Service from '@/components/Service.vue'

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
    Service
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
