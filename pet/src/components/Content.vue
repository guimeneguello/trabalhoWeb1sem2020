<template>
  <div class="background">
    <ContentDefault v-if="user == null" />
    <ContentLogin v-else />
  </div>
</template>
<script>
import ContentDefault from '@/components/ContentDefault.vue';
import ContentLogin from '@/components/ContentLogin.vue';
export default {
  name: 'Content',
  data() {
    return {
      user: {}
    };
  },
  created() {
    this.user = localStorage.getObj('user');
  },
  components: {
    ContentLogin,
    ContentDefault
  }
};
</script>
<style src="@/scss/_Content.scss" lang="scss" />
