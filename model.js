"use strict";
import * as helpers from "./helpers.js";
import { AJAX } from "./helpers.js";
import * as eventHandlers from "./eventHandlers.js";

export const state = {
  partNumber: {},
  componentInput: {},
  componentOutput: {
    responses: [],
  },
  fileItem: [],
};

export const searchComponent = async function (id, url, api, key, dataHeader) {
  try {
    const data = await AJAX(url, api, key, dataHeader);
    state.componentOutput.responses.push({ id: id, response: data });
  } catch (err) {
    console.error(err);
  }
};

const createArr = function (data) {
  // check the typeof input data and spread in an object
  let componentData;
  typeof data === "string"
    ? ({ ...componentData } = data.split("\n"))
    : ({ ...componentData } = data);
  return componentData;
};

const loadState = async function (type, input) {
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader();
      if (type === "drop") {
        const data = state.fileItem[0];
        for (let i = 0; i < data.length; i++) {
          if (data[i].kind === "file") {
            const file = data[i].getAsFile();
            reader.onload = async function (e) {
              resolve((state.partNumber = createArr(e.target.result)));
              console.log(state.partNumber);
            };
            reader.readAsText(file);
          }
        }
      }
      if (type === "submit") {
        reader.onload = async function (e) {
          resolve((state.partNumber = createArr(e.target.result)));
        };
        reader.readAsText(input.files[0]);
      }
    } catch (err) {
      console.log(err);
    }
  });
};

export const emptyState = function () {
  try {
    state.partNumber = {};
  } catch (err) {
    console.log(err);
  }
};

eventHandlers.dropZone.addEventListener("drop", handleDropImport, false);
async function handleDropImport(e) {
  try {
    e.preventDefault();
    if (!e.dataTransfer.items) return;
    state.fileItem.splice(0);
    state.fileItem.push(e.dataTransfer.items);
    await loadState("drop");
    eventHandlers.queryPreview.classList.add("uploaded");
  } catch (err) {
    console.log(err);
  }
}

eventHandlers.btnBrowseFile.addEventListener("change", handleFileImport, false);
async function handleFileImport(e) {
  try {
    e.preventDefault();
    await loadState("submit", this);
    eventHandlers.queryPreview.classList.add("uploaded");
  } catch (err) {
    console.log(err);
  }
}

eventHandlers.btnUnitarySubmit.addEventListener(
  "click",
  handleUnitarySubmit,
  false
);
async function handleUnitarySubmit() {
  if (!eventHandlers.inputUnitarySubmit.value) return;
  const submittedData = await eventHandlers.inputUnitarySubmit.value;
  eventHandlers.inputUnitarySubmit.value = "";
  state.partNumber = createArr([submittedData]);
  // await helpers.move();
  eventHandlers.queryPreview.classList.add("uploaded");
}

[("dragenter", "dragover")].forEach((eventName) => {
  eventHandlers.dropZone.addEventListener(
    eventName,
    eventHandlers.highlight,
    false
  );
});

["dragleave", "drop"].forEach((eventName) => {
  eventHandlers.dropZone.addEventListener(
    eventName,
    eventHandlers.unhighlight,
    false
  );
});

["dragenter", "dragover", "dragleave", "drop"].forEach((event) => {
  window.addEventListener(event, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
  e.dataTransfer.effectAllowed = "All";
}
