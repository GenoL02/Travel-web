<template>
  <div class="right">
    <img id="img2" src="@/assets/map.png" alt="" />
    <div class="mt-5 d-flex justify-between">
      <p>Other Destinations</p>
      <a href="#">See all</a>
    </div>
    <div class="d-flex flex-col">
      <div class="img-gallery">
        <h4>Wakatobi beach is a paradise for coral reets in indonesia</h4>
        <p>Yogyakarta, Indonesia</p>
        <button>View more</button>
      </div>
      <div class="img-gallery">
        <h4>Wakatobi beach is a paradise for coral reets in indonesia</h4>
        <p>Yogyakarta, Indonesia</p>
        <button>View more</button>
      </div>
      <div class="img-gallery">
        <h4>Wakatobi beach is a paradise for coral reets in indonesia</h4>
        <p>Yogyakarta, Indonesia</p>
        <button>View more</button>
      </div>
      <div class="img-gallery">
        <h4>Wakatobi beach is a paradise for coral reets in indonesia</h4>
        <p>Yogyakarta, Indonesia</p>
        <button>View more</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.right {
  width: 30%;
}
.right img#img2 {
  width: 380px;
  height: 213px;
}
.right p {
  height: 35px;
  font-style: normal;
  font-weight: 400;
  font-size: 19.2px;
  line-height: 180%;
  color: #3d3e48;
}
.right a {
  height: 35px;
  font-style: normal;
  font-weight: 400;
  font-size: 19.2px;
  line-height: 180%;
  color: rgba(67, 185, 127, 1);
}
.right .img-gallery {
  margin-top: 10px;
  background-image: url(@/assets/homepage.jpg);
  background-size: cover;
  border-radius: 10px;
  position: relative;
  height: 255px;
}
.right .img-gallery h4 {
  width: 90%;
  margin: 20px auto;
  height: 70px;
  font-style: normal;
  font-weight: 700;
  font-size: 19.2px;
  line-height: 180%;
  text-transform: capitalize;
  color: #ffffff;
}
.right .img-gallery p {
  width: 90%;
  margin: 0 auto;
  height: 22px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 180%;
  color: #ffffff;
}
.right .img-gallery button {
  position: absolute;
  top: 175px;
  left: 15px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 20px;
  gap: 10px;
  width: 126px;
  height: 49px;
  background: #43b97f;
  border-radius: 8px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 180%;
  color: #ffffff;
}
</style>
