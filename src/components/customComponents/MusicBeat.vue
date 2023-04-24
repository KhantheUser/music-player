<template>
    <div class="flex justify-between h-[17px]  beatContain">
        <div class="beat beat1"></div>
        <div class="beat beat2"></div>
        <div class="beat beat3"></div>
        <div class="beat beat4"></div>
    </div>
</template>
<style lang="scss">
.beatContain {
    transform: rotate(180deg);
}
.beat {
    height: 10px ;
    width: 3px;
    margin: 0 1px;
    min-width: 3px;
    background: white;
}
.beat1{
    animation: move 600ms linear infinite alternate-reverse;
}
.beat2{
    animation: move 300ms linear infinite alternate-reverse;

}
.beat3{
    animation: move 500ms  linear infinite alternate-reverse;

}
.beat4{
    animation: move 450ms linear infinite alternate-reverse;

}
@keyframes move {
    0%{
        height: 15px;

    }
    50%{
        height: 10px;
    }
    100%{
        height: 15%;
    }
}
    
</style>