import type { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import {songArray} from '@/models'

export interface Music {
  mainSong:{
    img: string ,
  song:string ,
  artist:string,
  songName:string
  },
  songs:Array<Object>,
  backgroundTheme: {
    id:number;
    backgroundSrc : string;
    backMenuColor:string;
    navbarColor:string;
    playerColorBack:string;
    playerColorText:string;
    textNavbarColor:string;
    hoverNavbarColor:string;
    textMainColor:string;
    textSecondColor:string;
    
},
  isPlaying :boolean |Boolean,
  timeSet:{
    minute:string,
    second:string,
    currentTime:number
  },
  songId:string|number,
  modalMV :{
    src:string,
    visible:boolean
  },
  dialogVisible:boolean,
  isDeveloped:boolean
  
}
export const key: InjectionKey<Store<Music>> = Symbol()
export const store = createStore<Music>({
  state: {
    mainSong: {
      img:songArray[0].imgSrc,
      song:songArray[0].song as string,
      artist :songArray[0].artist as string,
      songName:songArray[0].songName as string
    },
    isDeveloped:false,
    songs:[{}],
    isPlaying : false,
    timeSet :{
      minute : '00' ,
      second:'00' ,
      currentTime:0
    },
    backgroundTheme:   {
      id:1,
      backgroundSrc:'linear-gradient(to right,rgba(23,15,35,0.7),rgba(142,28,135,0.5)), url(https://tophinhanhdep.com/wp-content/uploads/2021/10/Alan-Walker-Wallpapers.jpg)',
      navbarColor:'linear-gradient(#191125ab,#20192c)',
      backMenuColor:'rgba(35,27,46,0.8)',
      playerColorBack:'#130c1c',
      playerColorText:'#fff',
      textNavbarColor:'#9b4de0',
      hoverNavbarColor:'#2f2739',
      textMainColor:'#f1f1f1',
      textSecondColor:'#909dbd'

  },
    songId:'zxzx1',
    modalMV : {
      src:'https://www.youtube.com/embed/zP45bzMwo8Y',
      visible: false
    }
    ,
    dialogVisible:false
  },
  mutations : {
    changeSongs(state,songsObject){
      state.songs = songsObject
    },
    changeSong(state,songObject:any){
      state.mainSong = songObject;
      const audio = document.getElementById('audio') as HTMLAudioElement
      state.isPlaying = true
      setTimeout(()=>{
        audio?.play()
        setInterval(()=>{

          state.timeSet.currentTime = audio.currentTime
          const minute = Math.floor(audio.currentTime/ 60)
              const second = Math.floor(audio.currentTime) - 60*minute
              let minuteString = minute.toString()
    if(minute < 10){
        minuteString = '0'+minuteString
    }
    let secondString = second.toString()
    if(second<10){
        secondString ='0'+secondString
    }
    
    state.timeSet.minute = minuteString
    state.timeSet.second = secondString
        

        },500)
      },200)

    },
    changeSongId(state,songId){
      state.songId = songId
    },
    changeIsDeveloped(state,payload){
      state.isDeveloped = payload
    },
    changePlaying(state,isPlaying){
      const audio = document.getElementById('audio') as HTMLAudioElement
      state.isPlaying = isPlaying
      if(isPlaying){
        audio?.play()
        setTimeout(()=>{
          audio?.play()
          setInterval(()=>{
  
            state.timeSet.currentTime = audio.currentTime
            const minute = Math.floor(audio.currentTime/ 60)
                const second = Math.floor(audio.currentTime) - 60*minute
                let minuteString = minute.toString()
      if(minute < 10){
          minuteString = '0'+minuteString
      }
      let secondString = second.toString()
      if(second<10){
          secondString ='0'+secondString
      }
      
      state.timeSet.minute = minuteString
      state.timeSet.second = secondString
          
  
          },500)
        },200)
      }else {
        audio?.pause()
      }
    },
    changeModalMV(state,payload){
    
        state.modalMV.src ='https://www.youtube.com/embed/'+payload.src
        state.modalMV.visible = payload.visible
     
      // if (Object.keys(payload).length ===1){
      //   state.modalMV.visible = payload.visible

      // }
      
    },
    changeDialogModal(state,payload){
      state.dialogVisible = payload
    },
    changeCurrentTime(state,time){
      const audio = document.getElementById('audio') as HTMLAudioElement
      audio.currentTime = time
      state.timeSet.currentTime = audio.currentTime
      setInterval(()=>{

        state.timeSet.currentTime = audio.currentTime
        const minute = Math.floor(audio.currentTime/ 60)
            const second = Math.floor(audio.currentTime) - 60*minute
            let minuteString = minute.toString()
  if(minute < 10){
      minuteString = '0'+minuteString
  }
  let secondString = second.toString()
  if(second<10){
      secondString ='0'+secondString
  }
  
  state.timeSet.minute = minuteString
  state.timeSet.second = secondString
 

      },500)

    }
   
  }
  
})
export function useStore () {
  return baseUseStore(key)
}