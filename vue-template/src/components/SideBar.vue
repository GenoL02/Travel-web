<template>
  <nav>
    <div class="side-bar container">
      <div class="admin" style="padding: 20px">
        <h1>Admin</h1>
      </div>
      <div class="menu">
        <ul>
          <li>
            <a class="nav-link" href="#"
              ><span><i class="fab fa-facebook-messenger"></i></span> Tours</a
            >
          </li>
          <li>
            <a class="nav-link active" href="#"
              ><span><i class="fab fa-facebook-messenger"></i></span> News</a
            >
          </li>
          <li>
            <a class="nav-link" href="#"
              ><span><i class="fab fa-facebook-messenger"></i></span>
              Bookings</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
nav {
  position: relative;
  width: 255px;
  background-color: rgba(54, 55, 64, 1);
}
nav h1 {
  width: 144px;
  height: 54px;
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 54px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #ffffff;
}
nav img {
  width: 24px;
  height: 24px;
}
nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
nav ul li a {
  margin-top: 20px;
  display: block;
  padding: 10px 15px;
  text-decoration: none;
  -webkit-transition: 0.2s linear;
  -moz-transition: 0.2s linear;
  -ms-transition: 0.2s linear;
  -o-transition: 0.2s linear;
  transition: 0.2s linear;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.2px;
  color: #a4a6b3;
}
nav ul li a:hover {
  color: white;
}
nav ul li .active {
  color: white;
}
</style>
