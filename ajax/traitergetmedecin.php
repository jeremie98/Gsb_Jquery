<?php
    require_once '../data/pdogsbrapports.php';
    // récupère l'id du médécin passé en Ajax
    $idMedecin=$_REQUEST['idMedecin'];
    $pdo= PdoGsbRapports::getPdo();
    
    $leMedecin=$pdo->getLeMedecin($idMedecin);
    // retourne le médecin en json
    echo json_encode($leMedecin);
?>