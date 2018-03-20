<?php
include('vues/.config.php');

// Open connection
try 
{
	$pdo = new PDO('mysql:host=' . DB_HOST . ';dbname='. DB_NAME , DB_USERNAME, DB_PASSWORD);
}
catch (PDOException $e) 
{
    echo 'Error: ' . $e->getMessage();
    exit();
}
?>