<template>
  <main>
    <LoginContent />
    <img src="@/assets/login-img.jpg" alt="" />
  </main>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LoginContent from "@/components/Login/LoginContent.vue";

@Options({
  components: {
    LoginContent,
  },
})
export default class LoginView extends Vue {}
</script>
<style scoped>
main {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
img {
  width: 50%;
  height: 100%;
}
</style>
