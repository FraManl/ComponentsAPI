import View from "./view.js";
import { drawWidget } from "./d3/charts.js";

class WidgetView extends View {
  _btnSubmit = document.querySelector(".btn-submit");
  _parentElement = document.querySelector(".section-middle-widgets");
  _parentElementId = document.querySelector(".section-widgets-siren");
  _parentElementSize = document.querySelector(".section-widgets-size");
  _parentElementYear = document.querySelector(".section-widgets-year");

  _generateSVGmarkup() {
    const id = new Array(this._data.id);
    const size = new Array(this._data.size);
    const year = new Array(this._data.year);
    const cat = new Array(this._data.cat);

    this._clear();
    drawWidget(id, this._parentElementId);
    drawWidget(size, this._parentElementSize);
    drawWidget(cat, this._parentElementYear);
  }

  _clear() {
    this._parentElement
      .querySelectorAll(".widget")
      .forEach((e) => (e.textContent = ""));
  }

  addHandlerRender(handler) {
    this._btnSubmit.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  // _generateMarkup() {
  //   return `<p>${this._data.categorieEntreprise}</p>`;
  // }
}

export default new WidgetView();
