<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// Database configuration
$dbHost     = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName     = "categories";

// Create database connection
$db = mysqli_connect($dbHost, $dbUsername, $dbPassword, $dbName);

// Check connection
// if ($db->connect_error) {
//     die("Connection failed: " . $db->connect_error);
// }else{
// 	echo "Connection Successfull";
// }
?>