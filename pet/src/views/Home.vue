<template>
  <div class="home">
    <NavBar />
    <div class="body-content">
      <Content/>
      <ContentColection colection='products' stringColection="Produtos"/>
      <ContentColection colection='services' stringColection="Serviços"/>
      <ContentColection v-if="user.cargo == 'client'" colection='pets' stringColection="Pets"/>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Content from '@/components/Content.vue'
import ContentColection from '@/components/ContentColection.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  data () {
    return {
      user: {}
    }
  },
  components: {
    NavBar,
    ContentColection,
    Content,
    Footer
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
