


// <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
// <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js" integrity="sha384-o+RDsa0aLu++PJvFqy8fFScvbHFLtbvScb8AjopnFD+iEQ7wo/CG0xlczd+2O/em" crossorigin="anonymous"></script>
// <script>
// var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=by-chloe&location=boston";
// var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=Circle+Brewing+Company&location=2340+W+Braker+Ln+Ste+B+austin+texas";
var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=Austin+Beerworks&latitude=30.3795705&longitude=-97.72984444296&limit=5";


$.ajax({
  url: myurl,
  headers: {
    'Authorization': 'Bearer UhEWcGlxF2iKmhi0w847OGYsVlHmwOoganZRseCED8dMgeFQle_G5c08gnNvAjpa_JrN1SA9vImtnzmiSpPCHp-yA1lx6Cth00zgQX4ZEZysWNMkDpLpZKiDi2vwW3Yx',
  },
  method: 'GET',
  dataType: 'json',
  success: function (data) {
    // Grab the results from the API JSON return
    var totalresults = data.total;
    // If our results are greater than 0, continue
    if (totalresults > 0) {
      // Display a header on the page with the number of results
      $('#results').append('<h5>We discovered ' + totalresults + ' results!</h5>');
      // Itirate through the JSON array of 'businesses' which was returned by the API
      $.each(data.businesses, function (i, item) {
        // Store each business's object in a variable
        var id = item.id;
        var alias = item.alias;
        var phone = item.display_phone;
        var image = item.image_url;
        var name = item.name;
        var rating = item.rating;
        var reviewcount = item.review_count;
        var address = item.location.address1;
        var city = item.location.city;
        var state = item.location.state;
        var zipcode = item.location.zip_code;
        // Append our result into our page
        $('#results').append('<div id="' + id + '" style="margin-top:50px;margin-bottom:50px;"><img src="' + image + '" style="width:200px;height:150px;"><br>We found <b>' + name + '</b> (' + alias + ')<br>Business ID: ' + id + '<br> Located at: ' + address + ' ' + city + ', ' + state + ' ' + zipcode + '<br>The phone number for this business is: ' + phone + '<br>This business has a rating of ' + rating + ' with ' + reviewcount + ' reviews.</div>');
      });
    } else {
      // If our results are 0; no businesses were returned by the JSON therefor we display on the page no results were found
      $('#results').append('<h5>We discovered no results!</h5>');
    }
  }
});

// GET https://api.yelp.com/v3/businesses/{id}