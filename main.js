// create the request
var xhttp = new XMLHttpRequest();

// this function runs every time the state of the request changes
xhttp.onreadystatechange = function () {

  // readyState 4 means the request is done, status 200 means it is ok
  if (xhttp.readyState == 4 && xhttp.status == 200) {

    var result = xhttp.responseText;   // response in string
    var mohamed = JSON.parse(result);  // string to json (array of photos)
    var basket = "";                   // here we collect all the cards

    // loop on all the photos
    for (var i = 0; i < mohamed.length; i++) {

      // one card for each photo
      var cartoona = `<div class="col-md-4 text-center">
                        <img src="${mohamed[i].url}" class="w-100">
                        <h4>${mohamed[i].title}</h4>
                        <h6>${mohamed[i].id}</h6>
                      </div>
      `;

      basket = basket + cartoona; // add the card to the basket
    }

    // put all the cards in the page
    document.querySelector(".test").innerHTML = basket;
  }
};

// open the request and send it
xhttp.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
xhttp.send();
