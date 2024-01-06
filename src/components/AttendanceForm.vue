<template>
    <div>
        <a href="/" class="back-btn-2"><i class="fa fa-circle-arrow-left"></i> Back</a>
    </div>
    <div class="container">
        <div class="card atd-card">
            <div class="row">
                <div class="col-sm-6 atd-left-col">
                    <div class="d-flex justify-content-center">
                        <div class="camera-box">

                            <div class="d-flex justify-content-center">
                                <i style="height: 25px;  margin-top: 3px; line-height: -8px; " v-if="isCameraOpen"
                                    class="button-img camera-shoot fa-solid fa-camera" @click="capture"></i>
                                <div class="camera-button">
                                    <button type="button" class="button is-rounded cam-button"
                                        style="margin-left: 40%; border: 0px; margin-top: -50px;" @click="toggleCamera">
                                        <span v-if="!isCameraOpen"><i style="height: 0.5px;"
                                                class="button-img fa-solid fa-camera"></i></span>
                                        <span v-else><i style="height: 0.5px;" class="fa-solid fa-square-xmark"></i></span>
                                    </button>
                                </div>
                            </div>

                            <div style="height: 10px">
                                <div v-if="isCameraOpen" class="camera-canvas">
                                    <video ref="camera" :width="canvasWidth" :height="canvasHeight" autoplay></video>
                                    <canvas v-show="false" id="photoTaken" ref="canvas" :width="canvasWidth"
                                        :height="canvasHeight"></canvas>
                                </div>
                            </div>
                            <vue-picture-swipe :items="items"></vue-picture-swipe>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 atd-right-col">
                    <div class="col-sm-7">
                        <img :src="companyLogo" class="img-fluid img-responsive company-logo">
                    </div>
                    <div class="col-sm-7">
                        <h5 style="text-align: left; margin-left: 10px;">User Attendance Status</h5>
                    </div>
                    <br>
                    <form @submit.prevent="submitForm">

                        <div class="col-sm-8 atd-form">
                            <div class="select-dropdown" style="text-align: left; margin-left: 10px;">
                                <select v-model="employeeId" required>

                                    <option value="" disabled selected>Employee ID</option>
                                    <option v-for="option in employeeOptions" :key="option.employeeid"
                                        :value="option.employeeid">
                                        {{ option.employeeid }}
                                    </option>
                                </select>
                            </div>
                            <br>
                            <button type="submit" class="submit-btn" style="margin-left: 10px;">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div v-if="submitted">
            <p style="text-align: center;margin-top: 25px">Submitted!</p>
        </div>
        <div v-if="showErrorMessage" class="error-text">
            Please take a picture before submitting.
        </div>
    </div>
</template>
  
<script>
import VuePictureSwipe from 'vue-picture-swipe';
import axios from 'axios';


export default {
    name: 'AttendancePage',
    components: {
        VuePictureSwipe,
    },
    data() {
        return {
            camImage: './assets/cam-image.png',
            companyLogo: './assets/kavisoftek.png',
            isCameraOpen: false,
            canvasHeight: 300,
            canvasWidth: 290,
            employeeId: '',
            attendanceStatus: 'in',
            submitted: false,
            isChecked: false,
            showErrorMessage: false,
            isBefore11AM: false,
            apiUrl: process.env.VUE_APP_SERVICE_URL,
            items: [],
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
        async submitForm() {
            try {
                if (this.employeeId && this.items.length > 0) {
                    // const currentTime = new Date();
                    // const checkTime = new Date(currentTime);
                    // checkTime.setHours(11, 0, 0, 0);

                    // this.isBefore11AM = currentTime < checkTime;

                    // if (this.isBefore11AM) {
                    //     console.log('Current time is before 11 AM.');
                    // } else {
                    //     console.log('Current time is at or after 11 AM.');
                    // }

                    if (this.items.length > 0) {
                        const dataURL = this.items[0].src;
                        this.uploadPhoto(dataURL, this.isBefore11AM);
                    }

                    this.submitted = true;
                    console.log('Form Submitted!');

                    this.$router.push('/response');
                } else {
                    this.showErrorMessage = true;
                }
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        },


        toggleCamera() {
            if (this.isCameraOpen) {
                this.isCameraOpen = false;
                this.stopCameraStream();
            } else {
                this.isCameraOpen = true;
                this.startCameraStream();
            }
        },
        startCameraStream() {
            const constraints = (window.constraints = {
                audio: false,
                video: true,
            });
            navigator.mediaDevices
                .getUserMedia(constraints)
                .then((stream) => {
                    this.$refs.camera.srcObject = stream;
                })
                .catch((error) => {
                    alert("Browser doesn't support or there is some errors." + error);
                });
        },
        stopCameraStream() {
            let tracks = this.$refs.camera.srcObject.getTracks();
            tracks.forEach((track) => {
                track.stop();
            });
        },
        capture() {
            const FLASH_TIMEOUT = 50;
            let self = this;
            setTimeout(() => {
                const context = self.$refs.canvas.getContext('2d');
                context.drawImage(self.$refs.camera, 0, 0, self.canvasWidth, self.canvasHeight);
                const dataUrl = self.$refs.canvas.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream');
                self.addToPhotoGallery(dataUrl);
                // self.uploadPhoto(dataUrl);
                self.isCameraOpen = false;
                self.stopCameraStream();
            }, FLASH_TIMEOUT);
        },
        addToPhotoGallery(dataURI) {
            this.items.push({
                src: dataURI,
                thumbnail: dataURI,
                w: this.canvasWidth,
                h: this.canvasHeight,
                alt: 'some numbers on a grey background',
            });
        },
        uploadPhoto(dataURL, isBefore11AM) {
            let uniquePictureName = this.generateCapturePhotoName();
            let capturedPhotoFile = this.dataURLtoFile(dataURL, uniquePictureName + '.jpg');
            let formData = new FormData();
            formData.append('file', capturedPhotoFile);
            console.log(dataURL);
            let employeeid = this.employeeId;

            axios.post(`${this.apiUrl}/attendance`, {
                employeeid: employeeid,
                image: dataURL,
                isBefore11AM: isBefore11AM,
            })
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.error('Error uploading photo:', error);
                });
        },

        generateCapturePhotoName() {
            return Math.random().toString(36).substring(2, 15);
        },
        dataURLtoFile(dataURL, filename) {
            let arr = dataURL.split(','),
                mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]),
                n = bstr.length,
                u8arr = new Uint8Array(n);

            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new File([u8arr], filename, { type: mime });
        },
    },
};
</script>
  
<style scoped>
.cam-img {
    padding: 40px;
}

.atd-left-col {
    background-image: linear-gradient(to bottom, #0066b3, #02298a, #021b79);
    border-radius: 5px 0px 0px 5px;
}

.atd-form {
    float: left;
    text-align: left;
}

.atd-form select {
    padding: 10px;
    width: 100%;
    border-radius: 6px;
    border: 0.5px solid #cfc8c8;
    color: black;
    padding-right: 10px;
}

.submit-btn {
    width: 97%;
    border-radius: 6px;
    padding: 8px;
    background-color: #0066b3;
    border: 0.5px solid transparent;
    color: white;
    margin-bottom: 40px;
}

.atd-right-col {
    padding: 140px 60px;
}

.camera-box {
    margin-top: 15%;
}

.atd-card {
    margin-top: 9%;
}

.atd-form select option {
    background-color: rgb(255, 255, 255);
    text-transform: uppercase;
    margin-top: 5px;
    padding: 10px !important;
    font-weight: 600;
}

.atd-form select option:hover {
    background-color: #021b79;
}

.error-text {
    color: red;
    font-weight: 500;
    font-family: poppins;
    text-align: center;
    padding: 20px;
}

.back-btn-2 {
    font-size: 20px;
    text-decoration: none;
    margin-top: -5.4%;
    margin-left: 0.8%;
    position: absolute;
    color: #02298a;
    font-family: poppins;
}
</style>
  