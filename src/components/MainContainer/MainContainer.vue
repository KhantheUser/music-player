<template >
  <div class="mainContainer">
   
    
    <carousel-vue/>
    <audio-list />
    <album-vue :isLoading="isLoading" :data="chillArrayFull" name="Chill"/>
    <news-product />
    <chill-happy-polular :isLoading="isLoading" :data="trending" name="Xu hướng" />
    <artist-noi-bat-vue :isLoading="isLoading" :data="popoularArtist" name="Nghệ Sĩ Thịnh Hành"/>
    <vue-per-slide :data="newBXHArray"/>
    <chart-vue/>
    <chill-happy-polular :isLoading="isLoading" :data="favorites" name="Yêu thích" />
    <radio-vue :data="radioArray"/>
    <co-operation :data="coOperationArray"/>
  </div>
</template>
<style lang="scss">
@import "@/components/MainContainer/MainContainer.scss";
</style>
<script lang="ts">
import { defineAsyncComponent, ref } from 'vue';

const CarouselVue = defineAsyncComponent(()=>import('@/components/Carousel/CarouselVue.vue')) ;
const NavBar = defineAsyncComponent(()=>import('@/components/NavBar/NavBar.vue')) ;

const AudioList = defineAsyncComponent(()=>import("@/components/AudioList/AudioList.vue")) ;

const VuePerSlide = defineAsyncComponent(()=>import("@/components/VueperSlide/VuePerSlide.vue")) ;
const NewsProduct = defineAsyncComponent(()=>import("@/components/NewsProduct/NewsProduct.vue")) ;
const ChartVue = defineAsyncComponent(()=>import("@/components/ChartVue/ChatVue.vue")) ;
const RadioVue = defineAsyncComponent(()=>import("@/components/RadioVue/RadioVue.vue")) ;
const ArtistNoiBatVue = defineAsyncComponent(()=>import('@/components/ArtistNoiBat/ArtistNoiBat.vue')) ;
const ChillHappyPolular = defineAsyncComponent(()=>import("@/components/ChillHappyPopular/ChillHappyPopular.vue")) ;
const CoOperation = defineAsyncComponent(()=>import("@/components/CoOperation/CoOperation.vue")) ;
import { chillArrayFull,popoularArtist ,top100,albumHot,newBXHArray,radioArray,coOperationArray} from "@/models";

import axios from 'axios';
import AlbumVue from '../AlbumVue/AlbumVue.vue';

export default {

  components: {
   
    VuePerSlide,
    AudioList,
    AlbumVue,
    NewsProduct,
    ChillHappyPolular,
    ChartVue,
    
    RadioVue,
    CoOperation,
    NavBar,
    ArtistNoiBatVue,
    CarouselVue

   
  },
  setup(){
    const favorites = ref([])
    const trending = ref([])
    const topView = ref([])
    const isLoading = ref<boolean>(false)

    const getData =async ()=>{
      isLoading.value= true
        const requestFavorites = axios.get('https://api-kaito-music.vercel.app/api/music/favorite?_limit=30');
        const requestTrending = axios.get('https://api-kaito-music.vercel.app/api/music/trending?_limit=30')
        const requestTopView = axios.get('https://api-kaito-music.vercel.app/api/music/top-views?_type=billion')
        try{
          const response= await Promise.all([requestFavorites,requestTrending,requestTopView])
          favorites.value = response[0].data.data
          trending.value = response[0].data.data
          topView.value = response[0].data.data
          isLoading.value= false
        }catch(e){
          console.log(e)
        }
    }
    getData()
    return {
      favorites,trending,topView,isLoading
    }
  },
  data() {
    return {
     
      index: 1,
     
     chillArrayFull,
      popoularArtist,
      top100,albumHot,
      newBXHArray,
      radioArray,
      coOperationArray
    };
  },
  methods: {
    changeIndex(index: number) {
      this.index = index;
    },
  },
};
</script>
<style lang="scss"></style>
