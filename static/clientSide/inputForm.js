import axios from "axios";
import { createArr } from "../utils";

["dragenter", "dragover", "dragleave", "drop"].forEach((event) => {
  window.addEventListener(event, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
  e.dataTransfer.effectAllowed = "All";
}

exports.dropComponent = async (e) => {
  try {
    e.preventDefault();
    if (!e.dataTransfer.items) return;
    // state.fileItem.splice(0);
    // state.fileItem.push(e.dataTransfer.items);
    // await loadState("drop");
    // eventHandlers.queryPreview.classList.add("uploaded");
  } catch (err) {
    console.log(err);
  }
};

exports.searchComponent = async (partNumber) => {
  try {
    const payLoad = createArr(partNumber);
    const res = await axios({
      method: "POST",
      url: "/api/v1/requests",
      data: {
        partNumber: JSON.stringify(payLoad),
      },
    });
    if (res.data.status === "success") {
      console.log("Post method successful");
      console.log(res);
    }
  } catch (err) {
    console.log(err);
  }
};

// exports.dropFile = () => {
//   console.log("File dropped");
//   exports.eventHandlers.dropZone.addEventListener("drop", handleDrop, false);
// };

exports.loadFile = () => {
  console.log("File imported");
};
