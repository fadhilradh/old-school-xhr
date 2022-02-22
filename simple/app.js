// Step 1 : set up request

let xhr = new XMLHttpRequest();
console.log("xhr readyState", xhr.readyState); // 0
console.log("xhr status", xhr.status); // 0

// Step 2 : create function to deal with response when done

xhr.onreadystatechange = function () {
   if (xhr.readyState == 4 && xhr.status == 200) {
      document.write("ALRIGHT ALRIGHT ALRIGHT");
      console.log("xhr readyState", xhr.readyState);
      console.log("xhr status", xhr.status);
      let data = this.responseText;
      let parsed = JSON.parse(data);
      console.log("parsed", parsed);
   }
};

// Step 3 : Open and send request

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.send();
