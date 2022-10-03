export const drawWidget = function (data, element) {
  var svg = d3
    .select(element)
    .append("svg")
    .attr("width", 100)
    .attr("height", 30);

  var text = svg
    .selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .attr("x", 0)
    .attr("y", 19)
    .style("fill", "black")
    .text(function (d) {
      return d;
    });
};
