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