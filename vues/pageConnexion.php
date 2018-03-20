
<div data-role="page" id="pageConnexion">
    <?php
        include_once "vues/entetepage.html";
      
        include "vues/logo.html";
    ?>
    <div data-role="content" id="divconnexion">
       
        <div class="ui-field-contain">
            <label for ="login">Login</label></br>
            <center><input type="text" name="login" id="login" value=""/></center>
            <label for ="mdp">Mot de passe</label></br>
            <center><input type="password" name="mdp" id="mdp" value=""/></center>
        </div>
        <div id="message"></div>
        <p>
            <a data-role="button" id="btnconnexion" data-inline="true" > Connexion </a>
        </p>
    </div><!-- Content -->
</div><!-- Page -->
    