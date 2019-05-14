<template>
<div class="detailContainer">
  <div class="detail_top">
  <img class="detail_img" :src="fyDetail.url">
   <div class="detail_top_jieshao">
    <div>
      <span>小区位置: {{fyDetail.location}}</span>
      </div>
   <div class="detail_top_1">
    <span>面积: {{fyDetail.area}}</span>
    <span>房型: {{fyDetail.room_shape}}</span>
   </div>
   <div class="detail_top_1">
     <span>楼层: {{fyDetail.floor}}</span>
   </div>
   <div>
     <span>建造时间:{{build_time}}</span>
   </div>
   <div class="detail_top_1">
     <span>总价: {{fyDetail.price}}</span>
     <span>每平米: {{fyDetail.average_price}}</span> 
  </div>
  </div>
  </div> 
   <div class="detail_top">
     
     </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data(){
    return{
      fyDetail:{}
    }
  },
  computed: {
    ...mapState(['fyArr'])
  },
  beforeMount(){
     console.log(this);
    this.fyDetail = this.fyArr[this.$mp.query.index]
   
  }
}
</script>

<style>
.detailContainer {
  display: flex;
  flex-direction: column;
}
.detail_img {
 width:100%;
 height: 400rpx;
}
.detail_top_jieshao div {
  border-bottom: 2rpx solid #ccc;
}
.detail_top{
  width: 100%;
  border-bottom: 5rpx solid #ccc;
}
.detail_top_1 span{
  margin-right: 100rpx;
}
</style>
