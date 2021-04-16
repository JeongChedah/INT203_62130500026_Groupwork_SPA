<template>
    <div class=" z-0"  style="background-color: #1b1b1b;">
    <div class="content" >
        <slot name="text"></slot>
    </div>
    <div id="bgimg">
        <img class="bgpop" >
        <slot name="wallimg"></slot>
    </div>
</div>
</template>
<style>
    .bgpop {
        display: block;
  min-width: 10%;
  min-height: 10%;
  width: auto;
  height: auto;
  max-width: none;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  

    }
    #bgimg {
        position: absolute;
        margin-top:0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        
    }
    .content {
        width: 100%;
        max-width: 100%;
        height: 100%;
        margin: 0 ;
        top: 0;
        position: relative;
        z-index: 2;
    }
</style>