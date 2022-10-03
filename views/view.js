export default class View {
  _data;

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clearPreview();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderTitle() {
    this._titleElement.innerHTML = "Verify your component list...";
  }

  resetTitle() {
    this._titleElement.innerHTML = "Add some components to search...";
  }

  renderSpinner() {
    const spinnerAnimation = `<div class="loader"></div>`;
    this._clearPreview();
    this._spinnerElement.insertAdjacentHTML("afterbegin", spinnerAnimation);
    setTimeout(() => {
      this.clearSpinner();
    }, 100);
  }

  _clearPreview() {
    this._parentElement.innerHTML = "";
  }

  clearSpinner() {
    this._spinnerElement.innerHTML = "";
  }
}
