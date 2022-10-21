const { default: axios } = require("axios");

exports.displayComponent = (componentState) => {
  componentState.then(async (id) => {
    const currentState = await axios({
      method: "GET",
      url: `/api/v1/requests/${id}`,
    });
    if (currentState.data.status === "success") {
      console.log("successfully retrieved state");
    }
    return currentState.data.requests.request;
  });
};
