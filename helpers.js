import DigikeyObject from "./apis/digikey.js";

export const AJAX = async function (url, api, key, dataHeader) {
  try {
    if (api === "digikey") {
      digikeyVerbose(url, api, dataHeader);
    }

    if (api === "mouser") {
      mouserVerbose(url, api, key, dataHeader);
    }

    if (api === "farnell") {
      farnellVerbose(url, api);
    }
  } catch (err) {
    console.error(err);
  }
};

const mouserVerbose = async function (url, api, key, dataHeader) {
  try {
    if (!url || !api) return;
    const response = await fetch(url, {
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json", apiKey: `${key}` },
      body: JSON.stringify(dataHeader),
    });
    const data = await response.json();
    data.api = api;
    return data;
  } catch (err) {
    throw err;
  }
};

const digikeyVerbose = async function (url, api, dataHeader) {
  try {
    if (!url || !api) return;
    const response = await fetch(url, {
      mode: "cors",
      method: "GET",
      headers: dataHeader,
    });
    const data = await response.json();

    if (response.ok) {
      console.log("Token all good!");
    }
    if (!response.ok) {
      console.log(
        `Something's wrong... ${data.StatusCode} : ${data.ErrorMessage}`
      );
      data.ErrorMessage === "Bearer token  expired"
        ? DigikeyObject._refreshToken()
        : "";
    }

    // data.api = api;
    // return data;
  } catch (err) {
    throw err;
  }
};

const farnellVerbose = async function (url, api) {
  try {
    if (!url || !api) return;
    const response = await fetch(url, {
      mode: "cors",
      method: "GET",
    });
    const data = await response.json();
    data.api = api;
  } catch (err) {
    console.error(err);
  }
};

export const move = function () {
  return new Promise((res) => {
    let i = 0;
    if (i == 0) {
      i = 1;
      const elem = document.getElementById("myBar");
      let width = 1;
      let id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }
    setTimeout(res, 1100);
  });
};
