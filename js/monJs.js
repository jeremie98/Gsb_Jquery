$(function(){
    
   /*-----------------------Page connexion----------------------------------*/
    $('#pageconnexion #btnconnexion').bind("click", maFonction);
        
    function maFonction(e){
        e.preventDefault();
        var mdp = $("#pageconnexion #mdp").val(); 
        var login = $("#pageconnexion #login").val();
        $.post("ajax/traiterconnexion.php",{
                    "mdp" : mdp,        
                    "login" : login },
                    foncRetourConnexion,"json" );
    };
    
    function foncRetourConnexion(data){
            if(data != null){
                $.mobile.changePage("#pageaccueil");
                console.log("connexion ok");
             }
             else{
                $("#pageconnexion #message").css({color:'red'});
                $("#pageconnexion #message").html("erreur de login et/ou mdp");
             }
    }

    /*--------------------Page choisir rapport à modifier---------------------*/
    /*--partie2-question10--*/
    $("#pagechoisirrapportamodifier #date").bind("change", function(){
        var date=$('#pagechoisirrapportamodifier #date').val();
        
        var legende="Visites effectuées le:"+date+" chez les médecins :";
        $("#pagechoisirrapportamodifier #lgddate").html(legende);
        
    // appel Ajax qui pointera sur une page PHP avec pour argument la date choisie
    $.post("ajax/traiterlesvisitesaunedate.php",{
        "date": date
    },foncRetourListeRapports, "json");
    });
    
    function foncRetourListeRapports(lesVisites){
        // question 12  
        console.log("retour liste rapport ok");
        $("#pagechoisirrapportamodifier #listerapports").empty();
        // boucle for pour le nombre de rapports
        for(i=0;i<lesVisites.length;i++){
                var unRapport=lesVisites[i];
                var idRapport=unRapport['idRapport'];
                var nomMedecin=unRapport['nomMedecin'];
                var prenomMedecin=unRapport['prenomMedecin'];

                var html="<li id="+idRapport+"><a href ='#'>";
                html+=nomMedecin+""+prenomMedecin+"</a></li>";

                $('#pagechoisirrapportamodifier #listerapports').append(html);
        }
        $('#pagechoisirrapportamodifier #listerapports').listview('refresh');
}   
    
      $("#pagechoisirrapportamodifier #listerapports").on("click", "li", function(e){
        //indique que cet évènement click est ajouté à toutes les balises li
        // de la page indiquée
        // puis récupère la valeur courante de l'attribut id (le rapport sélectionné pour la modification
            var idRapport=$(this).attr("id");
           // alert("idrapport"+idRapport);
        // stocke cette valeur dans une variable accessible en dehors de la fonction
        // portée script
            window.idRapport=idRapport;
        // récupérer le contenu de type text de la balise <li>
            var medecin=$(this).text();
           // alert (medecin);
        // le mettre dans une variable window
            window.medecin=medecin;
        // lancer la requête Ajax (POST) qui prendra l'idRapport comme argument
        // pointera sur le fichier php traiterchoixrapport.php
        // la fonction de retour sera foncRetourChoixRapport
        $.post("ajax/traiterchoixrapport.php",{
            "idRapport" : idRapport
            },
            foncRetourChoixRapport, "json");
        });
   
    function foncRetourChoixRapport(data){
       // question 17
            $.mobile.changePage("#pagerapportamodifier");
            $("#pagerapportamodifier #lblmedecin").html("Médecin : "+window.medecin);
            $("#pagerapportamodifier #motif").text(data['motif']);
            $("#pagerapportamodifier #bilan").text(data['bilan']);
     }
     
    /*--------------------Page médecins ---------------------*/
    $( document ).on( "pageinit", "#pagemedecins", function() {
        $( "#listemedecins" ).on( "filterablebeforefilter", function ( e, data ) {
            $input = $( data.input ),
            value = $input.val();
            nomMedecin = value;
    
            if ( value && value.length >= 1 ) 
            {
                $('#pagemedecins #listemedecins').listview('refresh');
                $.post("ajax/traiterrecherchermedecins.php",{
                        "nomMedecin" : nomMedecin
                }, foncRetourRecherchePageMedecins, "json")
            }
        });
    });
    
    function foncRetourRecherchePageMedecins(leMedecin){
        var html="";
        for(i=0; i<leMedecin.length; i++){
            var unMedecin=leMedecin[i];
            var idMedecin=unMedecin['idMedecin'];
            var nomMedecin= unMedecin['nomMedecin'];
            var prenomMedecin= unMedecin['prenomMedecin'];
            var adresseMedecin= unMedecin['adresseMedecin'];
            
            html="<li id="+idMedecin+"><a href ='#'>";
            html+=nomMedecin+""+prenomMedecin+""+adresseMedecin+"</a></li>";
            
            $('#pagemedecins #listemedecins').append(html);
        }
        
    $('#pagemedecins #listemedecins').listview('refresh');     
    }
     
});     // Fin fonction principale

