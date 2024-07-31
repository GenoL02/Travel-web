<template>
  <div class="left">
    <div class="d-flex content-between content-left">
      <h1>D</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor purus non enim praesent elementum facilisis leo, vel
        fringilla est ullamcorper eget nulla facilisi.
      </p>
    </div>
    <p>
      enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra
      orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae
      tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus
      ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu,
      consequat ac felis donec et odio pellentesque diam volutpat commodo sed
      egestas egestas fringilla fau.
    </p>
    <img id="img1" src="@/assets/discovery1.png" alt="" />
    <div class="content-left2">
      <h1>memorable festivals on bali beach</h1>
      <span class="text-center"
        ><i class="fas fa-map-marker-alt"></i>Bali, Indonesia</span
      >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet integer
        facilisis aliquet erat vitae viverra ornare. Placerat urna integer nibh
        justo. Dictum vulputate odio mauris amet, dictumst molestie. Faucibus
        consectetur mauris tristique dolor ut diam, adipiscing et. Semper mi
        proin malesuada orci phasellus. Consectetur posuere iaculis amet sem.
        Euismod turpis pellentesque sit risus eu, sagittis nulla. Facilisis
        urna, mi pharetra sed.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet integer
        facilisis aliquet erat vitae viverra ornare. Placerat urna integer nibh
        justo. Dictum vulputate odio mauris amet, dictumst molestie.
      </p>
      <div class="d-flex justify-around img-gallery">
        <img src="@/assets/discovery2.png" alt="" />
        <img src="@/assets/discovery3.png" alt="" />
      </div>
      <p class="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet integer
        facilisis aliquet erat vitae viverra ornare. Placerat urna integer nibh
        justo. Dictum vulputate odio mauris amet, dictumst molestie. Faucibus
        consectetur mauris tristique dolor ut diam, adipiscing et. Semper mi
        proin malesuada orci phasellus. Consectetur posuere iaculis amet sem.
        Euismod turpis pellentesque sit risus eu, sagittis nulla. Facilisis
        urna, mi pharetra sed.
      </p>
    </div>
  </div>
</template>
<style scoped>
.left {
  width: 70%;
}
.left .content-left h1 {
  width: 90px;
  height: 82px;
  font-style: normal;
  font-weight: 700;
  font-size: 67.9392px;
  line-height: 120%;
  color: #000000;
}
.left p {
  width: 780px;
  height: 116px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 180%;
  color: #000000;
}
.left .content-left p {
  width: 678px;
  height: 87px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 180%;
  color: #000000;
}
.left img#img1 {
  margin-top: 30px;
  width: 780px;
  height: 299px;
  border-radius: 10px;
  margin-bottom: 20px;
}
.content-left2 h1 {
  width: 483px;
  height: 33px;
  font-style: normal;
  font-weight: 400;
  font-size: 27.65px;
  line-height: 120%;
  text-transform: capitalize;
  color: #3d3e48;
}
.content-left2 span {
  border: none;
  background-color: white;
  width: 150px;
  height: 29px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 180%;
  color: #3d3e48;
}
.content-left2 span i {
  width: 24px;
  height: 24px;
}
.left .img-gallery img {
  width: 380px;
  height: 283px;
  border-radius: 5px;
}
</style>
