exports.searchComponent = async (data) => {
  const res = await axios({
    method: "POST",
    url: "/api/v1/requests",
    data: { data },
  });

  if (res.status === "success") {
    console.log("Post method successful");
  }
};

exports.dropFile = () => {
  console.log("File dropped");
};

exports.loadFile = () => {
  console.log("File imported");
};
