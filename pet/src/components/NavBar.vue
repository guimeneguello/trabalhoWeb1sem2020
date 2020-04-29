<template>
  <div class="conjunto_navbar">
    <b-navbar>
      <template slot="brand">
        <div class="clearfix shared_content" id="u13465-4" data-content-guid="u13465-4_content">
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
          <p id="u13464-2">
            <span id="u13464">Call Today :</span>
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
        <router-link to="/products">
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
