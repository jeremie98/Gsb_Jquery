
<div data-role = "page" id="pagemedecins">
     <?php
        include "vues/entetepagemedecins.html";
    ?>
    <div data-role = "content">
         <div class="ui-field-contain">
            <label for = "recherche">Rechercher  un medecin :</label></br>
            <ul id="autocomplete"  data-role="listview" data-inset="true" data-filter="true" data-filter-placeholder="Trouvez un medecin..." data-filter-theme="a">
                
            </ul>
            <br/>
            <label for = "medecin">Nom medecin :</label></br>
            <input id="resultatRecherche" data-role="text" value="" />
           
         </div>
    </div><!-- /fin contenu -->
    
    <?php  
        include "vues/piedpage.html";
    ?>
</div><!-- /fin de page-->