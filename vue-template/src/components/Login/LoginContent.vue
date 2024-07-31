<template>
  <div class="left">
    <div class="content">
      <h3>Welcome back!</h3>
      <p>Enter your Credentials to access your account</p>
      <Form @submit="onSubmit" v-slot="{ errors }">
        <div class="form">
          <div class="form-group">
            <label for="email">Email address</label>
            <Field
              type="email"
              id="email"
              class="form-control"
              placeholder="Enter your email"
              name="email"
              v-model="form.email"
            />
            <ErrorMessage name="email" class="error-message" />
          </div>
          <div class="form-group2">
            <label for="password">Password</label>
            <div class="input2">
              <Field
                id="password"
                class="form-control"
                placeholder="Enter your password"
                :type="passwordType"
                name="password"
                v-model="form.password"
              />
              <ErrorMessage name="password" class="error-message" />
              <span class="show-btn" @click="togglePasswordType">
                <i
                  :class="[
                    passwordType === 'password'
                      ? 'fas fa-eye'
                      : 'fas fa-eye-slash',
                  ]"
                ></i>
              </span>
            </div>
          </div>
          <div class="link">
            <router-link to="/forgot-password">forgot password</router-link>
          </div>
          <button class="btn" type="submit" :disabled="errors.length > 0">
            Log In
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { useToast } from "vue-toastification";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      passwordType: "password",
    };
  },
  methods: {
    onSubmit(values) {
      const toast = useToast();
      const successMessage = this.$t("successMessage");
      toast.success(successMessage);
      console.log(values);
    },
    togglePasswordType() {
      this.passwordType =
        this.passwordType === "password" ? "text" : "password";
    },
  },
  setup() {
    const schema = yup.object().shape({
      email: yup
        .string()
        .required("This field is required")
        .email("Please enter a valid email address"),
      password: yup
        .string()
        .required("This field is required")
        .min(6, "Password must be at least 6 characters"),
    });
    return {
      schema,
    };
  },
};
</script>
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
.left .form-group2 {
  margin-bottom: 0;
}
.left .input2 {
  display: flex;
  align-items: center;
  position: relative;
}
.input2 i {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
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
.link {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
span.show-btn {
  cursor: pointer;
}
</style>
