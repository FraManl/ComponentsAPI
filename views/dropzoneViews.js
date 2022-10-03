import View from "./view.js";
import * as eventHandlers from "../eventHandlers.js";
import * as helpers from "../helpers.js";

class dropzoneView extends View {
  _parentElement = document.querySelector(".section-middle-browse");
  _dropZone = document.querySelector(".dropzone");
  _btnUnitarySubmit = document.querySelector(".btn-submit");
  _btnBrowseFile = document.querySelector("#section-middle-getfile");
  //   _barId = document.getElementById("myBar");

  constructor() {
    super();
    this._ChildrenNodes = this._parentElement.childNodes;
  }

  resetProgressBar() {
    this._ChildrenNodes.forEach((child) => {
      if (child.className === "my-progress") {
        child.style.opacity = 1;
        child.classList.remove("uploaded");
      }
    });
  }

  renderProgressBar() {
    this._ChildrenNodes.forEach((child) => {
      if (child.className === "my-progress") {
        child.classList.add("uploaded");
      }
    });
  }

  _addHandlerDrop(handler) {
    this._dropZone.addEventListener("drop", handler, false);
  }

  _addHandlerClick(handler) {
    this._btnUnitarySubmit.addEventListener("click", handler, false);
  }

  _addHandlerClick(handler) {
    this._btnBrowseFile.addEventListener("change", handler, false);
  }
}

export default new dropzoneView();
