<template lang="pug"> 
  #app
    PmHeader
    router-view
    PmFooter
</template>

<script>
import PmFooter from "@/components/layout/Footer";
import PmHeader from "@/components/layout/Header";

export default {

  components:{
    PmFooter,
    PmHeader,
  },
  
};
</script>

<style lang="scss">
.custom {
  margin-top: 30px;
}
// reslatar elemet selected
.is-active {
  border: 3px #23d160 solid;
}
</style>
