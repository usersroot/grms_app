<template>
  <div>
    <h2>用户分布</h2>
    <canvas id="myChart" width="800" height="500"></canvas>
  </div>
</template>

<script>
window.onload=function(){
var ctx = document.getElementById("myChart").getContext("2d");
var data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
            {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
            }
            ]
            };
/// 动画效果call
var options = {
  scaleFontStyle: "normal"
};
/// 创建对象，生成折线图表
let user_chart = new Chart(ctx).Line(data);
console.log(user_chart)

}

</script>

<style lang="less">
    h2{
        text-align: center
    }
    #myChart{
        display: block;
        margin:0 auto;
    }

</style>