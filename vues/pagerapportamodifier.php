<div data-role ="page" id="pagerapportamodifier">
<?php
    include "vues/entetepageavecboutons.html";
?>
    <!--question 13-->
    <div data-role="content">
        <div class="ui-field-contain">
            <label id="lblmedecin"></label>
            <label for="motif">Motif</label>
            <textarea name="nom" id="motif" class="required"></textarea>
            <br/>
            <label for="bilan">Bilan</label>
            <textarea name="bilan" id="bilan" class="required"></textarea>
            <br/>
            <a href="#" data-role="button" id="btnmajrapport" date-inline="true">Valider</a>
        </div>
    </div> <!-- /fin content -->
<?php
    include "vues/piedpage.html";
?>
</div><!-- /fin page -->
