<template>
  <main>
    <div v-if="!showForgotPass2">
      <ForgotPass1 @send="showForgotPass2 = true" />
    </div>
    <div v-else>
      <ForgotPass2 />
    </div>
    <img src="@/assets/login-img.jpg" alt="" />
  </main>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ForgotPass1 from "@/components/Forgot password/ForgotPass1.vue";
import ForgotPass2 from "@/components/Forgot password/ForgotPass2.vue";

@Options({
  components: {
    ForgotPass1,
    ForgotPass2,
  },
  data() {
    return {
      showForgotPass2: false,
    };
  },
})
export default class ForgotPassView extends Vue {
  showForgotPass2!: boolean;
}
</script>
<style scoped>
main {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
main > div {
  width: 100%;
}
img {
  width: 50%;
  height: 100%;
}
</style>
