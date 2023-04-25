<template>
  <loading-vue v-if="isLoading" />

  <div v-if="!isLoading" class="px-[20px] lg:px-[60px] py-[40px] top100Detail">
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
    <div class="top flex">
      <div class="right hidden md:block md:w-[32%] lg:w-[27%]">
        <div class="pr-5 w-[100%] aspect-square">
          <div
            class="w-full flex-col p-4 rounded-lg bg-[rgba(255,255,255,0.05)] shadow-xl flex items-center justify-start"
          >
            <img
              class="w-[100%] h-1/2 aspect-square rounded-lg"
              v-lazy="detailData.thumbnailM"
              alt=""
            />
            <h2 class="font-semibold text-white text-lg text-center mt-2">
              {{ detailData.title }}
            </h2>
            <p class="text-[#f7f7f7] text-xs my-2 text-center">
              Playlist by {{ detailData.artistsNames }}
            </p>

            <span class="text-sm text-white"
              >Updated at
              {{
                dayjs(detailData.contentLastUpdate).format("DD/MM/YYYY")
              }}</span
            >
            <span class="text-sm text-white"
              >{{ detailData.song?.total || "100" }} Songs</span
            >
            <span class="text-sm text-white">
              {{ (detailData.like / 1000).toFixed(0) }}K likes
            </span>
            <button
              class="buttonTest overflow-hidden relative hover:border-white hover:text-white transition-base mt-3 inline-block w-[160px] font-semibold text-[#6c1988] py-2 border-[#6c1988] border-[2px] rounded-md"
            >
              PLAY
            </button>
          </div>
        </div>
      </div>

      <div class="bottom w-full md:w-[68%] lg:w-[73%] h-[65vh]">
        <div class="flex justify-between px-2 text-second font-semibold">
          <span> <v-icon name="ri-arrow-up-down-line" /> BÀI HÁT</span>
          <span>ALBUM</span>
          <span>THỜI GIAN</span>
        </div>
        <div class="overflow-y-scroll h-full">
          <div
            :class="{ 'bg-purple-primary ': item.encodeId === songId }"
            class="group hover:bg-purple-primary mt-2 rounded-md cursor-pointer group songItem transition-all ease-linear duration-150"
            :key="item.encodeId"
            v-for="item in detailData.song?.items"
          >
            <div class="p-2 flex items-center">
              <div
                class="h-12 w-12 imageContain relative"
               
              >
              <div
               @click="getSong(item.encodeId)"
                v-if="item.encodeId !== songId" class=" modal-base  design-center  opacity-0 group-hover:opacity-100"
                >
                  <span  class="text-white">
                    <v-icon name="fa-play" />
                  </span>
                </div>
                <div
                  class="modal-base design-center"
                  v-if="!isPlaying && item.encodeId === songId"
                  @click="changePlaying"
                >
                  <span class="text-white">
                    <v-icon name="fa-play"/>
                  </span>
                </div>
                <div
                  class="modal-base design-center"
                  v-if="isPlaying && item.encodeId === songId"
                  @click="changePlaying"

                >
                  <music-beat />
                </div>
               
                <img
                  class="h-full w-full rounded-md"
                  v-lazy="item.thumbnail"
                  alt=""
                />
              </div>
              <div class="flex justify-between flex-1 items-center">
                <div class="flex flex-col ml-2">
                  <span
                    class="font-semibold text-sm text-purple-primary group-hover:text-white"
                    :class="{ 'text-white': item.encodeId === songId }"
                    >{{ item.title }}</span
                  >
                  <div>
                    <span
                      @click="handleArtist(ite.alias)"
                      class="hover:underline cursor-pointer text-sm font-semibold group-hover:text-white text-second"
                      v-for="(ite, index) in item.artists"
                      :key="ite.id"
                      :class="{ 'text-white': item.encodeId === songId }"
                      >{{ ite.name }}
                      <span v-if="index < item.artists.length - 1">
                        ,</span
                      ></span
                    >
                  </div>
                </div>
                <span
                  class="font-semibold text-sm text-second group-hover:text-white"
                  :class="{ 'text-white': item.encodeId === songId }"
                  >{{ convertTime(item.duration) }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-12">
      <h2 class="text-white font-semibold text-2xl mb-8">Nghệ sĩ tham gia</h2>
     
      <swiper-vue :view="view">
        <swiper-slide
          class="pr-7"
          v-for="item in detailData.artists"
          :key="item"
        >
          <div class="w-full aspect-square">
            <div
              class="w-full h-full rounded-full overflow-hidden relative group cursor-pointer"
            >
              <div
                class="modal-base opacity-0 group-hover:opacity-100 z-[2] design-center"
              >
                <span class="border-play">
                  <v-icon name="fa-play" scale="1.2" />
                </span>
              </div>
              <img
                class="transition-base group-hover:scale-110 h-full w-full"
                v-lazy="item.thumbnail"
                alt=""
              />
            </div>
            <div class="flex flex-col items-center gap-y-2 mt-2">
              <span
                class="text-white font-semibold text-sm hover:underline cursor-pointer"
                @click="handleArtist(item.alias)"
                >{{ item.name }}</span
              >
              <span class="text-second font-semibold text-xs"
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
      </swiper-vue>
    </div>
    <div class="h-28"></div>
  </div>
</template>
<script lang="ts">
import { Autoplay, Navigation } from "swiper";

import { useStore } from "@/store";
import { SwiperSlide } from "swiper/vue";
import dayjs from "dayjs";
import axios from "axios";
import { computed, defineAsyncComponent, ref } from "vue";
import LoadingVue from "../customComponents/LoadingVue.vue";
import { convertTime } from "@/customFunction/index";
import { useRoute } from "vue-router";
const MusicBeat = defineAsyncComponent(()=>import("@/components/customComponents/MusicBeat.vue"));
const SwiperVue = defineAsyncComponent(()=>import("@/components/customComponents/Swiper.vue"));

import { useRouter } from "vue-router";
export default {
  components: { LoadingVue, MusicBeat, SwiperVue, SwiperSlide },
  setup() {
    const router = useRouter();
    const store = useStore();
    const isPlaying = computed(() => store.state.isPlaying);
    const songId = computed(() => store.state.songId);
    const handleArtist = (name: string) => {
      router.push({
        path: "/artist-detail",
        query: {
          name,
        },
      });
    };
    const route = useRoute();
    let isLoading = ref<boolean>(true);
    
    const { id } = route.query;
    const changePlaying = ()=>{
        store.commit('changePlaying',!store.state.isPlaying)
    }
    const view = ref(5);
    const getSize = ()=>{
      let screenWidth = window.innerWidth;
      if (screenWidth >= 1280) {
        view.value = 5;
      }
      if (screenWidth < 500) {
        view.value = 1;
      } else if (screenWidth < 640) {
        view.value = 2;
      } else if (screenWidth < 850) {
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
        } else if (screenWidth < 850) {
          view.value = 3;
        } else if (screenWidth < 1280) {
          view.value = 4;
        }
      });
    }
    getSize()
    const dialogVisible = ref<boolean>(false);

    const detailData: any = ref<Object>({});
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
    const getData = async () => {
      const data = await axios.get(
        `https://server-tau-six.vercel.app/api/detailplaylist?id=${id}`
      );
      detailData.value = data.data.data;
      isLoading.value = false;
    };
    getData();
    return {
      detailData,
      dayjs,
      isLoading,
      convertTime,
      getSong,
      dialogVisible,
      songId,
      isPlaying,
      modules: [Autoplay, Navigation],
      handleArtist,
      view,
      changePlaying
    };
  },
};
</script>
<style lang="scss">
.top100Detail {
  .songItem {
    &:hover .modal {
      opacity: 1;
    }
  }
  .el-dialog.is-draggable {
    background: #33254c;

    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    .el-dialog__header {
      .el-dialog__title {
        color: white;
      }
    }
  }
  .buttonTest {
    &::before {
      content: "";
      background: #7a0a96;
      z-index: -1;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      transform: translate(-50%, -50%);
      border-radius: 99999px;
      transition: all 200ms linear;
    }
    &:hover::before {
      height: 200px;
      width: 200px;
    }
  }
}
</style>
