// console.log("Hello Node!");

const axios = require("axios");
axios;
//   .get("https://jsonplaceholder.typicode.com/todos/15")
axios
  .get("http://localhost:3000/todos")
  .then((response) => console.log(response.data));
