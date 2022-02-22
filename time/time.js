// create new function

function getData(url, callback) {
   let xhr = new XMLHttpRequest();

   xhr.open("GET", url, true);

   xhr.responseType = "json";

   // onload only fires when request success
   xhr.onload = () => {
      let status = xhr.status;
      if (status === 200) {
         callback(null, xhr.response);
      } else {
         callback(status);
      }
   };

   xhr.send();
}

getData("http://time.jsontest.com/", (error, data) => {
   if (error != null) {
      console.log("error", error);
   } else {
      let txt = ` at ${data.time}`;
      document.getElementsByTagName("h1")[0].append(txt);
   }
});
