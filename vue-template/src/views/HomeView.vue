<template>
  <div class="home">
    <MenuBar theme="home" />
    <HomeHeader />
  </div>
  <main>
    <HomeContent1 />
    <HomeContent2 />
    <HomeContent3 />
  </main>
  <footer>
    <HomeFooter />
  </footer>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MenuBar from "@/components/MenuBar.vue";
import HomeHeader from "@/components/Homepage/HomeHeader.vue";
import HomeContent1 from "@/components/Homepage/HomeContent1.vue";
import HomeContent2 from "@/components/Homepage/HomeContent2.vue";
import HomeContent3 from "@/components/Homepage/HomeContent3.vue";
import HomeFooter from "@/components/HomeFooter.vue";

@Options({
  components: {
    MenuBar,
    HomeHeader,
    HomeContent1,
    HomeContent2,
    HomeContent3,
    HomeFooter,
  },
})
export default class HomeView extends Vue {}
</script>
<style scoped>
.home {
  background-image: url(../assets/homepage.jpg);
  background-color: rgba(0, 0, 0, 0.25);
  background-size: cover;
  overflow: hidden;
}
main {
  margin-top: 100px;
}
nav a {
  color: rgba(255, 255, 255, 1);
}
</style>
