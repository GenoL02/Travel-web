<template>
  <div class="left">
    <div class="content">
      <h3>Forgot password</h3>
      <p>Please enter your email to reset the password</p>
      <div class="form">
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            id="email"
            class="form-control"
            placeholder="Enter your email"
          />
        </div>

        <button class="btn" @click="$emit('send')">Send</button>
        <!-- <p>Don't have an account? <a href="register.html">Sign Up</a></p> -->
      </div>
    </div>
  </div>
</template>
<style scoped>
h3 {
  font-size: 32px;
  font-weight: 500;
  line-height: 48px;
  text-align: left;
}

p {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
}

.left {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left input {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 30px 10px 10px;
  gap: 10px;
  width: 404px;
  height: 32px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  justify-content: space-between;
}

.left button {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  position: absolute;
  width: 404px;
  height: 32px;
  border-radius: 10px;
  background: rgba(58, 91, 34, 1);
  color: rgba(255, 255, 255, 1);
}
</style>
