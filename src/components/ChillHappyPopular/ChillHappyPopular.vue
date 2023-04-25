<template>
  <div class="chillHappyPopular p-[10px] md:px-[30px]">
    <h2 class="text-[#f1f1f1] text-xl font-[600] mb-4">{{ name }}</h2>
    <div class="cardContainer w-full">
      <swiper
        
        :autoplay="autoplay"
        :modules="modules"
        class="mySwiper w-full"
        :slides-per-view="view"
      >
     <div>
      
     </div>
    <div class="flex gap-x-5" v-if="isLoading">
      <content-loader v-for="item in 5" :key="item"
      width="20%" 
      height="300px"

:speed="2"
primaryColor="rgba(255,255,255,0.1)"
secondaryColor="rgba(0,0,0,0.1)"
>

<rect  y="0" rx="3" ry="3" width="100%" height="200"  /> 
<rect  y="212" rx="3" ry="3" width="100%" height="15" /> 
<rect  y="237" rx="3" ry="3" width="100%" height="60" /> 


</content-loader>
    </div>
        <swiper-slide  class="w-full flex justify-center " v-for="item in data" :key="item.id">
          <div class="card w-full relative shadow-base rounded-md" :key="item.id" v-if="!isLoading">
            <span class="absolute top-2 text-xs font-semibold right-2 rounded-md text-[#dfdcdc] z-[2] p-1 bg-[rgba(0,0,0,0.7)]">
                {{ item.time_format }}
                </span>
            <div class="bg-[#1e1728] rounded-md">
              <div
                class="h-48 w-full rounded-md imageContainer overflow-hidden group"
                :id="item._id"
              >
              
              
                <span class="absolute top-1 left-1 text-[#dfdcdc] ">
                  <v-icon name="bi-disc-fill" />
                </span>

                <div
                  :class="{'opacity-100':isPlaying && item._id === songId}"
                  class=" opacity-0 text-white cursor-pointer  rounded-md design-center absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)] z-[2] group-hover:opacity-100"
                >
                  <div class="flex items-center ">
                    <span class="h-10 w-10 rounded-full hover:bg-[rgba(255,255,255,0.2)] design-center hover:text-[#c94b4b] drop-heart">
                      <v-icon scale="1.2" name="fa-regular-heart" />
                    </span>
                    <span class="border-play mx-3"
                    v-if="  item._id !== songId"
                      @click="
                        getSong(item._id, {
                          img: item.image_music,
                          song: item.src_music,
                          artist: item.name_singer,
                          songName: item.name_music,
                        })
                      "
                    >
                      <v-icon scale="1.2" name="fa-play" />
                    </span>
                    <span @click="changePlay">
                        <span v-if="!isPlaying && item._id === songId" class="border-play mx-3"><v-icon name="fa-play" scale="1.2"/>
                        </span>
                      </span>
                      <span @click="changePlay" class="border-play mx-3" v-if="isPlaying && item._id === songId">

                        <music-beat />
                      </span>
                    <el-popover
      placement="top-start"
    popper-class="popoverConfig"
      :show-arrow="false"
      trigger="hover"
      :width="250"
            
      
     
    > 
                    <template #reference>


                      <span class="h-10  w-10 rounded-full hover:bg-[rgba(255,255,255,0.2)] design-center">
                        <v-icon scale="1.2" name="fa-ellipsis-h" />
                      </span>
                    </template>
                    <div class="flex flex-col items-start text-base gap-y-4 text-white ">
                     <span class="py-2 px-2  cursor-pointer hover:bg-[#9b4de0] block w-full rounded-md transition-base">
                      <v-icon name="bi-download"/> Tải xuống
                     </span>
                     <span  class="py-2 px-2 cursor-pointer hover:bg-[#9b4de0] block w-full rounded-md transition-base" @click="handleMV(item.link_mv,true)">
                      <v-icon name="bi-play-btn"/> Xem MV
                     </span>
                     <span  class="py-2 px-2 cursor-pointer hover:bg-[#9b4de0] block w-full rounded-md transition-base">
                      <v-icon name="co-playlist-add"/> Thêm vào playlist
                     </span>
                    </div>
                  </el-popover>
                  </div>
                </div>
                

                  <img
                  v-if="!isLoading"
                    class="w-full h-full rounded-md "
                    v-lazy="item.image_music"
                    alt=""
                  />
               
              </div>

              <div class="p-2">
                <el-tooltip
            class="box-item"
            effect="dark"
            :content="item.name_music"
            placement="top-start"
          >
           
          <h2 class="text-white font-semibold whitespace-nowrap text-ellipsis overflow-hidden">
            {{ sliceString(item.name_music, 20) }}
          </h2>
          </el-tooltip>
                <div class="flex flex-col">
                  <el-tooltip
            class="box-item"
            effect="dark"
            :content="item.name_singer"
            placement="top-start"
          >
           
          
                  <span class="block text-purple-primary whitespace-nowrap text-ellipsis overflow-hidden">{{
                    sliceString(item.name_singer, 20)
                  }}</span>
          </el-tooltip>
                 
                  <span class="text-[#a4a3bf] text-xs">
                    <v-icon name="bi-eye" /> {{ (item.view/1000000).toFixed(0) }}M views
                  </span>
                  <span class="text-[#a4a3bf] text-xs">
                    <v-icon name="fa-regular-heart" /> {{ (item.favorite/1000).toFixed(0) }} likes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<style lang="scss">
.chillHappyPopular {
  
  margin-top: 30px;
  .cardContainer {
    .card {
      width: 90%;

      padding-left: 0;
      .imageContainer {
        img {
          transition: all 0.2s linear;
        }
        position: relative;
       
        &:hover img {
          transform: scale(1.2);
          border-radius: 6px;
        }
      }
    }
  }
}
</style>
<script lang="ts">
import { ContentLoader } from 'vue-content-loader'
import { sliceString } from "@/customFunction";
const MusicBeat = defineAsyncComponent(()=>import('../customComponents/MusicBeat.vue'))

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/swiper-bundle.css";
import { useStore } from "@/store";
import { computed, defineAsyncComponent, ref } from "vue";
export default {
  props: {
    data: Object,
    name: String,
    isLoading:Boolean
  },
  components: {
    Swiper,
    SwiperSlide,
    MusicBeat,
    ContentLoader
  },
  setup() {
    const store = useStore();
    const isPlaying = computed(() => store.state.isPlaying);
    const view = ref(5)
    const getSize = ()=>{
      let screenWidth = window.innerWidth;
    if(screenWidth >=1280){
      view.value = 5

    }
    if(screenWidth < 500){
view.value = 1

}else
    if(screenWidth < 640){
      view.value = 2

    }else if(screenWidth < 900){
       view.value = 3
    } else if (screenWidth < 1280){
      view.value = 4

    }
    window.addEventListener('resize',()=>{

      let screenWidth = window.innerWidth;

if(screenWidth >=1280){
view.value = 5

}
if(screenWidth < 500){
view.value = 1

}else
if(screenWidth < 640){
view.value = 2

}else if(screenWidth < 900){
 view.value = 3
} else if (screenWidth < 1280){
view.value = 4

}
})
    }
    getSize()
   
    
    const songId = computed(() => store.state.songId);
    const handleMV = (link:string,visible:boolean)=>{
      store.commit('changeModalMV',{
          src:link,
          visible
      })
    }
    const changePlay = ()=>{
        store.commit('changePlaying',!store.state.isPlaying)
    }
    const modules: any = ref([Autoplay, Navigation]);
    
    const autoplay: any = ref({ delay: 5000, disableOnInteraction: false });
    const getSong = (
      id: string,
      {
        img,
        song,
        artist,
        songName,
      }: { img: string; song: string; artist: string; songName: string }
    ) => {
      
      autoplay.value = { delay: 50000, disableOnInteraction: false };
   
      const element = document.getElementById(id);
      element?.style.removeProperty("hover");
      store.commit("changeSong", { img, song, artist, songName });
      store.commit('changeSongId',id)
    };
    return {
      sliceString,
      modules,
      getSong,
      autoplay,
      songId,
      isPlaying,
      changePlay,
      handleMV,
      view
    };
  },
};
</script>
