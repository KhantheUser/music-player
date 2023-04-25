<template >
            <audio ref="audio" id="audio"   :src="mainSong?.song" preload="metadata"></audio>

    <div class="musicPlayer  hidden md:flex" :style="{background:backgroundTheme.playerColorBack}">
        <div class="songImage flex items-center relative w-1/5">
            <div class="  px-2   z-10  flex bg-[#130c1c] items-center ">
                <span class=" block mr-1" :style="{color:backgroundTheme.playerColorText}">
                    <v-icon name="io-radio" :animation="isPlaying ? 'pulse':''" scale="1.2"/>
                </span>
                <div :style="{color:backgroundTheme.playerColorText}" class="h-16 rounded-full w-16  bg-[#130c1c] imageContain relative" :class="{'animate-active':isPlaying}"> 
                    <img class="rounded-full h-16 w-16"   v-lazy="mainSong?.img" alt="">
                    <span :class="{iconTest:isPlaying,'hidden':!isPlaying}" class="   absolute -top-5 right-0">
                    <v-icon name="bi-music-note"  scale="1.2"/>

                    </span>
                    <span :class="{iconTest:isPlaying,'hidden':!isPlaying}" class="   absolute top-10 -right-5">
                    <v-icon name="bi-music-note"  scale="1.2"/>

                    </span>
                    <span :class="{iconTest:isPlaying,'hidden':!isPlaying}" class="   absolute -bottom-6 right-5">
                    <v-icon name="bi-music-note"  scale="1.2"/>

                    </span>
                    <span :class="{iconTest:isPlaying,'hidden':!isPlaying}" class="   absolute top-10 -left-5">
                    <v-icon name="bi-music-note"  scale="1.2"/>

                    </span>
                    <span :class="{iconTest:isPlaying,'hidden':!isPlaying}" class="    absolute -top-2 -left-4 ">
                    <v-icon name="bi-music-note"  scale="1.2"/>

                    </span>
                </div>
            </div>
            <div class="ml-4 text-[#f1f1f1]  w-full">
                <span class="block text-[14px] w-[80%] max-w-[80%] font-bold whitespace-nowrap text-ellipsis overflow-hidden" v-if="!isPlaying">{{ mainSong.songName }}</span>
                <span class="block text-[14px] w-[80%] max-w-[80%]    font-bold whitespace-nowrap text-ellipsis relative  overflow-hidden slideInfi" v-if="isPlaying">{{ mainSong.songName }}</span>
                <span class="block text-[12px] text-[#848484]">{{ mainSong.artist }}</span>
            </div>
            <div class="w-7 h-full z-10">
                
            </div>

        </div>
        <div class="songAttributes w-[60%]">
            
            <div class="top  flex">
                <div class="left flex">
                    <div class="loved mr-2 " @click="changeLove">
                        <span v-if="isLove" class="text-[#c94b4b] drop-heart">
                            <v-icon name="fa-heart"/>
                        </span>
                        <span v-if="!isLove" class="text-[#c94b4b] drop-heart">
                            <v-icon name="fa-regular-heart"/>
                        </span>
                    </div>
                    <div class="download">
                        <span class=" cursor-pointer" :style="{color:backgroundTheme.playerColorText}">
                            <v-icon name="fa-download"/>
                        </span>
                    </div>
                </div>
                <div class="middle flex " :style="{color:backgroundTheme.playerColorText}">
                    <div class="back flex items-center ">
                        <span class=" design-center  h-10 w-10 rounded-full cursor-pointer hover:bg-[#2f2739]">
                            <v-icon name="fa-step-backward"/>
                        </span>
                        <span class=" design-center  h-10 w-10 rounded-full cursor-pointer hover:bg-[#2f2739]">
                            <v-icon name="fa-backward"/>
                        </span>
                    </div>
                    <div class="playPause" @click="changePlaying">
                        <span v-if="isPlaying" class="h-10 rounded-full w-10 design-center border-[1px] mx-1 cursor-pointer " :style="{borderColor:backgroundTheme.playerColorText}">
                            <v-icon name="fa-pause" />
                        </span>
                        <span v-if="!isPlaying"  class="h-10 rounded-full w-10 design-center border-[1px] mx-1 cursor-pointer " :style="{borderColor:backgroundTheme.playerColorText}">
                            <v-icon name="fa-play" scale="1.1"/>
                        </span>
                    </div>
                    <div class="forward flex items-center">
                        <span class="design-center  h-10 w-10 rounded-full cursor-pointer hover:bg-[#2f2739]" >
                            <v-icon name="fa-forward"/>
                        </span>
                        <span class="design-center  h-10 w-10 rounded-full cursor-pointer hover:bg-[#2f2739]">
                            <v-icon name="fa-step-forward"/>
                        </span>
                    </div>
                </div>
                <span class=" design-center block h-10 w-10 rounded-full cursor-pointer hover:bg-[#2f2739]" :style="{color:backgroundTheme.playerColorText}">
                    <v-icon name="fa-share-alt"/>
                </span>
                
            </div>
            <div class="bottom flex">
                
                <input type="range" @change="changeRange($event)" class="progessBar" ref="range" :value="Math.floor(inputRangeValue) ||0">
                <div  class="duration ml-2">{{ timeSet.minute }}:{{ timeSet.second }}</div>
              
            </div>
        </div>
        
        <div class="w-[5%] md:w-[20%] flex justify-end items-center ">
           <div @click="turnVolume">
            <span v-if="!muted"  class=" block mr-2 p-1 rounded-full cursor-pointer hover:bg-[#2f2739]" :style="{color:backgroundTheme.playerColorText}">
                <v-icon name="bi-volume-up-fill" scale="1.2" />
            </span>
            <span v-if="muted"  class=" block mr-2 p-1 rounded-full cursor-pointer hover:bg-[#2f2739]" :style="{color:backgroundTheme.playerColorText}">
                <v-icon name="bi-volume-mute-fill" scale="1.2" />
            </span>
           </div>
            
            <input @change="changeVolume($event)" type="range" class="volumeBar hidden md:block">
        </div>
        
    </div>
    <div class="fixed bottom-2 left-2 !z-[20] block md:hidden">
       
        <ripple-play @click="dialogVisible=!dialogVisible"/>
    </div>
    <el-dialog v-model="dialogVisible" :show-close="false"  width="100%" class=" bg-purple-secondary   fixed top-0 left-0 h-screen m-0 "  draggable>
    <div class="absolute top-[50%] p- left-0  translate-y-[-50%] w-full  flex flex-col items-center justify-center">
       <div class="w-full flex justify-center relative">
        <div class="absolute flex flex-col  right-2 top-0">
                <span class="text-[#c94b4b] p-3 hover:bg-[#2f2739] rounded-md cursor-pointer">
                    <v-icon name="fa-regular-heart" scale="1.5"/>
                </span>
                <span class="text-white p-3 hover:bg-[#2f2739] rounded-md cursor-pointer">
                    <v-icon name="co-playlist-add" scale="1.5"/>
                </span>
                <span class="text-white p-3 hover:bg-[#2f2739] rounded-md cursor-pointer">
                    <v-icon name="bi-download" scale="1.5"/>
                </span>
                <span class="text-white p-3 hover:bg-[#2f2739] rounded-md cursor-pointer">
                    <v-icon name="fa-ellipsis-h" scale="1.5"/>
                </span>

        </div>
        <div class="w-1/2 !max-w-[300px] aspect-square rounded-md  relative overflow-hidden ">
        
        <img v-lazy="mainSong.img" class="w-full h-full " :class="{'imageBoom':isPlaying}" alt="">
    </div>
       </div>
    <div class="w-1/2 mt-3">
        <p class="text-center text-purple-primary font-semibold text-[16px]">{{mainSong.songName }}</p>
        <p class="text-second text-sm text-center mt-2">{{ mainSong.artist }}</p>
    </div>
    <div class="w-1/2 mt-3 flex justify-center opacity-0" :class="{'opacity-100':isPlaying}" >
        <MusicBeat v-for="item in 12" :key="item"/>
        

    </div>
    
    
    </div>
    <div class=" fixed bottom-10 left-0 w-full  flex flex-col items-center">
        <div class="w-4/5 mx-auto flex justify-center">
                    <div class="back flex items-center">
                        <span class="text-white design-center  h-10 w-10 rounded-full cursor-pointer hover:bg-[#2f2739]">
                            <v-icon name="fa-step-backward"/>
                        </span>
                        <span class="text-white design-center  h-10 w-10 rounded-full cursor-pointer hover:bg-[#2f2739]">
                            <v-icon name="fa-backward"/>
                        </span>
                    </div>
                    <div class="playPause" @click="changePlaying">
                        <span v-if="isPlaying" class="h-10 rounded-full w-10 design-center border-[1px] text-white mx-1 cursor-pointer border-white">
                            <v-icon name="fa-pause" />
                        </span>
                        <span v-if="!isPlaying"  class="h-10 rounded-full w-10 design-center border-[1px] text-white mx-1 cursor-pointer border-white">
                            <v-icon name="fa-play" scale="1.1"/>
                        </span>
                    </div>
                    <div class="forward flex items-center">
                        <span class="text-white design-center  h-10 w-10 rounded-full cursor-pointer hover:bg-[#2f2739]">
                            <v-icon name="fa-forward"/>
                        </span>
                        <span class="text-white design-center  h-10 w-10 rounded-full cursor-pointer hover:bg-[#2f2739]">
                            <v-icon name="fa-step-forward"/>
                        </span>
                    </div>
                </div>
        <div class="w-[80%]  mx-auto relative">
            <div  class="duration ml-2 absolute top-5 right-0">{{ timeSet.minute }}:{{ timeSet.second }}</div>

            
            <input type="range" @change="changeRange($event)" class="progessBar " ref="range" :value="Math.floor(inputRangeValue) ||0">
        </div>
    </div>
    <button class="bg-[#2f2739] absolute top-2  right-2 p-2 rounded-sm text-white" @click="dialogVisible=!dialogVisible">
           <v-icon name='bi-chevron-down'/>
        </button>
  </el-dialog>
</template>
<script lang="ts">
import { computed, defineAsyncComponent, onMounted, ref, watch } from 'vue'
import {useStore} from '@/store'
import { sliceString } from '@/customFunction'
const RipplePlay =defineAsyncComponent(()=>import('@/components/customComponents/RipplePlay.vue')) 
const MusicBeat =defineAsyncComponent(()=>import('@/components/customComponents/MusicBeat.vue')) 
export default {
    
  
   
    
    data(){
        
        
        return {
            isLove:false,muted:false
        }
    },
    components:{RipplePlay,MusicBeat},
setup(){
    
    const store = useStore()
    
    const backgroundTheme = computed(()=>store.state.backgroundTheme)
    const audio:any = ref({});
    const dialogVisible = ref(false)
   const currentTime =computed(()=>store.state.timeSet.currentTime)
   const timeSet = computed(()=>store.state.timeSet)
   const inputRangeValue =ref<number>(0)  
    const mainSong = computed(()=> store.state.mainSong)
    const isPlaying = computed(()=> store.state.isPlaying)
    const test = ref<string>('red-200')
  
   onMounted(()=>{
       
       
})
watch(currentTime,()=>{
       const inputs :any  = document.querySelectorAll('.progessBar') ;
    inputRangeValue.value = currentTime.value / audio.value?.duration *100
        inputs.forEach((input:HTMLInputElement)=>{
            input.style.setProperty('--before-width', inputRangeValue.value + '%');
        if(inputRangeValue.value ===100){store.commit('changePlaying',false)}
        })
        
   })
    const changeRange = (e:any)=>{
        store.commit('changeCurrentTime',e.target.value/100 * audio.value.duration)

    }
       
        


 const   changePlaying=()=>{

        store.commit('changePlaying',!store.state.isPlaying)

    }
    return {mainSong,isPlaying,audio,changePlaying,inputRangeValue,timeSet,currentTime,changeRange,dialogVisible,backgroundTheme,test,sliceString}
},

methods :{

    changeLove(){
        this.isLove  = !this.isLove
    },
   
    
    changeVolume(e:any){
        if(this.muted){
            this.muted = false
            
        }
        const audioRef:any = this.$refs.audio
        audioRef.volume = e.target.value/100 

    },
    turnVolume(){
        const audioRef:any = this.$refs.audio
        const volumeBar = document.querySelector('.volumeBar') as HTMLInputElement
        console.log(volumeBar.value)
        if(!this.muted){
            audioRef.volume = 0
            
        }else {
            audioRef.volume =  +volumeBar.value/100
            
        }
        this.muted = !this.muted
    }
}
}
</script>
<style lang="scss">
.imageBoom{
    animation: boomIn 700ms alternate-reverse ease-in-out infinite;
}
@keyframes boomIn {
    100%{
        transform: scale(1.2);
    }
}
@keyframes  slideInfi{
    from{
       right: 100%;
       opacity: 1;
    }to{
        right: -80%;
        opacity: 0;
    }
}
.slideInfi {
    animation: slideInfi 8s infinite linear;
}

@import '@/components/MusicPlayer/MusicPlayer.scss'

</style>