<template>
    <div class="p-[10px] md:px-[30px] mt-10">
        <h2 class="font-bold text-center text-[#848484] mb-5">Đối tác âm nhạc</h2>
        <div class="flex flex-wrap ">
            <div class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-[12.5%]   pr-5  " v-for="item in data" :key="item.id">
                <div class="bg-red-300 aspect-video w-full rounded-lg overflow-hidden mb-6">
                    <img v-lazy="item.img" class="h-full w-full " alt="">
                </div>
            </div>

        </div>
    </div>
</template>
<script lang="ts">
export default {
    props : {
        data:Object
    }
}
</script>
