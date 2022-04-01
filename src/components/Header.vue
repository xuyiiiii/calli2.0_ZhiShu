<template>
  <div class="header">
    <el-container>
      <el-header>
        <el-row type="flex" class="bg" justify="space-between">
          <el-col :span="6">
            <a href="/"><img class="logo" :src="logo" alt="知书"></a>
          </el-col>
          <el-col :span="12" class="col">
            <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
              <el-menu-item index="3" >登录/注册</el-menu-item>
              <el-menu-item index="2" >推荐练习</el-menu-item>
              <el-menu-item index="1" >找字练习</el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-header>

    </el-container>
  </div>
</template>

<script>
import logo from "../assets/logo.png"
import '@/assets/font/font.css';
import bg2 from '../assets/bg2.svg'


export default {
  name: 'Header',
  props: {
    activeIndex: {
      type: String,
      default: '1'
    }
  },
  data(){
    return{
      logo:logo,
      radio:'1',
      bg2:bg2,
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
  padding: 0;
}

.bg {
  width: 100%;
  height: 64px;

  padding: 0;
  margin: 0;

  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 4px 4px rgba(86, 42, 42, 0.05);
  backdrop-filter: blur(4px);

  /* Note: backdrop-filter has minimal browser support */
}

.logo{
  /*width: 44px;*/
  height: 24px;
  padding: 20px 90px;
  right: 40px;

  /*font-family: 'GenRyuMin TW';*/
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  /* identical to box height */
}

.el-menu {
  float: right;
  position: relative;
  display: block;
  width: 100%;
  border: none;
  margin-right: 80px;

  background-color:transparent;
}



/*.col{*/
/*  float: right;*/
/*  padding: 0;*/
/*  margin: 0;*/
/*}*/

.el-image{
  float: top;
}

.el-menu--horizontal>.el-menu-item {
  height: 64px;
  line-height: 60px;
  margin: 0;
  border-bottom: 2px solid transparent;
  color: #000;
}

.el-menu--horizontal>.el-menu-item.is-active {
  border-bottom: 2px solid #f17b72;
  color: #303133;
}

.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
  background-color: #f17b72;
  color: #F9FAF9;
}

.el-menu-item{
  right: 0;
  padding: 0px 50px;
  float: right;
  font-family: ymlfont;
  /*overflow: hidden;*/
}


</style>
