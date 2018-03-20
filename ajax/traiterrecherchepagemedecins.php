<?php

require_once '../data/pdogsbrapports.php';
// récupère le champ medecin passé en Ajax
$idMedecin=$_REQUEST['id'];
$nomMedecin=$_REQUEST['nom'];
// crée un objet pdo
$pdo = PdoGsbMedecin::getPdo();
// demande à cet objet d'exécuter la méthode getLeRapport
$leMedecin=$pdo->getLesMedecins($nom);
//retourne Rapport en Json
echo json_encode($leMedecin);

?>