<?php

// partie2- question 15
require_once '../data/pdogsbrapports.php';
// récupère le champ date passé en Ajax
$idRapport=$_REQUEST['idRapport'];
// crée un objet pdo
$pdo = PdoGsbRapports::getPdo();
// demande à cet objet d'exécuter la méthode getLeRapport
$leRapport=$pdo->getLeRapport($idRapport);
//retourne Rapport en Json
echo json_encode($leRapport);
?>