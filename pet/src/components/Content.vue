<template>
  <div class="background">
    <div v-if="user != null">Só aparece se o usuario estiver logado</div>
    <div></div>
  </div>
</template>
<script>
export default {
  name: 'Content',
  data () {
    return {
      user: {}
    }
  },
  created () {
    this.user = localStorage.getObj('user')
  }
}
</script>
<style src="@/scss/_Content.scss" lang="scss" />
