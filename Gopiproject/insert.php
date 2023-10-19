<?php
$con=new mysqli('localhost','root','','tutorial');
if($con->connect_errno)
{
	echo $con->connect_error;
	die();
	else{
		echo "data connected";
	}
}
?>
