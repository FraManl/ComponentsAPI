exports.createArr = function (data) {
  // check the typeof input data and spread in an object
  let componentData;
  typeof data === "string" ? (componentData = data.split("\n")) : "";
  // : (componentData = data.split(""));
  return componentData;
};

exports.preventDefaults = (e) => {
  e.preventDefault();
  e.stopPropagation();
  e.dataTransfer.effectAllowed = "All";
};

exports.loadState = async function (type, input) {
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader();
      if (type === "drop") {
      }
    } catch (err) {
      console.log(err);
    }
  });
};

// exports.loadState = async function (type, input) {
//   return new Promise((resolve, reject) => {
//     try {
//       const reader = new FileReader();
//       if (type === "drop") {
//         const data = state.fileItem[0];
//         for (let i = 0; i < data.length; i++) {
//           if (data[i].kind === "file") {
//             const file = data[i].getAsFile();
//             reader.onload = async function (e) {
//               resolve((state.partNumber = createArr(e.target.result)));
//               console.log(state.partNumber);
//             };
//             reader.readAsText(file);
//           }
//         }
//       }
//       if (type === "submit") {
//         reader.onload = async function (e) {
//           resolve((state.partNumber = createArr(e.target.result)));
//         };
//         reader.readAsText(input.files[0]);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   });
// };
