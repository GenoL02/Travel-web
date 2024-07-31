<template>
  <header>
    <MenuBar />
    <HeaderBg title="Contact" bg="contact" />
  </header>
  <main>
    <div class="flex justify-between container">
      <ContactContent1 />
      <ContactContent2 />
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
import ContactContent1 from "@/components/Contact/ContactContent1.vue";
import ContactContent2 from "@/components/Contact/ContactContent2.vue";
import HomeFooter from "@/components/HomeFooter.vue";

@Options({
  components: {
    MenuBar,
    HeaderBg,
    ContactContent1,
    ContactContent2,
    HomeFooter,
  },
})
export default class ContactView extends Vue {}
</script>
<style scoped>
.container {
  width: 95%;
  margin: 80px auto;
}
</style>
