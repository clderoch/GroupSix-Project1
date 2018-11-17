var clickSound = new Audio("./assets/sounds/beer.wav");
var clickSound1 = new Audio("./assets/sounds/siren.wav");

function searchBreweryFinder(brewery) {

  var queryURL = "https://api.openbrewerydb.org/breweries?by_city=" + brewery + "&sort=-postal_code";;

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

      var breweryName = $("<h1>").html("<a target='_blank' href=" + response[i].website_url + ">" + response[i].name + "</a>");
      var breweryURL = $("<a>").attr("href", response[i].website_url);
      var breweryAddress = $("<h3>").text(response[i].street + " || " + response[i].postal_code + " || " + response[i].brewery_type);

      brewery.append(breweryName, breweryURL, breweryAddress);
      $("#brewerys").append(brewery);
    }
  });
}

$("#select-brewery").on("click", function (event) {
  clickSound.play();
  event.preventDefault();
  var inputBrewery = $("#brewery-input").val().trim();
  searchBreweryFinder(inputBrewery);
});

$("lyft-web-button-parent").on("click", function (event) {
  clickSound1.play();
});