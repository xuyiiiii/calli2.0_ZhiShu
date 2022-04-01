<template>
  <div class="hello">
    <div class="imageTopOut">
      <el-image :src="bg2" class="imageTopIn"></el-image>
    </div>
    <Header :active-index="active" class="header"></Header>
    <Main></Main>
    <!--    <Footer></Footer>-->
  </div>

</template>

<script>
import Header from '../components/Header'
import Main  from "@/components/Main";
import bg2 from '../assets/bg2.svg'


export default {
  name: "HelloWorld",
  data(){
    return {
      active: '1',
      bg2:bg2,
    }
  },
  components: {
    Header,
    Main,
  },
}
</script>

<style scoped>
.hello{
  /*background-image: url("../assets/bg2.svg");*/
}

.imageTopOut{
  position: absolute;
  float: top;
  overflow: hidden;
  width:1000px;
}

.imageTopIn{
  width: 26%;
  left: 60%;
}


</style>
