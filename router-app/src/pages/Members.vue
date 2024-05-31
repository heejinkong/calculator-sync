<template>
  <div>
    <h2 class="m-4">악동뮤지션 멤버</h2>
    <div class="container">
      <div class="row">
        <div v-for="members in members" :key="members.id"
          class="col-6 col-xs-6 col-sm-4 col-md-3 col-lg-2">
          <router-link :to="{ name:'members/id', params: { id: members.id } }">
            <img class="img-thumbnail"
              style="width:90px; height:110px;"
              :src="members.photo" :title="members.name" /><br/>
            <h6 class="display-7">{{members.name}}</h6>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import members from '@/members.json'

export default {
  name : "Members",
  setup() {
      return { members };
  }
}
</script>

<style scoped>

</style>