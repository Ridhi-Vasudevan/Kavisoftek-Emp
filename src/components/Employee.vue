<template>
  <div class="employee-page">
    <h4 class="page-head">Manage Employees</h4>
    <div class="emp-btn-row">
      <!-- <button @click="toggleFilter" class="filter-btn">
        <i class="fa-solid fa-sort"></i> Add
      </button> -->
      <button @click="showAddUserForm" class="adduser-btn">
        <i class="fa-solid fa-plus"></i> Add User
      </button>
    </div>

    <div v-if="showAddUser || editingUser">
      <!-- Add/Edit User Form -->

      <form @submit.prevent="addOrUpdateUser" class="add-edit-user">
        <div class="row d-flex justify-content-center">

          <!-- Row -->
          <div class="col-sm-3">
            <input v-model="userForm.name" id="userName" placeholder="Name" required>
          </div>

          <div class="col-sm-3">
            <select v-model="userForm.designation" id="userDesignation" required class="user-select">
              <option value="" disabled selected>Select Designation</option>
              <option value="Manager">Manager</option>
              <option value="Senior Developer">Senior Developer</option>
              <option value="Developer">Developer</option>
              <option value="Developer Trainee">Developer Trainee</option>
              <option value="Editor">Editor</option>
              <option value="Designer">Designer</option>
            </select>
          </div>


          <div class="col-sm-3">
            <select v-model="userForm.status" id="userStatus" class="user-select" required>
              <option value="" disabled selected>Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>


          <div class="col-sm-3">
            <input v-model="userForm.employeeid" id="userEid" placeholder="Employee ID" required>
          </div>

          <!-- Row -->
          <div class="col-sm-3">
            <input type="text" v-model="userForm.dob" id="userDob" placeholder="Date of Birth" required
              onfocus="(this.type='date')" onblur="(this.type='text')" />
          </div>



          <div class="col-sm-3">
            <input v-model="userForm.address" id="userAddress" placeholder="Address">
          </div>

          <div class="col-sm-3">
            <input v-model="userForm.email" id="userEmail" placeholder="Email">
          </div>

          <div class="col-sm-3">
            <input v-model="userForm.education" id="userEducation" placeholder="Education">
          </div>

          <!-- Row -->
          <div class="col-sm-3">
            <input v-model="userForm.location" id="userLocation" placeholder="Location">
          </div>
          <div class="col-sm-3">
            <select v-model="userForm.maritalstatus" id="userMaritalStatus" class="user-select">
              <option value="" disabled selected>Select Marital Status</option>
              <option value="married">Married</option>
              <option value="unmarried">Unmarried</option>
            </select>
          </div>

          <div class="col-sm-3">
            <select v-model="userForm.gender" id="userGender" class="user-select">
              <option value="" disabled selected>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>


          <div class="col-sm-3">
            <input v-model="userForm.phonenumber" id="userPhoneNumber" placeholder="Phone Number" required>
          </div>

          <!-- Row -->
          <div class="col-sm-3">
            <input v-model="userForm.altphoneno" id="userAltPhoneNo" placeholder="Alternate Phone Number">
          </div>

          <div class="col-sm-3">
            <input v-model="userForm.officialemail" id="userOfficialEmail" placeholder="Official Email">
          </div>

          <div class="col-sm-3">
            <input ref="imageUploader" type="file" accept=".jpg, .jpeg" @change="handleImageChange">
          </div>

          <div class="col-sm-3">
            <input v-model="userForm.password" id="userPassword" placeholder="Password" required>
          </div>

          <div class="col-sm-3">
            <button type="submit">{{ editingUser ? 'Update User' : 'Save User' }}</button>
          </div>
        </div>
      </form>
    </div>

    <!-- User List -->
    <div class="row userlist-table">
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Designation</th>
            <th>Employee ID</th>
            <th style="text-align: center;">Status</th>
            <th style="text-align: center;">Action</th>
            <th style="text-align: center;">More</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td class="user-name">{{ user.name }}</td>
            <td>{{ user.designation }}</td>
            <td>{{ user.employeeid }}</td>
            <td style="text-align: center;">{{ user.status }}</td>
            <td class="action-btn d-flex justify-content-center">
              <button @click="editUser(user)" class="edit-btn">Edit</button>|
              <button @click="confirmDeleteUser(user.id)" class="trash-btn">Delete</button>
            </td>
            <td style="text-align: center;">
              <router-link v-if="user && user.id" :to="'/employee/' + user.id" :key="user.id">
                <i class="fa fa-circle-chevron-right more-icon"></i>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: 'EmployeePage',
  metaInfo: {
    requiresAuth: true,
  },
  data() {
    return {
      apiUrl: process.env.VUE_APP_SERVICE_URL,
      showFilter: false,
      showAddUser: false,
      users: [],
      editingUser: null,
      userForm: {
        name: '',
        dob: '',
        designation: '',
        address: '',
        email: '',
        image: null,
        employeeid: '',
        status: '',
        education: '',
        location: '',
        maritalstatus: '',
        gender: '',
        phonenumber: '',
        altphoneno: '',
        officialemail: '',
      },
    };
  },

  computed: {
    filteredUsers() {
      return this.users;
    },
  },
  methods:
  {
    async addOrUpdateUser() {
      if (this.userForm.image) {
        try {

          if (this.editingUser) {
            const response = await axios.put(
              `${this.apiUrl}/employees/${this.editingUser.id}`,
              this.userForm
            );
            const updatedUser = response.data;
            const index = this.users.findIndex((user) => user.id === updatedUser.id);
            if (index !== -1) {
              this.$set(this.users, index, updatedUser);
            }
          } else {
            const response = await axios.post(
              `${this.apiUrl}/employees`,
              this.userForm
            );
            const newUser = response.data;
            this.users.push(newUser);
          }
          this.showAddUser = false;
          this.resetUserForm();
        } catch (error) {
          console.error('Error adding/updating user:', error);
        }
      }
    },
    showAddUserForm() {
      console.log(this.showAddUser);
      this.showAddUser = true;
      this.editingUser = null;
      this.resetUserForm();
    },

    editUser(user) {
      console.log(this.editingUser);
      this.showAddUser = true;
      this.editingUser = user;
      this.userForm = { ...user };
    },

    //delete user
    async deleteUser(userId) {
      try {
        await axios.delete(`${this.apiUrl}/employees/${userId}`);
        this.users = this.users.filter((user) => user.id !== userId);
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    },
    async confirmDeleteUser(userId) {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this user!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'Cancel',
        reverseButtons: true,
      });

      if (result.isConfirmed) {
        this.deleteUser(userId);
      }
    },

    handleImageChange(event) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0])
      console.log(reader.result, event.target.files)
      setTimeout(() => {
        var data = (reader.result).split(',')[1];

        console.log('Encoded Binary File String:', data);
        this.userForm.image = reader.result;
        //    console.log(reader.result.data, event.target.files[0])
      }, 2000)
    },



    resetUserForm() {
      this.editingUser = null;
      this.userForm = {
        name: '',
        dob: '',
        designation: '',
        address: '',
        email: '',
        image: null,
        employeeid: '',
        status: '',
        education: '',
        location: '',
        maritalstatus: '',
        gender: '',
        phonenumber: '',
        altphoneno: '',
        officialemail: '',
      };
    },
  },

  async mounted() {

    try {
      const response = await axios.get(`${this.apiUrl}/employees`);
      console.log('API Response:', response.data);
      this.users = response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  },

};
</script>
  
<style scoped>
.employee-page {
  margin-top: 1% !important;
}

.page-head {
  font-size: 32px;
  color: #012970;
}

.emp-btn-row {
  margin: 30px 0px;
}

.emp-btn-row button {
  width: fit-content;
  padding: 8px 25px;
  border-radius: 5px;
  font-size: 18px;
}

.emp-btn-row button:hover {
  box-shadow: 0px 0px 6px #b4b2b2;
}

.filter-btn {
  margin-right: 15px;
  margin-left: 35px;
  background-color: white;
  border: 0.5px solid rgb(204, 199, 199);
}

.adduser-btn {
  margin-right: 20px;
  margin-left: 50px;
  background-color: rgb(0, 119, 255);
  border: 0.5px solid rgb(204, 199, 199);
  color: white;
}

.userlist-table {
  margin-left: 50px;
  background-color: white;
  border: 1px solid #cfcbcb;
  border-radius: 10px;
  max-width: 80%;
}

.userlist-table thead tr {
  background-color: #f9fafb;
  color: #8a92a6;
  border-radius: 10px;

}

.userlist-table thead tr th,
td {
  padding: 15px 5px;
  padding-left: 20px;
  border-radius: 10px;
}

.userlist-table tr td {
  border-top: 0.5px solid rgb(238, 232, 232);
}

.userlist-table tr td::first-letter {
  text-transform: uppercase;
}

.action-btn button {
  border: none;
  background-color: transparent;
}

.edit-btn,
.trash-btn {
  color: grey;
}

.edit-btn:hover {
  color: green;
}

.trash-btn:hover {
  color: red;
}

.add-edit-user {
  border: 0.5px solid rgb(199, 195, 195);
  display: block;
  padding: 20px;
  width: 81.5%;
  margin-left: 35px;
  border-radius: 8px;
  margin-bottom: 3%;
  background-color: white;
}

.add-edit-user button {
  background-color: #0077ff;
  color: white;
  text-align: center;
  border: 0.5px solid grey;
  width: 100%;
  border-radius: 4px;
  padding: 6px;
  margin: 20px 0px;
  font-weight: 600;
}

.add-edit-user input,
.user-select {
  width: 100%;
  margin: 20px 0px;
  border: 0.5px solid rgb(173, 168, 168);
  border-radius: 4px;
  padding: 6px;
}

.add-edit-user input ::placeholder {
  color: black;
}

.more-icon {
  color: grey;
}

.user-select span {
  color: grey;
}

.more-icon:hover {
  color: black;
}

.img-input {
  padding: 3px !important;
}

tbody tr td.user-name {
  text-transform: uppercase;
}

.status-select option {
  padding: 10px;
}
</style>