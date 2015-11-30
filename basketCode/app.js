---
layout: default
---

<div id="chart"></div>
<div id="chart2"></div>

<script>

window.onload = function() { init() };

var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1yY5o-mwYuM5jbHtzEvNfu7eVJ0cpmXK6BzM4AvLXkQ0/pubhtml';

function init() {
  Tabletop.init( { key: public_spreadsheet_url,
                   callback: showInfo,
                   simpleSheet: true } )
}

function showInfo(data, tabletop) {
  var total = data.length;

  for(var i=0; i<total; ++i){
    console.log('uno mas');
  }
  console.log(data.length);
}
  
var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: [
        ['Muslime Brothers', 30, 40, 25, 60, 33, 20],
        ['Students', 2, 3, 1, 4, 2, 1],
        ['Group Three', 4, 2, 10, 11, 7, 0]
      ]
    }
});

var chart = c3.generate({
    bindto: '#chart2',
    data: {
        columns: [
            
        ],
        type: 'bar',
        groups: [
            ['Muslime Brothers', 'Students', 'Group Three']
        ]
    },
    grid: {
        y: {
            lines: [{value:0}]
        }
    }
});

setTimeout(function () {
    chart.load({
        columns: [['Muslime Brothers', 30, 40, 25, 60, 33, 20]]
    });
}, 1000);

setTimeout(function () {
    chart.load({
        columns: [['Students',  2, 3, 1, 4, 2, 1]]
    });
}, 1500);

setTimeout(function () {
    chart.load({
        columns: [['Group Three', 4, 2, 10, 11, 7, 0]]
    });
}, 200);

</script>















