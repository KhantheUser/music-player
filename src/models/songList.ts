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
      songName: "Người yêu cũ nhắn tin nhưng BP không trả lời",
      artist: "Bích Phương",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-55707.appspot.com/o/em%20b%E1%BB%8F%20h%C3%BAt%20thu%E1%BB%91c%20ch%C6%B0a%20-%20ng%C6%B0%E1%BB%9Di%20y%C3%AAu%20c%C5%A9%20nh%E1%BA%AFn%20tin%20h%E1%BB%8Fi%20nh%C6%B0ng%20b%C3%ADch%20ph%C6%B0%C6%A1ng%20kh%C3%B4ng%20mu%E1%BB%91n%20tr%E1%BA%A3%20l%E1%BB%9Di.mp3?alt=media&token=fc1cb93f-24aa-4ac0-b0bb-4bbbc891b487",
      imgSrc:"https://i.ytimg.com/vi/WAxxfzdcNdA/maxresdefault.jpg",
      number:1
        
    },
    {
      id: 'zxzx2',
      favourite: false,
      songName: "Em là kẻ đáng thương",
      artist: "Phát Huy T4",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-55707.appspot.com/o/EM%20L%C3%80%20K%E1%BA%BA%20%C4%90%C3%81NG%20TH%C6%AF%C6%A0NG%20LOFI%20-%20PH%C3%81T%20HUY%20T4%20%20Thanh%20Xu%C3%A2n%20C%E1%BB%A7a%20Ng%C6%B0%E1%BB%9Di%20Anh%20Y%C3%AAu%2C%20Anh%20%C4%90%C3%A3%20L%E1%BA%A5y%20Nh%C6%B0ng%20Ch%E1%BA%B3ng%20H%E1%BB%A9a.mp3?alt=media&token=5fa3f68b-8117-41ba-81a0-822f84d580b6",
      imgSrc:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/4/a/d/4/4ad439b918f3356addb5f237c1380ffc.jpg",
        number:2
    },
    {
      id: 'zxzx3',
      favourite: false,
      songName: "Tấm lòng son",
      artist: "Huỳnh Chương",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-55707.appspot.com/o/Tam%20Long%20Son%20Remix%20-Gi%E1%BB%8Dt%20Bu%E1%BB%93n%20V%C6%B0%C6%A1ng%20Tr%C3%AAn%20M%C3%A0u%20M%E1%BA%AFt%20Ai%20Remix%20Hot%20TikTok%20%20Nh%E1%BA%A1c%20Remix%20G%C3%A2y%20Nghi%E1%BB%87n%202022.mp3?alt=media&token=d442ad39-c4a4-4969-9425-2a615ca7711a",
      imgSrc:
        "https://i.ytimg.com/vi/fy4_qHjw7mg/maxresdefault.jpg",
        number:3
    },
    {
      id: 'zxzx4',
      favourite: false,
      songName: "Lý do là gì",
      artist: "Nguyễn Vĩ",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-55707.appspot.com/o/L%C3%BD%20Do%20L%C3%A0%20G%C3%AC%20-%20Nguy%E1%BB%85n%20V%C4%A9Cukak%20Remix%20Audio%20Lyrics%20Video.mp3?alt=media&token=d254efa4-31e4-44f1-9e0e-7856c6503289",
      imgSrc:
        "https://i.ytimg.com/vi/HzYbxPuMx-A/maxresdefault.jpg",
        number:4
    },
    {
      id: 'zxzx5',
      favourite: false,
      songName: "Hãy trao cho anh",
      artist: "Sơn Tùng - MTP",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-55707.appspot.com/o/S%C6%A0N%20T%C3%99NG%20M-TP%20%20H%C3%83Y%20TRAO%20CHO%20ANH%20ft.%20Snoop%20Dogg%20%20Official%20MV.mp3?alt=media&token=e1d47984-2bbf-457f-84cb-77643f14d4a6",
      imgSrc:
        "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2019/7/1/741911/Hay-Trao-Cho-Anh.jpg",
        number:5
    },
    {
      id: 'zxzx6',
      favourite: false,

      songName: "Từ em mà ra",
      artist: "Lil Zpoet",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-55707.appspot.com/o/T%E1%BB%AB%20Em%20M%C3%A0%20Ra%20(Whisky%20x%20Freak%20D%20Lofi%20Ver.)%20%20Lil%20Z%20Poet%20ft%20%C4%90%E1%BB%A9c%20Anh.mp3?alt=media&token=9be66456-a4e4-4639-88b9-d6361f886dec",
      imgSrc:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/0/a/7/d/0a7de1696f7d1d9ef3a456655a1a73e8.jpg",
        number:6
    },
    {
      id: 'zxzx7',
      favourite: false,
      songName: "Liệu giờ(What if?)",
      artist: "2T",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-55707.appspot.com/o/2T%20-%20LI%E1%BB%86U%20GI%E1%BB%9C%20(%20WHAT%20IF%20%20)%20x%20Venn%20(%20Prod.%20KayT%20)%20%20MV.mp3?alt=media&token=28de6bb7-2c4d-4cac-baa5-4f7f9d504a3f",
      imgSrc:
        "https://i1.sndcdn.com/artworks-000550210110-r1h3aw-t500x500.jpg",
        number:7
    },
    {
      id: 'zxzx8',
      favourite: false,
      songName: "Em không sai chúng ta sai",
      artist: "ERIK",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-55707.appspot.com/o/ERIK%20-%20Em%20Kh%C3%B4ng%20Sai%2C%20Ch%C3%BAng%20Ta%20Sai%20(Official%20Lyric%20Video).mp3?alt=media&token=d3921246-2ff8-4d25-946c-345023ea1c94",
      imgSrc:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/7/4/0/d/740d5e0fd272d2421d441e9fd5c08fdd.jpg",
        number:8
    },
    {
      id: 'zxzx9',
      favourite: false,
      songName: "Em của ngày hôm qua",
      artist: "Sơn tùng - MTP",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-55707.appspot.com/o/Em%20C%E1%BB%A7a%20Ng%C3%A0y%20H%C3%B4m%20Qua.mp3?alt=media&token=caf53a50-0eda-42d8-827e-6bce4849899c",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/vi/thumb/5/5d/Em_c%E1%BB%A7a_ng%C3%A0y_h%C3%B4m_qua.png/220px-Em_c%E1%BB%A7a_ng%C3%A0y_h%C3%B4m_qua.png",
        number:9
    },
    {
      id: 'zxzx10',
      favourite: false,
      songName: "Chạnh lòng thương cô 2",
      artist: "Huy Vạc",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-55707.appspot.com/o/CH%E1%BA%A0NH%20L%C3%92NG%20TH%C6%AF%C6%A0NG%20C%C3%94%202%20(Official%20MV)%20-%20HUY%20V%E1%BA%A0C%20(Prod.%20H%C6%AFNG%20HACK).mp3?alt=media&token=0a97238d-89a7-4d03-93f8-88a2f683a559",
      imgSrc:
        "https://i.ytimg.com/vi/xJa2vKez9XI/maxresdefault.jpg",
        number:10
    },
  ];
  
  export default songArray;
  