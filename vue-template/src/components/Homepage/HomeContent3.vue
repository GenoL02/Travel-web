<template>
  <div class="text-center mx-auto content3">
    <p>Testimonial</p>
    <h3>What they say about us</h3>
  </div>
  <div class="mt-4">
    <div class="image-grid3">
      <div class="group-img2">
        <div class="flex items-center img-content2">
          <img src="@/assets/user1.png" alt="" />
          <h4>Angelina Simple</h4>
        </div>
        <div class="img-inner-content2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </p>
        </div>
      </div>
      <div class="group-img2" id="active">
        <div class="flex items-center img-content2">
          <img src="@/assets/user2.png" alt="" />
          <h4>Viola Natalie</h4>
        </div>
        <div class="img-inner-content2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </p>
        </div>
      </div>
      <div class="group-img2">
        <div class="flex items-center img-content2">
          <img src="@/assets/user3.png" alt="" />
          <h4>Robert John K.</h4>
        </div>
        <div class="img-inner-content2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </p>
        </div>
      </div>
    </div>
    <div class="image-grid3">
      <div class="group-img2">
        <div class="flex items-center img-content2">
          <img src="@/assets/user4.png" alt="" />
          <h4>Anggi Nani</h4>
        </div>
        <div class="img-inner-content2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </p>
        </div>
      </div>
      <div class="group-img2">
        <div class="flex items-center img-content2">
          <img src="@/assets/user5.png" alt="" />
          <h4>Graham Suryo J</h4>
        </div>
        <div class="img-inner-content2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </p>
        </div>
      </div>
      <div class="group-img2">
        <div class="flex items-center img-content2">
          <img src="@/assets/user6.png" alt="" />
          <h4>Bagas G Natfi</h4>
        </div>
        <div class="img-inner-content2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.content3 p {
  height: 29px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 180%;
  text-transform: capitalize;
  color: #295943;
}
.content3 h3 {
  height: 33px;
  font-style: normal;
  font-weight: 700;
  font-size: 27.65px;
  line-height: 120%;
  color: #3d3e48;
}
.image-grid3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.image-grid3 img {
  width: 50px;
  height: 50px;
  flex: none;
  order: 0;
  flex-grow: 0;
  border-radius: 25px;
}
.image-grid3 .group-img2 h4 {
  font-style: normal;
  font-weight: 700;
  font-size: 23.04px;
  line-height: 120%;
  color: #3d3e48;
  flex: none;
  order: 0;
  flex-grow: 0;
}
.image-grid3 .group-img2 {
  width: 380px;
  height: 207px;
  margin-bottom: 30px;
}
.image-grid3 .group-img2#active {
  background-color: rgba(67, 185, 127, 1);
}
.image-grid3 .group-img2#active h4 {
  color: white;
}
.image-grid3 .group-img2#active p {
  color: white;
}
.img-content2 {
  width: 95%;
  margin: 5px auto;
}
.img-inner-content2 p {
  margin: 30px auto;
  width: 95%;
  height: 87px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 180%;
  color: #3d3e48;
  flex: none;
  order: 0;
  flex-grow: 0;
}
</style>
