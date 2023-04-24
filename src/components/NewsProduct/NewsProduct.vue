<template>
  <div class="py-[10px] md:px-[30px] px-[10px] mt-10 newsProduct">
    <h2 class="text-[#f1f1f1] text-xl font-[600] mb-4">Mới phát hành</h2>
    <div class="flex">
      <span class="tab-new active" @click="changeTab($event)">TẤT CẢ</span>
      <span class="tab-new" @click="changeTab($event)">VIỆT NAM</span>
      <span class="tab-new" @click="changeTab($event)">QUỐC TẾ</span>
    </div>
    <div class="flex my-5 flex-wrap justify-between" v-if="isLoading">
      <content-loader v-for="item in 9" :key="item"
      width="33%" 
      height="100px"
      

:speed="2"
primaryColor="rgba(255,255,255,0.1)"
secondaryColor="rgba(0,0,0,0.1)"
>

<rect  y="0" rx="3" ry="3" width="100%" height="70"  /> 
<rect  y="75" rx="3" ry="3" width="100%" height="15" /> 



</content-loader>

</div>
<div class="flex mt-5 flex-wrap justify-between h-[500px] sm:h-auto overflow-y-scroll  "  v-if="!isLoading">
  <div :class="{'bg-[#9b4de0]':item._id===songId}" class="new-product-item imageContain cursor-pointer w-full sm:w-[49%] md-900:w-[33%] p-3 bg-[#1e1728] rounded-md hover:bg-[#9b4de0] mb-2" v-for="item in newSongs" :key="item.id">
        <div class="flex items-center relative ">
          <span class="top-[50%] translate-y-[-50%] right-2  z-[2] absolute ">


            <el-popover
      placement="top-start"
    popper-class="popoverConfig"
      :show-arrow="false"
      trigger="hover"
      :width="300"
      
     
    > 
    <template #reference>

      <span class="text-white  rounded-sm  ">
        <span class="h-5 w-5 p-2 hover:bg-[rgba(255,255,255,0.2)] rounded-full transition-base">
          <v-icon name="fa-ellipsis-h" />
        </span>
      </span>
    </template>
    <div class="">
      <div class="flex items-center pb-3 border-b-[1px] border-white">
        <img :src="item.image_music" class="h-12 aspect-square rounded-md" alt="">
        <div class="ml-2 flex-1 flex justify-between items-center">
      <div>
        <tool-tip :content="item.name_music">


<span class="text-white font-bold text-xs">{{ item.name_music }}</span>
</tool-tip>


 <div class="flex">
   <span class="flex items-center">
     <v-icon name="fa-regular-heart"/>
     {{ (item.favorite/1000).toFixed(0) }}K
   </span>
   <span class="flex items-center ml-2">
     <v-icon name="bi-eye"/>
     {{ (item.view/1000000).toFixed(0) }}M

   </span>
 </div>
      </div>
      <span class="block design-center text-white hover:bg-[#2a1b3f] p-2 rounded-md cursor-pointer" @click="handleMV(item.link_mv,true)">
        <v-icon name="bi-play-btn"/>
        MV</span>
        
        </div>
      </div>
      <div class="text-center hover:bg-[#2a1b3f] mt-2 rounded-sm">

        <button class="p-2 text-white font-semibold text-base"> 
          <span>
            <v-icon name="bi-download"/>
          </span>
          Tải xuống</button>
      </div>
    </div>
  </el-popover>
          </span>
          <div class="relative  ">
            <div v-if="isPlaying && item._id===songId" class="z-[2] absolute top-0 left-0 h-full w-full design-center bg-[rgba(0,0,0,0.4)]">
              <span @click="changePlaying">
                        
                        <music-beat v-if="isPlaying && item._id === songId"/>
                    </span>
            </div>
            <div @click="changePlaying" v-if="!isPlaying && item._id===songId" class="z-[2] absolute top-0 left-0 h-full w-full design-center bg-[rgba(0,0,0,0.4)]">
              <span class="text-white"><v-icon name="fa-play" v-if="!isPlaying && item._id === songId"/></span>
            </div>
            <div v-if="item._id !==songId" @click="getSong(item._id,{img:item.image_music,song:item.src_music,artist:item.name_singer,songName:item.name_music})" class="text-white absolute rounded-sm top-0 left-0 opacity-0 transition-base w-full h-full modal opacity bg-[rgba(0,0,0,0.5)] design-center">
            <span>
              <v-icon name="fa-play" />
            </span>
          

          </div>

            <img
              class="h-[62px] aspect-square rounded-sm min-w-[56px]"
              :src="item.image_music"
              alt=""
            />
          </div>
          <div class="ml-2">
           <tool-tip :content="item.name_music">

             <p class="text-[#f1f1f1] text-sm font-semibold">{{sliceString( item.name_music,20) }}</p>

           </tool-tip>
        

            <span  class="text-second  hover:underline cursor-pointer text-sm">{{ item.name_singer }}</span>
            <span class="block text-sm text-second">
              <v-icon name="bi-eye" scale="0.8"/> 
              {{ (item.view/1000000).toFixed(0) }}M
            </span>
          </div>
        </div>
      </div>
</div>
  </div>
</template>
<style lang="scss" scoped>
  .el-id-5500-9{
    background-color: yellow !important ;
    border: none;
  }
.newsProduct {
 .imageContain:hover .modal{
  opacity: 1;
 }
  .tab-new {
    padding: 4px 16px;
    font-size: 12px;
    line-height: 16px;
    color: white;
    background: #170f23;
    border-radius: 16px;
    margin-right: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    cursor: pointer;
    transition: all 0.3s linear;
    &:hover {
      border: 1px solid #9b4de0;
    }
    &.active {
      background: #9b4de0;
    }
  }
}
</style>
<script lang="ts">
import {songArray} from '@/models'
import {sliceString} from '@/customFunction'
import axios from 'axios';
import { computed, ref } from 'vue';
import {useStore} from '@/store'
import MusicBeat from '../customComponents/MusicBeat.vue';
import ToolTip from '../customComponents/ToolTip.vue';
import { ContentLoader } from 'vue-content-loader'

export default {
  components:{MusicBeat,ToolTip,ContentLoader},
  setup() {
    const store = useStore()
    const isPlaying = computed(() => store.state.isPlaying);
    const songId = computed(() => store.state.songId);
    const songList = songArray;
    const tab = 1;
    const isLoading = ref<boolean>(false)
    
    interface Song {
      img:string;
      song:string;
      artist:string;
      songName:string;
    }
    const changePlaying = ()=>{
      store.commit('changePlaying',!store.state.isPlaying);
    }
    const handleMV = (src:string,visible:boolean)=>{
      store.commit('changeModalMV',{src,visible})
    }
    const getSong = (id:string,{img,song,artist,songName}:Song)=>{
      
        store.commit('changeSong',{img,song,artist,songName})
        store.commit('changeSongId',id)
    }
    const newSongs:any = ref([])
    const getData = async()=>{
      isLoading.value = true
      const data =await axios.get('https://api-kaito-music.vercel.app/api/music/new-music?_limit=15')
      newSongs.value = data.data.data
      isLoading.value = false
    }
    getData()
    const changeTab = (e: any) => {
      e.stopPropagation();

      document.querySelector(".tab-new.active")?.classList.remove("active");
      e.target.classList.add("active");
    };

    return { tab, changeTab ,songList,sliceString,newSongs,getSong,isPlaying,songId,changePlaying,isLoading,handleMV};
  },
};
</script>
