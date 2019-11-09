<template>
  <div id="app">
    <LayOut/>
  </div>
</template>
<script>
import LayOut from 'layout'
export default {
  
  components:{
    LayOut,
  },
  updated(){
    console.log(location.pathname)

  }

}

</script>

<style lang="less">
@import 'assets/css/index.less';
#app {
  width: 100%;
  height:100%;
  overflow: hidden;
  
}


</style>
