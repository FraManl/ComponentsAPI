exports.createArr = function (data) {
  // check the typeof input data and spread in an object
  let componentData;
  typeof data === "string" ? (componentData = data.split("\n")) : "";
  // : (componentData = data.split(""));
  return componentData;
};

exports.highlight = function (elem) {
  elem.classList.add("highlight");
};

exports.unhighlight = function (elem) {
  elem.classList.remove("highlight");
};
