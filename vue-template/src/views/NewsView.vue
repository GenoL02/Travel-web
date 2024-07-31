<template>
  <header>
    <MenuBar />
    <HeaderBg title="Our News" bg="news" />
  </header>
  <main>
    <NewsContent />
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
import NewsContent from "@/components/News/NewsContent.vue";

@Options({
  components: {
    MenuBar,
    HeaderBg,
    NewsContent,
    HomeFooter,
  },
})
export default class NewsView extends Vue {}
</script>
