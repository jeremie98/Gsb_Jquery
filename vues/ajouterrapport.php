<div data-role = "page" id="ajouterrapport">
     <?php
        include "vues/enteteajouterrapport.html";
    ?>
     <div data-role = "content">
         <div class="ui-field-contain">
            <label for = "recherche">Rechercher le medecin :</label></br>
            <ul id="lstMedecin"  data-role="listview" data-inset="true" data-filter="true" data-filter-placeholder="Trouvez un medecin..." data-filter-theme="a">
                
            </ul>
            <br/>
            <label for = "nomMedecin">Nom medecin :</label></br>
            <input id="nomMedecin" data-role="text" value="" />
             <br/>
            <label for = "motifRapport">Motif :</label></br>
            <input id="motifRapport" data-role="text" value="" />
             <br/>
            <label for = "bilanRapport">Bilan :</label></br>
            <input id="bilanRapport" data-role="text" value="" />
             <br/>
            <label for = "dateRapport">Date :</label></br>
            <input type ="date" name ="date" id ="dateRapport" value ='' class ="required" />
            <br/>
            
            <label for="lblmedicaments">Médicaments offerts</label>
            
            <a href="#" data-role ="button" id="btnajoutmedicament" data-inline="true" > Nouveau médicament</a>
            <div id="lesListesMedicaments" class="ui-field-contain">
            <br/>
            <br/>
            <br/>
           
            </div>
              <a href="#" data-role ="button"id="btnenregistrerrapport" data-inline="true" > Nouveau médicament</a>
          
         </div>
    </div><!-- /fin contenu -->
    
    <?php  
        include "vues/piedpage.html";
    ?>
</div>
