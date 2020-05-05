<template>
  <div class="conjunto_navbar">
    <b-navbar>
      <b-navbar-item slot="brand" class="columns slogan">
        <div class="clearfix column is-8-mobile">
          <p>Welcome to The Best Pets Care at Melboune</p>
        </div>
        <div class="column end login-area">
            <b-button class="btn-login"
            @click="isModalActive = true, isLogin=true, isRegister=false">Login</b-button>
            <b-button class="btn-login"
            @click="isModalActive = true, isLogin=false, isRegister=true">Register</b-button>
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

      <b-navbar-item slot="end" class="menu">
        <router-link to="/">
          <b-button class="btn-login">Home</b-button>
        </router-link>
        <router-link to="/products">
          <b-button class="btn-login">Produtos</b-button>
        </router-link>
        <router-link to="/services">
          <b-button class="btn-login">Serviços</b-button>
        </router-link>
        <b-button class="btn-login">Marque um Serviço</b-button>
      </b-navbar-item>
    </b-navbar>
    <b-modal :active.sync="isModalActive">
      <Login v-if="isLogin" :opened="isModalActive" @closeModal="closeModal"/>
      <Register v-else-if="isRegister"  :opened="isModalActive" @closeModal="closeModal"/>
    </b-modal>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'

export default {
  name: 'NavBar',
  data () {
    return {
      isModalActive: false,
      isLogin: false,
      isRegister: false
    }
  },
  components: {
    Login,
    Register
  },
  methods: {
    closeModal (payload) {
      this.isModalActive = payload.opened
    }
  }
}
</script>

<style src="@/scss/_NavBar.scss" lang="scss" />
