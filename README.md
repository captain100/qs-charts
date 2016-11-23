#### 微信小程序图表插件

> 目前实现了折现图

```
   使用时引入charts.js

   onReady: function () {
        var lineCharts = new Chart('line', {
            data: this.data.charts,
            colors: ["#7158ec", "#fec312", "#1db2f4", "#ff3444"],
            canvasId: 'canvas_id',
            radius : 50
        });
    }
    
```