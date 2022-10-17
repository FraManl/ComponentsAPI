import axios from "axios";
import { compare } from "bcryptjs";
import { createArr, loadState } from "../utils";

exports.dropComponent = async function (e) {
  try {
    e.preventDefault();
    if (!e.dataTransfer.items) return;
    let fileItem = [];
    fileItem.push(e.dataTransfer.items);
    const stateData = await loadState("drop", fileItem);
    const res = axios({
      method: "POST",
      url: "api/v1/requests",
      data: {
        partNumber: stateData,
      },
    });

    if (res.data.status === "success") {
      console.log("Post method successful");
      console.log(res);
    }
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
        partNumber: payLoad,
      },
    });
    if (res.data.status === "success") {
      console.log("Post method successful");
    }
  } catch (err) {
    console.log(err);
  }
};

exports.loadFile = () => {
  console.log("File imported");
};
