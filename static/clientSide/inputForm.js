import axios from "axios";
import { compare } from "bcryptjs";
import { state } from "../../archive/model";
import { createArr } from "../utils";

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

exports.dropComponent = async function (e) {
  try {
    e.preventDefault();
    if (!e.dataTransfer.items) return;
    let fileItem = [];
    fileItem.push(e.dataTransfer.items);
    const stateData = await readerHandler("drop", fileItem);
    const res = await axios({
      method: "POST",
      url: "api/v1/requests",
      data: {
        partNumber: stateData,
      },
    });
    if (res.data.status === "success") {
      console.log("Post method successful");
    }
    // eventHandlers.queryPreview.classList.add("uploaded");
  } catch (err) {
    console.log(err);
  }
};

exports.uploadComponent = async function (e) {
  try {
    e.preventDefault();
    const stateData = await readerHandler("submit", null, this);
    const res = await axios({
      method: "POST",
      url: "/api/v1/requests",
      data: {
        partNumber: stateData,
      },
    });
    if (res.status === "success") {
      console.log("Post method successful");
    }
    // eventHandlers.queryPreview.classList.add("uploaded");
  } catch (err) {
    console.log(err);
  }
};

const readerHandler = async function (type, file, input) {
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader();
      let componentData;
      if (type === "drop") {
        const data = file[0];
        for (let i = 0; i < data.length; i++) {
          if (data[i].kind === "file") {
            const file = data[i].getAsFile();
            reader.onload = async function (e) {
              resolve(({ ...componentData } = e.target.result.split("\n")));
              return componentData;
            };
            reader.readAsText(file);
          }
        }
      }
      if (type === "submit") {
        reader.onload = async function (e) {
          resolve((componentData = createArr(e.target.result)));
          return componentData;
        };
        reader.readAsText(input.files[0]);
      }
    } catch (err) {
      console.log(err);
    }
  });
};
