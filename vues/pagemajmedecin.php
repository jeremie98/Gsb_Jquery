<div data-role = "page" id = "pagemajmedecin">
<?php
    include "vues/entetepagemajmedecin.html";
?>
    <div data-role="content">
        <div class="ui-field-contain">
            
            <label for="adresse">Adresse</label>
             <input id = "txtadresse" name = "txtadresse"  value = "" />
            <label for="telephone">Téléphone</label>
             <input id = "txttelephone" name = "txttelephone"  value = "" />
            <label for="specialite">Spécialité complémentaire</label>
             <input id = "txtspecialite" name = "txtspecialite"  value = "" />
             <a id="btnEnregistrerMajMedecin" data-role="button"  data-inline="true">Valider</a>
             <br/>
             <div id = "resultat" ></div>
        </div>          
   </div> <!-- /fin content -->
<?php    
    include "vues/piedpage.html";
?>    
</div><!-- /fin page -->