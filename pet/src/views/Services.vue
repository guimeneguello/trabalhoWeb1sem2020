<template>
  <div class="home">
    <NavBar />
    <div class="body-content" >
      <ContentColection colection='services' stringColection='Serviços' permission='admin'/>
      <ScheduledServices />
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import ContentColection from '@/components/ContentColection.vue'
import ScheduledServices from '@/components/ScheduledServices.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    ContentColection,
    ScheduledServices,
    Footer
  }
}
</script>
