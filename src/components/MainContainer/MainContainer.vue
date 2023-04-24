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
import CarouselVue from '../Carousel/CarouselVue.vue';
import NavBar from '@/components/NavBar/NavBar.vue';
import AudioList from "@/components/AudioList/AudioList.vue";

import ChartVue from "@/components/ChartVue/ChatVue.vue";


import NewsProduct from "@/components/NewsProduct/NewsProduct.vue";
import ChillHappyPolular from "@/components/ChillHappyPopular/ChillHappyPopular.vue";
import { chillArrayFull,popoularArtist ,top100,albumHot,newBXHArray,radioArray,coOperationArray} from "@/models";
import VuePerSlide from "../VueperSlide/VuePerSlide.vue";
import RadioVue from "../RadioVue/RadioVue.vue";
import CoOperation from "../CoOperation/CoOperation.vue";

import axios from 'axios';
import { ref } from 'vue';
import  ArtistNoiBatVue from '../ArtistNoiBat/ArtistNoiBat.vue';
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
