<template>
  <loading-vue v-if="isLoading" />
  <div class="artistDetail" v-if="!isLoading">
    <el-dialog v-model="dialogVisible" title="Thông báo" width="" class="md:w-1/3 w-full" draggable>
      <div>
        <span class="block text-white"
          >Bài hát không tải được cho quốc gia của bạn</span
        >
        <span class="text-lg text-[#8e1c87] hover:underline cursor-pointer"
          >Đăng ký VIP</span
        >
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button
            type="primary"
            class="hover:border-white hover:bg-[#33254c] border-[#8e1c87]"
            @click="dialogVisible = false"
          >
            OK
          </el-button>
        </span>
      </template>
    </el-dialog>
    <header
      class="from-[rgba(53,30,57,0.6)] to-[#342c46] bg-gradient-to-tr h-[300px] p-10"
      :style="{
        background: `linear-gradient(to right,rgba(53,30,57,0.8),rgba(255,255,255,0.2)) ,url(${artist?.cover})`,
      }"
    >
      <div class="flex items-end h-full">
        <div class="flex flex-col sm:flex-row">
          <div
            class="w-[144px] aspect-square rounded-full overflow-hidden border-white border-[1px]"
          >
            <img class="w-full h-full" v-lazy="artist.thumbnail" alt="" />
          </div>
          <div class="sm:ml-8  flex flex-col justify-evenly">
            <h2 class="font-bold md:text-5xl text-lg text-white flex items-center">
              {{ artist.named
              }}<span><img class="h-10 w-10" v-lazy="check" alt="" /></span>
            </h2>
            <div class="flex sm:items-center sm:flex-row flex-col ">
              <span class="text-white font-semibold"
                >{{ artist.follow }} người quan tâm</span
              >
              <div
                class="flex justify-center sm:mt-0 mt-2  text-white p-1 px-3 border-[1px] sm:ml-3 rounded-2xl border-white hover:border-[#8e1c87] cursor-pointer hover:text-[#8e1c87] transition-base"
              >
                <span>
                  <v-icon name="co-user-plus" />
                </span>

                Quan tâm
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main class="p-[10px] md:p-[30px]">
      <div class="">
        <div class="">
          <h2 class="font-bold text-white text-xl mb-4">Tiểu sử</h2>
          <p
            v-for="item in artist.biography?.split('<br>')"
            :key="item"
            class="text-white my-2"
          >
            {{ item }}
          </p>
          <p class="text-white my-2">{{ artist.sortBiography }}</p>
        </div>
        <div class="flex md:flex-row flex-col mt-10">
          <div :class="baiHatNoiBat.topAlbum ? 'md:w-1/3 w-full ' : 'hidden'">
            <h2 class="font-bold text-white text-xl mb-5">
              {{ baiHatNoiBat.title }}
            </h2>
            <div
              class="w-full flex rounded-md p-3 bg-gradient-to-tr from-[#616678] to-[#373042]"
            >
              <div class="w-[150px] aspect-square overflow-hidden">
                <img
                  v-lazy="baiHatNoiBat?.topAlbum?.thumbnail"
                  class="h-full w-full rounded-md"
                  alt=""
                />
              </div>
              <div class="ml-3">
                <span
                  class="block text-xs mt-2 mb-3 text-[#9f9ca5] font-semibold"
                >
                  {{ baiHatNoiBat?.topAlbum?.textType }}
                </span>
                <h2 class="text-base font-bold mb-1 text-white">
                  {{ baiHatNoiBat?.topAlbum?.title }}
                </h2>
                <span class="block text-xs text-[#9f9ca5] font-semibold mb-3">{{
                  baiHatNoiBat?.topAlbum?.artistsNames
                }}</span>
                <span class="block text-xs text-[#9f9ca5] font-semibold">{{
                  baiHatNoiBat?.topAlbum?.releaseDate
                }}</span>
              </div>
            </div>
          </div>

          <div :class="baiHatNoiBat.topAlbum ? 'w-full md:w-2/3 md:pl-7 mt-4 md:mt-0' : 'w-full'">
            <h2 class="font-bold text-white text-xl mb-4">
              {{ baiHatNoiBat.title }}
            </h2>
            <div class="flex flex-wrap ">
              <div
               :class="{'bg-purple-primary':item.encodeId ===songId}"
                v-for="item in baiHatNoiBat.items?.slice(0, 6)"
                :key="item.title"
                class="mb-2 w-full md:w-1/2 transition-base group p-2 hover:bg-purple-primary rounded-md"
              >
                <div class="flex">
                 <div class="h-10 aspect-square rounded-md overflow-hidden relative group">
                  <div @click="getSong(item.encodeId)" class="modal-base design-center opacity-0 group-hover:opacity-100" v-if="item.encodeId !==songId">
                    <span class="text-white">
                      <v-icon name="fa-play"/>
                    </span>
                  </div>
                  <div @click="changePlaying" class="modal-base design-center " v-if="!isPlaying && item.encodeId === songId">
                    <span class="text-white">
                      <v-icon name="fa-play"/>
                    </span>
                  </div>
                  <div @click="changePlaying" class="modal-base design-center " v-if="isPlaying && item.encodeId === songId">
                    <music-beat/>
                  </div>
                  <img
                    v-lazy="item.thumbnail"
                    class="h-full w-full "
                    alt=""
                  />
                 </div>
                  <div class="ml-2 flex flex-col justify-evenly">
                    <tool-tip :content="item.title">
                      <p class="text-xs font-bold text-white">
                        {{ sliceString(item.title, 30) }}
                      </p>
                    </tool-tip>
                    <span
                      class="block font-semibold group-hover:text-white text-second text-xs"
                      >
                      <!-- {{ item.artistsNames }} -->
                      <span @click="changeArtist(ite.alias)" v-for="(ite,index) in item.artists" :key="ite.encodeId"  class="hover:underline">
                          {{ ite.name }} 
                          <span  v-if="index < item.artists.length -1"> , </span>
                      </span>
                      
                      </span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5" v-for="data in sectionPlaylist" :key="data">
          <h2 class="font-bold text-white text-xl mb-4">{{ data.title }}</h2>
          <swiper
           
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :modules="modules"
            class="mySwiper w-full"
            :slides-per-view="view"
          >
            <swiper-slide
              class="px-[10px] md:px-[15px] flex justify-center"
              v-for="item in data.items"
              :key="item.encodeId"
            >
              <div class="mb-8 bg-purple-secondary rounded-md shadow-base w-[100%]">
                <div
                  class="w-full aspect-square bg-red-300 relative rounded-lg"
                >
                  <div
                    class="h-full w-full absolute top-0 left-0 rounded-lg cursor-pointer overflow-hidden imageContain"
                  >
                    <div
                      class="modal z-[2] flex items-center absolute top-0 left-0 w-full opacity-0 transition-all duration-150 ease-linear h-full bg-[rgba(0,0,0,0.4)] rounded-lg"
                    >
                      <div class="flex w-full justify-evenly items-center">
                        <span
                          class="text-white h-8 w-8 hover:bg-[rgba(255,255,255,0.1)] transition-all duration-150 ease-linear flex items-center justify-center rounded-full"
                        >
                          <v-icon name="fa-regular-heart" />
                        </span>
                        <span
                          class="h-10 w-10 flex items-center justify-center border-[1px] text-white border-white rounded-full"
                        >
                          <v-icon name="fa-play" />
                        </span>
                        <span
                          class="text-white h-8 w-8 hover:bg-[rgba(255,255,255,0.1)] transition-all duration-150 ease-linear flex items-center justify-center rounded-full"
                        >
                          <v-icon name="fa-ellipsis-h" />
                        </span>
                      </div>
                    </div>
                    <img
                      class="transition-all ease-linear duration-200 h-full w-full rounded-lg"
                      v-lazy="item?.thumbnail"
                      alt=""
                    />
                  </div>
                </div>
                <div class="p-2">
                  <tool-tip :content="item.title">
                    <span class="my-2 block font-semibold text-white text-xs">{{
                      sliceString(item.title, 20)
                    }}</span>
                  </tool-tip>
                  <span class="my-2 font-semibold block text-xs text-second">{{
                    item.releaseDate
                  }}</span>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>

        <div class="mt-8 mv" v-if="sectionVideo">
          <h2 class="font-bold text-white text-xl mb-4">MV</h2>
          <swiper
            
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :modules="modules"
            class="mySwiper w-full"
            :slides-per-view="viewMV"
          >
            <swiper-slide
              class="px-[10px] md:px-[15px] flex justify-center"
              v-for="item in sectionVideo?.items"
              :key="item?.encodeId"
            >
              <div
                class="shadow-base mb-8  cursor-pointer bg-purple-secondary rounded-md w-full  "
              >
                <div
                  class="aspect-video overflow-hidden rounded-md imageContain relative"
                >
                  <div
                    class="flex justify-center items-center rounded-md modal z-[2] absolute top-0 w-full left-0 h-full opacity-0 bg-[rgba(0,0,0,0.6)] transition-all ease-linear duration-150"
                  >
                    <span @click="changeMV(item.encodeId)"
                      class="flex justify-center items-center h-10 w-10 text-white border-[1px] border-white rounded-full"
                    >
                      <v-icon name="fa-play" />
                    </span>
                  </div>
                  <img
                    class="transition-all duration-200 ease-linear h-full w-full rounded-md"
                  v-lazy="item?.thumbnailM"
                    alt=""
                  />
                </div>
                <div class="mt-2 flex p-2">
                  <img
                    v-lazy="item?.artist.thumbnail"
                    class="h-10 w-10 rounded-full"
                    alt=""
                  />
                  <div class="ml-2">
                    <tool-tip :content="item?.title">
              <span class="block text-sm font-semibold text-white w-[200px] max-w-[200px]  text-ellipsis overflow-hidden whitespace-nowrap">{{
               item?.title
              }}</span>
             </tool-tip>
                    <p class="text-xs font-semibold text-second">
                      {{ item?.artist.name }}
                    </p>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>

        <div class="mt-8" v-if="sectionArtist">
          <h2 class="font-bold text-white text-xl mb-4">
            {{ sectionArtist.title }}
          </h2>
          <swiper
           
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :modules="modules"
            class="mySwiper w-full"
            :slides-per-view="view"
          >
            <swiper-slide
              class="pr-7"
              v-for="item in sectionArtist.items"
              :key="item.encodeId"
            >
              <div class="mb-8">
                <div
                  class="aspect-square rounded-full overflow-hidden imageContain relative"
                >
                  <div
                    class="modal top-0 design-center left-0 w-full h-full z-[3] absolute transition-all linear duration-200 opacity-0 cursor-pointer bg-[rgba(0,0,0,0.5)]"
                  >
                    <span class="border-play">
                      <v-icon name="fa-play" scale="1.2" />
                    </span>
                  </div>
                  <img
                    v-lazy="item.thumbnail"
                    class="h-full w-full transition-all ease-linear duration-200"
                    alt=""
                  />
                </div>
                <div class="flex flex-col items-center mt-2">
                  <span
                    class="text-white font-semibold text-[16px] hover:underline hover:text-[#7a0a96] cursor-pointer"
                    @click="changeArtist(item.alias)"
                    >{{ item.name }}</span
                  >
                  <span class="text-second"
                    >{{ (item.totalFollow / 1000).toFixed(0) }}K quan tâm</span
                  >
                  <button
                    class="border-[1px] border-[#7a0a96] px-3 hover:border-white py-1 mt-2 rounded-2xl text-[#7a0a96] hover:text-white"
                  >
                    <span>
                      <v-icon name="co-user-plus" />
                    </span>
                    Quan tâm
                  </button>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="h-20"></div>
    </main>
  </div>
</template>
<script lang="ts">
import check from "@/assets/img/check.png";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import { computed, ref, watch } from "vue";
import { sliceString } from "@/customFunction";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/swiper-bundle.css";
import LoadingVue from "../customComponents/LoadingVue.vue";
import ToolTip from "../customComponents/ToolTip.vue";
import { useStore } from "@/store"; 
export default {
  components: { Swiper, LoadingVue, ToolTip, SwiperSlide },
  setup() {
    const store = useStore()
    const isPlaying = computed(()=>store.state.isPlaying)
    const songId = computed(()=>store.state.songId)
  
    const route = useRoute();
    const router = useRouter();
    const dialogVisible = ref<boolean>(false);
      const changeMV =(encodeId :string)=>{
      router.push({
        path : '/mv-music/detail',
        query :{
          id :encodeId
        }
      })
    }
const changePlaying =()=>{
  store.commit('changePlaying',!store.state.isPlaying);
}
    const changeArtist = (encodeId: string) => {
      router.push({
        path: "/artist-detail",
        query: {
          name: encodeId,
        },
      });
    };
    let artist: any = ref<Object>({});
    let baiHatNoiBat: any = ref<Object>({});
    let isLoading = ref<boolean>(false);
    let sectionVideo: any = ref<Object>({});
    let sectionArtist: any = ref<Object>({});
      const view = ref(5)
      const viewMV =ref(3)
      const getSize=()=>{
        let screenWidth = window.innerWidth;
    if(screenWidth >=1280){
      view.value = 5

    }
   
    if(screenWidth < 640){
      view.value = 2

    }else if(screenWidth < 900){
       view.value = 3
    } else if (screenWidth < 1280){
      view.value = 4

    }
    if(screenWidth>=800){
      viewMV.value=3

    }
    if (screenWidth <=501){
      viewMV.value=1

    }else if(screenWidth <800){
      viewMV.value=2
    }
    
    window.addEventListener('resize',()=>{

      let screenWidth = window.innerWidth;
    if(screenWidth >=1280){
      view.value = 5

    }
   
    if(screenWidth < 640){
      view.value = 2

    }else if(screenWidth < 900){
       view.value = 3
    } else if (screenWidth < 1280){
      view.value = 4

    }
    if(screenWidth>=800){
      viewMV.value=3

    }
    if (screenWidth <=501){
      viewMV.value=1

    }else if(screenWidth <800){
      viewMV.value=2
    }
    
    
    })
      }
      getSize()
      const getSong = async (encodeId: string) => {

const data = await axios.get(
  `https://server-tau-six.vercel.app/api/song?id=${encodeId}`
);

if (data.data.err === -1110) {
  dialogVisible.value = true;
} else {
  store.commit("changeSongId", encodeId);
  const request2 = axios.get(
    `https://server-tau-six.vercel.app/api/infosong?id=${encodeId}}`
  );
  await Promise.all([request2])
    .then((results) => {
      const data1 = results[0].data;


      // Xử lý kết quả tại đây
      store.commit("changeSong", {
        img: data1.data.thumbnail,
        song: data.data.data["128"],
        artist: data1.data.artistsNames,
        songName: data1.data.title,
      });
    })
    .catch((error) => {
      console.error(error);
    });
}
};
    let sectionPlaylist: any = ref<Array<Object>>([]);
    const getData = async () => {
      const { name } = route.query;
      isLoading.value = true;
      const data = await axios.get(
        `https://server-tau-six.vercel.app/api/artist?name=${name}`
      );
   
      const {
        cover,
        thumbnail,
        follow,
        biography,
        name: named,
        sortBiography,
        sections,
      } = data.data.data;
      artist.value = {
        cover,
        thumbnail,
        follow,
        biography,
        named,
        sortBiography,
        sections,
      };
      sectionPlaylist.value = sections.filter((item: any) => {
        return item.sectionType === "playlist";
      });
      sectionVideo.value = sections.find((item: any) => {
        return item.sectionType === "video";
      });
      sectionArtist.value = sections.find((item: any) => {
        return item.sectionType === "artist";
      });
      baiHatNoiBat.value = sections[0];
      isLoading.value = false;
    };
    getData();
    watch(() => route.query.name, getData);
    return {
      view,viewMV,
      check,
      changeArtist,
      artist,
      baiHatNoiBat,
      sliceString,
      
      modules: [Autoplay, Navigation],
      sectionPlaylist,
      sectionVideo,
      isLoading,
      sectionArtist,
      isPlaying,
      songId,getSong,dialogVisible,changePlaying,changeMV
    };
  },
};
</script>
<style lang="scss">
.artistDetail {
  .imageContain {
    &:hover img {
      transform: scale(1.1);
    }
    .modal {
      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
