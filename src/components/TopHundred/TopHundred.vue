<template>
 
<div class="flex p-[10px] md:p-[30px] flex-wrap justify-between" v-if="isLoading">
  <content-loader v-for="item in 15" :key="item"
      class="md:w-[18%] sm:w-[30%] w-[48%]"
      height="30vh"
      
      

:speed="2"
primaryColor="rgba(255,255,255,0.1)"
secondaryColor="rgba(0,0,0,0.1)"
>


  <rect  y="0" rx="3" ry="3" width="100%" height="50%" class="aspect-video"  /> 


<rect  y="55%" rx="3" ry="3" width="100%" height="20" /> 



</content-loader>

</div>
 
  <div class="px-[10px] md:px-[30px] py-[30px] top100 ">
    <div class="" v-for="item in top100" :key="item.title">
      <h2 class="text-white font-bold text-2xl">{{ item.title }}</h2>

      <div class="cardContainer flex justify-start mt-5 w-full flex-wrap">
        <div
          class="card my-4 px-[10px] sm:pr-[26px] w-full sm-500:w-1/2 md:w-1/3 lg:w-1/5"
          
          :key="data.encodeId"
          v-for="data in item.items"
        >
          <div class="aspect-square w-full rounded-md imageContainer overflow-hidden">
            <span class="absolute top-1 left-1 text-[#dfdcdc]">
              <v-icon name="bi-disc-fill" />
            </span>
            <div class="modal z-[2] flex items-center absolute top-0 left-0 w-full opacity-0 transition-all duration-150 ease-linear h-full bg-[rgba(0,0,0,0.4)] rounded-lg">
                    
                    <div class="flex w-full justify-evenly items-center">
                      <span class="text-white h-8 w-8 hover:bg-[rgba(255,255,255,0.2)] transition-all duration-150 ease-linear flex items-center justify-center rounded-full ">
                      <v-icon name="fa-regular-heart"/>
                    </span>
                    <span @click="changePageDetail(data.encodeId)" class="h-10 w-10 flex items-center justify-center  border-[1px] text-white border-white rounded-full">
                      <v-icon name="fa-play"/>
                    </span>
                    <span class="text-white h-8 w-8 hover:bg-[rgba(255,255,255,0.2)] transition-all duration-150 ease-linear flex items-center justify-center rounded-full">
                      <v-icon name="fa-ellipsis-h"/>
                    </span>
                    </div>
                  </div>
            <img
              class="w-full h-full rounded-md"
              v-lazy="data.thumbnail"
              alt=""
            />
          </div>
          <el-tooltip
            class="box-item"
            effect="dark"
            :content="data.title"
            placement="top-start"
          >
            <h2
              class="truncate hover:text-[#7a0a96] cursor-pointer w-full text-[#f1f1f1] font-semibold mt-3"
            >
              {{ data.title }}
            </h2>
          </el-tooltip>
          
            <p class="text-second text-sm font-medium mt-2">
              {{ sliceString(data.sortDescription, 44) }}
            </p>
          
        </div>
      </div>
    </div>
    <div class="h-20">

    </div>
  </div>
</template>
<script lang="ts">
import { ContentLoader } from 'vue-content-loader'

import { defineAsyncComponent, reactive, ref } from "vue";
import axios from "axios";
import { ElTooltip } from "element-plus";
import { sliceString } from "@/customFunction";

const LoadingVue =defineAsyncComponent(()=>import('@/components/customComponents/LoadingVue.vue'));
import { useRouter } from "vue-router";
export default {
  components: { ElTooltip ,ContentLoader},
  setup() {
    const router = useRouter();
    let top100: any = reactive([]);
    let isLoading = ref<boolean>(true);
    const getTop100 = async () => {
      try {
        const returnData = await axios.get(
          "https://server-tau-six.vercel.app/api/top100"
        );

        returnData.data.data.forEach((item: any) => top100.push(item));
        isLoading.value = false;
      } catch (e) {
        console.log(e);
      }
    };
    getTop100();

    const changePageDetail = (encodeId100: string) => {
      router.push({
        path: "/top100/detail",
        query: {
          id: encodeId100,
        },
      });
     
    };
    return { top100, sliceString, LoadingVue, isLoading, changePageDetail };
  },
};
</script>
<style lang="scss">
.top100 {
 
  .cardContainer {
    .card {
     

      
      padding-left: 0;
      .imageContainer {
        img {
          transition: all 0.2s linear;
        }
        position: relative;
        .modal {
          position: absolute;
          opacity: 0;
          top: 0;
          right: 0;
          left: 0;
          height: 100%;
          z-index: 2;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          cursor: pointer;
          transition: all 0.2s linear;

          span {
            color: white;
          }
        }
        &:hover .modal {
          opacity: 1;
        }
        &:hover img {
          transform: scale(1.2);
          border-radius: 6px;
        }
      }
    }
  }
}
</style>
