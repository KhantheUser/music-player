<template>
      <div  class="flex items-center loadingCom justify-center w-full " >
        
        <div class="w-[90%] md:w-1/2 flex  flex-col items-center">
           
            <div class="w-2/3 flex justify-center">
                
                <img src="/img/alanwalker.png" class="w-full"  alt="">
            </div>
            <h2 class="font-bold text-white my-4 text-left text-xl">Loading...</h2>
            <div class="loadingContain border-[1px]  w-[100%]  border-white">
                    <div class="loading "></div>
                </div>
         
            
        </div>
       

    </div>
</template>
<style lang="scss">
.loadingCom{
    height: calc(100% - 71px - 204px);
}

.loading {
    font-weight: bold;
    font-size: 20px;
    text-align: center;
  height: 30px ;
  width: 0;
  
  background-color: #984cdb;
  animation: loading 3s linear infinite;
  
  
}
@keyframes loading {
    60%{
        width: 50%;
    }
    100%{
        width: 100%;
    }
}
    
</style>