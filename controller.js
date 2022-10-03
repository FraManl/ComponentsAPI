"use strict";
import * as model from "./model.js";
import FarnellObject from "./apis/farnell.js";
import MouserObject from "./apis/mouser.js";
import DigikeyObject from "./apis/digikey.js";
import previewViews from "./views/previewViews.js";
import dropzoneViews from "./views/dropzoneViews.js";
import mouser from "./apis/mouser.js";

const controlPreview = async function () {
  try {
    previewViews._clearPreview();
    previewViews.renderSpinner();
    previewViews.renderTitle();
    previewViews.render(model.state.partNumber);
  } catch (err) {
    console.log(err);
  }
};

const controlPreviewReset = function () {
  try {
    previewViews._clearPreview();
    previewViews.resetTitle();
    model.emptyState();
    previewViews.renderSpinner();
  } catch (err) {
    console.log(err);
  }
};

const controlDropzoneView = function () {
  try {
    // dropzoneViews.resetProgressBar();
    // dropzoneViews.renderProgressBar();
  } catch (err) {
    console.log(err);
  }
};

const controlFarnellApiCall = async function () {
  try {
    const componentState = Object.values(model.state.partNumber);
    console.log(componentState);
    componentState.forEach(async function (component, id) {
      const componentId = component.id;
      const urlQuery = FarnellObject.generateUrl(component);
      await model.searchComponent(componentId, urlQuery, FarnellObject.name);
    });
  } catch (err) {
    console.error(err);
  }
};

const controlDigikeyApiCall = async function () {
  const componentState = model.state.partNumber;
  componentState.forEach(async function (component, id) {
    const urlQuery = DigikeyObject._generateUrl(component.component);
    const dataHeader = DigikeyObject._generateDataHeader();
    await model.searchComponent(
      id,
      urlQuery,
      DigikeyObject.name,
      DigikeyObject.key,
      dataHeader
    );
  });
};

const controlMouserApiCall = async function () {
  try {
    const componentState = model.state.componentInput;
    componentState.forEach(async function (component, id) {
      const componentId = id;
      const urlQuery = MouserObject.generateUrl().urlString;
      const dataHeader = MouserObject.generateDataHeader(component.component);
      await model.searchComponent(
        componentId,
        urlQuery,
        MouserObject.name,
        MouserObject.key,
        dataHeader
      );
    });
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  previewViews._addHandlerRender(controlPreview);
  previewViews._addHandlerReset(controlPreviewReset);
  dropzoneViews._addHandlerDrop(controlDropzoneView);
  dropzoneViews._addHandlerClick(controlDropzoneView);
  FarnellObject._addHandlerCall(controlFarnellApiCall);
  // MouserObject._addHandlerCall(controlMouserApiCall);
  // DigikeyObject._addHandlerCall(controlDigikeyApiCall);
};

init();
