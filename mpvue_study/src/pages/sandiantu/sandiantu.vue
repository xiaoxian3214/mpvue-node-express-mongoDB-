<template>
    <div class="container">
    <div class="wrap">
      <mpvue-echarts :echarts="echarts" :onInit="onInit" />
    </div>
    <div>
      <img src="/static/images/02.png" alt="">
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts/dist/echarts.min'
import mpvueEcharts from 'mpvue-echarts'

function initChart (canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  })
  canvas.setChart(chart)

  var data = []
  var data2 = []

  for (var i = 0; i < 10; i++) {
    data.push(
      [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 40)
      ]
    )
    data2.push(
      [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100)
      ]
    )
  }

  var axisCommon = {
    axisLabel: {
      textStyle: {
        color: '#C8C8C8'
      }
    },
    axisTick: {
      lineStyle: {
        color: '#fff'
      }
    },
    axisLine: {
      lineStyle: {
        color: '#C8C8C8'
      }
    },
    splitLine: {
      lineStyle: {
        color: '#C8C8C8',
        type: 'solid'
      }
    }
  }

  var option = {
    color: ['#FF7070', '#60B6E3'],
    backgroundColor: '#eee',
    xAxis: axisCommon,
    yAxis: axisCommon,
    legend: {
      data: ['aaaa', 'bbbb']
    },
    visualMap: {
      show: false,
      max: 100,
      inRange: {
        symbolSize: [20, 70]
      }
    },
    series: [{
      type: 'scatter',
      name: '优秀房源分布',
      data: data
    },
    {
      name: '出售房源分布',
      type: 'scatter',
      data: data2
    }
    ],
    animationDelay: function (idx) {
      return idx * 50
    },
    animationEasing: 'elasticOut'
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

  onShareAppMessage () {}
}
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 300px;
}
</style>
