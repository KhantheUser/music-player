<template>
  <div class="trackList">
    <div class="top">
      <img :src="track" alt="" />
      <p class="trackName">Sample Name <span class="trackSpan">Artist</span></p>
    </div>
    <div class="bottom">
      <span>
        <v-icon name="hi-solid-volume-up" />
        
      </span>
      <input type="range" name="" id="" />
      <span>
        <v-icon name="md-queuemusic-sharp"/>
      </span>
      <span>
        <v-icon name="co-screen-desktop"/>
      </span>
      
    </div>
  </div>
</template>
<script lang="ts">
import track from '@/assets/img/track.png';
export default {
data(){
  return {track}
}
}

</script>
<style lang="scss" scoped>
@import "@/components/TrackList/TrackList.scss";
</style>

