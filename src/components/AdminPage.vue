<template>
    <div class="body">
        <div class="row">
            <TopBar />
        </div>
        <div class="row">
            <div class="col-sm-2">
                <SideBar />
            </div>
            <div class="col-sm-10 main-page">
                <router-view />
            </div>
        </div>
    </div>
</template>
 
<script>
import SideBar from './SideBar.vue';
import TopBar from './TopBar.vue';




export default {
    name: 'AdminPage',
    components: { TopBar, SideBar },
}
</script>
 
<style scoped>
.body {
    background-color: #e7edfa;
}
</style>