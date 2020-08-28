<?php
include 'connection.php';
$main_cat = array();
$query = mysqli_query($db,'Select * from categories where parent_id=0');
while($row = mysqli_fetch_assoc($query))
{
$query2 = mysqli_query($db,'Select id, name from categories where parent_id = '.$row['id'].'');
$sub_cat = array();
while($row1 = mysqli_fetch_assoc($query2))
{
$query3 = mysqli_query($db,'Select id, name from categories where parent_id = '.$row1['id'].'');
$sub_cat2 = array();
while($row2 = mysqli_fetch_assoc($query3))
{
array_push($sub_cat2, $row2);
}
$row1['categoriesleveltwo'] = $sub_cat2;
array_push($sub_cat, $row1);
}

$row['categorieslevelone'] = $sub_cat;
array_push($main_cat, $row);
}

echo json_encode($main_cat);
?>