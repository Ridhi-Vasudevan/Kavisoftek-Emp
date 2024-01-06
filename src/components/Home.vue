<template>
    <div class="main-bg">
        <div class="navbar land-nav">
            <a href="/login">Login</a> /
            <a href="/register">Signup</a>
        </div>
        <div class="container land-container">
            <div class="row">
                <div class="col-sm-6 land-left">
                    <div class="col-sm-7">
                        <img :src="companyLogo" class="img-fluid img-responsive">
                    </div>
                    <div class="com-tagline">Best Way to Compete..</div>
                    <div class="land-btns">
                        <a href="/attendance-form">
                            <button class="atnd-btn">Register Attendance</button>
                        </a>
                        <a href="/login">
                            <button class="admin-btn">Go to Admin-Page</button>
                        </a>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="d-flex justify-content-end">
                        <img :src="vectorImage" class="img-fluid img-responsive vector-img">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            companyLogo: './assets/kavisoftek.png',
            vectorImage: './assets/vector.png',
        }
    }
}
</script>

<style scoped>
.main-bg {
    background: linear-gradient(45deg, white, #ffffff, #ffffff, #bde2ff, #0066b3);
    box-sizing: border-box;
    padding: 1%;
}

.com-tagline {
    font-size: 47px;
    font-weight: 500;
    letter-spacing: -1px;
    margin-left: 5px;
    margin-top: 30px;
    color: #012970;
    font-family: poppins;

}

.land-btns button {
    padding: 10px 15px;
    margin-right: 20px;
    margin-top: 12%;
    margin-left: 5px;
    border-radius: 6px;
    border: 0.5px solid #a8a7a7;
    font-size: 18px;
    margin-bottom: 11%;
}

.land-btns button:hover {
    box-shadow: 0px 0px 10px rgb(187, 182, 182)
}

.atnd-btn {
    background-color: white;
    color: black;
}

.admin-btn {
    background-color: #0066b3;
    color: white;
}

.vector-img {
    height: 510px;
    object-fit: cover;
}

.land-left {
    margin-top: 4.2%;
}

.land-nav {
    justify-content: end;
    font-weight: 500;
    margin-right: 30px;
    font-family: poppins;
    color: #012970;

}

.land-nav a {
    color: #012970;
    text-decoration: none;
    padding: 0px 10px;
    font-size: 20px;
}

.land-nav a:hover {
    text-shadow: 0px 0px 4px rgb(194, 194, 228);
}

.land-container {
    padding: 9.5% 0px;
}
</style>