<template>
 <swiper :navigation="{
		  nextEl: '.swiper-button-nex',
		  prevEl: '.swiper-button-pre',
      
		}" :autoplay="autoplay" :modules="modules" class="mySwiper w-full "  :slides-per-view="view" >
     
      <slot></slot>
     
    </swiper>
</template>
<script lang="ts">
import { Swiper, SwiperSlide,useSwiper } from "swiper/vue";
import { Autoplay,Navigation} from 'swiper'
// Import Swiper styles
import "swiper/css";
import 'swiper/swiper-bundle.css';
import { ref } from 'vue';
export default {
    props:{
        
       
        view:Number
    },
    components: {
    Swiper,
    SwiperSlide,
  },
    setup(){
    let autoplay = ref({delay:4000,disableOnInteraction:false})

        const swiper = useSwiper();
        return {
  swiper,modules:[Autoplay,Navigation],autoplay,
};
    }
}
</script>