<template>
  <main>
    <div class="content">
      <h3>Create News</h3>
      <div class="mt-4 form">
        <div class="form-group">
          <label for="category">Category<span>*</span></label>
          <select class="form-control">
            <option selected>Choose item</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div class="form-group">
          <label for="title">Title<span>*</span></label>
          <input
            type="text"
            id="title"
            class="form-control"
            placeholder="Enter title"
          />
        </div>
        <div class="form-group">
          <label for="slug">Slug<span>*</span></label>
          <input
            type="text"
            id="slug"
            class="form-control"
            placeholder="Enter slug"
          />
        </div>
        <div class="pic-upload">
          <h4>Image</h4>
          <div class="upload">
            <button type="button" id="picture">Chose a file</button>
          </div>
        </div>
        <div class="form-content">
          <label for="content" class="mt-4">Content</label>
          <img src="@/assets/tool-bar.png" alt="" />
        </div>
        <div class="mt-4 flex justify-between items-center check">
          <label for="status">Status</label>
          <div
            class="flex justify-between items-center form-check"
            id="form-check2"
          >
            <div class="radio-container">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1"
                >Published</label
              >
            </div>
            <div class="radio-container">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label class="form-check-label" for="flexRadioDefault2"
                >Unpublished</label
              >
            </div>
          </div>
        </div>
        <div class="mt-4 flex justify-center buttons">
          <div class="button-group">
            <button class="btn cancel">Cancel</button>
            <button class="btn draft">Draft</button>
            <button class="btn save">Save</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
main {
  width: 100%;
  height: auto;
  background-color: #d9d9d9;
}
main .content {
  padding: 30px 30px 50px 30px;
}
.content h3 {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.2px;
  color: #000000;
}
.form {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
}
.form label span {
  color: red;
}
.pic-upload .upload {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90px;
  /* Input */
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
}
.check {
  width: 40%;
}
.form-check {
  width: 230px;
}
.buttons .button-group {
  display: flex;
  justify-content: space-between;
  width: 60%;
}
.buttons button {
  box-sizing: border-box;
  padding: 10px 16px;
  width: 150px;
  height: 40px;
  border: 1px solid #eaecf0;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
}
.buttons .cancel {
  background: #eaecf0;
  color: #000000;
}
.buttons .save {
  background: rgba(67, 185, 127, 1);
  color: #ffffff;
}
.buttons .draft {
  background: rgba(102, 112, 133, 1);
  color: #ffffff;
}
</style>
