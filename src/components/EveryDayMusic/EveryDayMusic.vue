<template >
  <div>
    <div class="everyImage px-[10px] md:p-[60px]" >
        <div class="flex gap-x-2 items-center ">
         <span class="text-white text-lg md:text-4xl font-bold">Nhạc Mới</span>
         <span class="block md:h-14 md:w-14 h-8 w-8 rounded-full text-white design-center bg-purple-primary">
          <v-icon name="fa-play" scale="1.3"/>
         </span>
        </div>
        <div class="mt-10">
            <div class="flex items-center px-[20px] rounded-md py-[10px] group imageContains cursor-pointer border-b-[1px] hover:bg-[rgba(0,0,0,0.2)] border-[rgba(255,255,255,0.2)]" :class="{'bg-[rgba(0,0,0,0.2)]':item._id===songId}" v-for="item in dataObject" :key="item._id">
              <div class="h-12 w-12 overflow-hidden rounded-md relative group ">
                <div @click="getSong(item._id,{img:item.image_music,song:item.src_music,artist:item.name_singer,songName:item.name_music})" class="modal-base opacity-0 group-hover:opacity-100 design-center" v-if="item._id!==songId">
                  <span class="text-white">
                    <v-icon name="fa-play"/>
                  </span>
                </div>
                <div @click="changePlaying" class="modal-base  design-center" v-if="!isPlaying && item._id===songId">
                  <span class="text-white">
                    <v-icon name="fa-play"/>
                  </span>
                </div>
                <div @click="changePlaying" class="modal-base  design-center" v-if="isPlaying && item._id===songId">
                  <span class="text-white">
                   <music-beat/>
                  </span>
                </div>
                <img v-lazy="item.image_music" class="w-full h-full" alt="">
              </div>
              <div class="h-full ml-2 flex justify-between flex-1 items-center">
                <div class="flex flex-col">
                  <span class="font-semibold text-sm text-white">{{ item.name_music }}</span>
                  <span class="text-second font-medium text-[14px]">{{ item.name_singer }}</span>
                </div>
                <div class="group-hover:hidden">
                  <span class="text-second font-medium text-[14px]">{{ item.time_format }}</span>
                </div>
                <div class="hidden group-hover:flex">
                      <span class="text-white h-8 w-8 design-center rounded-full hover:bg-[rgba(255,255,255,0.2)]">
                        <v-icon name="fa-regular-heart" scale="1.2"/>
                      </span>
                      <el-popover
      placement="top-start"
    popper-class="popoverConfig"
      :show-arrow="false"
      trigger="hover"
      :width="300"
      
     
    > 
    <template #reference>

      <span class="text-white  rounded-sm  ">
        <span class="h-8 w-8 design-center hover:bg-[rgba(255,255,255,0.2)] rounded-full transition-base">
          <v-icon name="fa-ellipsis-h" />
        </span>
      </span>
    </template>
    <div class="">
      <div class="flex items-center pb-3 border-b-[1px] border-white">
        <img v-lazy="item.image_music" class="h-12 aspect-square rounded-md" alt="">
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
                     
                </div>  
              </div>
            </div>
        </div>
    </div>
   
  </div>
</template>
<script lang="ts">
import { computed,ref } from 'vue'
import { useStore } from '@/store'
export default {
  setup(){
    const store = useStore()
    let dataObject:any = ref ({})
    
      dataObject = computed(()=>store.state.songs)
    const handleMV = (src:string,visible:boolean)=>{
        store.commit('changeModalMV',{src,visible})
    }
    const songId = computed(()=>store.state.songId)
    const changePlaying =()=>{
      store.commit('changePlaying',!store.state.isPlaying)
    }
    const isPlaying = computed(()=>store.state.isPlaying)
    const getSong = (id:string,{img,song,artist,songName}:{img:string,song:string,artist:string,songName:string})=>{
          store.commit('changeSong',{img,song,artist,songName})
          store.commit('changeSongId',id)
    }
   
    return {dataObject,songId,isPlaying,changePlaying,getSong,handleMV}
  }
}
</script>
<style lang="scss">

</style>