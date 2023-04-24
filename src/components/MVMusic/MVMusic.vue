<template>
 
 <div class="flex flex-wrap p-[40px] justify-between" v-if="isLoading1">
  <content-loader v-for="item in 12" :key="item"
      width="23%" 
      height="30vh"
      
      

:speed="2"
primaryColor="rgba(255,255,255,0.1)"
secondaryColor="rgba(0,0,0,0.1)"
>


  <rect  y="0" rx="3" ry="3" width="100%" height="50%" class="aspect-video"  /> 


<rect  y="55%" rx="3" ry="3" width="100%" height="20" /> 



</content-loader>

 </div>
  <div
  v-if="!isLoading1"
    class="py-[15px] xl:py-[40px] px-[10px] xl:px-[40px] h-full w-full mvMusic overflow-y-scroll "
    id=""
    @scroll="handleScroll"
  >
    <div class="">
      <div class="cardContain mvContain h-full" >
        <div class="card w-full sm-500:w-1/2 md:w-1/3 lg:w-1/4 mt-10 cursor-pointer"  v-for="item in items" :key="item.encodeId">
          <div class="w-full bg-purple-secondary rounded-md">
            <div class="w-full aspect-video  relative imageContain overflow-hidden rounded-md" @click="changeMV(item.encodeId)">
              <div
                class="modal transition-all z-10 duration-200 ease-linear
                 absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.5)] opacity-0"
              >
              <a  class="glightbox_video"> 
                <svg width="70" height="70" viewBox="0 0 131 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="inner-circle" d="M65 21C40.1488 21 20 41.1488 20 66C20 90.8512 40.1488 111 65 111C89.8512 111 110 90.8512 110 66C110 41.1488 89.8512 21 65 21Z" fill="white"></path>
                    <circle class="outer_circle" cx="65.5" cy="65.5" r="64" stroke="white"></circle>
                    <path class="play" fill-rule="evenodd" clip-rule="evenodd" d="M60 76V57L77 66.7774L60 76Z" fill="#34224f"></path>
                </svg>
                </a>
            </div>

              <img
                class="w-full h-full rounded-md transition-all duration-200 ease-linear"
                :src="item.thumbnail"
                alt=""
              />
            </div>
            <div class="mt-2 p-2">
             <tool-tip :content="item.title">
              <span class="block text-sm font-semibold text-white text-ellipsis overflow-hidden whitespace-nowrap">{{
                item.title
              }}</span>
             </tool-tip>
              <span class="block text-sm font-semibold text-second text-ellipsis overflow-hidden whitespace-nowrap" >
              
                <span @click="handleArtist(item.artist.alias)" class="hover:underline" v-for="(ite,index) in item.artists" :key="ite.encodeId">
                      {{ ite.name }} <span v-if="index < item.artists.length-1"> , </span>
                </span>
            </span>
            </div>
          </div>
        </div>
        <div class="flex justify-center w-full">
          <loading-vue-2 v-if="isLoading2"/>
        </div>
      </div>
    </div>
    <div class="h-36 loadingg"></div>
  </div>
</template>
<style lang="scss">
.glightbox_video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  }

.outer_circle {
  stroke-width: 3;
  stroke-dasharray: 410; 
   stroke-dashoffset: 0;
  stroke-linecap: square;
  transition: all .4s ease-out;
}

.glightbox_video:hover .outer_circle {
stroke-dashoffset:410;
  transition: stroke .7s .4s ease-out, stroke-dashoffset .4s ease-out
}

.glightbox_video:hover 
.inner-circle {
  fill: white;
  transition:fill .4s .3s ease-out;
  
}

.glightbox_video:hover
.play{
    fill: #34224f;
  transition:fill .4s .3s ease-out;
}
.mvMusic {
  .cardContain {
    display: flex;
    flex-wrap: wrap;
    .card {
      
      padding: 0 10px;
      .imageContain{
        &:hover{
            .modal{
                opacity: 1;
            }
        }
        &:hover img{
            transform: scale(1.1);
        }
      }
    }
  }
}
</style>
<script lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";
import LoadingVue2 from "../customComponents/LoadingVue2.vue";
import LoadingVue from "../customComponents/LoadingVue.vue";
import {useRouter} from 'vue-router'
import { ContentLoader } from 'vue-content-loader'
import ToolTip from '../customComponents/ToolTip.vue';
import { sliceString } from "@/customFunction";

export default {
  components: { LoadingVue2, LoadingVue ,ContentLoader, ToolTip},
  setup() {
    const router = useRouter()
    const handleArtist=(artist:string)=>{
      router.push({
        path:'/artist-detail',
        query:{
          name:artist
        }
      })
    }
    const changeMV =(encodeId :string)=>{
      router.push({
        path : '/mv-music/detail',
        query :{
          id :encodeId
        }
      })
    }
    

    let pageCurrent = ref<number>(1);
    let items: any = ref([]);
    let isLoading1 = ref<boolean>(false);
    let isLoading2 = ref<boolean>(false);
    const getMV = async () => {
      if (pageCurrent.value === 1) {
        isLoading1.value = true;
        isLoading2.value=false
      } else {
        isLoading2.value = true;
      }
      
      const data = await axios.get(
        `https://server-tau-six.vercel.app/api/listmv?id=IWZ9Z08I&page=${pageCurrent.value}&count=20`
      );
      items.value = items.value.concat(data.data.data.items);
      pageCurrent.value += 1;

      isLoading2.value = false;
      isLoading1.value = false;
    };
    const handleScroll = () => {
      const htmlElement = document.querySelector(".mvContain") as HTMLElement;
      const scrollHeight = htmlElement.scrollHeight;
      const scrollTop = htmlElement.scrollTop;

      const clientHeight = htmlElement.clientHeight;

      if (clientHeight + scrollTop + 200 >= scrollHeight && !isLoading2.value) {
        getMV();
      }
    };
    onMounted(() => {
      getMV();
    });
    return {
      pageCurrent,
      getMV,
      items,
      isLoading1,
      isLoading2,
      handleScroll,
      changeMV,
      handleArtist,sliceString
    };
  },
};
</script>
