<template>
  <div class="home">
    <NavBar />
    <ContentColection  class="body-content" colection='products' stringColection='Produtos' permission='admin'/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import ContentColection from '@/components/ContentColection.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    ContentColection,
    Footer
  }
}
</script>
