<div data-role = "page" id = "pagemedecins">
<?php
    include "vues/entetepagemedecins.html";
?>
   <div data-role = "content"> 
       <div class="ui-field-contain">
           <label for="recherchemedecin">Recherche du médecin</label>
           <ul id="listemedecins" data-role="listview" data-filter="true" data-filter-placeholder="Nom..." data-filter-theme="a"></ul>
            <label for="nommedecin">Nom médecin</label>
            <input type = "text" name = "txtmedecin" id = "txtmedecin" value = "" />
       </div>          
   </div> <!-- /fin content -->
<?php    
    include "vues/piedpage.html";
?>
</div><!-- /fin page -->

