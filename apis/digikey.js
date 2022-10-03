import apiObject from "./apiobject.js";

class DigikeyObject extends apiObject {
  // https://api.digikey.com/v1/oauth2/authorize?response_type=code&client_id=qyjteGBFZGIAJyd2bzUhTUB8IWxvQVGb&redirect_uri=https%3A%2F%2Flocalhost%2F
  constructor() {
    super();
    this.name = "digikey";
    this.baseUrl = "https://api.digikey.com/Search/v3/Products/";

    this.code = "XGn3QQZv";
    this.clientId = "qyjteGBFZGIAJyd2bzUhTUB8IWxvQVGb";
    // this.clientId = "dHQAv0OoRxTrqGI62vwX3yo8elOIlDE3";
    // this.clientSecret = "Iy0j4Guh0fp1LGST";
    this.clientSecret = "Iy0j4Guh0fp1LGST";

    this.tokenUrl = "https://api.digikey.com/v1/oauth2/token";
    this.host = "api.digikey.com";
    this.grantType = "authorization_code";
    this.grantTypeR = "refresh_token";
    this.redirect = "https://localhost/";

    this.headerToken = { "Content-Type": "application/x-www-form-urlencoded" };
    this._currentStateToken = {
      _token: "LGD7z5HMW8thWwcBQg1vy4qGVqnF",
      _tokenR: "bJkTyf2kv780xBERa2OBjN2MifLCs39R",
    };
  }

  // _newStateToken = {
  //   _token: this._getLocalStorage()._latestToken,
  //   _tokenR: this._getLocalStorage()._latestTokenR,
  // };

  _getLocalStorage(item) {
    const data = localStorage.getItem(item);
    if (!data) return;
    return data;
  }

  _setLocalStorage(data) {
    localStorage.setItem("digikeyToken", data._token);
    localStorage.setItem("digikeyTokenRefresh", data._tokenR);
  }

  _generateUrl(part) {
    return `${this.baseUrl}${part}`;
  }

  _generateDataHeader() {
    this._setLocalStorage(this._currentStateToken);
    this._getLocalStorage("digikeyToken");

    const dataHeader = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this._currentStateToken._token}`,
      "X-DIGIKEY-Client-Id": this.clientId,
      "X-DIGIKEY-Locale-Site": "FR",
      "X-DIGIKEY-Locale-Currency": "EUR",
    };
    return dataHeader;
  }

  async _requestToken() {
    const response = await fetch(this.tokenUrl, {
      mode: "cors",
      method: "POST",
      headers: this.headerToken,
      body: new URLSearchParams({
        code: this.code,
        client_id: this.clientId,
        client_secret: this.clientSecret,
        redirect_uri: this.redirect,
        grant_type: this.grantType,
      }),
    });
    const data = await response.json();
    this._token = data.access_token;
    this._tokenR = data.refresh_token;
  }

  async _refreshToken() {
    console.log(
      `Fetching new access token using refresh token : ${this._getLocalStorage(
        "digikeyTokenRefresh"
      )}`
    );
    const response = await fetch(this.tokenUrl, {
      mode: "cors",
      method: "POST",
      headers: this.headerToken,
      body: new URLSearchParams({
        client_id: this.clientId,
        client_secret: this.clientSecret,
        grant_type: "refresh_token",
        refresh_token: this._getLocalStorage("digikeyTokenRefresh"),
      }),
    });
    const data = await response.json();
    console.log(`New access token retrieved`);
    this._currentStateToken._token = data.access_token;
    this._currentStateToken._tokenR = data.refresh_token;
    console.log(this._currentStateToken);
  }

  _addHandlerCall(handler) {
    this._btnCollect.addEventListener("click", handler, false);
  }
}

export default new DigikeyObject();
