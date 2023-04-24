<template v-slot:nameContainer>
    <div class="mainContent">
       <nav-bar-vue/>
       
        <router-view/>
        <router-view name="EveryMusic"></router-view>
      
    </div>
</template>
<script lang="ts">
import  NavBarVue from '@/components/NavBar/NavBar.vue';

export default {
  components :{NavBarVue}
  
}
</script>

<style lang="scss">
    .mainContent {
        height: 100vh;
    z-index: 1;
    flex-grow: 1;
    overflow-y: scroll;
    transition: all 0.3 cubic-bezier(0.175,0.885,0.32,1.275);
    background: rgba(0,0,0,0.2);
   
    }
</style>