<template>
    <div class="attendance-detail-page">
        <h3 class="detail-text">Time Log of Employee ID : {{ $route.params.employeeid }}</h3>
        <div class="container d-flex justify-content-center">
            <div v-if="loading" class="spinner-border text-primary"></div>
            <table v-else class="atnd-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>In-Time</th>
                        <th>Intime-Image</th>
                        <th>Out-Time</th>
                        <!-- <th>Outtime-Image</th> -->
                        <th>Permission Type</th>
                        <th>Leave Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(log, index) in timeLogs" :key="index">
                        <td>{{ formatDate(log.date) }}</td>
                        <td>{{ formatTime(log.intime) }}</td>
                        <td><img :src="log.image" alt="In-Img" class="img-fluid img-responsive" /></td>
                        <td>{{ formatTime(log.outtime) }}</td>
                        <!-- <td><img :src="log.outtimeImage" alt="Out-Img" class="img-fluid img-responsive" /></td> -->
                        <td>{{ log.permissiontype }}</td>
                        <td>{{ log.leavetype }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
export default {
    name: 'DaysPresent',
    props: ['employeeid'],
    data() {
        return {
            timeLogs: [],
            loading: true,
            apiUrl: process.env.VUE_APP_SERVICE_URL,
        };
    },
    mounted() {
        this.fetchTimeLogs();
    },
    methods: {
        async fetchTimeLogs() {
            try {
                const response = await axios.get(`${this.apiUrl}/attendance/${this.$route.params.employeeid}`);
                console.log('API Response:', response.data);
                this.timeLogs = response.data;
            } catch (error) {
                console.error('Error fetching time logs:', error);
            } finally {
                this.loading = false;
            }
        },

        formatDate(date) {
            const dateObject = new Date(date);
            const day = dateObject.getDate().toString().padStart(2, '0');
            const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
            const year = dateObject.getFullYear();

            return `${day}-${month}-${year}`;
        },
        formatTime(timeString) {
            if (!timeString) {
                return '';
            }

            const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'Asia/Kolkata' };
            return new Date(timeString).toLocaleTimeString('en-US', options);
        }

    },
};
</script>

  
<style scoped>
.detail-text {
    text-align: center;
    font-family: poppins;
    color: #012970;
}

.attendance-detail-page {
    margin-top: 1.5%;
}

.atnd-table {
    margin-top: 4%;
    width: 80%;
}

.atnd-table thead tr {
    background-color: #e2dbfd;
    color: #012970;
}

.atnd-table tbody tr {
    background-color: #fff;
    padding-left: 20px;
    font-weight: 300;
    color: #012970;

} 

.atnd-table thead tr th {
    font-weight: 600;
}

.atnd-table tr th,
td {
    font-family: poppins;
    padding: 13px 19px;
    text-align: center;
    border: 0.5px solid #b4bcca;
}

.spinner-border {
    position: absolute;
    margin: 20%;
    margin-left: 39.7%;
}
</style>
  