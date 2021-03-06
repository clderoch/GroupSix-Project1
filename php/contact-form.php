<!doctype html>
<html>
<head>

    <meta charset="utf-8">
    <title>Brewery Heaven</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7"
     crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Bungee+Shade" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Raleway:500i" rel="stylesheet">
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="shortcut icon" href="../assets/images/favicon.ico">

</head>

<header id="masthead">
    <nav class="navbar navbar-default navbar-fixed-top" style="height: 105px; width: 100%; background-color: rgba(253,245,230,0.8); color:rgba(139,69,19,0.9); align-content: center; padding-bottom: 10px;">
        <div class="container">
          <div class="col-12">
              <a class="navbar-brand" rel="home" href="index.html" style="font-size: 60px; font-family: 'Bungee Shade', cursive; font-weight:bolder; color:rgba(139,69,19,0.9); padding-top: 40px;">Brewery Heaven</a>
              <div class="navigation">
                          <a class="nav-item" href="contact-form.html" style="font-size: 20px; font-family: 'Permanent Marker', cursive; padding-top: 30px;">Comments</a>
                <a class="nav-item" href="contact.html" style="font-size: 20px; font-family: 'Permanent Marker', cursive; padding-top: 30px;">Contact</a>
                <a class="nav-item" href="index.html" style="font-size: 20px;font-family: 'Permanent Marker', cursive; padding-top: 30px;">Home </a>
                          
              </div>
          </div>
        </div>
      </nav>
  </header>
  
<body>

  <br>
  <br>
  <br>
  <br>
  <br>

<div id="main-right">
  <div class="cta">
    <h3 style="font-size:50px; font-family: 'Raleway', sans-serif; text-align: center;">Would you like more information?</h3>
    <p style="font-size:25px; font-family: 'Raleway', sans-serif; text-align: center;">Please fill out the form below and one of the site managers will reach out to you shortly.</p>
    <p style="font-size:25px; font-family: 'Raleway', sans-serif; text-align: center;">Thanks! </p>
  </div>

<div class="container" style="background-color:rgba(253,245,230,0.8); padding: 10px; padding-left: 20px; border-radius: 25px;">
  <div class="col-8">
        <form action = "thankyou.php" method="post" name="form1" class="form">
          <div>
            <br>
            <br>
            <label for="textfield2" class="label"style="font-size:20px; color:rgba(139,69,19,0.9);">Name:</label>
            <br>
            <br>
            <input name="U_NAME" type="text" class="textfield" style="width: 60%; "required>
          </div>
          <br>
          <br>
          <div>
            <label for="textfield3" class="label"style="font-size:20px; color:rgba(139,69,19,0.9)">Email:</label>
            <br>
            <br>
            <input name="U_EMAIL" type="text" class="textfield" style="width: 60%" required>
          </div>
          <br>
          <br>
          <div>
            <label for="textfield4" class="label"style="font-size:20px; color:rgba(139,69,19,0.9)">Phone:</label>
            <br>
            <br>
            <input name="PHONE" type="text" class="textfield" style="width: 60%" required>
          </div>
          <br>
          <br>
          <div> 
              <label for="textfield5" class="label"style="font-size:20px; color:rgba(139,69,19,0.9)">Comments:</label>
              <br>
              <br>
              <textarea name="comment" type="text" class="textfield1" style="width: 60%">Enter text here...</textarea></div>
          <div>
            <br>
            <br>
            <label style="font-size:20px; color:rgba(139,69,19,0.9)" >I'm interested in: </label>
          <select style="background-color:rgba(139,69,19);" name="More_Info">
            <option name="breweries" value="more_breweries">More Breweries</option>
            <option name="beer" value="more_beer">A Certain Type of Beer</option>
            <option name="hops" value="hops">Hops</option>
            </select>
            </div>
          
        <br>
            <input style="background-color:rgba(139,69,19,0.9);color:white; width:100px; height: 30px;" type="submit" name="button" id="button" value="Submit">
            <br>
            <br>
        </form>
      
<?php
 $msg = $_POST['U_NAME']."<br/>". $_POST['U_EMAIL']."<br/>". $_POST['comment'];
if (isset($_POST["email"])) {
 mail($_POST["craig@breweryheaven.com"],$_POST['comment'],$msg);
    echo "Your message has been sent.";    
}else{  
    echo "N0, mail is not set";
}
?>
      </div>
  </div>
</div>
</main>
<br>
<br>
<footer class="page-footer font-small green">

    <div class="footer-copyright text-center py-3" style="background-color:rgba(253,245,230,0.8);">© 2018 Copyright:
      <a href="https:breweryheaven.com/index.html" style="color:rgba(139,69,19,0.9)"> BreweryHeaven.com</a>
    </div>

</footer>

</body>
</html>
