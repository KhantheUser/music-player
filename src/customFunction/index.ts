import axios from "axios";
import { useStore } from "@/store";

export const sliceString =(string:String|string,amount:number)=>{
  if(string?.length >amount){
    return string.slice(0,amount)+'...'
  }else {
    return string;
  }

}
export const convertTime = (time:number)=>{
  let minutes = Math.floor(time / 60);
  let remainingSeconds = (time % 60);
  let convertMinutes = minutes.toString()
  let convertSeconds = remainingSeconds.toString()
  if(minutes < 10){
    convertMinutes = '0'+convertMinutes
  }
  if(remainingSeconds<10){
    convertSeconds = '0'+convertSeconds
  }
  return `${convertMinutes}:${convertSeconds}`
}

export const checkWidth = ()=>{

  let view = 5
  const check = ()=>{
    let screenWidth = window.innerWidth;
    
    if(screenWidth < 900){
       view = 3
    }
  }
  window.addEventListener("resize", check);
  return view
}

// export const getSong = async (encodeId: string) => {
// const store = useStore()

//   const data = await axios.get(
//     `https://server-tau-six.vercel.app/api/song?id=${encodeId}`
//   );
//   console.log(data.data.data);

//   if (data.data.err === -1110) {
//     store.commit('changeDialogModal',true)
//   } else {
//     store.commit("changeSongId", encodeId);
//     const request2 = axios.get(
//       `https://server-tau-six.vercel.app/api/infosong?id=${encodeId}}`
//     );
//     await Promise.all([request2])
//       .then((results) => {
//         const data1 = results[0].data;

//         console.log(data1.data);

//         // Xử lý kết quả tại đây
//         store.commit("changeSong", {
//           img: data1.data.thumbnail,
//           song: data.data.data["128"],
//           artist: data1.data.artistsNames,
//           songName: data1.data.title,
//         });
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }
// };