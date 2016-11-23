/*
* Charts 
* 在微信小程序中使用图表
* line 折线图
*
 */
var Charts =  function (type, opt) {
    // var type = param.type,
    //     data = param.data,
    //     colors = param.colors || [''],
    //     canvasId = param.canvasId,
    //     context = wx.createContext(),
    //     options = param.options || {}


    var chartsType = {
        line : createLineCharts
    }

    return chartsType[type](opt)
} 
// 折线图
function createLineCharts(param) {
    console.log(param)
    var line = param.data.line,
        labels = param.data.labels,
        colors = param.colors || [''],
        canvasId = param.canvasId,
        context = wx.createContext();

    var cMargin = param.cMargin || 10;

    var wlabel = param.wlabel || 300,
        hlabel =  param.hlabel || 225,
        isShowBackground_line = param.isShowBackground_line || false,
        between = 20;
    
    var Xmax, Ymax, Xmin, Ymin;

    function getRangeValues(data) {
        

    }
    // 比较大小
    function getMax (pervalue, current) {
        if (pervalue >= current) return pervalue
        return current
    }
    // 比较大小
    function getMin (pervalue, current) {
        if (pervalue < current) return pervalue
        return current
    }



    getRangeValues(line)
    // 设置图标
    function chartset () {
        context.translate(cMargin, hlabel + cMargin)
        // context.setLineJoin('miter')
        context.setLineWidth('0.5')
    }

    //画轴
    function drawAxis(x, y, X, Y) {
        context.beginPath();
        context.moveTo(x,y);
        context.lineTo(X,Y);
        context.setStrokeStyle('#cccccc');  //x Axis and y Axis border color
        context.closePath();
        context.stroke();
    }
    // 绘制背景线
    function makerMap(_wlabel, _hlabel, _between, isShow) {
        if (!isShow) {
            // 设置y 轴
            drawAxis(0, 0, 0, hlabel * -1)
            // 设置x 轴
            drawAxis(0, 0, wlabel, 0)
            return 
        }

        for (var i = 0; i < parseInt(_wlabel/_between); i++ ) {
            drawAxis(i * _between, 0, i * _between, _hlabel * -1)
        }
        for (var h = 0; h < parseInt(_hlabel/_between); h++ ) {
            drawAxis(0, h * _between * -1, _wlabel, h * _between * -1)
        }
    }

    function drawLine(data, color) {
        if (data.length > 0) {
            context.beginPath()
            context.setStrokeStyle(color)
            context.moveTo(data[0].x, data[0].y * -1)
        }
        for(var i = 1; i< data.length; i++ ){
            context.lineTo(data[i].x * 2, data[i].y * -1)
        }  
        context.stroke();
        context.closePath()
    }

    function drawLineQuadratic(data, color) {
        var cpx = 10, cpy = -20;
        if (data.length > 0) {
            context.beginPath()
            context.setStrokeStyle(color)
            context.moveTo(data[0].x, data[0].y * -1)
        }
        for(var i = 1; i< data.length; i++ ){
            cpx = ( data[i].x - data[i-1].x ) / 2 + data[i-1].x
            cpy = ( data[i].y - data[i-1].y ) / 2 + data[i-1].y 
            console.log(cpx, cpy)
            context.quadraticCurveTo(cpx, cpy * -1, data[i].x * 2, data[i].y * -1)
        } 
        context.stroke();
        context.closePath()
    }


    console.log(line, colors, canvasId)


    chartset()
    

    // 绘制
    console.log(wlabel, hlabel, wlabel/line[0].points.length)
    makerMap(wlabel, hlabel, wlabel/line[0].points.length, isShowBackground_line)
    drawLine(line[0].points, colors[0])
    drawLine(line[1].points, colors[1])
    // drawLineQuadratic(line[0].points,colors[2])




    wx.drawCanvas({
        canvasId: canvasId,
        actions: context.getActions()
    })
}


module.exports = Charts
