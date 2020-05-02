<template>
  <div class="conjunto_navbar">
    <b-navbar>
      <template slot="brand">
        <div class="clearfix shared_content">
          <p>Welcome to The Best Pets Care at Melboune</p>
        </div>
      </template>
    </b-navbar>
    <b-navbar>
      <template slot="brand">
        <img src />
      </template>
      <template slot="end">
        <div class="clearfix">
          <p>
            <span>Call Today :</span>
          </p>
          <p>(+62) 254 0124</p>
        </div>

        <div class="clearfix">
          <p>Open Hours :</p>
          <p>Mon - Fri : 09:00am - 20:00pm</p>
        </div>
      </template>
    </b-navbar>
    <b-navbar>
      <template slot="brand">
        <router-link to="/">
          <b-button class="btn-login">Home</b-button>
        </router-link>
        <router-link to="/products">
          <b-button class="btn-login">Produtos</b-button>
        </router-link>
        <router-link to="/services">
          <b-button class="btn-login">Serviços</b-button>
        </router-link>
      </template>
      <template slot="end">
        <b-button class="btn-login">Marque um Serviço</b-button>
      </template>
    </b-navbar>
  </div>
</template>
<style src="@/scss/_NavBar.scss" lang="scss"></style>
