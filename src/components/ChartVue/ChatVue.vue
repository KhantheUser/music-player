<template>
  <div class="chart mt-10 p-[10px] md:px-[30px]">
    <div class="chartContainer rounded-lg flex">
      <div class="left flex-1 md-800:pr-10 ">
        <h2 class="text-[#f1f1f1] font-bold text-3xl flex ">
          #zingchart
          <span
            class="ml-2 text-[#72244e] h-10 w-10 rounded-full flex items-center justify-center bg-white"
          >
            <v-icon name="fa-play" />
          </span>
        </h2>
        <div class="awardContainer mt-4">
          <div :class="{'bg-[rgb(45,17,52,0.5)]':item.id===songId}"
            class="awardItem mt-4 group rounded-md p-3 bg-[rgba(255,255,255,0.2)] cursor-pointer transition-all duration-150 ease-linear hover:bg-[rgb(45,17,52,0.5)] flex items-center"
            v-for="item in zingChart"
            :key="item.id"
          >
            <div class="awardNumber">
              <img
                class="h-10 w-10 rounded-md"
                :src="item.imgNumber"
                alt=""
              />
            </div>
            <div class="flex justify-between w-full ml-2 items-center">
              <div class="flex items-center ">
                <div class="h-[60px] aspect-square relative ">
                  <div v-if="item.id!==songId" @click="getSong(item.id,{song:item.src,img:item.imageSong,songName:item.name,artist:item.artist})"  class="absolute design-center top-0 left-0 w-full group-hover:opacity-100 h-full bg-[rgba(0,0,0,0.4)] opacity-0 transition-base">
                <span class="text-white"    >
                  <v-icon name="fa-play" scale="1.2"/>
                </span>
              </div>
                <div @click="changePlaying" v-if="item.id ===songId && isPlaying"  class="absolute design-center top-0 left-0 w-full  h-full bg-[rgba(0,0,0,0.0)]  transition-base">
                <span class="text-white"    >
                  <music-beat/>
                </span>
              </div>
              <div @click="changePlaying" v-if="item.id ===songId && !isPlaying"  class="absolute design-center top-0 left-0 w-full  h-full bg-[rgba(0,0,0,0.0)]  transition-base">
               
                  <span class="text-white"    >
                  <v-icon name="fa-play" scale="1.2"/>
                </span>
               
              </div>
                  <img
                    class="h-full w-full rounded-md"
                    :src="item.imageSong"
                    alt=""
                  />
                </div>
                <div class="ml-2">
                  <span class="block text-[#f1f1f1] font-semibold">{{
                    item.name
                  }}</span>
                  <span class="block text-sm text-second">{{
                    item.artist
                  }}</span>
                </div>
              </div>
              <div class="font-bold text-white">
                {{ item.percent }}
              </div>
            </div>
          </div>
          <div class="text-center">
            <button
              class="text-white mt-3 inline-block hover:bg-purple-800/60 border-[1px] py-1 px-3 rounded-2xl border-red-100"
            >
              Xem thêm
            </button>
          </div>
        </div>
      </div>
      <div class="right flex-1 hidden md-800:block">
          <bar-chart class="w-full"/>
       
      </div>
    </div>
 
  </div>
</template>
<style lang="scss">
.chart {

  .chartContainer {
    background-image: linear-gradient(
        to right,
        rgb(23, 15, 35, 0.9),
        rgba(142, 28, 135, 0.7)
      ),
      url("https://statics.didau.com/image/2022/06/30/dd581ea78beb462ba925ed0245d88360.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    padding: 20px;
  }
}
</style>
<script lang="ts">
import BarChart from '@/components/BarChart/BarChart.vue'
import {useStore} from '@/store'
import { computed } from 'vue';


export default {
  setup() {
    const store = useStore()
    const zingChart = [
      {
        id: 'xzxz1',
        name: "Ngoài 30",
        artist: "Thái học",
        percent: "39%",
        imgNumber:
          "https://thumbs.dreamstime.com/b/number-one-symbol-neon-sign-vector-first-number-one-template-neon-icon-light-banner-neon-signboard-nightly-bright-advertising-120263446.jpg",
        imageSong:
          "https://avatar-ex-swe.nixcdn.com/song/2023/02/27/2/9/a/2/1677468732364_640.jpg",
          src:'https://firebasestorage.googleapis.com/v0/b/spotify-55707.appspot.com/o/NGO%C3%80I%2030%20(Lofi%20Ver.)%20-%20TH%C3%81I%20H%E1%BB%8CC%20x%20THAOB%20__%20n%E1%BB%AFa%20th%E1%BA%BF%20gi%E1%BB%9Bi%20em%20d%C3%A0nh%20cho%20m%E1%BB%99t%20ai%20%C4%91%C3%B3%20th%C3%B4i%20(1).mp3?alt=media&token=bcbf0588-c8c4-407d-bb70-3b6e2cedaca3'
      },
      {
        id: 'xzxz2',
        name: "Phố hoa lệ",
        artist: "Chu Bin",
        percent: "32%",
        imgNumber:
          "https://media.istockphoto.com/id/992101022/vector/number-two-symbol-neon-sign-vector-number-two-template-neon-icon-light-banner-neon-signboard.jpg?s=170667a&w=0&k=20&c=KjpNqOERUSMtK_0pRzLJ6MgHrSTzQoqmbSZ6IWHHgnk=",
        imageSong:
          "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/c/e/f/9cef213c19ead72f3d7c549e9f66af16.jpg",
          src:'https://firebasestorage.googleapis.com/v0/b/spotify-55707.appspot.com/o/Ph%E1%BB%91%20Hoa%20L%E1%BB%87%20-%20Chu%20Bin%20x%20%C4%90%C3%B4ng%20Thi%C3%AAn%20%C4%90%E1%BB%A9c%20%5BAUDIO%20OFFICIAL%5D%20_%20Ph%E1%BB%91%20hoa%20l%E1%BB%87%20hoa%20cho%20ng%C6%B0%E1%BB%9Di%20c%C3%B2n%20l%E1%BB%87%20cho%20anh.mp3?alt=media&token=e2a0d9a8-638c-4f6a-aec6-d72719f86da9'
      },
      {
        id: 'xzxz3',
        name: "Bật tình yêu lên",
        percent: "29%",
        artist: "Tăng Duy Tân & Hòa Minzy",
        imgNumber:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Jt8afjnFu4tjnVWveNACqp_5IkOzioaBUbfHtfhGL1wnWJRN8guQFQdcN6qFnA3qifg&usqp=CAU",
        imageSong:
          "https://gocdoday.com/wp-content/uploads/2023/02/bat-tinh-yeu-len.jpg",
          src:'https://firebasestorage.googleapis.com/v0/b/spotify-55707.appspot.com/o/B%E1%BA%ADt%20T%C3%ACnh%20Y%C3%AAu%20L%C3%AAn%20-%20H%C3%B2a%20Minzy%20x%20T%C4%83ng%20Duy%20T%C3%A2n%20_%20MV%20Lyrics.mp3?alt=media&token=8dfe7466-b3a2-4052-9675-9ae38b2030da'
      },
    ];
    const isPlaying = computed(()=>store.state.isPlaying)

    const songId = computed(()=>store.state.songId)
    const changePlaying = ()=>{
      store.commit('changePlaying',!store.state.isPlaying)
    }
    const getSong = (id:string,{song,img,songName,artist}:{song:string,img:string,songName:string,artist:string})=>{
          
          
          store.commit('changeSong',{song,img,songName,artist})
          store.commit('changeSongId',id)
    }
    return { zingChart,getSong,songId,changePlaying,isPlaying}
  },
components:{BarChart}
};
</script>
