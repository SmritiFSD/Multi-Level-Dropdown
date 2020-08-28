 <?php  
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
include "connection.php";
error_reporting(0);
$user = Array();
$sub_cat = '';
$sql="SELECT * FROM categories";
$result=mysqli_query($db,$sql);

if ($result) {
$sl = 0;

while ($sql_fetch = $result->fetch_assoc()) 
	{ 
		
		$user[$sl]['id']= $sql_fetch['id'];
		$user[$sl]['parent_id']= $sql_fetch['parent_id'];
		$user[$sl]['name']= $sub_cat.$sql_fetch['name'];
		// categoryTree($sql_fetch['id'], $sub_cat.'---');
		$sl++;
		
	}

	echo json_encode($user);
// 	die();
	} 
 ?> 