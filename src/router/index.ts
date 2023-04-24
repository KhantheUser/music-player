import { createRouter, createWebHistory } from "vue-router";
import MVDetail from '@/components/MVDetail/MVDetail.vue'
import TopHundred from "@/components/TopHundred/TopHundred.vue";
import LayoutMusics from "@/components/LayoutMusics/LayoutMusics.vue";
import MainContainer from "@/components/MainContainer/MainContainer.vue";
import Top100Detail from "@/components/Top100Detail/Top100Detail.vue";
import MVMusic from "@/components/MVMusic/MVMusic.vue";
import ArtistDetail from "@/components/ArtistDetail/ArtistDetail.vue";
import EveryMusic from '@/components/EveryDayMusic/EveryDayMusic.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component: MainContainer
    },
   
    {
     path : '/top100',
     component:TopHundred,
     
    },
    {
      path:'/top100/detail',
      component : Top100Detail
    },
    {
      path : '/zing-chart',
      component:LayoutMusics
     },
     {
      path:'/mv-music',
      component : MVMusic
     },
     {
      path:'/mv-music/detail',
      component : MVDetail
     },
     {
      path:'/artist-detail',
      component : ArtistDetail
     },
     {
      path:'/music-everyday',
      components :{
        EveryMusic
      }
     }
  ],
});

export default router;
