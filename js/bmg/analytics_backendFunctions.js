var getRoyaltiesDataOvertime = function(){
	return [{
        name: 'Stage Performance',
        data: [{name:'2012-06',y:536012.5}, 
               {name:'2012-12',y:263775.7}, 
               {name:'2013-06',y:249136.9}, 
               {name:'2013-12',y:631665.5}, 
               {name:'2014-06',y:273455.09},
               {name:'2014-12',y:206886.02}, 	  
               {name:'2015-06',y:1320.13} 	  	                   
              ]
    },
    {
        name: 'Digital Sales',
        data: [{name:'2012-06',y:536012.5}, 
               {name:'2012-12',y:263775.7}, 
               {name:'2013-06',y:249136.9}, 
               {name:'2013-12',y:631665.5}, 
               {name:'2014-06',y:273455.09},
               {name:'2014-12',y:206886.02}, 	  
               {name:'2015-06',y:1320.13} 	  	                   
              ]
    },
    {
        name: 'Mechanical Royalties',
        data: [{name:'2012-06',y:536012.5}, 
               {name:'2012-12',y:263775.7}, 
               {name:'2013-06',y:249136.9}, 
               {name:'2013-12',y:631665.5}, 
               {name:'2014-06',y:273455.09},
               {name:'2014-12',y:206886.02}, 	  
               {name:'2015-06',y:1320.13} 	  	                   
              ]
    },{
        name: 'Retail Sales',
        data: [{name:'2012-06',y:536012.5}, 
               {name:'2012-12',y:263775.7}, 
               {name:'2013-06',y:249136.9}, 
               {name:'2013-12',y:631665.5}, 
               {name:'2014-06',y:273455.09},
               {name:'2014-12',y:206886.02}, 	  
               {name:'2015-06',y:1320.13} 	  	                   
              ]
    },{
        name: 'Albums Downloads',
        data: [{name:'2012-06',y:536012.5}, 
               {name:'2012-12',y:263775.7}, 
               {name:'2013-06',y:249136.9}, 
               {name:'2013-12',y:631665.5}, 
               {name:'2014-06',y:273455.09},
               {name:'2014-12',y:206886.02}, 	  
               {name:'2015-06',y:1320.13} 	  	                   
              ]
    }
    ]

}

var getRoyaltiesDataSongs = function(){
	return [{
        name: 'Songs',
        data: [{name:"I Gotta Feeling",x:1, y:-250000},
               {name:"OMG",x:2, y:200000},
               {name:"Boom Boom Pow",x:3, y:50000},
               {name:"Just Can't Get Enough",x:4, y:150000},
               {name:"Meet Me Halfway",x:5, y:100000},
               {name:"Others",x:6, y:200000}
        	  ],
        showInLegend:false,
        dataLabels: {
            enabled: false,
            textShadow: ''
        }
    }];

}

var getRoyaltiesDataSelectedSongs = function(){
	return [{
        name: 'Songs',
        data: [{name:"I Gotta Feeling",x:1, y:-250000},
               {name:"OMG",x:2, y:200000},
               {name:"Boom Boom Pow",x:3, y:50000},
               {name:"Just Can't Get Enough",x:4, y:150000},
               {name:"Meet Me Halfway",x:5, y:100000},
               {name:"Others",x:6, y:200000}
        	  ],
        showInLegend:false,
        dataLabels: {
            enabled: false,
            textShadow: ''
        }
    }];

}

var getRoyaltiesDataSources = function(){
	return [{
        name: 'Sources',
        data: [{name:"BMG RM (UK) Ltd.",x:1, y:250000},
               {name:"BMG RM (France) Sarl",x:2, y:200000},
               {name:"Universal Music Group",x:3, y:50000},
               {name:"Others",x:4, y:150000}
        	  ],
        showInLegend:false,
        dataLabels: {
            enabled: false,
            textShadow: ''
        }
    }];

}

var getRoyaltiesDataTypes = function(){
	return [{
        name: 'Income Types',
        data: [{name:"Stage Performance",x:1, y:250000},
               {name:"Digital Sales",x:2, y:200000},
               {name:"Mechanical Royalties",x:3, y:50000},
               {name:"Retail Sales",x:4, y:150000},
               {name:"Albums Downloads",x:4, y:150000}
        	  ],
        showInLegend:false,
        dataLabels: {
            enabled: false,
            textShadow: ''
        }
    }];

}

var getRoyaltiesDataTerritories = function(){
	return [{
        name: 'Territories',
        data: [{name:"Germany",x:1, y:250000},
               {name:"USA",x:2, y:200000},
               {name:"South Africa",x:3, y:50000},
               {name:"Others",x:4, y:150000}
        	  ],
        showInLegend:false,
        dataLabels: {
            enabled: false,
            textShadow: ''
        }
    }];

}

var getRoyaltiesDataSourceByType = function(){
	return [{
        name: 'Stage Performance',
        data: [{name:'BMG RM (UK) Ltd.',y:536012.5}, 
               {name:'BMG RM (France) Sarl',y:263775.7}, 
               {name:'Universal Music Group',y:249136.9}, 
               {name:'Others',y:631665.5} 	  	                   
              ]
    },
    {
        name: 'Digital Sales',
        data: [{name:'BMG RM (UK) Ltd.',y:536012.5}, 
               {name:'BMG RM (France) Sarl',y:263775.7}, 
               {name:'Universal Music Group',y:249136.9}, 
               {name:'Others',y:631665.5} 	  	                   
              ]
    },
    {
        name: 'Mechanical Royalties',
        data: [{name:'BMG RM (UK) Ltd.',y:536012.5}, 
               {name:'BMG RM (France) Sarl',y:263775.7}, 
               {name:'Universal Music Group',y:249136.9}, 
               {name:'Others',y:631665.5} 	  	                   
              ]
    },{
        name: 'Retail Sales',
        data: [{name:'BMG RM (UK) Ltd.',y:536012.5}, 
               {name:'BMG RM (France) Sarl',y:263775.7}, 
               {name:'Universal Music Group',y:249136.9}, 
               {name:'Others',y:631665.5} 	  	                   
              ]
    },{
        name: 'Albums Downloads',
        data: [{name:'BMG RM (UK) Ltd.',y:536012.5}, 
               {name:'BMG RM (France) Sarl',y:263775.7}, 
               {name:'Universal Music Group',y:249136.9}, 
               {name:'Others',y:631665.5} 	  	                   
              ]
    }
    ]

}

var getRoyaltiesDataTypeBySource = function(){
	return [{
        name: 'BMG RM (UK) Ltd.',
        data: [{name:'Stage Performance',y:536012.5}, 
               {name:'Digital Sales',y:263775.7}, 
               {name:'Mechanical Royalties',y:249136.9}, 
               {name:'Retail Sales',y:631665.5},
               {name:'Albums Download',y:631665.5} 	  	                   
              ]
    },
    {
        name: 'BMG RM (France) Sarl',
        data: [{name:'Stage Performance',y:536012.5}, 
               {name:'Digital Sales',y:263775.7}, 
               {name:'Mechanical Royalties',y:249136.9}, 
               {name:'Retail Sales',y:631665.5},
               {name:'Albums Download',y:631665.5} 	  	                   
              ]
    },
    {
        name: 'Universal Music Group',
        data: [{name:'Stage Performance',y:536012.5}, 
               {name:'Digital Sales',y:263775.7}, 
               {name:'Mechanical Royalties',y:249136.9}, 
               {name:'Retail Sales',y:631665.5},
               {name:'Albums Download',y:631665.5} 	  	                   
              ]
    },{
        name: 'Others',
        data: [{name:'Stage Performance',y:536012.5}, 
               {name:'Digital Sales',y:263775.7}, 
               {name:'Mechanical Royalties',y:249136.9}, 
               {name:'Retail Sales',y:631665.5},
               {name:'Albums Download',y:631665.5} 	  	                   
              ]
    }
    ]

}

var getRoyaltiesDataTerritoryByType = function(){
	return [{
        name: 'Stage Performance',
        data: [{name:'Germany',y:536012.5}, 
               {name:'USA',y:263775.7}, 
               {name:'South Africa',y:249136.9}, 
               {name:'Others',y:631665.5} 	  	                   
              ]
    },
    {
        name: 'Digital Sales',
        data: [{name:'Germany',y:536012.5}, 
               {name:'USA',y:263775.7}, 
               {name:'South Africa',y:249136.9}, 
               {name:'Others',y:631665.5} 	  	                   
              ]
    },
    {
        name: 'Mechanical Royalties',
        data: [{name:'Germany',y:536012.5}, 
               {name:'USA',y:263775.7}, 
               {name:'South Africa',y:249136.9}, 
               {name:'Others',y:631665.5} 	  	                   
              ]
    },{
        name: 'Retail Sales',
        data: [{name:'Germany',y:536012.5}, 
               {name:'USA',y:263775.7}, 
               {name:'South Africa',y:249136.9}, 
               {name:'Others',y:631665.5} 	  	                   
              ]
    },{
        name: 'Albums Downloads',
        data: [{name:'Germany',y:536012.5}, 
               {name:'USA',y:263775.7}, 
               {name:'South Africa',y:249136.9}, 
               {name:'Others',y:631665.5} 	  	                   
              ]
    }
    ]

}


var getDataForRoyaltiesChart = function(chartView){
	if(!chartView){
		chartView="overtimeChart";
	}

	switch(chartView){
		case "songsChart":
			return getRoyaltiesDataSongs();
		case "sourceByTypeChart":
			return getRoyaltiesDataSourceByType();			
		case "typeBySourceChart":
			return getRoyaltiesDataTypeBySource();
		case "territoryByTypeChart":
			return getRoyaltiesDataTerritoryByType();
		case "overtimeChart":	
			return getRoyaltiesDataOvertime();
		case "sourceChart":	
			return getRoyaltiesDataSources();
		case "typeChart":	
			return getRoyaltiesDataTypes();
		case "territoryChart":	
			return getRoyaltiesDataTerritories();	
		case "selectedSongsChart":	
			return getRoyaltiesDataSelectedSongs();		
		default:
			alert("Unable to set Chart data");
	}
};

var getToolTipForRoyaltiesLineChart = function(chartView, pointX, pointY){
	switch(chartView){
		case "songsChart":
			return '<span class="tooltipKey">'+ pointX +'</span>:<span class="tooltipValue">'+ Highcharts.numberFormat(pointY) + ' € </span>' ;
		case "sourceByTypeChart":
			return '<table><tr><td class="tooltipKey">Stage Performance</td><td class="tooltipValue">30K €</td></tr>' +
	          '<tr><td class="tooltipKey">Digital Sales</td><td class="tooltipValue">5K €</td></tr>' +
	          '<tr><td class="tooltipKey">Mechanical Royalties</td><td class="tooltipValue">35K € </td></tr>' +
	          '<tr><td class="tooltipKey">Retail Sales</td><td class="tooltipValue">60K €</td></tr>' +
	          '<tr><td class="tooltipKey">Albums Downloads</td><td class="tooltipValue">40K € </td></tr>' +
    		'</table>';
		case "typeBySourceChart":
			return '<table><tr><td class="tooltipKey">BMG RM (UK) Ltd.</td><td class="tooltipValue">30K €</td></tr>' +
	          '<tr><td class="tooltipKey">BMG RM (France) Sarl</td><td class="tooltipValue">5K €</td></tr>' +
	          '<tr><td class="tooltipKey">Universal Music Group</td><td class="tooltipValue">35K € </td></tr>' +
	          '<tr><td class="tooltipKey">Others</td><td class="tooltipValue">60K €</td></tr>' +
  		'</table>';
		case "territoryByTypeChart":
			return '<table><tr><td class="tooltipKey">Stage Performance</td><td class="tooltipValue">30K €</td></tr>' +
	          '<tr><td class="tooltipKey">Digital Sales</td><td class="tooltipValue">5K €</td></tr>' +
	          '<tr><td class="tooltipKey">Mechanical Royalties</td><td class="tooltipValue">35K € </td></tr>' +
	          '<tr><td class="tooltipKey">Retail Sales</td><td class="tooltipValue">60K €</td></tr>' +
	          '<tr><td class="tooltipKey">Albums Downloads</td><td class="tooltipValue">40K € </td></tr>' +
    		'</table>';
		case "overtimeChart":	
			return '<table><tr><td class="tooltipKey">Stage Performance</td><td class="tooltipValue">30K €</td></tr>' +
	          '<tr><td class="tooltipKey">Digital Sales</td><td class="tooltipValue">5K €</td></tr>' +
	          '<tr><td class="tooltipKey">Mechanical Royalties</td><td class="tooltipValue">35K € </td></tr>' +
	          '<tr><td class="tooltipKey">Retail Sales</td><td class="tooltipValue">60K €</td></tr>' +
	          '<tr><td class="tooltipKey">Albums Downloads</td><td class="tooltipValue">40K € </td></tr>' +
  		'</table>';
		case "sourceChart":	
			return '<span class="tooltipKey">'+ pointX +'</span>:<span class="tooltipValue">'+ Highcharts.numberFormat(pointY) + ' € </span>' ;
		case "typeChart":	
			return '<span class="tooltipKey">'+ pointX +'</span>:<span class="tooltipValue">'+ Highcharts.numberFormat(pointY) + ' € </span>' ;
		case "territoryChart":	
			return '<span class="tooltipKey">'+ pointX +'</span>:<span class="tooltipValue">'+ Highcharts.numberFormat(pointY) + ' € </span>' ;	
		case "selectedSongsChart":	
			return '<span class="tooltipKey">'+ pointX +'</span>:<span class="tooltipValue">'+ Highcharts.numberFormat(pointY) + ' € </span>' ;		
		default:
			alert("Unable to set Tooltip data");
	}
};


