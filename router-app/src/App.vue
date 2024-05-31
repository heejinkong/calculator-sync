<template>
  <div class="container">
    <Header />
    <router-view v-slot="{ Component }">
      <Suspense timeout="0">
        <Component :is="Component"></component>
        <template #fallback>
          <Loading />
        </template>
      </Suspense>
    </router-view>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Loading from '@/components/Loading.vue'

export default {
  name : "App",
  components : { Header, Loading },

}
</script>
<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
.container { text-align: center; margin-top:10px; }
.fa { padding: 5px; width: 30px; text-align: center; 
    text-decoration: none; margin: 5px 2px; }
.fa-facebook { background: #3B5998; color: white; }
.fa-youtube { background: #bb0000; color: white; }
.fa-instagram { background: #125688; color: white; }
</style>