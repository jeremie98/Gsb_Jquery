<?php

require_once '../data/pdogsbrapports.php';
//recupere le champ date passé en Ajax
$idMedecin=$_REQUEST['idMedecin'];
//crée un objet pdo
$pdo = PdoGsbRapports::getPdo();
//demande à cet objet d'éxecuter la methode getLeRapport
$leMedecin=$pdo->getLeMedecin($idMedecin);
//retourne Rapport en Json
echo json_encode($leMedecin);

?>