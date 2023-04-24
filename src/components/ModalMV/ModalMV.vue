<template >
    <div class="h-screen   bg-[rgba(0,0,0,0.7)]  transition-all duration-1000  ease-linear fixed  top-0  z-[20] p-14 design-center w-full" :class="{'left-0':visible,'translate-y-[100%]':!visible}" >
        <div class="relative">
            <span @click="handleVisible" class="absolute h-10 w-10 rounded-full transition-base hover:bg-[rgba(255,255,255,0.1)] -top-10 right-0 text-purple-primary">
                <v-icon name="io-close" scale="2"/>
            </span>

            <iframe  class="aspect-video w-[100vw] md-900:w-[60vw]" :src="src" title="(Tune tẩm đá số 04) Đủ trải sẽ thấm - Mike x Chiennhatlang" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    
    </div>
</template>
<script lang="ts">
import { VideoPlayer } from '@videojs-player/vue'
import { useStore } from '@/store';
import { computed } from 'vue';
export default {
    setup(){
        const store = useStore()
        
        
        const src = computed(()=> store.state.modalMV.src)
        const visible = computed(()=> store.state.modalMV.visible)
        console.log(src)
        
        const handleVisible = ()=>{
            store.commit('changeModalMV',{visible:false,src:'l_GigiDg3W'}) 
        }
        return {handleVisible,src,visible}
    },
    components :{VideoPlayer}
}
</script>
<style lang="scss">

</style>