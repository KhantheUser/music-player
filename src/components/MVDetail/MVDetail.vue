<template>
    <loading-vue v-if="isLoading"/>
    <div class="py-[40px]  px-[10px] md:px-[30px] h-full mvdetail " v-if="!isLoading">
        <div class="">
  <div class="design-center ">
    <video controls class="w-full  overflow-hidden lg:w-[60%] aspect-video" :src="myData.streaming?.mp4[quality]"></video>
   
  </div>
  <div class="flex w-full mt-3 justify-center">
    
    <span  v-for="(key,value) in myData?.streaming?.mp4" :key="value" >
           <span class="block p-2 border-[1px] hover:border-white border-[#7a0a96] transition-all ease-linear duration-150 cursor-pointer text-[#7a0a96] hover:text-white font-semibold mx-2" @click="changeQuality(value)" v-if="key!==''">
            {{ value }}
           </span>
    </span>
  </div>
  <div>
    <div class="relative mt-5">
      <span class="hover:bg-[rgba(255,255,255,0.7)] swiper-button-pre  transition-all ease-linear duration-150 cursor-pointer items-center justify-center absolute top-[50%] translate-y-[-50%] -left-3 z-10 h-10 w-10 flex rounded-full  bg-white">
        <v-icon name="md-navigatebefore" />
      </span>
      <span    class="swiper-button-nex hover:bg-[rgba(255,255,255,0.7)]  transition-all ease-linear duration-150 cursor-pointer items-center justify-center absolute top-[50%] translate-y-[-50%] -right-3 z-10 h-10 w-10 flex rounded-full  bg-white">
        <v-icon name="md-navigatenext" />
      </span>
      <swiper  :autoplay="{delay:4000,disableOnInteraction:false}" :modules="modules" class="mySwiper w-full "  :slides-per-view="view" >
      <swiper-slide  class="pr-2" v-for="item in myData.recommends" :key="item.id">
        <div class="    p-3 rounded-md" >
            <div class="relative imageContain" @click="handleChangeMV(item.encodeId)">
                <div class="modal rounded-md opacity-0 transition-all duration-150 ease-linear cursor-pointer absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)]">
                    <a  class="glightbox_video"> 
                <svg width="70" height="70" viewBox="0 0 131 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="inner-circle" d="M65 21C40.1488 21 20 41.1488 20 66C20 90.8512 40.1488 111 65 111C89.8512 111 110 90.8512 110 66C110 41.1488 89.8512 21 65 21Z" fill="white"></path>
                    <circle class="outer_circle" cx="65.5" cy="65.5" r="64" stroke="white"></circle>
                    <path class="play" fill-rule="evenodd" clip-rule="evenodd" d="M60 76V57L77 66.7774L60 76Z" fill="#34224f"></path>
                </svg>
                </a>
                </div>
                <img class="h-full w-full rounded-md" :src="item.thumbnailM" alt="">
            </div>
            
        </div>
      </swiper-slide>
     
    </swiper>
    </div>
  </div>
  <div class="mt-6">
      <h2 class="text-white font-bold text-xl"> Bài hát : {{' '+ myData.title }}</h2>
      <span class="block font-semibold mt-3 text-white">Ca sĩ : {{ myData.artistsNames }}</span>
      <span class="block font-semibold mt-3 text-white">Ngày phát hành : {{ dayjs(myData.createdAt).format('DD/MM/YYYY') }}</span>
      <span class="block font-semibold mt-3 text-white">Thời lượng : {{ convertTime(myData.duration) }}</span>
        
      <div class="mt-10">
        <h2 class="text-white font-bold text-xl mb-3">Lời bài hát</h2>
        <div v-if="myData.lyrics">
            <p class="!text-white my-2" v-for="item in myData?.lyrics[0]?.content.split('<br>')" :key="item">
            {{ item }}
            </p>
        </div>
      </div>
  </div>
  <div class="h-40"></div>
        </div>
        
    </div>
</template>
<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay,Navigation} from 'swiper'
// Import Swiper styles
import "swiper/css";
import 'swiper/swiper-bundle.css';
import axios from 'axios';
import { useRoute,useRouter } from 'vue-router';
import { computed, ref, watch } from 'vue';
import dayjs from 'dayjs';
import {convertTime} from '@/customFunction'
import LoadingVue from '../customComponents/LoadingVue.vue';
export default {
    components: {
      LoadingVue,Swiper,
    SwiperSlide,
    },
    setup(){
        const route = useRoute()
        const router = useRouter()
        const view = ref<number>(4)
        const getSize = ()=>{
          let screenWidth = window.innerWidth
          if(screenWidth>1024){
            view.value=4;
          }
          
          if(screenWidth<640){
            view.value=2;

          }else if (screenWidth<=1024){
            view.value=3;

          }
          window.addEventListener('resize',()=>{
            let screenWidth = window.innerWidth
            if(screenWidth>1024){
              view.value=4;
            }
            
            if(screenWidth<640){
              view.value=2;
  
            }else if (screenWidth<=1024){
              view.value=3;
  
            }
          })
        }
        getSize()
        const handleChangeMV =(encodeId:string)=>{
            
            router.push({
                path:'/mv-music/detail',
                query:{
                    id:encodeId
                }
            })
        }
        let isLoading = ref<boolean>(true)
        let myData = ref<any>({})
        let quality = ref<number|string>('360p')
        const lyricsComputed = computed(()=>myData.lyrics[0].content.split('<br>'))
        console.log(lyricsComputed)
        const changeQuality =(qualityy:number)=>{
            quality.value = qualityy
        }
        const getData = async ()=>{
            isLoading.value = true
        try{
          const {id} = route.query

            const data =await axios.get(`https://server-tau-six.vercel.app/api/video?id=${id}`)
            console.log(data.data.data)
            const {artistsNames,createdAt,duration,title,recommends,streaming,lyrics} = data.data.data
            myData.value = {artistsNames,createdAt,duration,title,recommends,streaming,lyrics}
            
            isLoading.value = false
            console.log(myData.value)
        }catch(e){
          console.log(e)
          console.log('ádasd')
        }
        }
        
        getData()
        watch(()=>route.query.id,getData)
        return {
            myData,dayjs,convertTime,lyricsComputed,isLoading,changeQuality,quality,modules:[Autoplay,Navigation],handleChangeMV,view
        }
    }
}

</script>
<style lang="scss">
.mvdetail{
    .imageContain{
        &:hover .modal{
            opacity: 1;
        }
    }
}
</style>