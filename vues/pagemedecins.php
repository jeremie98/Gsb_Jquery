<div data-role = "page" id = "pagemedecins">
<?php
    include "vues/entetepagemedecins.html";
?>
   <div data-role = "content" id ="listeMedecin"> 
		<div class="ui-field-contain">
            <label for = "medecin" > Rechercher un médecin </label>
            <ul data-role ="listview" id="listeMedecins" data-inset="true" data-filter="true" data-filter-placeholder="Nom..."> 
			</ul>     
            <label for = "medecin" > Nom Médecin </label><br>
            <input type = "text" name = "medecin" id = "" value = "" />
        </div>
   </div> <!-- /fin content -->
<?php    
    include "vues/piedpage.html";
?>
</div><!-- /fin page -->

