<?php

$name = $email = $phone = $schoolType = "";
require 'connection.php';
$conn    = Connect();
$name    = $conn->real_escape_string($_POST['U_NAME']);
$email   = $conn->real_escape_string($_POST['U_EMAIL']);
$phone    = $conn->real_escape_string($_POST['PHONE']);
$moreInfo = $conn->real_escape_string($_POST['More_Info']);
$comment  = $conn->real_escape_string($_POST['comment']);

$query   = "INSERT into contact_form_info (U_NAME,U_EMAIL,PHONE,More_Info,comment) VALUES('" . $name . "','" . $email . "','" . $phone . "','" . $moreInfo . "','" . $comment . "')";
$success = $conn->query($query);

if (!$success) {
	die("Couldn't enter data: ".$conn->error);

}

echo "Thank You For Contacting Us <br>";
echo '<a href="http://www.breweryheaven.com/index.html">Click here</a>';

$conn->close();

?>
