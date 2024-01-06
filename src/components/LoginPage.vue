<template>
  <div class="row login-bg">

      <div class="col-sm-6 login-bg1">
          <div>
              <a href="/" class="back-btn"><i class="fa fa-circle-arrow-left"></i> Back</a>
          </div>
          <div class="left-col">
              <div class="col-sm-8">
                  <img :src="companyLogo" class="img-fluid img-responsive company-logo">
              </div>
              <div class="col-sm-8">
                  <h5 style="text-align: left; margin-left: 10px;" class="log-txt">Login-Here</h5>
              </div>
              <br>
              <div class="col-sm-10 login-form">
                  <input v-model="username" type="text" placeholder="Username" required>
                  <br>
                  <div class="password-input-container">
                      <input v-model="password" :type="passwordFieldType" placeholder="Password" @keyup.enter="submitForm" required>
                      <i class="password-icon" @click="togglePasswordVisibility">
                          <i v-if="passwordFieldType === 'password'" class="fas fa-eye"></i>
                          <i v-else class="fas fa-eye-slash"></i>
                      </i>
                  </div>
                  <br>
                  <button class="login-btn" @click="submitForm">Login</button>
                  <div class="d-flex justify-content-center create-acc-btn">
                      <a href="/register" class="">Create Account?</a>
                  </div>
              </div>
          </div>
      </div>
      <div class="col-sm-6 login-bg2">
          <div class="d-flex justify-content-center">
              <img :src="loginImg" class="img-fluid img-responsive login-img">
          </div>
      </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginPage',
  data() {
      return {
          loginImg: './assets/log3.jpg',
          companyLogo: './assets/kavisoftek.png',
          username: '',
          password: '',
          showAlertMsg: false,
          passwordFieldType: 'password',
          apiUrl: process.env.VUE_APP_SERVICE_URL,
      }
  },
  methods: {
      async submitForm() {
          try {
              // Reset alert message
              this.showAlertMsg = false;

              if (!this.username || !this.password) {
                  this.showAlertMsg = true;
                  console.error('Please enter both username and password');
                  return;
              }

              const response = await axios.post(`${this.apiUrl}/adminlogin`, {
                  username: this.username,
                  password: this.password,
              });

              if (response && response.data) {
                  if (response.data.success) {
                      console.log('Authentication Successful:', response.data);

                      this.$router.push('/employee');

                      this.username = '';
                      this.password = '';

                      this.showAlertMsg = false;
                  } else {
                      // Handle invalid credentials
                      this.showAlertMsg = true;
                      console.error('Invalid username or password');
                  }
              } else {
                  console.error('Invalid response from the server:', response);
              }
          } catch (error) {
              this.username = '';
              this.password = '';

              if (error.response && error.response.status === 401) {
                  this.showAlertMsg = true;
                  console.error('Invalid username or password');
              } else {
                  console.error('Authentication Failed:', error.response ? error.response.data : error.message);
              }
          }
      },


      togglePasswordVisibility() {
          this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
      },

  },
}
</script>

<style scoped>
.login-bg1 {
  background-color: white;
  background: linear-gradient(315deg, white, #ffffff, #ffffff, #bde2ff, #0066b3);
  padding-left: 18%;

}

.login-bg2 {
  background-color: white;
}

.login-img {
  height: 820px;
  padding: 40px 0px;
  margin-top: 5%;
  margin-bottom: 7.8%;
}

.login-left-col {
  background-image: linear-gradient(to bottom, #0066b3, #02298a, #021b79);
  border-radius: 5px 0px 0px 5px;
}

.log-txt {
  color: #021b79;
  font-size: 22px;
  font-family: 'Poppins', sans-serif;
}

.login-form {
  float: left;
  text-align: left;
  margin-top: 40px;
}

.login-form input {
  padding: 8px;
  width: 100%;
  border-radius: 8px;
  border: 0.5px solid rgb(148, 196, 250);
  margin: 12px 0px;
}

.login-btn {
  width: 100%;
  border-radius: 8px;
  padding: 8px;
  background-color: #0066b3;
  border: 0.5px solid transparent;
  color: white;
  margin-top: 14px;
}

.login-right-col {
  padding: 140px 60px;
}


.login-left-text {
  text-align: left;
  color: white;
  font-family: 'Poppins', sans-serif;
}

.password-input-container {
  position: relative;
}

.password-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #6c757d;
}

.error-text {
  color: red;
  font-weight: 500;
  font-family: poppins;
  text-align: center;
  padding: 20px;
}

.left-col {
  margin-top: 38%;
  padding-bottom: 80%;
}

.back-btn {
  font-size: 20px;
  text-decoration: none;
  position: absolute;
  margin-left: -16.4%;
  margin-top: 15px;
  color: #021b79;
  font-family: poppins;
  font-weight: 500;
}

.create-acc-btn a {
  text-decoration: none;
  color: #0066b3;
  margin-top: 25px;
  font-size: 16px;
  font-family: poppins;
}

.create-acc-btn a:hover {
  color: #021b79;
}
</style>