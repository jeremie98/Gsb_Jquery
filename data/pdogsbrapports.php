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
      	 /*--------------------Version locale---------------------------------------- */
      private static $serveur='mysql:host=localhost';
      private static $bdd='dbname=bd_gsb_rapport_visite';   		
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


        
        
  /**partie2-question 1
 * Retourne les informations du visiteur
 * @param $login 
 * @param $mdp
 * @return le tableau associatif ou NULL
*/
	public function getLeVisiteur($login, $mdp){
		$req = "select id, nom, prenom from visiteur where login = :login and mdp = :mdp";
                
                $stm = self::$monPdo->prepare($req);
                $stm->bindParam(':login', $login);
                $stm->bindParam(':mdp', $mdp);
                $stm->execute();
        	    $laLigne = $stm->fetch();
                if(count($laLigne)>1)
                   return $laLigne;
                else              
                    return NULL;
	} 

  /*partie2- question12
   * 
   * @param type $login
   * @param type $mdp
   * @param type $date
   */
        public function getLesVisitesUneDate($login,$mdp,$date){
            $req="select rapport.id as idRapport, medecin.nom as nomMedecin, medecin.prenom as prenomMedecin
            from visiteur, rapport, medecin
            where visiteur.login=:login and visiteur.mdp=:mdp
            and rapport.idVisiteur=visiteur.id
            and medecin.id=rapport.idMedecin
            and rapport.date=:date";
            
            $stm= self::$monPdo->prepare($req);
            $stm->bindParam('login',$login);
            $stm->bindParam(':mdp', $mdp);
            $stm->bindParam(':date',$date);
            
            $stm->execute();
            
            $lesLignes=$stm->fetchall();
            return $lesLignes;
        }
  
   /**
    * Partie 2 page 9 - question 15
    * @param type $idRapport
    * @return type
    */
    public function getLeRapport($idRapport){
        $req = "select * from rapport";
        
        $stm = self::$monPdo->prepare($req);
        $stm->bindParam(':idRapport', $idRapport);
        
        $stm->execute();
        
        $laLigne = $stm->fetch();
        return $laLigne;
    }

    /**
    *@param type $idmedecin
    *@return type
    */
    public function getLesMedecins(){
      $req = "select nom from medecin";

      $stm = self::$monPdo->prepare($req);
      $stm -> bindParam('nom',$nomMedecin);
      $stm -> bindParam('id',$idMedecin);

      $stm -> execute();

      $laLigne = $stm->fetch();
      return $laLigne;

    }
}   // fin classe
?>


