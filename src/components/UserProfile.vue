User
<template>
    <div v-if="loading" class="spinner-border text-primary"></div>
    <div v-if="error">Error fetching user: {{ error }}</div>
    <div class="user-profile-page" v-if="dataloading">
        <div class="row user-head">
            <div class="row">
                <div class="col-sm-2">
                    <img :src="userData.editImage" alt="User Image" class="img-fluid img-responsive user-image" />
                </div>

                <div class="col-sm-4 user-head-text">
                    <div class="d-flex">
                        <div class="user-name">{{ userData.name }}</div>
                    </div>
                    <div class="user-designation">
                        {{ userData.designation }}
                    </div>
                    <div class="user-id">( Employee ID - {{ userData.employeeid }} )</div>
                </div>
                <div class="col-sm-5">
                    <div class="time-log">
                        <router-link class=" d-flex justify-content-end"
                            :to="{ name: 'DaysPresent', params: { employeeid: userData.employeeid } }">
                            <span class="timelog"> <i class="fa fa-circle-chevron-right"></i> TimeLog </span>
                        </router-link>
                        <!-- <a class="whatsapp" :href="whatsappLink" target="_blank"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a> -->
                    </div>
                </div>

            </div>

        </div>
        <div class="demography">
            Demographics
        </div>
        <div class="row user-body">
            <div class="col-sm-6 user-body-1">
                <div class="detail-label">D.O.B: <span>{{ formatDob(userData.dob) }}</span></div>
                <div class="detail-label">Education: <span>{{ userData.education }}</span></div>
                <div class="detail-label">Location: <span>{{ userData.location }}</span></div>
                <div class="detail-label">Marital Status: <span>{{ userData.maritalstatus }}</span></div>
                <div class="detail-label">Gender: <span>{{ userData.gender }}</span></div>
            </div>

            <div class="col-sm-6 user-body-2">
                <div class="detail-label">Address : <span>{{ userData.address }}</span> </div>
                <div class="detail-label">Phone No : <span>{{ userData.phonenumber }}</span> </div>
                <div class="detail-label">Alt. Phone No : <span>{{ userData.altphoneno }}</span> </div>
                <div class="detail-label">Email : <span>{{ userData.email }}</span> </div>
                <div class="detail-label">Official Email : <span>{{ userData.officialemail }}</span> </div>
            </div>
        </div>
    </div>
    <div v-else>
        User not found.
    </div>
</template>

<script>
import axios from 'axios';
import { useRoute } from 'vue-router';

export default {
    name: 'UserProfile',
    props: {
        product: Object,
        id: String,
    },
    data() {
        return {
            loading: true,
            router: useRoute(),
            defaultImage: './assets/profile.jpeg',
            dataloading: false,
            userData: {
                editImage: "",
            },
            error: null,
            apiUrl: process.env.VUE_APP_SERVICE_URL,

        };
    },

    // computed: {
    //     whatsappLink() {
    //         return `https://wa.me/${this.userData.phonenumber}`;
    //     },
    //     formattedUsers() {
    //         return this.users.map(user => ({
    //             ...user,
    //             dob: this.formatDate(user.dob),
    //         }));
    //     },
    // },


    methods: {

        formatDob(date) {
            const dateObject = new Date(date);
            const day = dateObject.getDate().toString().padStart(2, '0');
            const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
            const year = dateObject.getFullYear();

            return `${day}-${month}-${year}`;
        },

        async fetchUserData() {
            const userId = this.$route.params.id;

            await axios.get(`${this.apiUrl}/employees/${userId}`)
                .then((response) => {
                    console.log(response.data[0])
                    this.userData = response.data[0];
                    console.log(this.userData.editImage)
                    this.dataloading = true;
                })

                .catch((error) => {
                    console.error('Error fetching data:', error);
                    this.error = error;
                })
                .finally(() => {
                    this.loading = false;
                });
        },

    },

    async mounted() {
        await this.fetchUserData();
        const userId = this.$route.params.id;
        console.log('User ID:', userId);
    },


}
</script>

<style scoped>
.user-profile-page {
    margin: 2%;
    padding: 10px 20px;
    padding-right: 60px;
}

.user-head {
    padding: 20px 10px;
    border: 0.5px solid white;
    border-radius: 12px;
    background-color: white;
    box-shadow: 0px 0px 8px rgb(241, 232, 232);

}


.user-head-text {
    margin-top: 2.7%;
    margin-left: 2%;
}

.user-image {
    border-radius: 12px;
    border: 0.5px solid #012970;
    padding: 3.5px;
    max-height: 250px;
    min-height: 250px;
    justify-content: center;
    object-fit: contain;
}

.user-name {
    font-size: 40px;
    color: #012970;
    font-family: 'Poppins', sans-serif;
}

.user-id {
    font-size: 18px;
    margin-top: 10px;
    font-style: italic;
    font-weight: 350;
    color: #24498a;
}

.user-designation {
    font-size: 22px;
    color: rgb(85, 80, 80);
    font-family: 'Poppins', sans-serif;
    font-weight: 350;
    color: #24498a;
}

.demography {
    font-size: 36px;
    margin: 2% 0px;
    font-weight: 550;
    font-family: 'Poppins', sans-serif;
    letter-spacing: -1px;
    color: #012970;
}

.user-body-1,
.user-body-2 {
    background-color: white;
    border: 0.5px solid white;
    padding: 50px 10px;
    border-radius: 15px;
    width: 48%;
    padding-left: 75px;
    padding-right: 50px;
    box-shadow: 0px 0px 8px rgb(241, 232, 232);
}

.user-body {
    justify-content: space-between;
}

.user-body-1 div,
.user-body-2 div {
    padding: 8px 10px;
    font-family: 'Poppins', sans-serif;
}

.detail-label {
    font-size: 20px;
    font-weight: 550;
    color: #012970;

}

.detail-label span {
    font-weight: 350;
    color: #24498a;
}

.spinner-border {
    position: absolute;
    margin: 20%;
    margin-left: 39.7%;
}

.detail-label table thead tr th {
    font-weight: 300;
    padding: 0px 15px;
    border-radius: 10px;
}

.detail-label table {
    border: 0.5px solid grey;
    text-align: left;
    border-color: #24498a;

}

.detail-label a {
    color: #012970;
    font-size: 16px;
    font-weight: 600;
}

.time-log a {
    text-decoration: none;
    font-size: 19px;
    color: #005eff;
    padding-top: 5%;
}


.timelog {
    position: absolute;
    padding: 9% 0px;
    margin-right: -4%;
}

.whatsapp {
    position: absolute;
    top: 260px;
    right: 130px;
}
</style>