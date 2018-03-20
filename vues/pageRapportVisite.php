<?php
//include "entetehtml.html";
?>
<!-- Page -->
<div data-role = "page" id="pageRapportVisite">
    <!-- Panel -->
    <div data-role="panel" id="panelRapport" >
        <!-- Contenu Panel -->
        <!-- Ajouter un rapport -->
        <a href="pageAjoutRapport.php" data-role="button" data-icon="plus" class="btnRap" id="btnCPAdd" >Ajouter un rapport</a>
        <!-- Modifier un rapport -->
        <a href="pagechoisirrapportamodifier.php" data-role="button"  class="btnRap" id="btnCPModif" >Modifier un rapport</a>
        <!-- Fermer le panneaux-->
        <a data-role="button" data-icon="delete" class="btnRap" id="btnCPClose" data-rel="close" >Fermer le panneau</a>
     </div>
    <!-- /Panel --> 

    <?php
        // Entete avec bouton  
        include "enteteavecboutons.html";
       
    ?>
    <div data-role="header" class="ui-header " >
        <h1></h1>
        <!-- Le Href sert a ouvrir le Panel -->
        <a data-role="button" data-icon="bars" data-iconpos="notext" id="btnControlPanel" href="#panelRapport" ></a>  
    </div>
    <!-- Contenu -->
    <div data-role="content" id="contentRapportVisite">
        <?php
            include "logo.html";
        ?>
    </div>
    <!-- /Contenu -->
    <?php
        include "piedpage.html";
    ?>
</div>
<!-- /Page -->
<?php
    include "piedhtml.html";
?>