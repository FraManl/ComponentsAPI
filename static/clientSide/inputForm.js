import axios from "axios";
import { createArr, loadState } from "../utils";

exports.dropComponent = async (e) => {
  try {
    e.preventDefault();
    if (!e.dataTransfer.items) return;
    const fileItem = e.dataTransfer.items;

    console.log(fileItem);
    await loadState("drop");

    // const res = axios({
    //   method: "POST",
    //   url: "api/v1/requests",
    //   data: {
    //     partNumber: "",
    //   },
    // });

    // if (res.data.status === "success") {
    //   console.log("Post method successful");
    //   console.log(res);
    // }
    // eventHandlers.queryPreview.classList.add("uploaded");
  } catch (err) {
    console.log(err);
  }
};

exports.searchComponent = async (partNumber) => {
  try {
    const payLoad = createArr(partNumber);
    console.log(payLoad);

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

exports.loadFile = () => {
  console.log("File imported");
};
