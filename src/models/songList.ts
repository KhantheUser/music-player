export interface Song{
    id:string;
    favourite : Boolean,
    songName:String;
    artist:String;
    song:String;
    imgSrc:any,
    number:number

    
}
const songArray:Song[] = [
    {
      id: 'zxzx1',
      favourite: false,
      songName: "Đủ trải sẽ thấm",
      artist: "Mike x Chiennhatlang",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-2-eddc8.appspot.com/o/(Tune%20t%E1%BA%A9m%20%C4%91%C3%A1%20s%E1%BB%91%2004)%20%C4%90%E1%BB%A7%20tr%E1%BA%A3i%20s%E1%BA%BD%20th%E1%BA%A5m%20-%20Mike%20x%20Chiennhatlang.mp3?alt=media&token=1bae0f8c-ac85-4f8a-b5f6-d94009a74577",
      imgSrc:"https://th.bing.com/th/id/OIP.ffvXZ5ASWEdnS5et_Q8mawHaEH?w=300&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      number:1
        
    },
    {
      id: 'zxzx2',
      favourite: false,
      songName: "Em là kẻ đáng thương",
      artist: "Phát Huy T4",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-2-eddc8.appspot.com/o/EM%20L%C3%80%20K%E1%BA%BA%20%C4%90%C3%81NG%20TH%C6%AF%C6%A0NG%20LOFI%20-%20PH%C3%81T%20HUY%20T4%20%20Thanh%20Xu%C3%A2n%20C%E1%BB%A7a%20Ng%C6%B0%E1%BB%9Di%20Anh%20Y%C3%AAu%2C%20Anh%20%C4%90%C3%A3%20L%E1%BA%A5y%20Nh%C6%B0ng%20Ch%E1%BA%B3ng%20H%E1%BB%A9a.mp3?alt=media&token=75c8ec84-2e27-40da-8a2e-31d852e8b6fa",
      imgSrc:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/4/a/d/4/4ad439b918f3356addb5f237c1380ffc.jpg",
        number:2
    },
    {
      id: 'zxzx3',
      favourite: false,
      songName: "Tấm lòng son",
      artist: "Huỳnh Chương",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-2-eddc8.appspot.com/o/Tam%20Long%20Son%20Remix%20-Gi%E1%BB%8Dt%20Bu%E1%BB%93n%20V%C6%B0%C6%A1ng%20Tr%C3%AAn%20M%C3%A0u%20M%E1%BA%AFt%20Ai%20Remix%20Hot%20TikTok%20%20Nh%E1%BA%A1c%20Remix%20G%C3%A2y%20Nghi%E1%BB%87n%202022.mp3?alt=media&token=1011965b-92bd-47b3-900b-e037376dfd5a",
      imgSrc:
        "https://i.ytimg.com/vi/fy4_qHjw7mg/maxresdefault.jpg",
        number:3
    },
    {
      id: 'zxzx4',
      favourite: false,
      songName: "Lý do là gì",
      artist: "Nguyễn Vĩ",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-2-eddc8.appspot.com/o/L%C3%BD%20Do%20L%C3%A0%20G%C3%AC%20-%20Nguy%E1%BB%85n%20V%C4%A9Cukak%20Remix%20Audio%20Lyrics%20Video.mp3?alt=media&token=41221add-0b9f-4f3e-9fe9-ca58bd4b3c6c",
      imgSrc:
        "https://i.ytimg.com/vi/HzYbxPuMx-A/maxresdefault.jpg",
        number:4
    },
    {
      id: 'zxzx5',
      favourite: false,
      songName: "Hãy trao cho anh",
      artist: "Sơn Tùng - MTP",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-2-eddc8.appspot.com/o/S%C6%A0N%20T%C3%99NG%20M-TP%20%20H%C3%83Y%20TRAO%20CHO%20ANH%20ft.%20Snoop%20Dogg%20%20Official%20MV.mp3?alt=media&token=c9683923-6336-4074-9e17-469da95ad4f0",
      imgSrc:
        "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2019/7/1/741911/Hay-Trao-Cho-Anh.jpg",
        number:5
    },
    {
      id: 'zxzx6',
      favourite: false,

      songName: "Từ em mà ra",
      artist: "Lil Zpoet",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-2-eddc8.appspot.com/o/T%E1%BB%AB%20Em%20M%C3%A0%20Ra%20(Whisky%20x%20Freak%20D%20Lofi%20Ver.)%20%20Lil%20Z%20Poet%20ft%20%C4%90%E1%BB%A9c%20Anh.mp3?alt=media&token=18e574d5-4a83-4fd4-8e1a-aa8c5ff2fa46",
      imgSrc:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/0/a/7/d/0a7de1696f7d1d9ef3a456655a1a73e8.jpg",
        number:6
    },
    {
      id: 'zxzx7',
      favourite: false,
      songName: "Liệu giờ(What if?)",
      artist: "2T",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-2-eddc8.appspot.com/o/2T%20-%20LI%E1%BB%86U%20GI%E1%BB%9C%20(%20WHAT%20IF%20%20)%20x%20Venn%20(%20Prod.%20KayT%20)%20%20MV.mp3?alt=media&token=74a24773-ecfb-44eb-8be9-6f8b997e96b8",
      imgSrc:
        "https://i1.sndcdn.com/artworks-000550210110-r1h3aw-t500x500.jpg",
        number:7
    },
    {
      id: 'zxzx8',
      favourite: false,
      songName: "Em không sai chúng ta sai",
      artist: "ERIK",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-2-eddc8.appspot.com/o/ERIK%20-%20Em%20Kh%C3%B4ng%20Sai%2C%20Ch%C3%BAng%20Ta%20Sai%20(Official%20Lyric%20Video).mp3?alt=media&token=48a2303b-57f3-4bf3-ab91-ca466c80fde8",
      imgSrc:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/7/4/0/d/740d5e0fd272d2421d441e9fd5c08fdd.jpg",
        number:8
    },
    {
      id: 'zxzx9',
      favourite: false,
      songName: "Em của ngày hôm qua",
      artist: "Sơn tùng - MTP",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-2-eddc8.appspot.com/o/Em%20C%E1%BB%A7a%20Ng%C3%A0y%20H%C3%B4m%20Qua.mp3?alt=media&token=73edca79-de2e-4926-8e5c-07ab1de10644",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/vi/thumb/5/5d/Em_c%E1%BB%A7a_ng%C3%A0y_h%C3%B4m_qua.png/220px-Em_c%E1%BB%A7a_ng%C3%A0y_h%C3%B4m_qua.png",
        number:9
    },
    {
      id: 'zxzx10',
      favourite: false,
      songName: "Chạnh lòng thương cô 2",
      artist: "Huy Vạc",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-2-eddc8.appspot.com/o/CH%E1%BA%A0NH%20L%C3%92NG%20TH%C6%AF%C6%A0NG%20C%C3%94%202%20(Official%20MV)%20-%20HUY%20V%E1%BA%A0C%20(Prod.%20H%C6%AFNG%20HACK).mp3?alt=media&token=eeee040a-5adf-42a7-a7ee-14bf4d5585f6",
      imgSrc:
        "https://i.ytimg.com/vi/xJa2vKez9XI/maxresdefault.jpg",
        number:10
    },
  ];
  
  export default songArray;
  