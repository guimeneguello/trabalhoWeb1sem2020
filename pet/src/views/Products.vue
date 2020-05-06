<template>
  <div class="home">
    <NavBar />
    <ContentProducts />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import ContentProducts from '@/components/ContentProducts.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    ContentProducts,
    Footer
  }
}
</script>
