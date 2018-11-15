function searchBreweryFinder(brewery) {

    var queryURL = "https://api.openbrewerydb.org/breweries?by_city=" + brewery + "&sort=-postal_code";;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      // Printing the entire object to console
      console.log(response);
      // Constructing HTML containing the artist information
      var breweryName1 = $("<h1>").text(response[0].name );
      var breweryURL1 = $("<a>").attr("href", response[0].website_url).append(breweryName1);
      var breweryAddress1 =$("<h3>").text( response[0].street + " || " + response[0].postal_code + " || " + response[0].brewery_type)
      
      var breweryName2 = $("<h1>").text(response[1].name);
      var breweryURL2 = $("<a>").attr("href", response[1].website_url).append(breweryName2);
      var breweryAddress2 =$("<h3>").text( response[1].street + " || " + response[1].postal_code + " || " + response[1].brewery_type)
      
      var breweryName3 = $("<h1>").text(response[2].name);
      var breweryURL3 = $("<a>").attr("href", response[2].website_url).append(breweryName3);
      var breweryAddress3 =$("<h3>").text( response[2].street + " || " + response[2].postal_code + " || " + response[2].brewery_type)
      
      var breweryName4 = $("<h1>").text(response[3].name);
      var breweryURL4 = $("<a>").attr("href", response[3].website_url).append(breweryName4);
      var breweryAddress4 =$("<h3>").text( response[3].street + " || " + response[1].postal_code + " || " + response[3].brewery_type)
      
      var breweryName5 = $("<h1>").text(response[4].name);
      var breweryURL5 = $("<a>").attr("href", response[4].website_url).append(breweryName5);
      var breweryAddress5 =$("<h3>").text( response[4].street + " || " + response[4].postal_code + " || " + response[4].brewery_type)

      // Empty the contents of the artist-div, append the new artist content
      $("#brewery-div").empty();
      $("#brewery-div").append(breweryURL1,breweryAddress1,breweryURL2,breweryAddress2,breweryURL3,breweryAddress3,breweryURL4,breweryAddress4,breweryURL5,breweryAddress5);
    });
  }
  // Event handler for user clicking the select-artist button
  $("#select-brewery").on("click", function(event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the artist name
    var inputBrewery = $("#brewery-input").val().trim();
    // Running the searchBandsInTown function(passing in the artist as an argument)
    searchBreweryFinder(inputBrewery);
  });