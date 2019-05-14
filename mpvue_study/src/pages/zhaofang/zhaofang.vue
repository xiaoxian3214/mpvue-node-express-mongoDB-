<template>
    <div class="map_container">
        <map-route :route-info="routeInfo"></map-route>
    </div>
</template>

<script>
let plugin = requirePlugin("mapPlugin");

export default {
    data() {
        return {
            routeInfo: {}
        };
    },
    onShow() {
        let mapInfo = {
            startLat: 120.14209999999999,
            startLng: 30.319739999999985,
            endLat: 120.21893562813325,
            endLng: 30.298933058852146,
            endName: "杭州东站"
        };
        let routeInfo = {
            startLat: mapInfo.startLat, //起点纬度 选填
            startLng: mapInfo.startLng, //起点经度 选填
            startName: "我的位置", // 起点名称 选填
            endLat: mapInfo.endLat, // 终点纬度必传
            endLng: mapInfo.endLng, //终点经度 必传
            endName: mapInfo.endName || "", //终点名称 必传
            mode: "car" //算路方式 选填
        };
        this.routeInfo = routeInfo;
    }
};
</script>

<style>
.map_container {
    width: 100%;
    height: 100%;
}

.map {
    height: 100%;
    width: 100%;
}
</style>