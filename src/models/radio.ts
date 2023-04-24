export interface Radio{
    id:number;
    img1 : string|String;
    img2 : string|String;
    name: string | String;
    title:string | String;
}
const radioArray:Radio[] = [
    {
        id:1,
        img1:"https://photo-xone.zmdcdn.me/xone/image/202204182313c4e6ef4458df2c5a83c05d58d40e6288.jpg",
        img2:"https://upload.wikimedia.org/wikipedia/commons/8/8a/Xone-logo.jpg",
        name:"XONE Radio",
        title:"119 đang nghe"
    },
    {
        id:2,
        img1:"https://avatar-ex-swe.nixcdn.com/playlist/2018/07/11/f/3/8/9/1531284472148_500.jpg",
        img2:"https://i1.sndcdn.com/avatars-000568444800-x3bkor-t500x500.jpg",
        name:"V-POP",
        title:"962 đang nghe"
    },
    {
        id:3,
        img1:"https://znews-photo.zingcdn.me/w660/Uploaded/izhqv/2020_01_10/DSC2869.jpg",
        img2:"https://voiz-prod.s3.cloud.cmctelecom.vn/uploads/avatar/filename/418023/0550af6f55f055cd.jpg",
        name:"Pladio",
        title:"44 đang nghe"
    },
    {
        id:4,
        img1:"https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/3/a/d/f/3adfc5e2c804b2496ca49343efc6cfb7.jpg",
        img2:"https://photo-playlist-zmp3.zadn.vn/s1/v2/background-playlist?src=HavtoclCgWuG7IRz8HSox1NUi7uWN72bMutyT7G79gLVdwScAKCceb-Qfo4nHJka3fQX9s5CQgCEaA0bRqveym2Hf75X6JkbNiQdEsrTRgaObAbg3X5hemsJgtHsGcEbGzgeEJX5R_qDo-DtTcUiVABb8eAJR_aIXaVtWelUC1APr2KLu1V7H09X0DGVQnJFAA2BLY9z&cv=1&size=thumb_240_240",
        name:"Chạm",
        title:"203 đang nghe"
    },
    {
        id:5,
        img1:"https://avatar-ex-swe.nixcdn.com/playlist/share/2022/12/02/c/5/f/7/1669981159161.jpg",
        img2:"https://i.ytimg.com/vi/qNxgatD0P_A/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGD8gEyh_MA8=&rs=AOn4CLBFGwgEqkGcuTVAgODLc1w6LNeiHw",
        name:"On Air",
        title:"47 đang nghe"
    },
    {
        id:6,
        img1:"https://i.ytimg.com/vi/pTt29G91PKA/maxresdefault.jpg",
        img2:"https://i.ytimg.com/vi/EiEYSRNH1D4/maxresdefault.jpg",
        name:"Bolero",
        title:"437 đang nghe"
    },
    {
        id:7,
        img1:"https://avatar-ex-swe.nixcdn.com/playlist/share/2018/12/25/8/4/3/8/1545728990046.jpg",
        img2:"https://avatar-ex-swe.nixcdn.com/playlist/share/2019/06/26/4/5/7/b/1561518269184.jpg",
        name:"US-UK",
        title:"98 đang nghe"
    },
    {
        id:8,
        img1:"https://photo-xone.zmdcdn.me/xone/image/202204182313c4e6ef4458df2c5a83c05d58d40e6288.jpg",
        img2:"https://upload.wikimedia.org/wikipedia/commons/8/8a/Xone-logo.jpg",
        name:"Bolero",
        title:"437 đang nghe"
    },
    {
        id:9,
        img1:"https://znews-photo.zingcdn.me/w660/Uploaded/izhqv/2020_01_10/DSC2869.jpg",
        img2:"https://voiz-prod.s3.cloud.cmctelecom.vn/uploads/avatar/filename/418023/0550af6f55f055cd.jpg",
        name:"US-UK",
        title:"98 đang nghe"
    },
]
export default radioArray