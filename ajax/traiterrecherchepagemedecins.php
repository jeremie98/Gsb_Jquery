<?php
    session_start();
    require_once "../data/pdogsbrapports.php";
    $nom = $_REQUEST['nom'];
    $pdo=PdoGsbRapports::getPdo();
    $lesMedecins = $pdo->getLesMedecins($nom);
    echo json_encode($lesMedecins);
?>


