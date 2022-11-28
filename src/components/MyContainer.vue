<template>
  <div class="container">
    <div class="header">铁路信号布置信息提取系统</div>
    <div class="body">
      <div class="left">
        <div class="btn">文件导入</div>
        <div class="btn">设备提取</div>
        <div class="btn">关系判断</div>
        <div class="btn">进路生成</div>
      </div>
      <div class="center">
        <canvas id="canvas" width="1300" height="800"></canvas>
      </div>
      <div class="right">
        <div class="info">信息展示</div>
        <div class="downloadBtn">数据导出</div>
      </div>
    </div>
    <div class="footer">连锁表</div>
  </div>
</template>

<script>
import { fabric } from "fabric";
export default {
  name: 'MyContainer',
  props: {
    msg: String
  },
  data() {
    return {
      panning: false
    }
  },
  methods: {
    initCanvas() {
      // 1. 实例化canvas 画布
      var canvas = new fabric.Canvas("canvas");
      // 2. 设置背景图片作为底图（这里导入图片使用require，不要 使用 '../../' 方式）
      // canvas.width / 4764  （4764 是我底图图片宽度）
      // canvas.height / 3367 （3367 是我底图图片宽度）
      canvas.setBackgroundImage(
        require("../assets/testImg.png"),
        canvas.renderAll.bind(canvas),
        {
          scaleX: canvas.width / 4764,
          scaleY: canvas.height / 3367
        }
      );

      //鼠标按下事件
      canvas.on("mouse:down", function() {
        this.panning = true;
        canvas.selection = false;
      });
      //鼠标抬起事件
      canvas.on("mouse:up", function() {
        this.panning = false;
        canvas.selection = true;
      });
      // 移动画布事件
      canvas.on("mouse:move", function(e) {
        if (this.panning && e && e.e) {
          var delta = new fabric.Point(e.e.movementX, e.e.movementY);
          canvas.relativePan(delta);
        }
      });
      // 鼠标滚动画布放大缩小
      canvas.on("mouse:wheel", function(e) {
        // const _that = this
        if (e && e.e) {
          var zoom = (e.e.deltaY > 0 ? -0.1 : 0.1) + canvas.getZoom();
          zoom = Math.max(0.5, zoom); //最小为原来的1/10
          zoom = Math.min(5, zoom); //最大是原来的3倍
          var zoomPoint = new fabric.Point(e.e.pageX, e.e.pageY);
          canvas.zoomToPoint(zoomPoint, zoom);
        }
      });
    }
  },
  created() {
  },
  mounted() {
    this.initCanvas();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url('../assets/bgImg.jpeg') no-repeat;
  background-size: auto 120%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  .header {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    font-weight: 800;
    color: #ffffff;
  }
  .body {
    width: 100%;
    flex: 1;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      width: 150px;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      .btn {
        width: 85%;
        height: 60px;
        background: rgba($color: #ffffff, $alpha: 0.1);
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
      }
    }
    .center {
      flex: 1;
      height: 100%;
      background: rgba($color: #ffffff, $alpha: 0.2);
    }
    .right {
      width: 150px;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      .info {
        width: 85%;
        height: 60%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        background: rgba($color: #ffffff, $alpha: 0.1);
      }
      .downloadBtn {
        width: 85%;
        height: 60px;
        background: rgba($color: #ffffff, $alpha: 0.1);
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
      }
    }
  }
  .footer {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    font-weight: 800;
    color: #ffffff;
  }
}
</style>
