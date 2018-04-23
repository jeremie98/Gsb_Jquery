<div data-role = "page" id="pagemajmedecin">
    <?php
      include "vues/entetepagemajmedecins.html";
    ?>
     <div data-role="content">
                <div class="ui-field-contain">
                    <label id="lblmedecin"></label><br/>
                    <label for = "adresse">Adresse :</label></br>
                    <textarea name="adresse" id="adresse" class ="required"></textarea><br/>
                    <br/>                   
                    <label for ="telephone">Telephone :</label>
                    <textarea name="telephone" id="telephone" class="required"></textarea>
                    <br/>
                     <label for ="specialite">Specialité :</label>
                    <textarea name="specialite" id="specialite" class="required"></textarea>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <center><label id="message"></label><br/></center>
                    <br/>
                    <center><a href ="#" data-role="button" id="btnEnregistrerMajMedecin" data-inline="true" > valider </a></center>
                </div>
        </div>
</div>