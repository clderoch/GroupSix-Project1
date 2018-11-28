<?php


function Connect()
{
 $dbhost = "localhost";
 $dbuser = "brewery4_WP8UH";
 $dbpass = "Tj~mX7gl-?yt";
 $dbname = "brewery4_contact";

 // Create connection
 $conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname) or die($conn->connect_error);

 return $conn;
}
 
?>