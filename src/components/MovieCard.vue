<template >
    <div class="content z-0" >
        <slot name="text"></slot>
    </div>
    
    <div id="bg-viewport">
        <slot name="wallimg"></slot>
        <img class="bgpop" >
        
    </div>

</template>
<style>
    .bgpop {
        
        min-width: 10%;
        min-height: 10%;
        width: auto;
        height: auto;
        top: 0;
        left: 0;
        right: 0;
    }
    #bg-viewport {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        
    }
    .content {
        width: 100%;
        max-width: 100%;
        height: 100%;
        
        position: relative;
        z-index: 2;
    }
</style>