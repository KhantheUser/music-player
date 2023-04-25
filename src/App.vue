<script lang="ts">
import MainContainer from "@/components/MainContainer/MainContainer.vue";
import LeftMenu from "@/components/LeftMenu/LeftMenu.vue";
import MusicPlayer from '@/components/MusicPlayer/MusicPlayer.vue';
import MainContent from '@/components/MainContent/MainContent.vue';
import LayoutMusics from "./components/LayoutMusics/LayoutMusics.vue";
import TopHundred from "./components/TopHundred/TopHundred.vue";
import Top100Detail from "./components/Top100Detail/Top100Detail.vue";
import MVMusic from "./components/MVMusic/MVMusic.vue";
import ModalMV from "./components/ModalMV/ModalMV.vue";
import { useStore } from '@/store';
import { computed } from 'vue';
import EveryDayMusic from "./components/EveryDayMusic/EveryDayMusic.vue";
import axios from 'axios';
export default {
  components: {
    leftmenu: LeftMenu,
    ModalMV,
    MainContainer,
    MusicPlayer,MainContent,
    LayoutMusics,
    TopHundred,Top100Detail,MVMusic
  },
  setup(){
        const store = useStore()
        const visible = computed(()=>store.state.modalMV.visible)
        const backgroundTheme=computed(()=>store.state.backgroundTheme)
        console.log(backgroundTheme)
        const isDeveloped = computed(()=>store.state.isDeveloped)  
        const src = computed(()=>store.state.modalMV.src)
        const getData = async()=>{
      const data = await axios.get('https://api-kaito-music.vercel.app/api/music/new-music/?_limit=100&_page=1')
      store.commit('changeSongs',data.data.data)
    }
    getData()
        const handleVisible = ()=>{
            store.commit('changeModalMV',false) 
        }
        return {handleVisible,visible,src,isDeveloped,backgroundTheme}
    },
};
</script>

<template>
  <div class="app">
    <div class="fixed top-2 left-2 rounded-md text-white w-[300px] bg-purple-primary border-[1px] border-white z-[10] p-2 " :class="{'appear':isDeveloped}" v-if="isDeveloped">
    
      Chức năng đang phát triển <span>
        <v-icon name='bi-info-circle'/>
      </span>

   </div>
    <leftmenu />
    
    <main-content>

     
      
    </main-content>
    <!-- <every-day-music></every-day-music> -->
    <music-player />
    <div class="background "   :style="{backgroundImage:backgroundTheme.backgroundSrc}"></div>
    <modal-m-v />
  </div>
</template>
<style lang="scss">
@keyframes appear {
  from{
    left:-100%
  }to{
    left:2
  }
  
  
}
.appear{
  animation: appear 1s linear forwards
}
@import "@/App.scss";
@import '@/assets/root.scss'
</style>

