<?php

require_once '../data/pdogsbrapports.php';
//recupere le champ date passé en Ajax
$idRapport=$_REQUEST['idRapport'];
//crée un objet pdo
$pdo = PdoGsbRapports::getPdo();
//demande à cet objet d'éxecuter la methode getLeRapport
$leRapport=$pdo->getLeRapport($idRapport);
//retourne Rapport en Json
echo json_encode($leRapport);

