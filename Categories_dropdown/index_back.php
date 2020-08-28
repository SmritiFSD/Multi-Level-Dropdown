<?php
// Include the database configuration file
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
ini_set('memory_limit', '16384 bytes');
echo memory_get_usage();
require 'connection.php';
$user = categoryTree();


 
    
    	$sql="SELECT * FROM categories";
        $result=mysqli_query($db,$sql);
        function categoryTree($sub_mark = '', $user = ''){
        global $db;
        $user = Array();  
        if ($result->num_rows > 0){
        while ($sql_fetch = $result->fetch_assoc()) {
        	$user['id'] = $sql_fetch['id'];
        	$user['name'] = $sub_mark.$sql_fetch['name'];
            $user['parent_id']= $sql_fetch['parent_id'];
            categoryTree($sql_fetch['id'], $sub_mark.'---');

        }
        echo json_encode($user);
        // die();
    }
    // print_r($user);
}
?>
