<template>
   <loading-vue v-if="isLoading"></loading-vue>
  <div v-if="!isLoading" class=" px-[10px] lg:px-10 py-10 h-[calc(100vh)] w-full layoutMusics ">
    <div class="flex h-full">
      <div class="left pr-10  hidden md:block md:w-[32%] lg:w-[27%]">

        <div class=" bg-[rgba(255,255,255,0.05)] flex flex-col items-center   rounded-md p-4 ">
          <div
            class="w-full aspect-square   relative imageContain overflow-hidden rounded-md cursor-pointer"
          >
            <img
              class="h-full w-full rounded-md transition-all duration-200 ease-linear"
              v-lazy="avatar.thumbnail"
              alt=""
            />
            <span class="text-[#f1f1f1] absolute top-2 left-2">
              <v-icon name="bi-disc-fill" scale="1.3" />
            </span>
            <div
              class="modal transition-all duration-200 ease-linear absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)] opacity-0 flex items-center justify-center"
            >
              <span
                v-if="isPlaying === false"
                class="h-11 w-11 text-white flex justify-center items-center border-[1px] border-white rounded-full"
              >
                <v-icon name="fa-play" />
              </span>
            </div>
            <div
              v-if="isPlaying === true"
              class="modal-base design-center"
            >
            <div class="p-2 border-[1px] border-white">

              <music-beat />
            </div>
            </div>
          </div>
          <div class="p-3 flex flex-col items-center">
            <h2 class="font-bold text-white text-xl mb-2 text-center">
              {{ avatar.title }}
            </h2>
            <span class="text-xs text-white my-1"
              >Cập nhập : {{ dayjs(avatar.date).format("DD/MM/YYYY") }}</span
            >
            <p class="text-center text-xs text-white my-1">
              {{ avatar.artistsNames }}
            </p>
            <span class="block text-center text-xs text-white my-1"
              >365K người yêu thích</span
            >
            <div
              class="mt-6 rounded-3xl px-5 py-2 bg-[#9b4de0] hover:bg-[#805480] transition-all duration-150 linear cursor-pointer"
            >
              <span
                class="text-white"
                v-if="!isPlaying"
                @click="handleChangePlaying"
              >
                <v-icon name="fa-play" />
                <span class="ml-2">PLAY</span>
              </span>
              <span
                class="text-white"
                v-if="isPlaying"
                @click="handleChangePlaying"
              >
                <v-icon name="fa-pause" />
                <span class="ml-2">TẠM DỪNG</span>
              </span>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div class="right w-full md:w-[68%] lg:w-[73%] h-[65vh] ">
        <div class="">
          <div class="flex p-2">
            <span class="flex-[3] font-semibold text-xs text-second">
              <el-dropdown >
                    <span class="text-second">

                      <v-icon name="ri-arrow-up-down-line" />
                    </span>
               
                <template #dropdown>
                  <el-dropdown-menu class="bg-[#34224f] border-none px-2 py-2">
                    <div @click="arrangeSongs('default')" class="text-white  hover:bg-[#805480] rounded-md px-2 py-2 text-[12px] font-semibold min-w-[125px] cursor-pointer">Mặc định</div >
                    <div @click="arrangeSongs('song')" class="text-white  hover:bg-[#805480] rounded-md px-2 py-2 text-[12px] font-semibold min-w-[125px] cursor-pointer">Tên bài hát (A-Z)</div >
                    <div @click="arrangeSongs('artist')" class="text-white  hover:bg-[#805480] rounded-md px-2 py-2 text-[12px] font-semibold min-w-[125px] cursor-pointer">Tên ca sĩ (A-Z)</div >
                    <div @click="arrangeSongs('album')" class="text-white  hover:bg-[#805480] rounded-md px-2 py-2 text-[12px] font-semibold min-w-[125px] cursor-pointer">Tên Album (A-Z)</div >
                    
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
             
              BÀI HÁT</span
            >
            <span class="flex-[2] font-semibold text-xs text-second"
              >ALBUM</span
            >
            <span class="flex-1 font-semibold text-xs text-second text-right"
              >THỜI GIAN</span
            >
          </div>
          <div class="h-[65vh] overflow-y-scroll dataList">
            <div
              v-for="(item, index) in selectedArraySong"
              :class="{ 'bg-purple-primary': item.encodeId === songId }"
              :key="index"
              
              class="dataItem group flex p-2 cursor-pointer hover:bg-purple-primary hover:rounded-md transition-all linear duration-150 border-b-[0.5px] border-second"
            >
              <div class="flex-[3] flex items-center">
                <span class="mr-2 text-[#f1f1f1]">
                  <v-icon name="bi-music-note" />
                </span>
                <div class="flex items-center">
                  <div class="relative">
                    <div @click="handleChangePlaying" v-if="item.encodeId === songId "
                    
                      class="modal-base rounded-md  design-center"
                    >
                      <music-beat v-if="isPlaying"/>
                      <span class="text-white" v-if=" !isPlaying">
                        <v-icon name="fa-play"/>
                      </span>
                    </div>
                    <div @click="handleChangeSong(item.encodeId, item)" class="modal-base rounded-md opacity-0 design-center group-hover:opacity-100" v-if="item.encodeId !== songId ">
                      <span class="text-white" >
                        <v-icon name="fa-play"/>
                      </span>
                    </div>
                    <img
                      class="h-12 w-12 rounded-md"
                      v-lazy="item.thumbnail"
                      alt=""
                    />
                  </div>
                  <div class="ml-2">
                    <span class="block text-white font-semibold text-sm " >{{
                      item.title
                    }}</span>
                    <span @click="handleArtist(ite.alias)" v-for="(ite,index) in item.artists" :key="ite.encodeId" class="hover:underline text-xs text-second font-semibold group-hover:text-white" :class="{'text-white':item.encodeId===songId}">
                      {{ ite.name }} <span  v-if="index < item.artists.length - 1"> ,</span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex-[2] hidden sm-550:flex   items-center">
                <span :class="{'text-white':item.encodeId===songId}" class="text-xs font-semibold text-second group-hover:text-white">{{
                  item.album.title
                }}</span>
              </div>
              <div class="flex-1 flex items-center justify-end">
                <span class="text-xs font-semibold text-second group-hover:text-white" :class="{'text-white':item.encodeId===songId}">05:35</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>

</template>
<style lang="scss" scoped>
 .el-popper__arrow::before{
    background: yellow !important;
}
.layoutMusics {
  .left {
   

   
    .imageContain {
      &:hover .modal {
        opacity: 1;
      }
      &:hover img {
        transform: scale(1.1);
      }
    }
  }
  .right {
    flex: 7;
    height: 20px;
  }
}
</style>
<script lang="ts">
import axios from "axios";
import dayjs from "dayjs";
import { computed, defineAsyncComponent, reactive, ref } from "vue";
import { useStore } from "@/store";
const MusicBeat = defineAsyncComponent(()=>import('@/components/customComponents/MusicBeat.vue'))

import { ArrowDown } from "@element-plus/icons-vue";
import LoadingVue from '@/components/customComponents/LoadingVue.vue'
import { useRouter } from "vue-router";
export default {
  components: { MusicBeat, ArrowDown },
  setup() {
    const router = useRouter()
    let isLoading = ref<boolean>(true)
    const store = useStore();
    const handleChangePlaying=()=>{
      store.commit('changePlaying',!store.state.isPlaying);
    }
    const isPlaying = computed(() => store.state.isPlaying);
    const songId = computed(() => store.state.songId);
    
    let musicArray:any = [];
    let selectedArraySong:any= reactive([])
    let isArrage = ref<boolean>(false)
    let arrangeMusicArray =reactive([])
    let avatar = ref<any>({
      thumbnail: "",
      date: "",
      artistsNames: "",
      title: "",
    });
    const getMusic = async () => {
      try {
        const data = await axios.get(
          "https://server-tau-six.vercel.app/api/charthome"
        );
       
        const returnData = data.data.data.RTChart.items;

        const musicArrays = returnData.map((item: any, index: number) => {
          return {
            title: item.title,
            thumbnail: item.thumbnail,
            thumbnailM: item.thumbnailM,
            artistsNames: item.artistsNames,
            encodeId: item.encodeId,
            artists: item.artists,
            album: {
              title: item.album?.title || '',
            },
          };
        });
        musicArray = musicArrays
        musicArrays.forEach((item: any) => {
          selectedArraySong.push(item);
        });
       
        avatar.value = {
          thumbnail: musicArrays[0].thumbnail,
          date: musicArrays[0].releaseDate,
          artistsNames: musicArrays[0].artistsNames,
          title: musicArrays[0].title || "",
        };
        isLoading.value = false;
      } catch (e) {
        console.log(e);
      }
    };

    getMusic();

    
    const arrangeSongs = (command:string)=>{
        if(command === 'song'){
            selectedArraySong.splice(0,selectedArraySong.length);
            [...musicArray].sort((firstItem:any, secondItem:any) => firstItem.title.localeCompare(secondItem.title)).forEach(item=>selectedArraySong.push(item))
           
        }else if(command === 'default'){
            selectedArraySong.splice(0,selectedArraySong.length);
            [...musicArray].forEach(item=>selectedArraySong.push(item))
        }else if(command === 'artist'){
            selectedArraySong.splice(0,selectedArraySong.length);
            [...musicArray].sort((firstItem:any, secondItem:any) => firstItem.artistsNames.localeCompare(secondItem.artistsNames)).forEach(item=>selectedArraySong.push(item))

        }else if (command === 'album'){
            selectedArraySong.splice(0,selectedArraySong.length);
            [...musicArray].sort((firstItem:any, secondItem:any) => firstItem.album.title.localeCompare(secondItem.album.title)).forEach(item=>selectedArraySong.push(item))
        }

    }
    const handleArtist =(name:string)=>{
        router.push({
          path:'/artist-detail',
          query:{name:name}
        })
    }
    const handleChangeSong = async (id: string, item: any) => {
      store.commit('changeSongId',id)
      avatar.value = {
        title: item.title,
        date: item.releaseDate,
        artistsNames: item.artistsNames,
        thumbnail: item.thumbnailM,
      };
      const request1 = axios.get(
        `https://server-tau-six.vercel.app/api/song?id=${item.encodeId}`
      );
      const request2 = axios.get(
        `https://server-tau-six.vercel.app/api/infosong?id=${item.encodeId}}`
      );

      await Promise.all([request1, request2])
        .then((results) => {
          const data1 = results[0].data;
          const data2 = results[1].data;

          // Xử lý kết quả tại đây
          store.commit("changeSong", {
            img: data2.data.thumbnail,
            song: data1.data["128"],
            artist: data2.data.artistsNames,
            songName: data2.data.title,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    };
    return {
      musicArray,
      songId,
      avatar,
      dayjs,
      isPlaying,
      
      arrangeSongs,
      handleChangeSong,
      isArrage,
      arrangeMusicArray,
      selectedArraySong,isLoading,
      LoadingVue,
      handleChangePlaying,handleArtist
    
    };
  },
};
</script>
<style lang="scss">


</style>
