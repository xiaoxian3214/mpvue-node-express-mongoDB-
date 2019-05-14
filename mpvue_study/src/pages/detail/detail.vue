<template>
<div class="detailContainer">
  <div class="detail_top">
  <img class="detail_img" :src="detailObj.url">
   <div class="detail_top_jieshao">
    <div>
      <span>小区名: {{detailObj.location}}</span>
      </div>
   <div class="detail_top_1">
    <span>{{'面积: '+detailObj.area}}</span>
    <span>{{'房型: '+detailObj.room_shape}}</span>
   </div>
   <div class="detail_top_1">
     <span>{{'楼层: '+detailObj.floor}}</span>
   </div>
   <div>
     <span>{{'建造时间: '+detailObj.build_time}}</span>
   </div>
   <div class="detail_top_1">
     <span>{{'总价: '+detailObj.price+'万元'}}</span>
     <span>{{'每平米: '+detailObj.average_price}}</span> 
  </div>
  <div>
    <p>{{'地址: '+detailObj.detail_location}}</p>
  </div>
  </div>
</div>
<div class="detail_center">
  <div>周边基础设施数量</div>
  <p>{{'公交：'+detailObj.gongjiao}}</p>
  <p>{{'写字楼：'+detailObj.xiezilou}}</p>
  <p>{{'学校：'+detailObj.xuexiao}}</p>
  <p>{{'医院：'+detailObj.yiyuan}}</p>
  <p>{{'地铁：'+detailObj.ditie}}</p>
  <p>{{'购物：'+detailObj.gouwu}}</p>
</div>
<div class="detail_bottom">
<div>地图信息</div>
<map id="myMap" show-location />
</div>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
data(){
  return {
    detailObj:{}
  }
},
  computed: {
    ...mapState(['listTmp'])
  },
 beforeMount(){
  console.log(this)
   this.detailObj= this.listTmp[this.$mp.query.index]
 },

methods:{
  getLocations(){
      let _this = this
      wx.getSetting({
        success(res) {
          debugger
          // 判断用户是否授权过，
          // 未授权过、
          if (!res.authSetting['scope.userLocation']) {
            wx.authorize({
              scope: 'scope.userLocation',
              success(res) {
                // 用户允许 查看自己的位置
                console.log(res);
                _this.wxGetLocation()
              },
              fail(err) {
                console.log(err);
                // 当用户拒绝 查看自己的位置的时候  统计数据
                // 统计数据  地理位置为空
                _this.count();
              }
            })
          } else {
            // 授权过
            _this.wxGetLocation();
          }
        },
        fail(err) {
          console.log(err)
        }
      });
    },
    wxGetLocation(){
      let _this = this;
      wx.getLocation({
        // type: 'wgs84',
        success: function (res) {
          let latitude,longitude;
          latitude = res.latitude.toString();
          longitude = res.longitude.toString();
          wx.request({
            header:{
              "Content-Type": "application/text"
            },
            url:'http://apis.map.qq.com/ws/geocoder/v1/?location='+latitude+','+longitude+'&key=MVGBZ-R2U3U-W5CVY-2PQID-AT4VZ-PDF35',
            success: function(res) {
              _this.country = res.data.result.address_component.nation
              _this.province =res.data.result.address_component.province
              _this.city = res.data.result.address_component.city
              _this.district = res.data.result.address_component.district
              //_this.count();
              // console.log(res.data.result.address_component.nation,res.data.result.address_component.province,res.data.result.address_component.city,res.data.result.address_component.district)
            }
          });
        },
        fail: function(err) {
          console.log(err);
          console.log(112)
        }
      });
    },
}}
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
.detail_center div,
.detail_bottom div{
  background-color: #489b81;
  color:#666;
}
.detail_bottom{
  width: 100%;
}
.detail_center p{
  border-bottom: 2rpx solid #ccc;
}
#myMap{
  width: 100%;
  height: 500rpx;
  box-sizing: border-box;
  border:5rpx solid #ccc
}
</style>