<div data-role = "page" id = "pagechoisirrapportamodifier">
<?php
    include "vues/entetepageavecboutons.html";
?>
      
    <div data-role = "content"> 
        <h3>Choisir un rapport</h3>
        <!-- Mise à jour rapport côté HTML-->
        <div class ="ui-field-contain">
            <label for ="date">Date de la visite</label>
            <input type="date" name="date" id="date" value='' class ="required"/>
            <label id="lgddate" for ="lgddate"></label>
            <ul date-role="listview" id='listerapports'>
                
            </ul>
        </div>
   
    </div> <!-- /fin content -->
<?php    
    include "vues/piedpage.html";
?>
</div><!-- /fin page -->
