<template>
  <div class="content1">
    <div class="content1-left">
      <div class="image-grid">
        <div><img id="img1" src="@/assets/home1.png" alt="" /></div>
        <div><img id="img2" src="@/assets/home2.png" alt="" /></div>
        <div><img id="img3" src="@/assets/home3.png" alt="" /></div>
      </div>
    </div>
    <div class="content1-right">
      <p id="spec1">Travelers Point</p>
      <h3>We help to find your dream place</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor purus non enim praesent elementum facilisis leo, vel
        fringilla est ullamcorper eget nulla facilisi
      </p>
      <div class="flex flex-row inner-content">
        <div class="inner-content-left">
          <p id="spec2">100+</p>
          <p>Holiday Package</p>
          <p id="spec2">68</p>
          <p>Elite Transportation</p>
        </div>
        <div class="inner-content-right">
          <p id="spec2">172</p>
          <p>Hotels</p>
          <p id="spec2">32M+</p>
          <p>we help to find your dream place</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.content1 {
  display: flex;
  flex-direction: row;
  height: 500px;
}
.content1 .content1-left {
  width: 50%;
}
.content1-left img#img1 {
  position: absolute;
  width: 274px;
  height: 448px;
  border-radius: 95px;
  overflow: hidden;
}
.content1-left img#img2 {
  margin-top: 116px;
  margin-left: 50px;
  position: absolute;
  width: 200px;
  height: 332px;
  border-radius: 95px;
  overflow: hidden;
}
.content1-left img#img3 {
  position: absolute;
  width: 180px;
  height: 311px;
  border-radius: 95px;
  overflow: hidden;
}
.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.image-grid img {
  border: 10px solid white;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: white;
}
.content1 .content1-right {
  width: 50%;
}
.inner-content {
  margin-top: 30px;
}
.inner-content p {
  width: 300px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #3d3e48;
}
.content1-right p#spec1 {
  width: 123px;
  height: 29px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #295943;
}
.content1-right h3 {
  width: 469px;
  height: 33px;
  font-style: normal;
  font-weight: 700;
  font-size: 27.65px;
  line-height: 120%;
  color: #3d3e48;
}
.inner-content p#spec2 {
  width: 64px;
  height: 33px;
  font-style: normal;
  font-weight: 700;
  font-size: 27.65px;
  line-height: 120%;
  color: #295943;
}
.content1-right .inner-content-left {
  width: 50%;
}
.content1-right .inner-content-right {
  width: 50%;
}
</style>
