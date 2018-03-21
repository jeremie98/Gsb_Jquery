<div data-role = "page" id = "pagemedecins">
<?php
    include "vues/entetepagemedecins.html";
?>
   <div data-role = "content"> 
       <div class="ui-field-contain">
           <label for="recherchemedecin">Recherche du médecin</label></br>
           <ul id="listemedecins" data-role="listview" data-filter="true" data-filter-placeholder="Nom..." data-filter-theme="a"></ul></br>
           <label for="nommedecin">Nom médecin</label></br>
            <input id = "txtmedecin" name = "txtmedecin"  value = "" />
       </div>          
   </div> <!-- /fin content -->
<?php    
    include "vues/piedpage.html";
?>
</div><!-- /fin page -->

