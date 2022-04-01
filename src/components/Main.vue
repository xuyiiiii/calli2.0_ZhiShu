<template>
<div class="main">
  <el-container>
    <el-image :src="bg3" class="bg3"></el-image>
    <el-main id="el-main">
      <el-row>
        <el-col :span="12" id="word">
          <div>
            <span class="h1">具备知识信息的书法字数据库系统</span>
          </div>
          <div class="h2">
            <span>&nbsp;提供低门槛的书法字检索和练习体验</span>
          </div>
          <div style="padding: 10px 0;">
            <el-button type="danger" size="large" @click="goSearch">立即体验</el-button>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="demo-image" id="imageCol">
            <div class="block" v-for="fit in fits" :key="fit">
              <el-image
                  :src="bg1"
                  :fit="fit">
              </el-image>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-main>
<!--    <div id="searchContent">-->
      <div id="searchBg" >
        <div class="searchBgSmall" v-if="seen">
          <div style="padding: 20px 40px 10px 40px"><span style="font-family: ymlfont;">请选择检索条件</span></div>
          <div class="selectImgs">
            <options :options="selections1" v-model="selectValue" :isMultiply=true></options>
          </div>
        </div>
        <div class="searchButton">
          <el-button type="danger" style="font-size:16px;text-align: center">立即找字</el-button>
        </div>
      </div>
<!--    </div>-->
  </el-container>

</div>
</template>

<script>
import bg1 from '../assets/bg1.svg'
import bg3 from '../assets/bg3.svg'
import select1 from '../assets/select1.svg'
import select2 from '../assets/select2.svg'
import select3 from '../assets/select3.svg'
import select4 from '../assets/select4.svg'
import Options from './option'; //注意这里的路径

export default {
  name: "Main",

  components: {
    Options
  },

  data(){
    return{
      // height1:780,
      // width1:1440,
      bg1:bg1,
      bg3:bg3,
      // select1:select1,
      fits: ['cantain'],
      seen: false,
          // true,
      selectValue:[],
      selections1: [
        {
          index:0,
          img:select1,
          txt:'笔法'
        },
        {
          index:1,
          img:select2,
          txt:'结构'
        },
        {
          index:2,
          img:select3,
          txt:'字形'
        },
        {
          index:3,
          img:select4,
          txt:'书体'
        },
      ]
    };
  },

  mounted() {
    const height1 = window.innerHeight; //获取窗口的高度
    const width1 = window.innerWidth; //获取窗口的高度
    const h_main = document.getElementById("el-main");
    // const w_main = document.getElementById("el-main");
    const h_image = document.getElementById("imageCol")
    const w_image = document.getElementById('imageCol')
    const h_word = document.getElementById('word')
    h_main.style.height = height1 - 64 + "px";    //改变高度
    // w_main.style.width = width1 +'px'
    h_image.style.height = h_main.style.height
    w_image.style.width = width1/2 - 50 + "px";
    h_word.style.height = height1 - 64 + "px";
    console.log(h_image.style.height)
    const searchBg = document.getElementById("searchBg")
    searchBg.style.height = height1 - 64 + "px";
    searchBg.style.width = width1 + 'px'
    //



  },
  methods:{
    goSearch(){
      document.getElementById('searchBg').style.visibility='visible'
      document.getElementById('el-main').style.zIndex = -1
      this.seen = true
      // const height1 = window.innerHeight; //获取窗口的高度
      // const width1 = window.innerWidth; //获取窗口的高度

    },
}
}



</script>

<style scoped>
.main{
  background-color: #fff;
}

#el-main{
  padding: 0;
  position: absolute;
}

.block{
  width: inherit;
  height: inherit;
  left: 20px;
  padding: 0 0 0 50px;
}

.el-image{
  width: inherit;
  height: inherit;
  align-content: center;
  /*padding: 30px;*/
}

>>> .el-image__inner{
  width: 70%;
  /*padding: 0 0 0 50px;*/
  /*align-items: center;*/
  float: none;
}

#word{
  /*display: inline-block;*/
  padding: 180px 100px;
  height: inherit;
  align-items: center;
  vertical-align: center;
}

.h1{
  font-family: ymlfont;
  font-size: 3em;
  line-height:66px;
  color: black;
}

.bg3{
  position: absolute;
  width: 40%;
  top: 140px;
  overflow: hidden;
}

.h2{
  font-family: ymlfont;
  font-size: 1.2em;
  padding: 20px 0;
  color: #373737;
}

.el-button{
  font-family: ymlfont;
}

#searchContent{
  position: absolute;
  left: 0px;
  top: 0px;
  visibility: hidden;
}

#searchBg{
  position: relative;
  left: 0px;
  top: 0px;
  visibility: hidden;

  background: rgba(221, 221, 221, 0.3);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(8px);
  /* Note: backdrop-filter has minimal browser support */
}

.searchBgSmall{
  position: absolute;
  left: 50%;
  top: 34%;
  transform: translate(-50%,-50%);

  width: 900px;
  height: 240px;

  background: rgb(255, 255, 255);
  box-shadow: 0px 4px 4px rgba(189, 47, 37, 0.1);
  border-radius: 10px;
}

.searchButton{
  position: absolute;
  left: 50%;
  top: 70%;
  transform: translate(-50%,-50%);
}

.selectType{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.row-bg{
  display: flex;
  justify-content: space-around;
  padding: 0 20px;
}

.selectButton{
  width: 180px;
  height: 160px;
}

/*>>> .el-checkbox__inner {*/
/*  display: none;*/
/*  position: relative;*/
/*  border: 0;*/
/*}*/
/*.el-checkbox.is-bordered.el-checkbox--small{*/
/*  padding: 0;*/
/*  height: 150px;*/
/*}*/

/*>>> .el-checkbox__label{*/
/*  padding: 0;*/
/*}*/

/*>>> .el-checkbox__input .el-checkbox {*/
/*  Display: none;*/
/*  -webkit-appearance: none;*/
/*  -moz-appearance: none;*/
/*}*/

/*.el-checkbox.is-bordered+.el-checkbox.is-bordered {*/
/*  margin-left: -44px;*/
/*}*/

.selectImgs{
  display: flex;
  justify-content: center;
}

</style>