<template >
    <el-tooltip
            class="box-item"
            effect="dark"
            :content="content"
            placement="top-start"
          >
        
          <slot></slot>
        </el-tooltip>
</template>
<script lang="ts">
export default {
    props:{
        content:String
    },
    setup(){

    }
}
</script>