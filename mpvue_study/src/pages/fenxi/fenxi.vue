<template>
<div class="fenxi_Container">
  <div class="fenxi_Top">
  <div class="fenxi_junjia">4月参考均价</div>
  <div class="fenxi_jiage">86213元/平</div>
  </div>
   <div class="container">
    <div class="wrap">
       <p class="jiage_zoushi">价格走势图</p>
      <mpvue-echarts :echarts="echarts" :onInit="onInit" />
    </div>
  </div>
 <div class="goStudy">
      <button @tap="toDetail">散点图</button>
      <button @tap="torelitu">热力图</button>
    </div>
  </div>
</template>
<script>
import * as echarts from 'echarts/dist/echarts.simple.min'
import mpvueEcharts from 'mpvue-echarts'
function initChart (canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  })
  canvas.setChart(chart)
  var option = {
     title: {
      text: '价格走势图',
      },
    backgroundColor: '#fff',
    color: ['#37A2DA', '#67E0E3'],
    legend: {
      data: ['挂牌均价', '参考均价']
    },
    grid: {
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['12月','1月', '2月', '3月', '4月', '5月',]
    },
    yAxis: {
      x: 'center',
      type: 'value',
      min: 8,
      axisLabel : {
        formatter: '{value}W',
        
      },
      splitLine: {
        lineStyle: {
          type: 'dashed'
        },
      }
    },
    series: [{
      name: '挂牌均价',
      type: 'line',
      smooth: true,
      data: [8.75, 8.95, 8.89, 8.69, 8.78, 9.10],
    }, {
      name: '参考均价',
      type: 'line',
      smooth: true,
      data: [8.7, 8.8, 8.7, 8.50, 8.68, 9.02]
    }]
  }
  chart.setOption(option)
  return chart
}
export default {
  data () {
    return {
      echarts,
      onInit: initChart
    }
  },
 
  components: {
    mpvueEcharts
  },
   methods: {
    toDetail(){
      console.log('111')
    wx.navigateTo({
       url:'/pages/sandiantu/main'
      })
    },
    torelitu(){
      console.log('111')
    wx.navigateTo({
       url:'/pages/relitu/main'
      })
    }
    
  },
  onShareAppMessage () {}
}

</script>

<style scoped>
.wrap {
  width: 100%;
  height: 700rpx;
}
.fenxi_Container{
 display: flex;
 flex-direction: column;
}
.fenxi_Center {
 height: 400rpx;
 width: 100%;
 border: 1rpx solid #eee;
}
.echarts-wrap {
  width: 100%;
  height: 1000rpx;
}
.fenxi_junjia{
  font-size:40rpx;
  
}
.fenxi_jiage{
  margin-top:20rpx;
  margin-left:15rpx;
  color:#f40;
}
.jiage_zoushi{
  margin-top:40rpx;
 
}
</style>
