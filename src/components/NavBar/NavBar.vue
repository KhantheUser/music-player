<template>
  <div class="menuList lg:px-4" :style="{background:backgroundTheme.navbarColor}">
     <div class="w-[80%] lg:w-1/2 relative px-2">
      <span class="text-second absolute top-[50%] translate-y-[-50%] z-[2] left-4 ">
        <v-icon name="bi-search" scale="1.2"/>
      </span>
      <div class=" relative w-[80%]">

        <input v-model="searchString" placeholder="Tìm kiếm nghệ sĩ , bài hát , lời bài hát..." class="outline-none w-full lg:w-[100%] text-second inputSearch rounded-3xl p-3 pl-8  text-sm font-semibold placeholder-white"   :style="{background:backgroundTheme.hoverNavbarColor}" type="text">
        <div class="absolute hover:block rounded-br-md rounded-bl-md   hidden z-30 p-2  top-[100%] searchBox  left-0 w-full overflow-y-scroll h-[60vh] bg-[#34224f]">
           <div v-for="item in filterSongss" :key="item._id" class="rounded-md cursor-pointer flex p-2 border-b-[1px] border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.1)]">
              <div class="h-10 w-10 rounded-md overflow-hidden relative group">
                <div class="modal-base opacity-0 group-hover:opacity-100 design-center" @click="getSong(item._id,{img:item.image_music,song:item.src_music,artist:item.name_singer,songName:item.name_music})" v-if="item._id !==songId">
                  <span class="text-white">
                    <v-icon name="fa-play"/>  
                  </span>
                </div>
                <img :src="item.image_music" class="h-full w-full" alt="">
              </div>
              <div class="ml-2">
                <div class="flex flex-col">
                  <span class="text-white text-sm text-medium">{{ item.name_music }}</span>
                  <span class="text-second text-xs text-medium">{{ item.name_singer }}</span>
                </div>

              </div>
           </div>
        </div>
      </div>
     </div>
     <div class="lg:flex w-1/2 hidden justify-end items-center gap-x-4">

       <button class="hover:!bg-[rgba(255,255,255,0.2)] hidden lg:flex transition-base  items-center rounded-3xl   h-[46px] px-3  text-sm font-semibold" :style="{color:backgroundTheme.textNavbarColor,background:backgroundTheme.hoverNavbarColor}">
         <span class="mr-2">
           <v-icon name="bi-download"/>
         </span>
         Download</button>
         <span class="h-[46px] hover:bg-[rgba(255,255,255,0.2)] hidden lg:flex justify-center items-center transition-base w-[46px]  bg-back-second rounded-full">
           <img class="w-6 h-6" src="data:image/png;base64,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" alt="">
         </span>
         <span class="h-[46px] hover:bg-[rgba(255,255,255,0.2)] transition-base text-white hidden lg:flex justify-center items-center w-[46px]  bg-back-second rounded-full">
           <v-icon class="" name="md-diamond-outlined" scale="1.2"/>
         </span>
         <span class="h-[46px] hover:bg-[rgba(255,255,255,0.2)] transition-base text-white hidden lg:flex justify-center items-center w-[46px]  bg-back-second rounded-full">
        <v-icon name="io-settings-sharp" scale="1.2"/>
        
      </span>
      <button class="hidden lg:flex items-center rounded-3xl  transition-base  text-white h-[46px] px-4 text-sm font-semibold" :style="{background:backgroundTheme.textNavbarColor}">
         
         Đăng nhập</button>
     </div>
     <button class="cursor-pointer hover:bg-[#382a45]  transition-base p-2 rounded-md text-white lg:hidden mr-2" @click="changeModalMobile">
           <v-icon name='la-bars-solid' scale="1.5"/>
        </button>
        
    </div>
    <div class="fixed top-[70px] p-4 w-[50vw] bg-purple-secondary h-screen z-[4] transition-all duration-500 ease-linear" :class="{'right-0':activeModalMobile ,'-right-[50vw]':!activeModalMobile}">
<div class="flex flex-col items-center">
 <span class="text-purple-primary py-3 hover:bg-[#382a45]  rounded-md block w-full transition-base cursor-pointer text-center"> Đăng kí VIP</span>
 <span class="text-purple-primary py-3 hover:bg-[#382a45]  rounded-md block w-full transition-base cursor-pointer text-center">Đổi nền</span>
 <span class="text-purple-primary py-3 hover:bg-[#382a45]  rounded-md block w-full transition-base cursor-pointer text-center">Cài đặt</span>
 <span class="text-purple-primary py-3 hover:bg-[#382a45]  rounded-md block w-full transition-base cursor-pointer text-center">Đăng nhập</span>
</div>
    </div>
</template>
<script lang="ts">
import { useStore } from '@/store'
import { computed, ref } from 'vue'
export default {
  setup(){
  
    const store = useStore()
    const backgroundTheme = computed(()=>store.state.backgroundTheme)
    const songs:any = computed(()=>store.state.songs)
    const getSong = (id:string,{img,song,artist,songName}:{img:string,song:string,artist:string,songName:string})=>{
      store.commit('changeSongId',id)
      store.commit('changeSong',{img,song,artist,songName})

    }
    const songId = computed(()=>store.state.songId)
    let searchString = ref<string>('')
    console.log(songs)
    const filterSongss = computed(()=>{
      if(songs.value.length>1){
        return songs?.value.filter((item:{name_music:string})=>item.name_music.toLocaleLowerCase().includes(searchString.value.toLocaleLowerCase()))
      }
    })
   
    return {
      backgroundTheme,filterSongss,searchString,songId,getSong
    }
  },
  data(){
    return {
      activeModalMobile : false,
      // searchString:''
    }
  },
  methods:{
      changeModalMobile (){
        this.activeModalMobile = !this.activeModalMobile
      }
  }
}
</script>
<style lang="scss">
.inputSearch{
  &:focus{
    background: #34224f !important;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;

    &:focus + .searchBox{
        display: block ;
        /* opacity: 1 !important; */
        
      }
    
  }
 
  
}
.searchBox{
  &:hover + .inputSearch{
    background: red !important;
  }
}
.menuList{
        display: flex;
        justify-content: space-between;
        align-items: center;
       
       
        position: sticky !important;
        top: 0;
        z-index: 3;
        width: 100%;
        border-bottom:1px solid rgba(255,255,255,.1);
        box-shadow: 0 3px 5px rgba(0,0,0,.1);
        backdrop-filter: blur(50px);
        height: 72px;
        
        
        

        p{
            margin: 0;
            color: #f1f1f1;
            font-size: 14px;
            .icon{
                margin-right: 6px;
                
            }
            span{
                font-size: 10px;
                text-align: center;
                color: #848484;
            }
        }
        ul{
            
            display: flex;
            align-items: center;
            margin: 0;
            padding: 0;
            cursor: pointer;
            li{
                list-style: none;
                
                margin: 0 20px;
                position: relative;
                font-weight: 600;
                color: #848484;
                padding: 10px 0;
                &::before{
                    content: "";
                    position: absolute;
                   transition: all 0.2s cubic-bezier(0.175,0.885,0.32,1.285);
                    bottom: 0;
                    left:0;
                    width: 0;
                    height: 5px;
                    border-radius: 5px;
                    background-color: #f1f1f1;
                }
                &:hover::before ,&.active:hover::before{
                    width: 100%;
                }
                &.active::before{
                    width: 100%;
                }
                a{
                    text-decoration: none;
                    color:#848484;
                    font-size: 14px;
                }
                &:hover ,&.active:hover{
                    color: #f1f1f1;
                }
            }
        }
    }
    
</style>