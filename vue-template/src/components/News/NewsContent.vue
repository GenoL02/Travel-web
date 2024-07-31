<template>
  <div class="text-center mt-5 container">
    <div class="tittle">
      <h3>Travelaja Articles</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
    </div>
  </div>
  <div class="mt-4 menu">
    <nav>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" href="#">Adventure Travel</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Beach</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Explore World</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Family Holidays</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Art and culture</a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="mt-4 grid grid-cols-3">
    <div class="content">
      <img src="@/assets/news1.png" alt="" />
      <h5>where can i go? 5 amazing countries that are open right now</h5>
      <p>September 19, 2022</p>
    </div>
    <div class="content">
      <img src="@/assets/news2.png" alt="" />
      <h5>beautiful view of indonesia's natural hills</h5>
      <p>September 19, 2022</p>
    </div>
    <div class="content">
      <img src="@/assets/news3.png" alt="" />
      <h5>10 Indonesian Destinations you should visit in this year</h5>
      <p>September 19, 2022</p>
    </div>
    <div class="content">
      <img src="@/assets/news4.png" alt="" />
      <h5>5 mountains that you must visit while in Indonesia</h5>
      <p>September 19, 2022</p>
    </div>
    <div class="content">
      <img src="@/assets/news5.png" alt="" />
      <h5>the most interesting historical monuments in Indonesia</h5>
      <p>September 19, 2022</p>
    </div>
    <div class="content">
      <img src="@/assets/news6.png" alt="" />
      <h5>travel booking before missing the discount</h5>
      <p>September 19, 2022</p>
    </div>
    <div class="content">
      <img src="@/assets/news7.png" alt="" />
      <h5>10 Indonesian Destinations you should visit in this year</h5>
      <p>September 19, 2022</p>
    </div>
    <div class="content">
      <img src="@/assets/news8.png" alt="" />
      <h5>travel booking before missing the discount</h5>
      <p>September 19, 2022</p>
    </div>
    <div class="content">
      <img src="@/assets/news9.png" alt="" />
      <h5>where can i go? 5 amazing countries that are open right now</h5>
      <p>September 19, 2022</p>
    </div>
  </div>
</template>
<style scoped>
.container .tittle h3 {
  height: 33px;
  font-style: normal;
  font-weight: 400;
  font-size: 27.65px;
  line-height: 120%;
  color: #3d3e48;
}
.container .tittle p {
  height: 29px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 180%;
  color: #3d3e48;
}
.menu .active {
  color: white;
  background-color: rgba(67, 185, 127, 1);
  border-radius: 5px;
}
.grid {
  margin: 0 auto;
  padding: 35px;
  width: 100%;
  gap: 20px;
}
.grid h5 {
  width: 380px;
  height: 70px;
  font-style: normal;
  font-weight: 400;
  font-size: 19.2px;
  line-height: 180%;
  color: #000000;
}
.grid p {
  width: 154px;
  height: 29px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 180%;
  color: #3d3e48;
}
.grid .content img {
  border-radius: 10px;
  width: 380px;
  height: 331px;
}
</style>
