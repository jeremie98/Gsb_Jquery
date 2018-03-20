<div data-role = "page" id = "pageconnexion">
<?php
include_once "vues/entetepage.html";
?>
    <div data-role = "content" id = "divconnexion">  
        <?php
            include_once  "vues/logo.html";
        ?>
        <div class= "ui-field-contain">
            <label for = "login" > Login </label>
            <input type = "text" name = "login" id = "login" value = "" />
            <label for = "mdp" > Mot de passe </label>
            <input type = "password" name = "mdp" id = "mdp" value = "" />
        </div>
        <div id = "message" ></div> 
        <p>
            <a href = "#" data-role = "button" id = "btnconnexion" data-inline="true"  > Connexion </a>
        </p>
    </div><!-- /content -->
 </div><!-- /page -->
