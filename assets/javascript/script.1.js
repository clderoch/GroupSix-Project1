var clickSound = new Audio("../assets/sounds/beer.wav");
var clickSound1 = new Audio("../assets/sounds/siren.wav");

console.log('script one');

function searchBreweryFinder(brewery) {

  var queryURL = "https://api.openbrewerydb.org/breweries?by_city=" + brewery + "&sort=-postal_code";;
console.log(brewery);

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    console.log(response)
    $("#brewerys").empty();

    for (var i = 0; i < 10; i++) {
      console.log(response[i]);
      var brewery = $("<div>");

      brewery.attr({
        "class": 'brewery',
        "data-name": response[i].name,
        "data-addr": response[i].street,
        "data-city": response[i].city,
        "data-state": response[i].state,
        "data-postal": response[i].postal_code,
        "data-long": response[i].longitude,
        "data-lat": response[i].latitude,
        "data-URL": response[i].website_url
      });

      var longitude = parseFloat(response[i].longitude);
      var latitude = parseFloat(response[i].latitude);

      console.log(latitude);
      console.log(longitude);
      // var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=Austin+Beerworks&latitude=30.3795705&longitude=-97.72984444296&limit=5";

      var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" +response[i].city+"+Beerworks&latitude=" + latitude+ "&longitude=" +longitude +"&limit=1";
      console.log(myurl);
      $.ajax({
       url: myurl,
       headers: {
         'Authorization': 'Bearer UhEWcGlxF2iKmhi0w847OGYsVlHmwOoganZRseCED8dMgeFQle_G5c08gnNvAjpa_JrN1SA9vImtnzmiSpPCHp-yA1lx6Cth00zgQX4ZEZysWNMkDpLpZKiDi2vwW3Yx',
       },
       method: 'GET',
       dataType: 'json',
       success: function (data) {
         var totalresults = data.total;
         if (totalresults > 0) {
     
          //  $('#brewerys').append('<h5>We discovered ' + totalresults + ' results!</h5>');
           $.each(data.businesses, function (i, item) {
            brewery.attr({
             "data-id": item.id,
            //  var alias = item.alias;
            //  var phone = item.display_phone;
            //  var image = item.image_url;
            //  var name = item.name;
            //  var rating = item.rating;
            //  var reviewcount = item.review_count;
            //  var address = item.location.address1;
            //  var city = item.location.city;
            //  var state = item.location.state;
            //  var zipcode = item.location.zip_code;
            });

console.log(this);
      var breweryName = $("<h1>").html("<a target='_blank' href=" + response[i].website_url + ">" + response[i].name + "</a>");
      var breweryURL = $("<a>").attr("href", response[i].website_url);
      var breweryAddress = $("<h3>").text(response[i].street + " || " + response[i].postal_code + " || " + response[i].brewery_type);
      

      brewery.append(breweryName, breweryURL, breweryAddress);
      $("#brewerys").append(brewery);

  
//         $('#brewerys').append('<div id="' + id + '" style="margin-top:50px;margin-bottom:50px;"><img src="' + image + '" style="width:200px;height:150px;"><br>We found <b>' + name + '</b> (' + alias + ')<br>Business ID: ' + id + '<br> Located at: ' + address + ' ' + city + ', ' + state + ' ' + zipcode + '<br>The phone number for this business is: ' + phone + '<br>This business has a rating of ' + rating + ' with ' + reviewcount + ' reviews.</div>');
//       });
//     } else {

//       $('#brewerys').append('<h5>We discovered no results!</h5>');
//     }
//   }
// });
           
        
    
  });

}

}
})
}

})
}


$("#select-brewery").on("click", function (event) {
  clickSound.play();
  event.preventDefault();
  var inputBrewery = $("#brewery-input").val().trim();
  searchBreweryFinder(inputBrewery);
  console.log(inputBrewery);
});

$("#lyft-web-button-parent").on("click", function (event) {
  clickSound1.play();
});
  




