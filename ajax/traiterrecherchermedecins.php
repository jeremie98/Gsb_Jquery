<?php
    require_once '../data/pdogsbrapports.php';
    // récupère le champ nom passé en Ajax
    $nomMedecin=$_REQUEST['nomMedecin'];
    $pdo = PdoGsbRapports::getPdo();
    // pdo demande l'exécution de getLeMedecin
    $leMedecin=$pdo->getLesMedecins($nomMedecin);
    // retourne Medecin en Json
    echo json_encode($leMedecin);
    
?>
    
    
    
    