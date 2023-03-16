console.log("Hello, World!");

//hit API with NODE.JS //npm install node-fetch
//API Requests


const fetch = require("node-fetch");
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response)=>response.json())
.then((json)=>console.log(json));

//console.log(response));
//.then((response)=>console.log(response));


fetch('http://example.com/movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));
