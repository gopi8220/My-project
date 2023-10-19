<?php
$con=new mysqli('localhost','root','','crudoperation');
if($con->connect_error)
{
	echo $con->connect_error;
	die();
}
else
{
	echo "connection succesfull";
}
$sql = "INSERT INTO hello(id,firstname,lastname,email)
VALUES (88,'virasadt', 'Kohdgli', 'john@example.com')";

if ($con->query($sql)) {
  echo "record created successfully";
} else {
  echo "Error" .$con->error;
$con->close();
}
?>