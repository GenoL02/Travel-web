<template>
  <div
    class="header-bg"
    :class="{
      'bg-news-detail': bg === 'news-detail',
      'bg-discover': bg === 'discover',
      'bg-services': bg === 'services',
      'bg-news': bg === 'news',
      'bg-about': bg === 'about',
      'bg-contact': bg === 'contact',
    }"
  >
    <h3>{{ title }}</h3>
  </div>
</template>
<script>
export default {
  name: "HeaderBg",
  props: {
    title: {
      type: String,
      required: true,
    },
    bg: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
.header-bg {
  position: relative;
  width: 100%;
  height: 250px;
  background-size: cover;
  overflow: hidden;
}
.header-bg h3 {
  position: absolute;
  width: 150px;
  height: 40px;
  left: 49px;
  top: 190px;
  font-style: normal;
  font-weight: 700;
  font-size: 33.18px;
  line-height: 120%;
  color: #ffffff;
}
.bg-news-detail {
  background-image: url(../assets/header-bg.png);
  background-position: 50% 35%;
}
.bg-discover {
  background-image: url(../assets/header-bg.png);
  background-position: 50% 35%;
}
.bg-services {
  background-image: url(../assets/service-bg.png);
  background-position: 50% 55%;
}
.bg-news {
  background-image: url(../assets/news-bg.png);
  background-position: 50% 55%;
}
.bg-contact {
  background-image: url(../assets/contact-bg.png);
  background-position: 50% 60%;
}
.bg-about {
  background-image: url(../assets/about-bg.png);
  background-position: 50% 55%;
}
</style>
