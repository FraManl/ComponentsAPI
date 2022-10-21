import axios from "axios";
import { compare } from "bcryptjs";
import { createArr } from "../utils";
import { showAlert } from "./alerts";

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

exports.searchComponent = async (partNumber) => {
  try {
    const payLoad = createArr(partNumber);
    if (!payLoad[0]) {
      showAlert("Error", "Please provide a valid component reference!");
      return;
    }
    const res = await axios({
      method: "POST",
      url: "/api/v1/requests",
      data: {
        partNumber: payLoad,
      },
    });
    if (res.data.status === "success") {
      showAlert(
        "success",
        `Component imported : ${res.data.requests.request.partNumber[0]}`
      );
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
      showAlert(
        "success",
        `Component(s) imported : ${res.data.requests.request.partNumber}`
      );
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
    if (res.data.status === "success") {
      showAlert(
        "success",
        `Component(s) imported : ${res.data.requests.request.partNumber}`
      );
    }
    // eventHandlers.queryPreview.classList.add("uploaded");
  } catch (err) {
    console.log(err);
  }
};
