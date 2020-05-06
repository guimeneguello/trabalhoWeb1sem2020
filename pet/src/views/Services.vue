<template>
  <div class="home">
    <NavBar />
    <ContentServices />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import ContentServices from '@/components/ContentServices.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    ContentServices,
    Footer
  }
}
</script>
