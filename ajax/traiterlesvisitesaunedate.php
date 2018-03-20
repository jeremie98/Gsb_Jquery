<?php
	session_start();
	require_once "../data/pdogsbrapports.php";
	$mdp = $_SESSION['visiteur']['mdp'];
	$login = $_SESSION['visiteur']['login'];
	$date = $_REQUEST['date'];
	$pdo = PdoGsbRapports::getPdo();
	$lesVisites =$pdo->getLesVisitesUneDate($login,$mdp,$date);
	echo json_encode($lesVisites);
?>