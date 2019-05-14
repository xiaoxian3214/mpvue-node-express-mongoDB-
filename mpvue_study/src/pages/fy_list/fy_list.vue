<template>
  <div>
    <div @tap="tofydetail(index)" v-for="(item,index) in fyArr" :key="index" class="fyContainer" >
      <div class=fy_img_border>
      <img class="fy_img" :src="item.url" alt="">
      </div>
      <div class="fy_info">
      <p class="fy_name">{{item.location}}</p>
      <p class="fy_fx">{{'房型: '+item.room_shape}}</p>
      <p class="fy_jzmj">{{'建筑面积: '+item.area}}</p>
    </div>
    <p class="fy_price">{{item.price+'w'}}</p>
  </div>
  </div>
</template>

<script>
const FY_URL ='http://localhost:3000/fy/list'
export default {
  data(){
        return{
          fyArr: []
        }
        },
    beforeMount(){
      this.$fly.get(FY_URL)
      .then( (response) => {
        console.log(response);
        let fyArr = response.data.data
        console.log(fyArr);
        this.$store.dispatch('getFyArr',fyArr)
        this.fyArr = fyArr
      })
      .catch( (error)=>{
        console.log(error);
      })
    },
    methods: {
      tofydetail(index){
        wx.navigateTo({
          url:'/pages/fydetail/main?index=' + index
        })
      }
    }
}
</script>

<style>
 .fyContainer {
   display: flex;
   padding: 10rpx;
   border-bottom: 1rpx solid #eee;
 }
 .fy_img {
   width:260rpx;
   height: 180rpx; 
   margin-right:20rpx;
 }
 .fy_info {
   width: 45%;
 }
 .fy_name {
   font-size: 32rpx;
   color: #333;
   white-space:nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
 }
 .fy_fx {
   font-size: 32rpx;
   color: #999;
   margin: 25rpx 0;
 }
 .fy_jzmj {
    font-size: 32rpx;
    color: #999;
 }
 .fy_price{
   font-size: 34rpx;
   font-weight: bold;
   color:red;
   margin-right: 0;
 }
 .fy_img_border{
   width: 280rpx;
   height: 180rpx;
 }
</style>
