<template>
  <header>
    <div class="text-center mx-auto my-auto text-white header-content">
      <div class="content">
        <h1>Explore the world with a smile</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo,
        </p>
      </div>
      <div class="container my-5">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <form class="d-flex">
              <div class="input-group">
                <span class="input-group-text"
                  ><i class="fas fa-map-marker-alt"></i
                ></span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="City or Destination"
                  aria-label="City or Destination"
                />
              </div>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Date of stay"
                  aria-label="Date of stay"
                />
              </div>
              <div class="input-group items-center">
                <!-- <span class="input-group-text"><i class="bi bi-people-fill"></i></span> -->
                <input
                  type="text"
                  class="form-control search-form"
                  placeholder="Person"
                  aria-label="Person"
                />
                <button class="btn btn-success" type="submit">
                  Find Trip Now <span><i class="fa fa-search"></i></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped>
h1 {
  width: auto;
  height: 57px;
  font-style: normal;
  font-weight: 400;
  font-size: 47.78px;
  line-height: 120%;
}
header {
  width: 100%;
  height: 580px;
  padding-top: 30px;
  margin-top: -30px;
}
header .header-content {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
header .content {
  margin-top: 100px;
  width: 706px;
  height: 154px;
}
.input-group-text,
.form-control {
  border-radius: 0;
  background-color: white;
  height: 50px;
  position: relative;
}
.input-group-text {
  border-radius: 8px 0 0 8px;
}
input.form-control.search-form {
  border-radius: 0 8px 8px 0 !important;
}
.btn-success {
  position: absolute;
  left: 120px;
}
</style>
