<template>
  <main>
    <SideBar />
    <div class="content">
      <HeaderAvatar />
      <CreateNewsContent />
    </div>
  </main>
</template>
<script setup lang="ts">
import CreateNewsContent from "@/components/Create News/CreateNewsContent.vue";
import HeaderAvatar from "@/components/HeaderAvatar.vue";
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
