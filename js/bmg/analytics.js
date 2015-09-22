// Display the charts when the document is loaded. This function is called when the document is loaded and it displays the
// initial charts.
var selectedChartView = "overtimeChart";
var shownChartType = "bar";
var selectedChartSubtitle = "OVERTIME";

$(function() {
    $("#sidebar-wrapper").hide();
    Highcharts.setOptions({
        lang: {
            thousandsSep:".",
            decimalPoint:","
        }
    });

    displayRoyaltiesBarChart("OVERTIME");

    $("body").click(function(e){
        $(".song-selection-box.box").fadeOut();
    });
    $(".song-selection-box.box").click(function(e){
        e.stopPropagation()
    });
    $("#SpecificsSongSelection").click(function(e){
        e.stopPropagation()
        $(this).addClass("active");
        $("#SelectAllSongs").removeClass("active")
        $(".song-selection-box.box").fadeIn();
        $("#songlist").html("10/540 SONGS SELECTED")
    });
    $("#SelectAllSongs").click(function(e){
        e.stopPropagation()
        $(this).addClass("active");
        $("#SpecificsSongSelection").removeClass("active");
        $(".song-selection-box.box").fadeOut();
        $("#songlist").html("540/540 SONGS SELECTED")
    });
    $(".songs-model-popup-btn").click(function(e){
        $(".song-selection-box.box").fadeOut();
        $('#songSelectionModal').modal();
    });
    $("#songSelectionModal #topIconDiv").click(function(e){
        $( "#songSelectionModal").scrollTop(0);
    });
    $(function() {
        $( "#slider-range" ).slider({
            min: 1,
            max: 7,
            range: true,
            values: [ 1, 7 ],
            stop: function( event, ui ) {
                var len = $(".slider-data-wrap ul li").length;
                var values = $("#slider-range").slider("values");
                $(".slider-data-wrap ul li").removeClass("active");
                for(var i=0; i<len; i++){
                    if(i>=values[0]-1 && i<values[1])
                        $(".slider-data-wrap ul li").eq(i).addClass("active");
                }
            }
        });
    });

    var sliderDataAlign = function(){

        var len = $(".slider-data-wrap ul li").length;
        var slideWidth = $("#slider-range").width() / (len-1);
        var pos;
        for(var i=0; i<len; i++){
            pos = (i * slideWidth );
            $(".slider-data-wrap ul li").eq(i).css("left",pos);
        }
        setTimeout(function(){
            var values = $("#slider-range").slider("values");
            $(".slider-data-wrap ul li").removeClass("active");
            for(var i=0; i<len; i++){
                if(i>=values[0]-1 && i<values[1])
                    $(".slider-data-wrap ul li").eq(i).addClass("active");
            }

        },100)
    }
    sliderDataAlign();
    $("#hamburger").click(function(e) {
        setTimeout(function(){
            sliderDataAlign();
        },600);
    });
    $(document).on("mouseover",".ui-slider-handle",function(){
        var index = $(this).index();
        var values = $("#slider-range").slider("values");
        $(".slider-data-wrap ul li").eq(values[index-1]-1).children(".slider-tooltip").show();
    });
    $(document).on("mouseout",".ui-slider-handle",function(){
        var index = $(this).index();
        var values = $("#slider-range").slider("values");
        $(".slider-data-wrap ul li").eq(values[index-1]-1).children(".slider-tooltip").hide();
        if ((values[index-1]-1) == 6) {
            $(".slider-data-wrap ul li").eq(5).children(".slider-tooltip").hide();
        } else if ((values[index-1]-1) == 1) {
            $(".slider-data-wrap ul li").eq(0).children(".slider-tooltip").hide();
        }

    });
    $(window).resize(function(){
        sliderDataAlign();
    })

    $(".slider-tooltip .item").click(function(){
        $(this).toggleClass("active");
    });
    $(".widget-menu .navbar-nav li").click(function(e){
        e.stopPropagation();
        $(".widget-menu .navbar-nav li").removeClass("active");
        $(this).addClass("active");
    });
    $(".period-selection .expand-btn").click(function(){
        $(this).toggleClass("active");
        if($(".period-selection").height()==216){
            $(".period-selection").animate({"height":68},500);
        } else if ($(".period-selection").height()==68){
            $(".period-selection").animate({"height":216},500);
        } else if ($(".period-selection").height()==250){
            $(".period-selection").animate({"height":100},500);
        } else if ($(".period-selection").height()==100){
            $(".period-selection").animate({"height":250},500);
        }
    });





});


// displayRoyaltiesBarChart : This function is used to display the Royalties Bar Chart.
function displayRoyaltiesBarChart(){

    // Check if it is a mobile and if yes, choose the bar layout
    // A hack now to check if a div is visible.. using bootstrap hidden-xs
    // Check if the div is visible. if yes, then it is a sm and above
    // Use the column chart
    // else use the bar
    var chartType = 'column';
    if($("#isMobileDevice").css('display') === 'block'){
        chartType = 'bar';
    }

    $("#royaltiesTableDiv").hide();
    $("#royaltiesChartSubtitle").text(selectedChartSubtitle);
    $('#royaltiesChart').highcharts({
        colors: ["#BBBBBB","#AAAAAA","#999999","#888888","#777777"],
        chart: {
            type: chartType,
            style:{
                fontFamily: 'Geogrotesque-Regular',
                fontWeight: 'normal',
                fontStyle: 'normal'
            }
        },
        title: {
            text: '',
        },
        navigator : {
            enabled : false
        },
        tooltip: {
            useHTML:true,
            backgroundColor: '#FFFFFF',
            borderColor: 'grey',
            borderRadius: 10,
            borderWidth: 1,
            formatter: function() {
                return '<span class="tooltipKey">'+ this.series.name +'</span>:<span class="tooltipValue">'+ Highcharts.numberFormat(this.y) + ' € </span>' ;
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                states: {
                    hover: {
                        enabled: false
                    }
                },
                point: {
                    events: {
                        mouseOver: function () {
                            oldColor = this.color;
                            this.graphic.attr("fill","#ce0f42");
                        },
                        mouseOut: function () {
                            this.graphic.attr("fill",oldColor);
                        }
                    }
                },
                dataLabels: {
                    enabled: false
                }
            },
            bar: {
                stacking: 'normal',
                states: {
                    hover: {
                        enabled: false
                    }
                },
                point: {
                    events: {
                        mouseOver: function () {
                            oldColor = this.color;
                            this.graphic.attr("fill","#ce0f42");
                        },
                        mouseOut: function () {
                            this.graphic.attr("fill",oldColor);
                        }
                    }
                },
                dataLabels: {
                    enabled: false
                }
            }
        },
        xAxis: {
            gridLineWidth:1,
            type:'category',
            labels: {
                useHTML:true,
                formatter: function(){
                    return '<span class="xAxisLabel">' +  this.value + '</span>';
                }
            }
        },
        yAxis: {
            title: {
                text: '€',
                rotation:0,
                style:{
                    fontSize:'14px'
                },
                margin:10
            },
            labels: {
                useHTML:true,
                formatter: function(){
                    var thousands = Math.round(parseInt(this.value)/1000) ;
                    return '<span class="yAxisLabel">'  + thousands + 'K € </span>';
                }
            },
            gridLineWidth:1,
            stackLabels: {
                enabled: true,
                useHTML:true,
                formatter: function(){
                    if(this.total){
                        var thousands = Math.round(parseInt(this.total)/1000) ;
                        return '<span class="stackLabel">'  + thousands + 'K €</span>';

                    }else{
                        return null;
                    }
                }
            }
        },
        series: getDataForRoyaltiesChart(selectedChartView),
        drilldown: {
            activeAxisLabelStyle: {
                textDecoration: 'none'
            },
            series: []
        }
    });

    $(".timeLineLink").each(function(){
        $(this).parent().removeClass("active");
    });
    $("#allTimeLineLink").addClass("active");
    $('#royaltiesChart').highcharts().xAxis[0].removePlotBand('selectedYearBand');
}



// Function to display the Royalties Line Chart
function displayRoyaltiesLineChart(){
    $("#royaltiesTableDiv").hide();
    $("#royaltiesChartSubtitle").text(selectedChartSubtitle);
    $('#royaltiesChart').highcharts({
        chart: {
            type: 'line',
            style:{
                fontFamily: 'Geogrotesque-Regular',
                fontWeight: 'normal',
                fontStyle: 'normal',
            }
        },
        title: {
            text: '',
            align:'left',
        },
        navigator : {
            enabled : false
        },
        tooltip: {
            useHTML:true,
            backgroundColor: '#FFFFFF',
            borderColor: 'grey',
            borderRadius: 10,
            borderWidth: 1,
            formatter: function() {
                if(!this.series.levelNumber){
                    return getToolTipForRoyaltiesLineChart(selectedChartView,this.point.name, this.y);
                }
            }
        },
        plotOptions: {
            line:{
                color:'#ce0f42',
                dataLabels: {
                    useHTML:true,
                    formatter: function(){
                        var thousands = Math.round(parseInt(this.point.y)/1000) ;
                        return '<span class="dataLabel"> ' +  thousands + 'K €</span>';
                    },
                    enabled: true,
                    y:-10
                }
            }
        },
        xAxis: {
            gridLineWidth:2,
            gridLineDashStyle:'ShortDash',
            lineWidth:1,
            lineColor:'#555555',
            labels: {
                useHTML:true,
                formatter: function(){
                    return '<span class="xAxisLabel">' +  this.value + '</span>';
                }
            },
            title: {
                text:''
            },
            type:'category'
        },
        yAxis: {
            title: {
                text: '€',
                rotation:0,
                style:{
                    fontSize:'20px'
                },
                margin:10
            },
            lineWidth:1,
            lineColor:'#555555',
            gridLineWidth:1,
            labels: {
                useHTML:true,
                formatter: function(){
                    var thousands = Math.round(parseInt(this.value)/1000) ;
                    return '<span class="yAxisLabel">' +  thousands + 'K €</span>';
                }
            }
        },
        series: getDataForRoyaltiesChart(selectedChartView)
    });

}

$("#hamburger").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggle('slow');
});

$(".clientSelectionLink").click(function(e) {
    if($(this).children(0).text()=='All'){
        $('#clientSelectionDisplayText').text('All 30 Clients Selected');
    }else{
        $('#clientListModal').modal();
    }
});

$("#applySongSelection").click(function(e) {
    selectedChartView = "selectedSongsChart";
    $(".widget-menu .navbar-nav li").removeClass("active");
    $("#songsChart").parent().addClass("active");
    if(shownChartType =="bar"){
        displayRoyaltiesBarChart();
    }else if(shownChartType=="line"){
        displayRoyaltiesLineChart();
    }
    $('#clientSelectionDisplayText').text('17 of 30 Clients Selected');
    $('#songSelectionModal').modal('hide');
});

$(".exportButtonClass").click(function(e) {
    $('#exportModal').modal();
});

$(".menuLink").click(function(e){
    e.preventDefault();
    $(".sideMenuItem").removeClass("active");
    $(".sideMenuItem").each(function(){
        var imageSource= $(this).children(0).attr("src");
        var updatedImageSource = imageSource.replace("active","normal");
        $(this).children(0).attr("src",updatedImageSource);
    });

    $(this).children(0).addClass("active");
    var imageSource= $(this).children(0).children(0).attr("src");
    var updatedImageSource = imageSource.replace("normal","active");
    $(this).children(0).children(0).attr("src",updatedImageSource);
});


function setActiveImage(imageClass, obj){
    imageClass.each(function(){
        var imageSource= $(this).attr("src");
        var updatedImageSource = imageSource.replace("active","normal");
        $(this).attr("src",updatedImageSource);
    });

    var imageSource= obj.attr("src");
    var updatedImageSource = imageSource.replace("normal","active");
    obj.attr("src",updatedImageSource);
}

$(".royaltiesChartIcon").click(function(e){
    e.preventDefault();
    setActiveImage($(".royaltiesChartIcon"), $(this) );
});


$('#royaltiesTableButton').click(function() {
    $("#royaltiesTableDiv").show();
    $("#royaltiesChart").hide();
});

$('#royaltiesLineButton').click(function() {
    $("#royaltiesTableDiv").hide();
    shownChartType = "line";
    $("#royaltiesChart").show();
    displayRoyaltiesLineChart();
});
$('#royaltiesDonutButton').click(function() {
    $("#royaltiesTableDiv").hide();
    $("#royaltiesChart").show();
    displayRoyaltiesDonutChart();
});
$('#royaltiesBarButton').click(function() {
    $("#royaltiesTableDiv").hide();
    shownChartType = "bar";
    $("#royaltiesChart").show();
    displayRoyaltiesBarChart();
});



$(".chartTypeSelection").click(function(){
    selectedChartView = $(this).attr("id");
    selectedChartSubtitle = $(this).text().toUpperCase();

    if(shownChartType =="bar"){
        displayRoyaltiesBarChart();
    }else if(shownChartType=="line"){
        displayRoyaltiesLineChart();
    }
});

//    var redrawChart = function redrawChart(chartView){
//    	var data = getDataForRoyaltiesChart(chartView);
//
//    	var numberOfSeries = $("#royaltiesChart").highcharts().series.length;
//    	while ($("#royaltiesChart").highcharts().series.length > 0){
//    		$("#royaltiesChart").highcharts().series[$("#royaltiesChart").highcharts().series.length - 1].remove();
//    	}
//
//    	for (var x = 0; x< data.length; x++){
//    		$("#royaltiesChart").highcharts().addSeries(data[x]);
//    	}
//    	//$("#royaltiesChart").highcharts().series[0].setData(data);
//    	$("#royaltiesChart").highcharts().redraw({"duration":1000,"easing":"swing"});
//
//    }
