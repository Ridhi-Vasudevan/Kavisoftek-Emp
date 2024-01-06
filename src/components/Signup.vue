<template>
    <div class="row signin-page">
        <div class="col-sm-7 signin-bg1">
            <div>
                <a href="/" class="back-btn-1"><i class="fa fa-circle-arrow-left"></i> Back</a>
            </div>
            <div class="col-sm-8 d-flex justify-content-center">
                <img :src="regImage" class="img-fluid img-responsive signin-img">
            </div>
        </div>
        <div class="col-sm-5 signin-bg2">
            <div class="col-sm-4">
                <img :src="companyLogo" class="img-fluid img-responsive company-logo">
            </div>
            <div class="tagline">
                Best Way to Compete..
            </div>
            <form @submit.prevent="registerUser">
                <div class="col-sm-6 signin-input">
                    <input type="text" id="username" v-model="user.username" placeholder="Username" required>
                    <input type="email" id="email" v-model="user.email" placeholder="Email" required>
                    <input :type="showPassword ? 'text' : 'password'" id="password" placeholder="Password"
                        v-model="user.password" required />
                    <input :type="showPassword ? 'text' : 'password'" id="confirmPassword" placeholder="Confirm Password"
                        v-model="confirmPassword" @keyup.enter="registerUser" required />
                </div>
                <input type="checkbox" id="showPassword" v-model="showPassword" />
                <label for="showPassword">&nbsp;&nbsp;View Password</label>
                <br>
                <button type="submit">Register</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'SignIn',
    data() {
        return {
            companyLogo: './assets/kavisoftek.png',
            regImage: './assets/signin.png',
            user: {
                username: '',
                email: '',
                password: '',
            },
            confirmPassword: '',
            showPassword: false,
            apiUrl: process.env.VUE_APP_SERVICE_URL,
        }
    },
    methods: {
        async registerUser() {
            if (this.user.password !== this.confirmPassword) {
                Swal.fire({
                    icon: 'error',
                    title: 'Passwords do not match!',
                    text: 'Check Password and try Again',
                });
                return;
            }

            try {
                const response = await axios.post(`${this.apiUrl}/user`, this.user);

                console.log('Registration successful:', response.data);

                this.user = {
                    username: '',
                    email: '',
                    password: '',
                };
                this.confirmPassword = '';

                Swal.fire({
                    icon: 'success',
                    title: 'Registration Successful!',
                    text: 'You can now log in.',
                });
            } catch (error) {
                console.error('Error during registration:', error);
                console.log(error);

                if (error.response && error.response.status === 409) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Registration Failed',
                        text: 'Username or email already exists!',
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Registration Failed',
                        text: 'An unexpected error occurred. The Username or email may already exists..  Please try again later.',
                    });
                }
            }
        },
    }
}
</script>

<style scoped>
.signin-bg1 {
    background-image: linear-gradient(to bottom, #0066b3, #02298a, #021b79);
}

.signin-bg2 {
    background-color: white;
    padding-left: 100px;
}

.company-logo {
    margin-top: 50%;
}


button {
    background-color: #0f449e;
    color: #fff;
    padding: 10px 25px;
    border: none;
    cursor: pointer;
    border-radius: 6px;
    margin: 20px 0px;
}

button:hover {
    background-color: #007bff;
}

.signin-input input {
    border-radius: 6px;
    border: 0.5px solid #5a82f0;
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
    margin-bottom: 25px;
}

form {
    padding: 64px 0px;
    margin-bottom: 16%;
}

.signin-img {
    margin-top: 10%;
    margin-left: 45%;
    padding: 10% 0px;
}

.tagline {
    font-size: 32px;
    font-weight: 500;
    letter-spacing: -1px;
    margin-left: 5px;
    color: #0f449e;
    font-family: poppins;
}

.back-btn-1 {
    font-size: 20px;
    color: white;
    text-decoration: none;
    position: absolute;
    margin: 0.7%;
}
</style>