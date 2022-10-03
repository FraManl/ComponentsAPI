import apiObject from "./apiobject.js";

class MouserObject extends apiObject {
  constructor() {
    super();
    this.baseUrl = "https://api.mouser.com/api/v1/search/keyword";
    this.key = "c122f867-faa9-4c89-94b8-71c5f78a3f41";
    this.name = "mouser";
    this.dataHeader = {
      SearchByKeywordRequest: {
        keyword: "",
        Records: 1,
      },
    };
  }

  generateUrl() {
    const urlParams = {
      urlString: `${this.baseUrl}?apiKey=${this.key}`,
      //   urlHeader: {
      //     "Content-type": "application/json",
      //     apiKey: this.key,
      //   },
    };
    return urlParams;
  }

  generateDataHeader(part) {
    this.dataHeader.SearchByKeywordRequest.keyword = part;
    return this.dataHeader;
  }

  _addHandlerCall(handler) {
    this._btnCollect.addEventListener("click", handler, false);
  }
}

export default new MouserObject();
