function init() {
  var data = [{
    values: [3, 158, 11, 1267, 3],
    labels: ["Firing Squad", "Electrocution", "Gas Chamber", 
              "Lethal Injection", "Hanging"],
    type: "pie"
  }];

  var layout = {
    height: 600,
    width: 800
  };

  Plotly.plot("pie", data, layout);
}

function updatePlotly(newdata) {
  var PIE = document.getElementById("pie");
  Plotly.restyle(PIE, "values", [newdata]);
}

function getData(dataset) {
  var data = [];
  switch (dataset) {
  case "dataset1":
    data = [3, 158, 11, 1267, 3];
    break;
  case "dataset2":
    data = [0, 0, 4, 17, 0];
    break;
  case "dataset3":
    data = [0, 44, 0, 48, 0];
    break;
  default:
    data = [0, 0, 0, 0, 0];
  }
  updatePlotly(data);
}

init();
