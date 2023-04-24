export interface PopoularArtist {
  id: number;
  title: string | String;
  img: string | String;
  name:string
}
const popoularArtist: PopoularArtist[] = [
  {
    id: 1,
    title: "'Đồng ý' làm fan ruột của Đức Phúc thì nghe ngay",
    name:'Đức Phúc',
    img:"https://yt3.googleusercontent.com/uNtMsEqpSKHEdN7PXmGL5BO1FlYXtv10Rln9XO7bEwKkH86Jd4djv6s5JeWT9GYbpnLZU0AB=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    id:2,
    title:"'Thị Màu' Hòa Minzy và những bản Hit đỉnh nhất",
    name:'Hòa Minzy',
    img:"https://yt3.googleusercontent.com/Qv2BxjV2b7pfOsK0GTgfktNER8C7zLB8wPOHeIuAQu_gmFwA9gsmCPzVtYJr671ogNMjUNIVqA=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    id:3,
    title:'Ưng quá chừng bộ sưu tập Hit của AMEE',
    name:'AMEE',
    img:"https://static-images.vnncdn.net/files/publish/2022/5/27/hain7580-102.jpg"
  }
  ,
  {
    id:4,
    title:"'See Tình' và series Hit tạo nên thương hiệu",
    name:'Hoàng Thùy Linh',
    img:"https://ss-ava.saostar.vn/w800/pc/1677406920140/saostar-dtr5vulqcugl5op3.jpg"
  },
  {
    id:5,
    title:'Yêu Phúc Du đi nhà Phúc Du có nhạc hay',
    name:'Phúc Du',
    img:"https://images2.thanhnien.vn/Uploaded/thynhm/2022_12_03/phu-du-9826.jpg"},
    {
      id:6,
      title:'Cùng Sơn Tùng quẩy tung những bài hit',
      name:'Sơn Tùng MT-P',
      img:"https://yt3.ggpht.com/a/AATXAJw9NCNytgMKChpwG_9tokZNKHIpdy-N_x57fZ_f=s900-c-k-c0xffffffff-no-rj-mo"}
];
export default popoularArtist