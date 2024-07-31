<template>
  <div class="left">
    <h3>Get in touch</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus
      sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus
      dolor purus non enim praesent elementum facilisis leo, vel fringilla est
      ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis
      scelerisque fermentum dui faucibus in ornare quam viverra
    </p>
    <div class="mt-4 form">
      <div class="form-group">
        <label for="name">Name <span>*</span></label>
        <input
          type="text"
          id="name"
          class="form-control"
          placeholder="Input your name"
        />
      </div>
      <div class="form-group">
        <label for="email">Email <span>*</span></label>
        <input
          type="email"
          id="email"
          class="form-control"
          placeholder="Email"
        />
      </div>
      <div class="text-area">
        <label for="message">Message <span>*</span></label>
        <textarea id="message" class="form-control"></textarea>
      </div>
      <button class="btn">Send</button>
    </div>
  </div>
</template>
<style scoped>
.left {
  width: 50%;
}
.left h3 {
  height: auto;
  margin-bottom: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 27.65px;
  line-height: 120%;
  color: #3d3e48;
}
.left p {
  height: auto;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 180%;
  color: #3d3e48;
}
.left .form span {
  color: red;
}
.left .form label {
  height: auto;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 180%;
  color: #3d3e48;
}
.left .form input {
  width: 100%;
  height: 57px;
  border: 1px solid rgba(168, 167, 171, 1);
  border-radius: 10px;
}
.left .form textarea {
  width: 100%;
  height: 159px;
  border: 1px solid rgba(168, 167, 171, 1);
  border-radius: 10px;
}
.left .form button {
  margin-top: 20px;
  width: 81px;
  height: 39px;
  background-color: rgba(67, 185, 127, 1);
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28.8px;
}
</style>
