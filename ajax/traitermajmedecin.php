<?php
    session_start();
    require_once "../data/pdogsbrapports.php";
    $idMedecin=$_REQUEST['idMedecin'];
    $adresse = $_REQUEST['adresse'];
    $telephone = $_REQUEST['telephone'];
    $specialite = $_REQUEST['specialite'];
    $pdo=PdoGsbRapports::getPdo();
    $Message = $pdo->majLeMedecin($idMedecin,$adresse,$telephone,$specialite);
    echo json_encode($Message);
?>