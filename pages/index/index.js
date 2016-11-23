var Chart = require('../../utils/charts.js')
Page({
    data: {
        charts: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            line:[
                {
                    points: [
                        {x: 0, y: 20},
                        {x: 10, y: 40},
                        {x: 20, y: 100},
                        {x: 20, y: 10},
                        {x: 30, y: 20},
                        {x: 40, y: 60},
                        {x: 50, y: 90},
                        {x: 60, y: 20},
                        {x: 70, y: -10}
                    ]
                },
                {
                    points: [
                        {x: 10, y: 20},
                        {x: 30, y: 100},
                        {x: 60, y: 400},
                        {x: 90, y: 100}
                    ]
                }
            ]

        }
    },

    onReady: function () {
        var lineCharts = new Chart('line', {
            data: this.data.charts,
            colors: ["#7158ec", "#fec312", "#1db2f4", "#ff3444"],
            canvasId: 'canvas_id',
            radius : 50
        });
    }
})