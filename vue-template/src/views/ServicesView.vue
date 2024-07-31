<template>
  <header>
    <MenuBar />
    <HeaderBg title="Service" bg="services" />
  </header>
  <main>
    <ServicesContent />
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
import ServicesContent from "@/components/Services/ServicesContent.vue";

@Options({
  components: {
    MenuBar,
    HeaderBg,
    ServicesContent,
    HomeFooter,
  },
})
export default class ServiceView extends Vue {}
</script>
