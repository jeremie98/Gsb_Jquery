<?php
    session_start();
    require_once '../data/pdogsbrapports.php';
    $mdp = $SESSION['visiteur']['mdp'];
    $login = $_SESSION['visiteur']['login'];
    $date = $_REQUEST['date'];
    $pdo = PdoGsbRapports::getPdo();
    $lesVisites = $pdo->getLesVisitesUneDate($login, $mdp, $date); // retourne les visites
    echo json_encode($lesVisites);
?>