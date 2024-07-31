<template>
  <div class="container">
    <div class="avatar">
      <div class="name"><p>John</p></div>
      <div class="picture">
        <img src="@/assets/avatar.jpg" alt="" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: calc(100% - 255px);
  height: 92px;
  padding: 20px;
}
.avatar {
  width: 90px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  float: right;
}
img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
