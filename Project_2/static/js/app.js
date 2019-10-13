Plotly.d3.csv("data/data2.csv", function(err, rows){
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var data = [{
        type: 'choropleth',
        locationmode: 'USA-states',
        locations: unpack(rows, 'state'),
        z: unpack(rows, 'total'),
        text: unpack(rows, 'name'),
        zmin: 0,
        zmax: 600,
        colorscale:'HOT',
        autocolorscale: false,
        reversescale: true,
        colorbar: {
            title: 'Total # of Executions',
            thickness: 30
        },
        marker: {
            line:{
                color: 'rgb(255,255,255)',
                width: 5
            }
        }
    }];


    var layout = {
        title: "Executions in the USA (1976 - 2016)",
        geo:{
            scope: 'usa',
            showlakes: true,
            lakecolor: 'rgb(255,255,255)'
        }
    };

    Plotly.plot(map, data, layout, {showLink: false});
});

///////// Visualization using chart.js ////////////

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Texas', 'Oklahoma', 'Virginia', 'Florida'],
        datasets: [{
            label: 'Total Number of Executions',
            data: [538, 112, 111, 92],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});