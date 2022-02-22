let url = "https://randomuser.me/api/";
let method = "GET";

function requestListener() {
   console.log("what request looks NOW", this);

   let data = JSON.parse(this.responseText);
   console.log("converted to JSON", data);
}

function errorCatcher() {
   console.log("errrrrror");
}

let xhr = new XMLHttpRequest();
console.log(xhr);

xhr.open(method, url, true);

xhr.onload = requestListener;

xhr.onerror = errorCatcher;

xhr.send();
