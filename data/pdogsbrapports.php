<?php
/** 
 * Classe d'accès aux données. 
 
 * Utilise les services de la classe PDO
 * pour l'application Gsb Rapport Mobile
 * Les attributs sont tous statiques,
 * les 4 premiers pour la connexion
 * $monPdo de type PDO 
 * $monPdoGsbRapports qui contiendra l'unique instance de la classe
 * @package default
 * @author Cheri Bibi
 * @version    1.0
 * @link       http://www.php.net/manual/fr/book.pdo.php
 */

class PdoGsbRapports{   		
      	 /*--------------------Version locale--------------------------------------- */
      private static $serveur='mysql:host=localhost';
      private static $bdd='dbname=gsbrapports';   		
      private static $user='root' ;    		
      private static $mdp='' ;
      private static $monPdo;
      private static $monPdoGsbRapports = null;
/**
 * Constructeur privé, crée l'instance de PDO qui sera sollicitée
 * pour toutes les méthodes de la classe
 */				
	private function __construct(){
            self::$monPdo = new PDO(self::$serveur.';'.self::$bdd, self::$user, self::$mdp); 
            self::$monPdo->query("SET CHARACTER SET utf8");
	}
        
	public function _destruct(){
            self::$monPdo = null;
	}
/**
 * Fonction statique qui crée l'unique instance de la classe
 
 * Appel : $instancePdoGsbRapports = PdoGsbRapports::getPdo();
 
 * @return l'unique objet de la classe PdoGsbRapports
 */
	public  static function getPdo(){
		if(self::$monPdoGsbRapports == null){
			self::$monPdoGsbRapports = new PdoGsbRapports();
		}
		return self::$monPdoGsbRapports;  
	}
        
        
        public function getLeVisiteur($login,$mdp)
        {
            $req ="select id,nom,prenom from visiteur where login = :login and mdp = :mdp ";
            
            $stm= self::$monPdo->prepare($req);
            $stm->bindParam(':login',$login);
            $stm->bindParam(':mdp',$mdp);
            $stm->execute();
                $ligne = $stm->fetch();
            if(count($ligne)>1)
              return $ligne;
            else
              return NULL;
           /* $req = "select visiteur.id as id, visiteur.nom as nom, visiteur.prenom as prenom from visiteur 
            where login='$login'and mdp='$mdp'";
            $rs = self::$monPdo->query($req);
            $ligne = $rs->fetch();
            return $ligne;*/
        }
		
        public function getLesVisiteUneDate($id)
        {	
                $req ="SELECT id,date,motif FROM rapport WHERE idVisiteur ='$id'";


                $rs = self::$monPdo->query($req);
                $lesLignes = $rs->fetchAll();


                return $lesLignes;

        }
		
        public function getLesVisitesUneDate($login,$mdp,$date){

                $req="select rapport.id as idRapport,medecin.nom as nomMedecin , medecin.prenom as prenomMedecin
                    from visiteur,rapport,medecin                       
                    where visiteur.login=:login and visiteur.mdp=:mdp
                    and rapport.idVisiteur=visiteur.id
                    and medecin.id=rapport.idMedecin
                    and rapport.date=:date";

                $stm=self::$monPdo->prepare($req);
                $stm->bindParam('login',$login);
                $stm->bindParam(':mdp',$mdp);
                $stm->bindParam(':date',$date);

                $stm->execute();

                $lesLignes=$stm->fetchall();
                return $lesLignes;
        }
        
        public function getLeRapport($idRapport){
            $req = "select * from rapport where id= :idRapport";
            
            $stm = self::$monPdo->prepare($req);
            $stm->bindParam(':idRapport',$idRapport);
            
            $stm->execute();
            
            $laLigne = $stm->fetch();
            return $laLigne;
        }
        
         public function getLesMedecins($nom){
            //$req = "select * from medecin where nom like 'nom%' ";
            
            $req = "select medecin.id as idMedecin, medecin.nom as nomMedecin , medecin.prenom as prenomMedecin, medecin.adresse as adresseMedecin, medecin.tel as telephoneMedecin
                    from medecin                       
                    where nom like '$nom%'
                    order by medecin.nom desc ";
            
            $stm = self::$monPdo->prepare($req);
            $stm->bindParam(':nom',$nom);
            
            $stm->execute();
            
            $lesLignes = $stm->fetchall();
            return $lesLignes;
        }
        
         public function getLeMedecin($idMedecin){
             $req = "select medecin.adresse as adresse , medecin.tel as telephone, medecin.specialitecomplementaire as specialite
                    from medecin                       
                    where id = :idMedecin";
            
            $stm = self::$monPdo->prepare($req);
            $stm->bindParam(':idMedecin',$idMedecin);
            
            $stm->execute();
            
            $Ligne = $stm->fetch();
            return $Ligne;
        }
        
     public function majLeMedecin($idMedecin,$adresse,$telephone,$specialite){
         $req = "update medecin 
                set medecin.adresse = '$adresse', medecin.tel = '$telephone', medecin.specialitecomplementaire= '$specialite' 
                where id = '$idMedecin' ";
                 
                 
                $stm=self::$monPdo->prepare($req);
         
                $stm->bindParam(':adresse',$adresse);
                $stm->bindParam(':telephone',$telephone);
                $stm->bindParam(':specialite',$specialite);
                $stm->bindParam(':idMedecin',$idMedecin);
                
                $stm->execute();
              
               if($stm->rowCount()==1){
                   $message = "Update reussi";
               }
               else {
                   $message = "Echec Update";
               }
         
               return $message ; 
                
              //  $LigneMedecin=$stm->fetch();
              //  return $LigneMedecin;
        
     }
       
      public function getLesRapports($idMedecin){
            $req = "select rapport.date as date ,rapport.motif as motif, rapport.bilan as bilan , visiteur.nom as nomVisiteur,visiteur.prenom as prenomVisiteur
                    from rapport 
                    INNER JOIN visiteur ON visiteur.id = rapport.idVisiteur
                    where idMedecin = '$idMedecin'
                    order by rapport.date desc ";
            
            $stm = self::$monPdo->prepare($req);
            $stm->bindParam(':idMedecin',$idMedecin);
            
            $stm->execute();
            
            $laLigne = $stm->fetchall();
            return $laLigne;
        }
     
    public function getLesMedicaments($nomMedicament){
           
            $req = "select medicament.id as idMedicament, medicament.nomCommercial as nom
                    from medicament                      
                    where nomCommercial like '$nomMedicament%'
                    order by medicament.nomCommercial desc ";
            
            $stm = self::$monPdo->prepare($req);
            $stm->bindParam(':nomCommercial',$nomMedicament);
            
            $stm->execute();
            
            $lesLignes = $stm->fetchall();
            return $lesLignes;
        }
}   // fin classe
?>


