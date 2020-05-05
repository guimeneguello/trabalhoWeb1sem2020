<template>
  <div class="background"></div>
</template>
<script>
export default {
  name: "Content",
  data() {
    return {
      user: {}
    };
  },
  created() {
    this.user = localStorage.getObj("user");
  }
};
</script>
<style src="@/scss/_Content.scss" lang="scss" />
