"use strict";
import apiObject from "./apiobject.js";

class FarnellObject extends apiObject {
  constructor() {
    super();
    this.name = "farnell";
    this.baseUrl =
      "https://api.element14.com//catalog/products?versionNumber=1.2/";
    this.key = "u9u3k9nfnheej5pehb5geb4j";
    this.formatting = "json";
    this.groupSize = "large";
    this.field = `any`;
    this.offset = 0;
    this.results = 5;
    this.store = `fr.farnell.com`;

    this._state = {
      formattingUrl: `&callInfo.responseDataFormat=${this.formatting}`,
      termUrl: `&term=${this.field}%3A$`,
      storeUrl: `&storeInfo.id=${this.store}`,
      keyUrl: `&callInfo.apiKey=${this.key}`,
      offsetUrl: `&resultsSettings.offset=${this.offset}`,
      resultUrl: `&resultsSettings.numberOfResults=${this.results}`,
      responseGroupUrl: `resultsSettings.responseGroup=${this.groupSize}
      `,
    };
  }

  generateUrl(part) {
    return `${this.baseUrl}${this._state.formattingUrl}${this._state.termUrl}${part}${this._state.storeUrl}${this._state.keyUrl}${this._state.offsetUrl}${this._state.resultUrl}${this._state.resultUrl}${this._state.responseGroupUrl}`;
  }

  _addHandlerCall(handler) {
    this._btnCollect.addEventListener("click", handler, false);
  }
}

export default new FarnellObject();
