<template>
  <div class="leftMenu" :style="{background:backgroundTheme.backMenuColor}">
    <div class="logoContainer mb-4">
      

      <h2 class="design-center font-bold gap-x-4">Khanzp3
        <img class="w-6" src="@/assets/img/logo.webp" alt="">
      </h2>

     
    </div>
   
    <menu-bar title="Menu" :menuObject="menuArray" />
   

  </div>
</template>
<script lang="ts">
import MenuBar from "@/components/MenuBar/MenuBar.vue";
import { menuArray } from "@/models/index";
import {useStore} from '@/store'
import { computed } from 'vue';
export default {
  components: { MenuBar },
  setup(){
    const store = useStore()
    const backgroundTheme= computed(()=>store.state.backgroundTheme)
    
    return {
      menuArray,backgroundTheme
    }
  },
  
  
  
};
</script>
<style lang="scss">
@import "@/components/LeftMenu/LeftMenu.scss";
</style>
