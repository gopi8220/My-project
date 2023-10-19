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
?>