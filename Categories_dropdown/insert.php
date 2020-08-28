<?php 
include "connection.php";
error_reporting(0);
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
	// $id=$_GET['id'];
	$request = json_decode($postdata);
	$parent_id = $request->parent_id;
	$name = $request->name;
	// print_r($parent_id,$name);
	$sql = "INSERT INTO categories VALUES ('','$parent_id','$name')";
	if (mysqli_query($db,$sql)) {
		http_response_code(201);
	}
	else
	{
		http_response_code(422);
	}

}


?>