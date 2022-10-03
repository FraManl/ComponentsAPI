"use strict";
import View from "./view.js";

class previewViews extends View {
  _parentElement = document.querySelector(".query-input-preview");
  _previewElement = document.querySelector(".section-middle-dropzone-output");
  _spinnerElement = document.querySelector(".loader-spinner");
  _titleElement = document.querySelector(".query-input-title");
  _btnReset = document.querySelector(".btn-reset");

  _previewString() {
    let baseString = "Row number ";
    let resultString = "";

    const dataEntries = Object.entries(this._data);
    // for (const [, value] of dataEntries) {
    //   resultString += `${value.id}: ${value.component}<br>`;
    // }
    for (const [key, value] of dataEntries) {
      resultString += baseString.concat(`${key * 1 + 1} : ${value}<br>`);
    }
    return resultString;
  }

  _generateMarkup() {
    return `${this._previewString()}`;
  }

  _addHandlerRender(handler) {
    const options = { attributes: true, childList: true, subtree: true };
    const observer = new MutationObserver((mutations) =>
      mutations.forEach((mut) => {
        if (mut.type === "attributes" && mut.attributeName === "class") {
          handler();
        }
      })
    );
    observer.observe(this._parentElement, options);
  }

  _addHandlerReset(handler) {
    this._btnReset.addEventListener("click", handler, false);
  }
}

export default new previewViews();
