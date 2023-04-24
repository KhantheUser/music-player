<template >
 <div class="px-[10px] md:px-[30px] py-[30px]">
    <swiper-vue :view="view">
        <swiper-slide
          class="flex justify-center px-[10px]"
          v-for="item in songArray"
          :key="item.id"
        >
          <div class=" w-full cursor-pointer aspect-video">
                <div class="h-full w-full overflow-hidden rounded-md relative group" @click="handleNavi(item.navigate)">
                        <div class="modal-base group-hover:opacity-100 opacity-0 design-center">
                            <span class="h-12 w-12 rounded-full design-center border-play" >
                                <v-icon name="fa-play" scale="1.5"/>
                            </span>
                        </div>
                    <img :src="item.image" class="h-full w-full" alt="">
                </div>
          </div>
        </swiper-slide>
      </swiper-vue>
 </div>
</template>
<script lang="ts">
import SwiperVue from '../customComponents/Swiper.vue';
import { SwiperSlide } from "swiper/vue";
import { useRouter } from 'vue-router';
import { ref } from 'vue';
export default {
    components:{SwiperVue,SwiperSlide},
    setup(){
        interface SongType {
            id:number;
            image:string;
            navigate? :string|undefined
        }
        let view = ref<number>(3)
        const router = useRouter()
        const getSize = ()=>{
            let screenWidth = window.innerWidth;
            if(screenWidth>=1024){
                view.value=3
            }
            if(screenWidth<500){
                view.value=1
            }else if (screenWidth<1024){
                view.value = 2
            }
            window.addEventListener('resize',()=>{
                let screenWidth = window.innerWidth;
            if(screenWidth>=1024){
                view.value=3
            }
            if(screenWidth<500){
                view.value=1
            }else if (screenWidth<1024){
                view.value = 2
            }
            })
        }
        getSize()
        const songArray:SongType[] = [
            {
                id:1,
                image:'https://i.ytimg.com/vi/AeMdaLxqOx8/maxresdefault.jpg',
                navigate:'/music-everyday?name=top100'
            },
            {
                id:2,
                image:'https://th.bing.com/th/id/OIP.UOHny1vBNraFk5FBT56iWQHaEK?pid=ImgDet&rs=1',
                navigate:'/music-everyday?name=kpop'

            },
            {
                id:3,
                image:'https://allaboutedmblog.files.wordpress.com/2016/12/ultra-music-festival.jpg',
                navigate:'/music-everyday?name=top100'

            },
            {
                id:4,
                image:'https://i.ytimg.com/vi/x1eVFKUqfvg/maxresdefault.jpg',
                navigate:'/music-everyday?name=top100'

            },
            
        ]
        const handleNavi = (link:any)=>{
            router.push({
                path: link
            })
        }
        return {
            songArray,handleNavi,view
        }

    }
}
</script>