<template>
  <main>
    <SideBar />
    <div class="content">
      <HeaderAvatar />
      <ListNewsContent />
    </div>
  </main>
</template>
<script setup lang="ts">
import HeaderAvatar from "@/components/HeaderAvatar.vue";
import ListNewsContent from "@/components/List news/ListNewsContent.vue";
import SideBar from "@/components/SideBar.vue";
</script>
<style scoped>
main {
  width: 100%;
  display: flex;
}
.content {
  width: calc(100% - 255px);
  height: auto;
}
</style>
