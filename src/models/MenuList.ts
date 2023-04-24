import type { VueElement } from "vue";
import "../icons";
export interface MenuList {
  id: number;
  icon: string;
  name: string;
  navigate : string
}
const menuArray: MenuList[] = [
  {
    id: 1,
    icon: "bi-house-door-fill",
    name: "Trang chủ",
    navigate:''
  },
  {
    id: 2,
    icon: "la-star",
    name: "Top 100",
    navigate:'top100'
  },
  {
    id: 3,
    icon: "co-bar-chart",
    name: "Bảng xếp hạng",
    navigate:'zing-chart'
  },
  {
    id: 4,
    icon: "bi-play-btn",
    name: "MV",
    navigate:'mv-music'
  },
  {
    id: 5,
    icon: "fa-microphone",
    name: "Artist",
    navigate:'none'
  },
  {
    id: 6,
    icon: "bi-journal-album",
    name: "Albums",
    navigate:'none'

  },
  {
    id: 7,
    icon: "fa-podcast",
    name: "Podcards",
    navigate:'none'

  },
];
export default menuArray;
