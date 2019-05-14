<template>
  <div @tap="toDetail" class="tmpContainer">
    <div class="tmpimg">
    <img :src="item.url" alt="">
    </div>
    <div class="tmp">
    <p>{{'小区名:'+item.location}}</p>
    <p>{{'房型:'+item.room_shape}}</p>
    <p>{{'建筑面积:'+item.area}}</p>
    <p>{{'总价:'+item.price+'万'}}</p>
    </div>
  </div>
</template>

<script>
export default {
props:[
  'item','index'
],
methods:{
  toDetail(){
    // 跳转详情页 + 传参过去index
    wx.navigateTo({
     url:'/pages/detail/main?index='+ this.index
    })
  }
}
}
</script>

<style>
.tmpContainer{
  height: 200rpx;
  width: 100%;
  border-bottom: 1rpx solid #ccc;
  display: flex;
  flex-direction:row;
}
.tmpimg img{
width: 300rpx;
height: 200rpx;
}
.tmp{
  font-size: 24rpx;
  color: #666;
  padding-left: 10rpx;
}
.tmp p{
  margin: 20rpx;
  font-weight: 700;
 
}
</style>
