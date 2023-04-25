<template>
  <div class="p-[10px] md:px-[30px] mt-8 ">
    <h2 class="text-[#f1f1f1] text-xl font-[600] mb-6 ">BXH Nhạc Mới</h2>
    <div class="relative">
     
      <swiper :navigation="{
		  nextEl: '.swiper-button-nex',
		  prevEl: '.swiper-button-pre',
      
		}" :autoplay="autoplay" :modules="modules" class="mySwiper w-full "  :slides-per-view="view" >
      <swiper-slide  class="md:pr-7" v-for="item in data" :key="item.id">
        <div class=" w-full bg-[#1e1728] p-3 flex rounded-md" :class="{'bg-purple-primary':item.id===songId}" >
            <div class="h-[120px] w-[120px] group relative ">
              
              
              
            
              <div class="relative h-full aspect-square">
                <div v-if="item.id!==songId" @click="getSong(item.id,{song:item.srcSong,img:item.img,songName:item.name,artist:item.artist})"  class="absolute design-center top-0 left-0 w-full group-hover:opacity-100 h-full bg-[rgba(0,0,0,0.4)] opacity-0 transition-base">
                <span class="text-white"    >
                  <v-icon name="fa-play" scale="1.2"/>
                </span>
              </div>
                <div @click="changePlaying" v-if="item.id ===songId && isPlaying"  class="absolute design-center top-0 left-0 w-full  h-full bg-[rgba(0,0,0,0.0)]  transition-base">
                <span class="text-white"    >
                  <music-beat/>
                </span>
              </div>
              <div @click="changePlaying" v-if="item.id ===songId && !isPlaying"  class="absolute design-center top-0 left-0 w-full  h-full bg-[rgba(0,0,0,0.0)]  transition-base">
               
                  <span class="text-white"    >
                  <v-icon name="fa-play" scale="1.2"/>
                </span>
               
              </div>
                <img class="h-full w-full rounded-md" v-lazy="item.img" alt="">
              </div>
            </div>
            <div class="flex flex-col justify-between flex-1 ml-2">
                <div class="">
                    <span class="block font-bold text-lg text-[#f1f1f1]  w-[150px] xl:w-full whitespace-nowrap text-ellipsis overflow-hidden" >{{ item.name }}</span>
                    <span class="block text-sm text-second  whitespace-nowrap text-ellipsis overflow-hidden xl:w-full w-[150px]" :class="{'text-white':item.id===songId}"> {{ item.artist }}</span>
                </div>
                <div class="flex justify-between items-end">
                    <span class="text-4xl block font-bold text-white">#{{ item.id }}</span>
                    <span class="block text-white">
                        {{ item.date }}
                    </span>
                </div>
            </div>
        </div>
      </swiper-slide>
     
    </swiper>
    </div>
  </div>
</template>
<script lang="ts">
import { Swiper, SwiperSlide,useSwiper } from "swiper/vue";
import { Autoplay,Navigation} from 'swiper'
// Import Swiper styles
import "swiper/css";
import 'swiper/swiper-bundle.css';
import { computed, ref } from 'vue';
import {useStore} from '@/store'
export default {
  setup() {
    
    const store = useStore()
    const songId = computed(()=>store.state.songId)
    const isPlaying = computed(()=>store.state.isPlaying)
    const swiper = useSwiper();
    const view = ref(3)
    const getSize = ()=>{
      let screenWidth = window.innerWidth;
    if(screenWidth >=1124){
      view.value = 3

    }else if (screenWidth <700){
      view.value = 1

    }else if (screenWidth<1124){
      view.value = 2

    }
    window.addEventListener('resize',()=>{

      let screenWidth = window.innerWidth;
    if(screenWidth >=1124){
      view.value = 3

    }else if (screenWidth <700){
      view.value = 1

    }else if (screenWidth<1124){
      view.value = 2

    }
  
    })
    }
    getSize()
    let autoplay = ref({delay:4000,disableOnInteraction:false})
    const changePlaying = ()=>{
      store.commit('changePlaying',!store.state.isPlaying)
    }
    const getSong = (id:number,{song,img,songName,artist}:{song:string,img:string,songName:string,artist:string})=>{
          autoplay.value = {delay:400000,disableOnInteraction:false}
          
          store.commit('changeSong',{song,img,songName,artist})
          store.commit('changeSongId',id)
    }
    

return {
  swiper,modules:[Autoplay,Navigation],getSong,autoplay,songId,isPlaying,changePlaying,view
};
  },
  components: {
    Swiper,
    SwiperSlide,
  },
 
  props :{
    data:Object
  }
};
</script>

