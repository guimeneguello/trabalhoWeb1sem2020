<template>
  <div>
    <div class="background">
      <div v-if="user.name.length > 0"></div>
      <div>A saúde e o bem-estar do seu animal de estimação são nossa principal prioridade.</div>
    </div>
    <ContentColection colection='products' stringColection="Produtos"/>
      <ContentColection colection='services' stringColection="Serviços"/>
      <ContentColection v-if="user.cargo == 'client'" colection='pets' stringColection="Pets"/>
  </div>
</template>

<script>
import ContentColection from '@/components/ContentColection.vue'

export default {
  name: 'Content',
  data () {
    return {
      user: {}
    }
  },
  components: {
    ContentColection
  },
  created () {
    this.user = localStorage.getObj('user')
  }
}
</script>
<style src="@/scss/_Content.scss" lang="scss" />
