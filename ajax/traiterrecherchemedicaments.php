<?php
    session_start();
    require_once "../data/pdogsbrapports.php";
    $nomMedicament = $_REQUEST['nomMedicament'];
    $pdo=PdoGsbRapports::getPdo();
    $lesMedicaments = $pdo->getLesMedicaments($nomMedicament);
    echo json_encode($lesMedicaments);
?>

