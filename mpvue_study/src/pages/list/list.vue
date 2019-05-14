<template>
 <div class="listContainer">
   <swiper indicator-dots indicator-color="#489b81" indicator-active-color="#ccc" autoplay>
     <swiper-item>
       <img src="/static/images/01.jpg" alt="">
       </swiper-item>
       <swiper-item>
       <img src="/static/images/02.jpg" alt="">
       </swiper-item>
       <swiper-item>
       <img src="/static/images/03.jpg" alt="">
       </swiper-item>
       <swiper-item>
       <img src="/static/images/04.jpg" alt="">
       </swiper-item>
    </swiper>
    <div class="listContainer_zonghui">
      <p>房源汇总数据</p>
    </div>
    <div>
      <ListTmp v-for="(item,index) in listTmp" :key="index" :item="item" :index="index"/>
    </div>
 </div>
</template>
<script>
import {mapState} from 'vuex'
import ListTmp from '../list_template/list_template.vue'
export default {
  components: {ListTmp},
  beforeMount(){
    //分发action修改状态
    this.$store.dispatch('getList')
  },
  computed: {
    //映射状态到本组件
    ...mapState(['listTmp'])
  }
}
</script>
<style>
.listContainer swiper {
  width: 100%;
  height: 300rpx;
}
.listContainer swiper img {
  width: 100%;
  height: 100%;
}
.listContainer_zonghui{
  height: 50rpx;
  width: 100%;
  color:#666;
  border: 2rpx solid #489b81;
}
</style>
