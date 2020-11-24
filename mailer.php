<?php
if(isset($_POST['submit'])) {
$to = "ang.k.angelov@gmail.com";
$subject = "What are you thinking submission!";
 
// data the visitor provided
$name_field = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
$email_field = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
 
//constructing the message
$body = " From: $name_field\n\n E-Mail: $email_field\n\n";
 
// ...and away we go!
mail($to, $subject, $body);
 
// redirect to confirmation
header('Location: confirmation.htm');
} else {
// handle the error somehow
}
?>