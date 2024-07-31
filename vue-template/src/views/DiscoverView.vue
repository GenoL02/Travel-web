<template>
  <header>
    <MenuBar />
    <HeaderBg title="Discover" bg="discover" />
  </header>
  <main>
    <div class="container">
      <DiscoverContent1 />
      <DiscoverContent2 />
    </div>
  </main>
  <footer>
    <HomeFooter />
  </footer>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MenuBar from "@/components/MenuBar.vue";
import HeaderBg from "@/components/HeaderBg.vue";
import HomeFooter from "@/components/HomeFooter.vue";
import DiscoverContent1 from "@/components/Discovery/DiscoverContent1.vue";
import DiscoverContent2 from "@/components/Discovery/DiscoverContent2.vue";

@Options({
  components: {
    MenuBar,
    HeaderBg,
    DiscoverContent1,
    DiscoverContent2,
    HomeFooter,
  },
})
export default class DiscoverView extends Vue {}
</script>
<style scoped>
main .container {
  display: flex;
  width: 95%;
  margin: 40px auto;
}
</style>
