<template>
  <div class="background">

  </div>
</template>
<script>
export default {
  name: 'ContentProducts',
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
