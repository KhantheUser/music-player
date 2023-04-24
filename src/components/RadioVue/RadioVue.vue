<template>
  <div class="radio px-[30px] py-[10px] mt-10">
    <h2 class="text-[#f1f1f1] text-xl font-[600] mb-6">Radio Nổi Bật</h2>
    <div class="relative">
      
      <swiper
        :navigation="{
          nextEl: '.swiper-button-nex',
          prevEl: '.swiper-button-pre',
        }"
        :autoplay="{ delay: 4000, disableOnInteraction: false }"
        :modules="modules"
        class="mySwiper w-full"
        :slides-per-view="view"
      >
        <swiper-slide class=" w-full flex justify-center" v-for="item in data" :key="item.id">
          
              <div class="w-2/3  aspect-square relative">
                <img class="h-full w-full rounded-full transition-all ease-linear duration-150 " :src="item.img1" alt="" />
                <div
                  class="absolute bottom-0 right-0 h-12 w-12 overflow-hidden rounded-full block border-[1px] border-[#33254c]"
                >
                  <img :src="item.img2" class="h-full w-full" alt="" />
                </div>
              </div>
          
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/swiper-bundle.css";
import { ref } from 'vue';
export default {
  setup() {
    const view = ref(7)
const getSize = ()=>{
  let screenWidth = window.innerWidth;
if(screenWidth >=1024){
view.value = 7

}
if(screenWidth < 500){
view.value = 1

}else
if(screenWidth < 640){
view.value = 3

}else if(screenWidth < 900){
 view.value = 4
} else if (screenWidth < 1024){
view.value = 5

}
window.addEventListener('resize',()=>{

let screenWidth = window.innerWidth;
if(screenWidth >=1024){
view.value = 7

}
if(screenWidth < 500){
view.value = 1

}else
if(screenWidth < 640){
view.value = 3

}else if(screenWidth < 900){
view.value = 4
} else if (screenWidth < 1024){
view.value = 5

}
})
}
getSize()
    return {
      modules: [Autoplay, Navigation],view
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    data: Object,
  },
};
</script>
<style lang="scss">
.radio {
    .imageContain {
        &:hover .modal {
            opacity: 1;
        }
        &:hover img{
            transform: scale(1.1);
        }
    }
}
</style>