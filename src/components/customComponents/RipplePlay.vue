<template >
  <div class="ripple">
    <button class="design-center">
        <v-icon name="fa-play"/>
    </button>
  </div>
</template>
<style lang="scss" scoped>
$color:white;


.ripple
{
  
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  height: 50px;
  width: 50px;
}
button
{
  background:rgb(155,77,224);
  cursor:pointer;
  border: 2px solid rgb(155,77,224);
  color: white;
  height: 50px;
  width: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 100%;
  text-transform: uppercase;
  font-family: 'Muli-LightItalic', Helvetica;
  font-size: 20px;
  line-height: 30px;
  animation: ripple 1.5s linear infinite;
  transition: all 0.7s ease;


  &:hover
  {
   transform: scale(1.1);
  }
  &:focus
  {
    outline:none;
  }
}

@keyframes ripple {
    0% {
      box-shadow: 0 0 0 0 rgba(155,77,224,0.4),
        0 0 0 1px rgba(155,77,224,0.4),
        0 0 0 3px rgba(155,77,224,0.4),
        0 0 0 5px rgba(155,77,224,0.4);
    }
    100% {
      box-shadow: 0 0 0 0 rgba($color, 0.3),
        0 0 0 4px rgba($color, 0.3),
        0 0 0 20px rgba($color, 0),
        0 0 0 30px rgba($color, 0);
    }
}


    
</style>