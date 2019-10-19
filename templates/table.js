// Bring in execution data
var data = [{
    "Age": 36,
    "Date": "01/17/1977",
    "Method": "Firing Squad",
    "Race": "White",
    "Sex": "Male",
    "VictimCount": 1,
    "VictimSex": "Male",
    "classes": {}
},
{
    "Age": 30,
    "Date": "05/25/1979",
    "Method": "Electrocution",
    "Race": "White",
    "Sex": "Male",
    "VictimCount": 1,
    "VictimSex": "Male",
    "classes": {}
}]

// Use d3 to insert data into table
d3.select("tbody")
  .selectAll("tr")
  .data(data)
  .enter()
  .append("tr")
  .html(function(d) {
    return `<td>${d.Age}</td>
            <td>${d.Date}</td>
            <td>${d.Method}</td>
            <td>${d.Race}</td>
            <td>${d.Sex}</td>
            <td>${d.VictimCount}</td>
            <td>${d.VictimSex}</td>
            <td>${d.classes}</td>`;
  });
