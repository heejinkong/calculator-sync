<template>
    <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
        <span class="navbar-brand" style="margin-left: 582px; font-size: 30px;">악동뮤지션</span>
        <button class="navbar-toggler" type="button" @click="changeIsNavShow">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div :class="navClass">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name:'home' }">홈</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name:'about' }">소개</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name:'members' }">멤버</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name:'videos' }">영상</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
    setup() {
        const state = reactive({
            isNavShow: false
        })
        const navClass = computed(() => state.isNavShow 
             ? "collapse navbar-collapse show" : "collapse navbar-collapse")
        const changeIsNavShow = () => {
            state.isNavShow = !state.isNavShow;
        } 
        
        return { state, changeIsNavShow, navClass };
    }
}
</script>

<style>
.nav-item{
    font-size: medium;
    font-weight: bold;
}
</style>