<template>
  <header>
    <MenuBar />
    <HeaderBg title="About Us" bg="about" />
  </header>
  <main>
    <AboutUsContent />
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
import AboutUsContent from "@/components/About Us/AboutUscontent.vue";

@Options({
  components: {
    MenuBar,
    HeaderBg,
    AboutUsContent,
    HomeFooter,
  },
})
export default class AboutUsView extends Vue {}
</script>
