<template>
  <div class="home">
    <NavBar />
    <Content class="body-content"/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Content from '@/components/Content.vue'
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
