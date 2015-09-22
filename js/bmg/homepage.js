// Display the charts when the document is loaded. This function is called when the document is loaded and it displays the
// initial charts. 
$(function() {
		$("#sidebar-wrapper").hide(); 
		Highcharts.setOptions({
		lang: {
			thousandsSep:".",
			decimalPoint:","
		}
		});
		displayRoyaltiesBarChart();		
		displayBestSongsBarChart();
		displayTopSourcesBarChart();

	});

// Functions for Royalties Chart

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
    	$("#royaltiesChartSubtitle").text('TRENDS');
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
	                	  var thousands = Math.round(parseInt(this.total)/1000) ; 
		            	  return '<span class="stackLabel">'  + thousands + 'K €</span>';
		              }
	            }	            
	        },
	        series: getDataForRoyaltiesBarChart(),
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
    	if($('#royaltiesChart').length){
    		$('#royaltiesChart').highcharts().xAxis[0].removePlotBand('selectedYearBand');	
    	}
    	
    }
    
	
// Function to display the Royalties Line Chart    
function displayRoyaltiesLineChart(){		
    	$("#royaltiesTableDiv").hide();
    	$("#royaltiesChartSubtitle").text('TRENDS');
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
		                return getToolTipForRoyaltiesLineChart();
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
	        series: getDataForRoyaltiesLineChart()
	    });    		
  	    
    	$(".timeLineLink").each(function(){
        	$(this).parent().removeClass("active");
    	});
    	$("#allTimeLineLink").addClass("active");
    	$('#royaltiesChart').highcharts().xAxis[0].removePlotBand('selectedYearBand');
	} 

function displayBestSongsBarChart(){
	$("#bestSongsTableDiv").hide();   
    $('#bestSongsChart').highcharts({
    	colors: ["#CCCCCC"],
        chart: {
            type: 'bar',
            marginLeft:50,
            marginRight:50,
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
                return '<span class="tooltipKey">'+  this.point.name +'</span>:<span class="tooltipValue"> '+ Highcharts.numberFormat(this.y) + ' €</span>' ;
            }	                     
        },
        plotOptions: {
            bar: {
                stacking: 'normal',
                states: {
                    hover: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: true,
                    useHTML: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'black',
                    format:"<span class='bestSongsBarLabel'>{point.name}</span>",
                    align:'top'
                },
                point: {
                    events: {
                        mouseOver: function () {
                            oldColor = this.color;
                            this.graphic.attr("fill","#999999");
                        },
                        mouseOut: function () {                            	
                            	this.graphic.attr("fill",oldColor);                            	
                        }
                    }
                }
            }
        },	        
        xAxis: {
            categories: ['', '', '', '', '', '','' ],
            gridLineWidth:1,
            labels: {
            	useHTML:true,
	              formatter: function(){
	            	  return '<span class="xAxisLabel">' +  this.value + '</span>';
	              }
            }	            
        },
        yAxis: {
            gridLineWidth:1,
            labels: {
            	useHTML:true,
	              formatter: function(){
					  var thousands = Math.round(parseInt(this.value)/1000) ; 
	            	  return '<span class="yAxisLabel">' +  thousands + 'K </span>';
	              }
            },
            title: {
                text: '€',
                rotation:0,
                style:{
                	fontSize:'16px'
                },
                margin:10
            }	            
        },
        series: getDataForBestSongsBarChart()
    });    	
}

	function displayBestSongsDonutChart(){
    	$("#bestSongsTableDiv").hide();   
  	    $('#bestSongsChart').highcharts({
  	    	colors: ["#b7b7b7","#e9e9e9","#939393","#5d5d5d","#777777"],
	        chart: {
	            type: 'pie',
	            marginLeft:50,
	            marginRight:50,
	            marginBottom:100,
	            marginTop:50,
	            style:{
                	fontFamily: 'Geogrotesque-Regular',
            	    fontWeight: 'normal',
            	    fontStyle: 'normal'
	            }
	        },
	        title: {
	            text: '',
	        },
	        tooltip: {
	            backgroundColor: '#FFFFFF',
	            borderColor: 'grey',
	            useHTML:true,
	            borderRadius: 10,
	            borderWidth: 1,
	            formatter: function() {
	                return '<span class="tooltipKey">'+ this.point.name +'</span>:<span class="tooltipValue"> '+ this.y + ' € </span>' ;
	            }	            
	        },
	        plotOptions: {
	            pie: {
	                allowPointSelect: true,
	                cursor: 'pointer',
	                dataLabels: {
	                	useHTML:true,
	                    enabled: true,
	                    format: '<span class="donutDataLabelValue">{point.percentage:.1f}%</span><br/><span class="donutDataLabelKey">{point.name}</span>',
	                    softConnector:true
	                    
	                }	                
	            },
                series: {
                    states: {
                        hover: {
                            enabled: false
                        }
                    },
                    point: {
                        events: {
                            mouseOver: function () {
                                this.options.oldColor = this.color;
                                this.graphic.attr("fill", "#ce0f42");
                            },
                            mouseOut: function () {
                                this.graphic.attr("fill", this.options.oldColor);
                            }
                        }
                    }                   
                }
	        },	     
            series: getDataForBestSongsDonutChart()
	    });    			
	} 

    function displayTopSourcesBarChart(){
    	$("#topSourcesTableDiv").hide();   
    	$("#topSourcesChart").show();      	
    	
	    $('#topSourcesChart').highcharts({
	    	colors: ["#b7b7b7","#959595","#777777","#383838","#55555"],
	        chart: {
	            type: 'column',
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
	            backgroundColor: 'rgba(255,255,255,1)',
	            borderColor: 'grey',
	            borderRadius: 10,
	            borderWidth: 1,
	            formatter: function() {
	                return '<span class="tooltipKey">'+ this.point.name +'</span>:<span class="tooltipValue"> '+ Highcharts.numberFormat(this.y) + ' € </span>' ;
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
	                dataLabels: {
	                    enabled: false,
	                    useHTML: true,
	                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'black',
	                    format:"<h4 class='dataLabel'>{point.y}</h4>",
	                    align:'top'
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
                    }
	            }
	        },	        
	        xAxis: {
	            gridLineWidth:1,
	            labels: {
	            	useHTML:true,
		              formatter: function(){
		            	  return '<span class="xAxisLabel">' +  this.value + '</span>';
		              }
	            },
	            type:'category'
	        },
	        yAxis: {
	            gridLineWidth:1,
	            title: {
	                text: '€',
	                rotation:0,
	                style:{
	                	fontSize:'16px'
	                },
	                margin:20
	            },
	            stackLabels:{
	            	enabled:true,
	                useHTML:true,
	                formatter: function(){
						  var thousands = Math.round(parseInt(this.total)/1000) ; 
		            	  return '<span class="stackLabel">'  +  thousands + 'K € </span>';
		              }           		
	            },
	            labels: {
	            	useHTML:true,
		              formatter: function(){
						  var thousands = Math.round(parseInt(this.value)/1000) ; 
		            	  return '<span class="yAxisLabel">' +  thousands + 'K </span>';
		              }
	            }	            
	        },
            series: getDataForTopSourcesBarChart()
	    });    	
    }
	
	function displayTopSourcesDonutChart(){
    	$("#topSourcesTableDiv").hide();   
    	$("#topSourcesChart").show();      	
	
  	    $('#topSourcesChart').highcharts({
  	    	colors: ["#e9e9e9","#939393","#5d5d5d"],
	        chart: {
	            type: 'pie',
	            marginBottom:100,
	            marginTop:50,
	            marginLeft:50,
	            marginRight:50,
	            style:{
                	fontFamily: 'Geogrotesque-Regular',
            	    fontWeight: 'normal',
            	    fontStyle: 'normal'
	            }        	            
	        },
	        title: {
	            text: '',
	        },
	        tooltip: {
	            backgroundColor: '#FFFFFF',
	            borderColor: 'grey',
	            borderRadius: 10,
	            borderWidth: 1,
	            formatter: function() {
	                return '<span class="tooltipKey">'+ this.point.name +'</span>:<span class="tooltipValue"> '+ this.y + ' €</span>' ;
	            }	            
	        },
	        plotOptions: {
	            pie: {
	                allowPointSelect: true,
	                cursor: 'pointer',
	                dataLabels: {
	                	useHTML:true,
	                    enabled: true,
	                    format: '<span class="donutDataLabelValue">{point.percentage:.1f}%</span><br/><span class="donutDataLabelKey">{point.name}</span>',
	                }
	            },
                series: {
                    states: {
                        hover: {
                            enabled: false
                        }
                    },
                    point: {
                        events: {
                            mouseOver: function () {
                                this.options.oldColor = this.color;
                                this.graphic.attr("fill", "#ce0f42");
                            },
                            mouseOut: function () {
                                this.graphic.attr("fill", this.options.oldColor);
                            }
                        }
                    }          
                }
	            
	        },	        
            series: getDataForTopSourcesDonutChart()
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

   $("#applyClientSelection").click(function(e) {
	   $('#clientSelectionDisplayText').text('17 of 30 Clients Selected');
	   $('#clientListModal').modal('hide');
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
    
    $(".timeLineLink").click(function(e){
    	e.preventDefault();
    	$(".timeLineLink").parent().removeClass("active");
    	$(this).parent().addClass("active");
    	var selectedYear = $(this).children(1).text() ;
    	var numberOfCategories = $('#royaltiesChart').highcharts().xAxis[0].names.length;
    	//var categoriesArray =['2009','2010','2011','2012','2013','2014'];

    	$('#royaltiesChart').highcharts().xAxis[0].removePlotBand('selectedYearBand');    	
    	for(var i=0; i< numberOfCategories;i++){
    		var name = $('#royaltiesChart').highcharts().xAxis[0].names[i];
    		if(name.indexOf(selectedYear) != -1){
            	var plotBandLeft = i - 0.5;
            	var plotBandRight = i + 0.5;
            	$('#royaltiesChart').highcharts().xAxis[0].addPlotBand({ 
                														id:'selectedYearBand',
                   														color: '#fbf1f6',
                   														from: plotBandLeft,
                   														to: plotBandRight
                													   });      			
    		}
    	}
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

    $(".bestSongsChartIcon").click(function(e){
    	e.preventDefault();
		setActiveImage($(".bestSongsChartIcon"), $(this) );
    });
    
    $(".topSourcesChartIcon").click(function(e){
    	e.preventDefault();
    	setActiveImage($(".topSourcesChartIcon"), $(this) );
    });
    
    $('#royaltiesTableButton').click(function() {
    	$("#royaltiesTableDiv").show();   
    	$("#royaltiesChart").hide();       	
    });    
    
    $('#royaltiesLineButton').click(function() {
    	$("#royaltiesTableDiv").hide();   
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
    	$("#royaltiesChart").show();      	    	
    	displayRoyaltiesBarChart();  	
    });
    
    $('#bestSongsTableButton').click(function() {
    	$("#bestSongsTableDiv").show();   
    	$("#bestSongsChart").hide();       	
    });    
    
    $('#bestSongsDonutButton').click(function() {
    	$("#bestSongsTableDiv").hide();   
    	$("#bestSongsChart").show();      	
    	displayBestSongsDonutChart();
    });
    $('#bestSongsBarButton').click(function() {
    	$("#bestSongsTableDiv").hide();   
    	$("#bestSongsChart").show();      	
    	displayBestSongsBarChart();
    });

    $('#topSourcesTableButton').click(function() {
    	$("#topSourcesTableDiv").show();   
    	$("#topSourcesChart").hide();       	
    });    
    
    $('#topSourcesDonutButton').click(function() {
    	$("#topSourcesTableDiv").hide();   
    	$("#topSourcesChart").show();      	
    	displayTopSourcesDonutChart();
    });
    $('#topSourcesBarButton').click(function() {
    	$("#topSourcesTableDiv").hide();   
    	$("#topSourcesChart").show();      	
    	displayTopSourcesBarChart();
    });
