var getDataForRoyaltiesBarChart = function(){
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
};

var getDataForRoyaltiesLineChart = function(){
	return [{
        name: 'Trends',
        showInLegend:false,
        data: [
               {name:'2012-06', y:2680062.6},
               {name:'2012-12',y:1318878.49},
               {name:'2013-06',y:1245684.7},
               {name:'2013-12',y:3158327.37},
               {name:'2014-06',y:1367275.47},
               {name:'2014-12',y:1034430.1},
               {name:'2015-06',y:6600.67}	                   
               ]
    }	       
    ];
};


var getDataForRoyaltiesDonutChart = function(){
	return [{
        name: 'Royalties',
        data: [{name:"STAGE PERFORMANCE",x:1,y:-12300},
               {name:"DIGITAL SALES",x:2,y:13400},
               {name:"MECHANICAL ROYALTIES",x:3,y:15700},
               {name:"RETAIL SALES",x:4,y:11100},
               {name:"ALBUMS DOWNLOADS",x:5,y:18900},
       	  ],
        size: '100%',
        innerSize: '40%',
        showInLegend:false,
        dataLabels: {
            enabled: true
        }
    }];
};


var getDataForBestSongsBarChart = function(){
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
            enabled: true,
            textShadow: ''
        }
    }];
};

var getDataForBestSongsDonutChart = function(){
	return [{
        name: 'Songs',
        data: [{name:"I Gotta Feeling",x:1, y:-25000},
               {name:"OMG",x:2, y:200000},
               {name:"Boom Boom Pow",x:3, y:50000},
               {name:"Just Can't Get Enough",x:4, y:150000},
               {name:"Meet Me Halfway",x:5, y:100000},
               {name:"Others",x:6, y:200000}
        	  ],
        size: '100%',
        innerSize: '40%',
        showInLegend:false,
        dataLabels: {
            enabled: true,
            textShadow: ''
        }
    }];
};


var getDataForTopSourcesBarChart = function(){
	return [{
        name: 'Top Sources',
        data: [{name:"BMG RM (UK) Ltd.",y:3270688.67},
               {name:"BMG RM (France) Sarl",y:2445864.11},
               {name:"Universal Music Group",y:1996193.68},
               {name:"Others",y:100000}
        	  ],
        showInLegend:false,
        dataLabels: {
            enabled: false,
            textShadow: ''
        }
    }];
};


var getDataForTopSourcesDonutChart = function(){
	return  [{
        name: 'Top Sources',
        data: [{name:"Last FM",y:17},
               {name:"SoundCloud",y:07},
               {name:"Spotify",y:15},
               {name:"Others",y:10}
        	  ],
        size: '100%',
        innerSize: '40%',
        showInLegend:false,
        dataLabels: {
            enabled: true
        }
    }];
};

var getToolTipForRoyaltiesLineChart = function(){
	return '<table><tr><td class="tooltipKey">Stage Performance</td><td class="tooltipValue">30K €</td></tr>' +
          	          '<tr><td class="tooltipKey">Digital Sales</td><td class="tooltipValue">5K €</td></tr>' +
          	          '<tr><td class="tooltipKey">Mechanical Royalties</td><td class="tooltipValue">35K € </td></tr>' +
          	          '<tr><td class="tooltipKey">Retail Sales</td><td class="tooltipValue">60K €</td></tr>' +
          	          '<tr><td class="tooltipKey">Albums Downloads</td><td class="tooltipValue">40K € </td></tr>' +
	          		'</table>';
};


