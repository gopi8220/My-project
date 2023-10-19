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


// sql to create table
$sql = "CREATE TABLE hello (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
firstname VARCHAR(30) NOT NULL,
lastname VARCHAR(30) NOT NULL,
email VARCHAR(50)
)";

if ($con->query($sql)) {
  echo "Table gopi successfully";
} else 
{
  echo "Error creating table " . $conn->error;


$conn->close();	
  }
?>
