$(function(){
    
   /*-----------------------Page connexion----------------------------------*/
    $('#pageconnexion #btnconnexion').bind("click", function(e) {
            e.preventDefault();
            var mdp = $("#pageconnexion #mdp").val(); 
            var login = $("#pageconnexion #login").val();
            $.post("./ajax/traiterconnexion.php",{
                        "mdp" : mdp,        
                        "login" : login
                        
                    },
                        foncRetourConnexion,"json" );
    });
    
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
        "date":date
    },foncRetourListeRapports(legende), "json");
    });
    
     function foncRetourListeRapports(lesVisites){
        // question 12  
        console.log("okhh");
        $("#pagechoisirrapportamodifier #listerapports").empty();
        // boucle for pour le nombre de rapports
        for(i=0; i<lesVisites.length; i++){
            // rapport courant
            var unRapport=lesVisites[i];
            // champs correspondants
            var idRapport=unRapport['idRapport']; 
            var nomMedecin=unRapport['nomMedecin'];
            var prenomMedecin=unRapport['prenomMedecin'];
            // balise affichant un médecin sous forme d'hyperlien
            var html="<li id="+idRapport+"><a href='#'>";
            html+=nomMedecin+" "+prenomMedecin+"</a></li>";
            // ajout de la chaîne à la liste ul
            console.log("ok");
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

     /*-----------------------------------Page medecin ---------------------------------------------*/

$(document).on("pagecreate", "#pagemedecins", function () {
    $( "#listeMedecins" ).on( "filterablebeforefilter", 
     function foncRetourRecherchePageMedecin (e, data){
        var $ul = $(this),
        $input = $(data.input),
        value = $input.val(),
        html="";
        console.log("ça passe ici");
        $ul.html("");
        if(value && value.length > 2 ){
        $ul.html("<li><div class='ui-loader'><span class='ui-icon ui-icon-loading'></span></div></li>");
        $ul.listview("refresh");

        var nomMedecin=nomMedecin;        
        //var id=idMedecin;
        //var prenom=prenomMedecin;
        //var adresse=adresseMedecin;
        data :{q:$input.val()}
       
        }
    })
    function foncRetourRecherchePageMedecin (response) {
        $("#pagemedecins #listeMedecins").on("click","li",function(e){
            var nomMedecin=$(this).attr("id");
            window.nomMedecin=nomMedecin;
            var medecin=$(this).text();
            window.medecin=medecin;
            console.log("ça passe coco");
            
            $('#pagemedecins').listview('refresh');
        $.post("ajax/traiterrecherchepagemedecins.php",{
            "nom" : nomMedecin
            },
            foncRetourRecherchePageMedecin, "json");
              $.each(response), function (i,val){
                html +="<li>"+ nomMedecin +"</li>";
                $ul.trigger("updatelayout");
         }
          });

          };
     });
});     // Fin fonction principale

