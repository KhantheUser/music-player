export interface NewBXH {
    id:number;
    img :string |String;
    name:string|String;
    artist:string|String;
    date:string|String,
    srcSong:string
}
const newBXHArray:NewBXH[]=[
    {
        id:1,
        name:'Khỏi Phải Makeup',
        artist:'Bùi Công Nam , Ricky Star',
        date:'06.04.2023',
        img:"https://lyricvn.com/wp-content/uploads/2023/04/7cf3621a3cce37d09bef82a609813013.jpg",
        srcSong:'https://firebasestorage.googleapis.com/v0/b/spotify-2-eddc8.appspot.com/o/Kh%E1%BB%8Fi%20Ph%E1%BA%A3i%20MakeUp%20-%20B%C3%B9i%20C%C3%B4ng%20Nam%20x%20Ricky%20Star%20x%20Anngo%20(Fillinus)%20_%20Happy%20Version%20(1).mp3?alt=media&token=24fe35da-d7f7-4c5b-81ac-77a9f14d1d6f'
    },
    {
        id:2,
        name:'Họ Đâu Thương Em',
        artist:'Phan Duy Anh , Ngân Ngân',
        date:'29.03.2023',
        img:"https://baochauelec.com/cdn/images/tin-tuc/loi-bai-hat-ho-dau-thuong-anh-phan-duy-anh-ban-chuan.jpg",
        srcSong:'https://firebasestorage.googleapis.com/v0/b/spotify-2-eddc8.appspot.com/o/H%E1%BB%8C%20%C4%90%C3%82U%20TH%C6%AF%C6%A0NG%20EM%20-%20PHAN%20DUY%20ANH%20ft%20NG%C3%82N%20NG%C3%82N%20_%20OFFICIAL%20MUSIC%20VIDEO.mp3?alt=media&token=6b17968c-93b6-4ca8-98ad-94a713353679'
    },
    {
        id:3,
        name:'Cân Bằng',
        artist:'Bức Tường',
        date:'08.04.2023',
        img:"https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/5/a/c/65ac05905bbbadacb35419aae20d4740.jpg",
        srcSong:'https://firebasestorage.googleapis.com/v0/b/spotify-2-eddc8.appspot.com/o/B%E1%BB%A9c%20T%C6%B0%E1%BB%9Dng%20-%20C%C3%82N%20B%E1%BA%B0NG%20_%20Official%20Music%20Video%20_.mp3?alt=media&token=1e1d2245-6402-4710-8ca1-a0f22181bbf0'
    },
    {
        id:4,
        name:'Vụn vỡ',
        artist:'Hồ Quang Hiếu',
        date:'03.04.2023',
        img:"https://i.ytimg.com/vi/A9D1_ScMl7s/maxresdefault.jpg",
        srcSong:'https://firebasestorage.googleapis.com/v0/b/spotify-2-eddc8.appspot.com/o/H%E1%BB%92%20QUANG%20HI%E1%BA%BEU%20-%20V%E1%BB%A4N%20V%E1%BB%A0%20_%20OFFICIAL%20MUSIC%20VIDEO.mp3?alt=media&token=ded10732-af91-480b-af74-3adc5b591c32'
    },
    {
        id:5,
        name:'Đêm Cô Đơn',
        artist:'Nguyên Khang , Ali Hoàng Dương',
        date:'08.04.2023',
        img:"https://i.ytimg.com/vi/NQzzmAEHa80/maxresdefault.jpg",
        srcSong:'https://firebasestorage.googleapis.com/v0/b/spotify-2-eddc8.appspot.com/o/%C4%90%C3%8AM%20C%C3%94%20%C4%90%C6%A0N%20-%20PH%C6%AF%E1%BB%A2NG%20V%C5%A8%20ft.%20L%C3%82N%20NH%C3%83%20t%E1%BA%A1i%20%23maylangthang.mp3?alt=media&token=7a1c2472-f54b-4ce7-ad20-5ae000cb183d'
    },
    {
        id:6,
        name:'Mẹ Đơn Thân',
        artist:'Khánh Trung',
        date:'31.03.2023',
        img:"https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/0/a/4/b0a4da8f9e5e9f9ed5d0d899abbc8ebc.jpg",
        srcSong:'https://firebasestorage.googleapis.com/v0/b/spotify-2-eddc8.appspot.com/o/M%E1%BA%B8%20%C4%90%C6%A0N%20TH%C3%82N%20-%20KH%C3%81NH%20TRUNG%20x%20L%C3%8A%20CH%C3%8D%20TRUNG%20_%20LYRIC%20VIDEO%20-%20Em%20mang%20ph%E1%BA%ADn%20l%C3%A0%20thi%E1%BA%BFu%20n%E1%BB%AF%2C%20th%C3%A2n%20em%20ch%E1%BB%8Bu....mp3?alt=media&token=5c01e6de-a586-468d-9fef-3d0f2547f9bd'
    },
]
export default newBXHArray