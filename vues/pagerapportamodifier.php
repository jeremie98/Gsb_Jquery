<div data-role ="page" id="pagerapportamodifier">
<?php
	include "vues/enteteavecboutons.html";
?>
	
        <div data-role="content">
                <div class="ui-field-contain">
                    <label id="lblmedecin"></label><br/>
                    <label for = "motif">Motif :</label></br>
                    <textarea name="nom" id="motif" class ="required"></textarea><br/>
                    <br/>
                    <br/>
                    <br/>
                   
                    <label for ="bilan">Bilan :</label>
                    <textarea name="bilan" id="bilan" class="required"></textarea>
                    <br/>
                    <br/>
                    <br/>
                    <center><a href ="#" data-role="button" id="btnmajrapport" data-inline="true" > valider </a></center>
                </div>
        </div>
<?php
	include "vues/piedpage.html";
?>
</div>