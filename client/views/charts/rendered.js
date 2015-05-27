Template.charts.onRendered(function(){
    var d = Initech.findOne({_id:Template.parentData(0)._id}).tpsReports;
    BarChart.draw("#chart" +  Template.parentData(0)._id, d);
});