<?php
    require_once '../data/pdogsbrapports.php';
    // récupération des valeurs postées par l'appel Ajax
    $idMedecin =$_REQUEST['idMedecin'];
    $adresseMedecin =$_REQUEST['adresseMedecin'];
    $telMedecin =$_REQUEST['telMedecin'];
    $speMedecin =$_REQUEST['speMedecin'];  
    $pdo= PdoGsbRapports::getPdo();
 
    $laMaj =$pdo->getMajMedecin($idMedecin, $adresseMedecin, $telMedecin, $speMedecin);
    // retourne le résultat de la requête update
    echo json_encode($laMaj);
?>

