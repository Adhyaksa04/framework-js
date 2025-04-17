import axios from "axios";
function getAxios() {
  axios({
    method: "get",
    url: "https:jsonplaceholder.typicode.com/users",
    responseType: "json",
  }).then(function (response) {
    const result = response.data;
    console.log(result);
  });
}
getAxios();
