<template>
  <div class="text-center mx-auto content2">
    <p>Top Destination</p>
    <h3>Discover your love</h3>
  </div>
  <div class="mt-4">
    <div class="image-grid2">
      <div class="group-img">
        <img src="@/assets/img1.png" alt="" />
        <h4>Taman Nasional Komodo</h4>
        <div class="flex img-content">
          <div class="img-left">
            <p>Rp. 7,5jt</p>
          </div>
          <div class="img-right">
            <p class="text-right">7 days for trips</p>
          </div>
        </div>
      </div>
      <div class="group-img">
        <img src="@/assets/img2.png" alt="" />
        <h4>Taman Nasional Bunaken</h4>
        <div class="flex img-content">
          <div class="img-left">
            <p>Rp. 10,5jt</p>
          </div>
          <div class="img-right">
            <p class="text-right">9 days for trips</p>
          </div>
        </div>
      </div>
      <div class="group-img">
        <img src="@/assets/img3.png" alt="" />
        <h4>Raja Ampat, Papua Barat</h4>
        <div class="flex img-content">
          <div class="img-left">
            <p>Rp. 20,5jt</p>
          </div>
          <div class="img-right">
            <p class="text-right">14 days for trips</p>
          </div>
        </div>
      </div>
    </div>
    <div class="image-grid2">
      <div class="group-img">
        <img src="@/assets/img4.png" alt="" />
        <h4>Kepulauan Wakatobi</h4>
        <div class="flex img-content">
          <div class="img-left">
            <p>Rp. 9,5jt</p>
          </div>
          <div class="img-right">
            <p class="text-right">12 days for trips</p>
          </div>
        </div>
      </div>
      <div class="group-img">
        <img src="@/assets/img5.png" alt="" />
        <h4>Gili Trawangan, Lombok</h4>
        <div class="flex img-content">
          <div class="img-left">
            <p>Rp. 6,5jt</p>
          </div>
          <div class="img-right">
            <p class="text-right">7 days for trips</p>
          </div>
        </div>
      </div>
      <div class="group-img">
        <img src="@/assets/img6.png" alt="" />
        <h4>Taman Nasional Bromo</h4>
        <div class="flex img-content">
          <div class="img-left">
            <p>Rp. 9,5jt</p>
          </div>
          <div class="img-right">
            <p class="text-right">7 days for trips</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.image-grid2 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.image-grid2 img {
  border-radius: 10px;
  width: 95%;
  margin: 5px auto;
}
.image-grid2 .group-img {
  border: 2px ridge rgba(0, 0, 0, 0.25);
  width: 380px;
  height: 363px;
  border-radius: 10px;
  margin-bottom: 30px;
}
.group-img h4 {
  margin: auto;
  width: 95%;
  height: 35px;
  font-style: normal;
  font-weight: 700;
  font-size: 19.2px;
  line-height: 180%;
  color: #3d3e48;
}
.image-grid2 .img-content {
  width: 95%;
  margin: 10px auto;
  justify-content: space-between;
}
.image-grid2 .img-left {
  width: 50%;
}
.image-grid2 .img-left p {
  width: 100px;
  height: 29px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 180%;
  color: #295943;
}
.image-grid2 .img-right {
  width: 50%;
}
.image-grid2 .img-right p {
  height: 25px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 180%;
  color: #3d3e48;
}
.content2 p {
  height: 29px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 180%;
  text-transform: capitalize;
  color: #295943;
}
.content2 h3 {
  height: 33px;
  font-style: normal;
  font-weight: 700;
  font-size: 27.65px;
  line-height: 120%;
  color: #3d3e48;
}
</style>
