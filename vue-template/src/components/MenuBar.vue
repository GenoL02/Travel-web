<template>
  <nav
    class="navbar navbar-expand-lg"
    :class="{ 'text-white': theme === 'home' }"
  >
    <a class="navbar-brand" href="#"><h1>travelaja</h1></a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/discover" class="nav-link">Discover</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/services" class="nav-link">Services</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/news" class="nav-link">News</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About Us</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </li>
      </ul>
    </div>
    <li class="nav-item dropdown ml-auto">
      <a
        class="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        ID
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <a class="dropdown-item" href="#">1</a>
        <a class="dropdown-item" href="#">2</a>
        <a class="dropdown-item" href="#">3</a>
      </div>
    </li>
  </nav>
</template>

<style scoped lang="scss">
.text-white a {
  &.router-link-exact-active {
    color: rgba(255, 255, 255, 1);
    font-weight: 700;
  }
}
nav {
  width: 100%;
  background-size: cover;
  overflow: hidden;
  padding-top: 30px;
  margin-top: -30px;
  li {
    list-style-type: none;
  }
  h1 {
    width: 148px;
    height: 40px;
    font-style: normal;
    font-weight: 400;
    font-size: 33.18px;
    line-height: 120%;
  }
}
</style>
<script>
export default {
  name: "MenuBar",
  props: {
    theme: String,
    validator(value) {
      return ["home", "others"].includes(value);
    },
  },
};
</script>
