<template>
    <div class="chillHappyPopular p-[10px] md:px-[30px]">
      <h2 class="text-[#f1f1f1] text-xl font-[600] mb-4">{{ name }}</h2>
      <div class="cardContainer w-full">
        <swiper
          
          :autoplay="autoplay"
          :modules="modules"
          class="mySwiper w-full"
          :slides-per-view="view"
        >
          <div></div>
          <div class="flex gap-x-5" v-if="isLoading">
            <content-loader
              v-for="item in 5"
              :key="item"
              width="20%"
              height="300px"
              :speed="2"
              primaryColor="rgba(255,255,255,0.1)"
              secondaryColor="rgba(0,0,0,0.1)"
            >
              <rect y="0" rx="3" ry="3" width="100%" height="200" />
              <rect y="212" rx="3" ry="3" width="100%" height="15" />
              <rect y="237" rx="3" ry="3" width="100%" height="60" />
            </content-loader>
          </div>
          <swiper-slide
            class="w-full flex justify-center"
            v-for="item in data"
            :key="item.id"
          >
            <div
              class="card w-full relative cursor-pointer"
              :key="item.id"
              v-if="!isLoading"
            >
              <div class="bg-[#1e1728] rounded-md shadow-base">
                <div
                  class="h-48 w-full rounded-md imageContainer overflow-hidden group relative"
                  :id="item._id"
                >
                <div @click="changePageDetail(item.navigate)" class="modal-base opacity-0 group-hover:opacity-100 design-center">
                        <span class="border-play">
                            <v-icon name="fa-play"/>
                        </span>
                </div>
                  <span class="absolute top-1 left-1 text-[#dfdcdc]">
                    <v-icon name="bi-disc-fill" />
                  </span>
  
                  <img
                    v-if="!isLoading"
                    class="w-full h-full rounded-md"
                    :src="item.image"
                    alt=""
                  />
                </div>
  
                <div class="p-2 min-h-[80px]">
                  <h2 class="text-white font-semibold">
                    {{ sliceString(item.title, 20) }}
                  </h2>
                  <div class="flex flex-col">
                    <span class="text-[#a4a3bf] text-xs mt-2">
                      {{ item.subTitle }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </template>
  <style lang="scss">
  .chillHappyPopular {
    margin-top: 30px;
    .cardContainer {
      .card {
        width: 90%;
  
        padding-left: 0;
        .imageContainer {
          img {
            transition: all 0.2s linear;
          }
          position: relative;
  
          &:hover img {
            transform: scale(1.2);
            border-radius: 6px;
          }
        }
      }
    }
  }
  </style>
  <script lang="ts">
  import { ContentLoader } from "vue-content-loader";
  import { sliceString } from "@/customFunction";
  import MusicBeat from "../customComponents/MusicBeat.vue";
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Autoplay, Navigation } from "swiper";
  
  import "swiper/css";
  import "swiper/swiper-bundle.css";
  import { useStore } from "@/store";
  import { computed, ref } from "vue";
  import {  useRouter } from "vue-router";
  export default {
    props: {
      data: Object,
      name: String,
      isLoading: Boolean,
    },
    components: {
      Swiper,
      SwiperSlide,
      MusicBeat,
      ContentLoader,
    },
    setup() {
      const router = useRouter()
      const store = useStore();
      const isPlaying = computed(() => store.state.isPlaying);
      const changePlay = () => {
        store.commit("changePlaying", !store.state.isPlaying);
      };
      const changePageDetail = (encodeId100: string) => {
      router.push({
        path: "/top100/detail",
        query: {
          id: encodeId100,
        },
      });}
      const view = ref(5);
      const getSize = () => {
        let screenWidth = window.innerWidth;
        if (screenWidth >= 1280) {
          view.value = 5;
        }
        if (screenWidth < 500) {
          view.value = 1;
        } else if (screenWidth < 640) {
          view.value = 2;
        } else if (screenWidth < 900) {
          view.value = 3;
        } else if (screenWidth < 1280) {
          view.value = 4;
        }
        window.addEventListener("resize", () => {
          let screenWidth = window.innerWidth;
  
          if (screenWidth >= 1280) {
            view.value = 5;
          }
          if (screenWidth < 500) {
            view.value = 1;
          } else if (screenWidth < 640) {
            view.value = 2;
          } else if (screenWidth < 900) {
            view.value = 3;
          } else if (screenWidth < 1280) {
            view.value = 4;
          }
        });
      };
      getSize();
  
      const modules: any = ref([Autoplay, Navigation]);
      const indexSong = ref<string>("");
      const autoplay: any = ref({ delay: 5000, disableOnInteraction: false });
      const getSong = (
        id: string,
        {
          img,
          song,
          artist,
          songName,
        }: { img: string; song: string; artist: string; songName: string }
      ) => {
        indexSong.value = id;
        autoplay.value = { delay: 500000, disableOnInteraction: false };
  
        const element = document.getElementById(id);
        console.log(element);
        element?.style.removeProperty("hover");
        store.commit("changeSong", { img, song, artist, songName });
      };
      return {
        sliceString,
        modules,
        getSong,
        autoplay,
        indexSong,
        isPlaying,
        changePlay,
        view,
        changePageDetail
      };
    },
  };
  </script>
  