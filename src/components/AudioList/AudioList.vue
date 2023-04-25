<template>
    <div class="audioList p-[10px] md:px-[30px]">
        <h2 class="title my-3">
            The List 
            <span>{{ songArray.length }} songs</span>
        </h2>
        <div class="songsContainer">
            <div v-for="song in songArray" :key="song.id" class="songs">
                <div class="count">#{{ song.number }}</div>
                <div class="song" :class="{active:songId === song.id}" >
                    <div class="imgBox relative group">
                        <div  @click="changeMainSong(song.id,song.imgSrc,song.song,song.artist,song.songName)" v-if="song.id !== songId" class="modal-base design-center opacity-0 group-hover:opacity-100 " >
                            <span class="text-white">
                                <v-icon name="fa-play"/>
                            </span>
                        </div>
                        <img v-lazy="song.imgSrc" alt="" >
                        <div @click="changePlaying($event)" v-if="isPlaying && songId===song.id" class="absolute top-0 bg-[rgba(0,0,0,0.4)] left-0 design-center h-full w-full">
                            <MusicBeat/>
                        </div>
                        <div  @click="changePlaying($event)" v-if="!isPlaying && songId===song.id" class="absolute top-0 bg-[rgba(0,0,0,0.4)] left-0 design-center h-full w-full">
                           <span>
                            <v-icon name="fa-play"/>
                           </span>
                        </div>
                    </div>
                    <div class="section">
                        <p class="songName md:w-1/2  flex-col flex md:flex-row md:justify-between">
                           <span> {{ song.songName }}</span>
                            <span class="spanArtist">
                                {{ song.artist }}
                            </span>
                        </p>
                        <div class="hits  md:flex">
                            <p class="hit !hidden md:!flex">
                                <span>
                                    <v-icon name="bi-headphones"/>
                                </span>
                                {{' '}}95,490,102
                            </p>
                            <p class="duration !hidden md:!block">
                                <span>
                                    <v-icon name="fa-regular-clock" scale="0.9"/>
                                    03.04
                                </span>
                            </p>
                            <div class="favourite" @click="changeFavor(song.id)">
                                <span v-if="song.favourite===true">
                                    <v-icon name="fa-heart"/>
                                    
                                </span>
                                <span v-if="song.favourite===false">
                                    <v-icon name="fa-regular-heart"/>
                                </span>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import {songArray} from '@/models'
const MusicBeat = defineAsyncComponent(()=>import('@/components/customComponents/MusicBeat.vue'))
import {useStore} from '@/store'
import { computed, defineAsyncComponent } from 'vue'
export default {
   components :{MusicBeat},
    setup(){
        const store = useStore()
        const isPlaying = computed(()=>store.state.isPlaying)
        const songId = computed(()=>store.state.songId)
        const changePlaying =(e:any)=>{
            e.stopPropagation()
            store.commit('changePlaying',!store.state.isPlaying)
        }
        const changeMainSong = (songId:string,img:string,song:string|String,artist:string|String,songName:string|String)=>{
            store.commit('changeSong',{
                img,song,artist,songName
            })
            store.commit('changeSongId',songId)
        }
        return {changeMainSong,isPlaying,songId,changePlaying}
    },
    data(){
        return {
            songArray,
            
            songs:songArray,
            
            mainSong :{
                img : songArray[0].imgSrc,
                song : songArray[0].song
            }
        }
    },
    methods : {
        changeFavor(number:number|string){
            this.songArray.forEach((item)=>{
                if(item.id === number){
                    item.favourite = !item.favourite
                }
            })
            
        },
        
        
    }
}
</script>
<style lang="scss">
@import '@/components/AudioList/AudioList.scss'
</style>