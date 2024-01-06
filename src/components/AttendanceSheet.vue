<template>
    <div class="atnd-sheet-page">
        <h4 class="page-head">Attendance Sheet</h4>
        <div>
            <form @submit.prevent="submitForm">
                <div class="col-sm-8 atd-form">
                    <div class="select-dropdown" style="text-align: left; margin-left: 10px;">

                        <select v-model="selectedUserId" required>
                            <option value="" disabled selected>Employee ID</option>
                            <option v-for="option in employeeOptions" :key="option.employeeid" :value="option.employeeid">
                                {{ option.employeeid }}
                            </option>
                        </select>

                    </div>
                    <button type="submit" class="submit-btn" style="margin-left: 10px;">Submit</button>
                </div>
            </form>
        </div>
        <div>
        </div>
        <DaysPresent :employeeid="$route.params.employeeid" />
    </div>
</template>
  
<script>
import axios from 'axios';
import DaysPresent from './DaysPresent.vue';

export default {
    name: 'AttendanceSheet',
    components: {
        DaysPresent,
    },
    data() {
        return {
            selectedUserId: null,
            users: [],
            attendanceData: null,
            apiUrl: process.env.VUE_APP_SERVICE_URL,
            employeeOptions: [],
        };
    },
    created() {
        this.fetchEmployeeOptions();
    },
    methods: {
        async fetchEmployeeOptions() {
            try {
                const response = await axios.get(`${this.apiUrl}/employees`);
                this.employeeOptions = response.data;
            } catch (error) {
                console.error('Error fetching employee options:', error);
            }
        },
        async fetchAttendance() {
            try {
                const response = await axios.get(`${this.apiUrl}/attendance/${this.selectedUserId}`);
                this.attendanceData = response.data;
            } catch (error) {
                console.error('Error fetching attendance:', error);
            }
        },
        submitForm() {
            if (this.selectedUserId) {
                this.fetchAttendance();
            } else {
                console.error('Please select an employee ID before submitting.');
            }
        },
    },
    mounted() {
        this.fetchAttendance();
    },
};
</script>
  
<style scoped>
.atnd-sheet-page {
    margin-top: 1%;
}

.page-head {
    font-size: 34px;
    color: #012970;
}
</style>
  