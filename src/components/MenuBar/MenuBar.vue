<template>
  
  <div class="MenuContainer">
    <p class="title">{{ title }}</p>
    <ul>
      <li
        v-for="menuItem in menuObject"
        :class="{ active: menuItem.id === index }"
        :key="menuItem.id"
        @click="changeTab(menuItem.id,menuItem.navigate)"
      >
        <a href="#">
          
          <i>
            <v-icon v-bind:scale="width<550 && width !==0?'1.2':'1'" :name="menuItem.icon" />
          </i>
          <span>{{ menuItem.name }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script  lang="ts">
import { onMounted, ref } from 'vue';
import { useStore } from '@/store';
import { useRouter } from 'vue-router';
export default {
  setup(){
    const store= useStore()
    const router= useRouter()
    let index =ref<number>(1)
    onMounted(()=>{
      resize()
    })
    let width =ref<number>(0)
    const resize=()=>{
      window.addEventListener('resize',()=>{
        width.value = window.innerWidth
      })
    }
    const changeTab = (inde:number,navigate:string)=>{
      if([5,6,7].includes(inde)){
        store.commit('changeIsDeveloped',true)
        setTimeout(()=>{
          store.commit('changeIsDeveloped',false)
        },3000)
      }else {
        index.value = inde
        router.push({
        path:`/${navigate}`
      })
      }
    }
    return {changeTab,width,index}
  },

  


  props: {
    title: String,
    menuObject: Object,
  },
};
</script>
<style lang="scss" scoped>
@import "@/components/MenuBar/MenuBar.scss";
</style>
