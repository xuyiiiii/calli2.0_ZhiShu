<template>
  <div class="chooser">
    <div class="chooser-list">
      <div id="liIn"
           :style="cssStyle"
           v-for="(item, index) in options" :key="index"
           @click="optionsClick(item)"
           :class="{active: checkActive(item)}">
        <div class="liInIn">
          <div class="sImgOut"><img :src="item.img" class="sImgIn"></div>
          <div class="sTxt">{{item.txt}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'options',
  model: {
    prop: 'currValArr',
    event: 'input'
  },
  props: {
    currValArr: Array,
    options: Array, //传入的数组
    isMultiply: { //是否是多选。默认为false：单选；true：多选
      type: Boolean,
      default: false
    },
    cssStyle: Object //可以自定义单选或者多选的样式
  },
  methods: {
    optionsClick(item) {
      if (this.isMultiply === false) { //单选
        this.$set(this.currValArr, 0, item) // 将该值设为当前数组的第一项
      } else { //多选
        if (this.currValArr.indexOf(item) === -1) {
          // 当前数组中没有该值则push到数组
          this.currValArr.push(item)
        } else {
          //当前数组中有该值，找到该值下标并删除
          this.currValArr.splice(this.currValArr.indexOf(item), 1)
        }
      }
    },
    checkActive (item) {
      if (this.isMultiply === false) {
        this.currValArr.length = 1
      }
      return this.currValArr.indexOf(item) !== -1
    }
  },


}
</script>

<style scoped>
ul, li {
  margin: 0;
  padding:0;
  list-style: none;
}
.chooser {
  position: relative;
  display: inline-block;
}
#liIn{
  margin: 5px;
  width: 200px;
  height: 150px;
  line-height: 40px;
  border-radius: 7px;
  display: inline-block;
  box-sizing: border-box;
  border: 1px solid #F5F5F5;
  color: #494949;
  text-align: center;
  background: #f5f5f5;
  cursor:pointer;
  font-family: ymlfont;
}
#liIn:focus, #liIn:hover{
  box-sizing: border-box;
  cursor:pointer;
  background: #fafafa;
  border-color: #fafafa;
  color: #CD5E57;
}

#liIn.active {
  /*border-color: #E3766B;*/
  color: #097fe0;
  background: #fafafa;
  box-sizing: border-box;
  border: 2px solid #E3766B;
}

.sImgOut{
  width: inherit;
  height: inherit;
  padding-top: 10px;
}

.sImgIn{
  width: 50%;
  /*height: 76%;*/
  filter: drop-shadow(0px 4px 4px rgba(184, 152, 150, 0.4));
}

.liInIn{
  display: flex;
  flex-direction: column;
}

.sTxt{
  position: relative;
  top: -17px;
  font-size: 16px;
  color: #494949;
}
</style>