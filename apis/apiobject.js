export default class apiObject {
  _data;
  _btnCollect = document.querySelector(".query-input-confirm");

  collectComponentState(data) {
    this._data = data;
  }
}
