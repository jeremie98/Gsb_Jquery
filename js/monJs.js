/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* Rapport medecin, gestion du Control Panel */
/* global optionsHash */

$(function()
{
    // Page Connexion 
    $('#pageConnexion #btnconnexion').bind("click",maFonction);
    function maFonction(e)
    {
        e.preventDefault();
        var mdp = $("#pageConnexion #mdp").val();
        var login = $("#pageConnexion #login").val();
        $.post("./ajax/traiterconnexion.php",
        {
            "mdp" : mdp,
            "login" :login
        },
        foncRetourConnexion,"json"); 
    }
    
    function foncRetourConnexion(data)
    {
        /*if(data != false)
        {
            $.mobile.changePage("#pageaccueil");
        }
        else
        {
            $("#pageConnexion #message").css({color:'red'});
            $("#pageConnexion #message").html("Erreur de login et/ou de mdp");
        }*/
        if (data==null)
        {
            $("#pageConnexion #message").css({color:'red'});
            $("#pageConnexion #message").html("Erreur de login et/ou de mdp");
        }
        else
        {
            $.mobile.changePage("./vues/pageaccueil.php");
        }
    }
	
    /*---------------------------------Part 2------------------------------------*/
	
    $("#pagechoisirrapportamodifier #date").bind("change",function(){
        console.log("Coucou");
            var date= $('#pagechoisirrapportamodifier #date').val();

            var legende ="Visites effectuées le :"+ date +"chez les medecins :";
            $("#pagechoisirrapportamodifier #lgddate").html(legende);


    //appel Ajax qui pointera sur une page php 

    $.post("ajax/traiterlesvisitesaunedate.php",{
            "date" : date
    },foncRetourListeRapports,"json");

    });
	
	
    function foncRetourListeRapports(lesVisites){
		
        $("#pagechoisirrapportamodifier #listerapports").empty();

        for(i=0;i<lesVisites.length;i++){
                var unRapport=lesVisites[i];
                var idRapport=unRapport['idRapport'];
                var nomMedecin=unRapport['nomMedecin'];
                var prenomMedecin=unRapport['prenomMedecin'];

                var html="<li id="+idRapport+"><a href ='#'>";
                html+=nomMedecin+""+prenomMedecin+"</a></li>";

               
        }
         $('#pagechoisirrapportamodifier #listerapports').append(html);
        $('#pagechoisirrapportamodifier #listerapports').listview('refresh');
    }
    
    $("#pagechoisirrapportamodifier #listerapports").on("click","li",function(e){
    //indique que cet événement click est ajouté à toutes les balises li 
    //de la page indiquée
    //puis récupère la valeur courante de l'attribut id (le rapport sélectionné pour la modification
        var idRapport=$(this).attr("id");
        console.log("lolkk");
        //alert ("idrapport "+idRapport);
    //stocke cette valeur dans une variable accessible en dehors de la fonction 
    //portée script 
        window.idRapport=idRapport;
    //recuperer le contenu de type text de la balise <li>
        var medecin=$(this).text();
        //alert (medecin);
    //le mettre dans une variable window
        window.medecin=medecin;
    //lancer la requete Ajax (POST) qui prendra l'idRapport comme argument 
    //pointera sur le fichier php traiterchoixrapport.php
    //la fonction de retour sera foncRetourChoixRapport
    $.post("ajax/traiterchoixrapport.php",{
        "idRapport" : idRapport 
        },
        foncRetourChoixRapport,"json");
    });
    
    function foncRetourChoixRapport(data){
        console.log("lol");
        $.mobile.changePage("#pagerapportamodifier");
        $("#pagerapportamodifier #lblmedecin").html("Medecin:"+ window.medecin);
        $("#pagerapportamodifier #motif").text(data['motif']);
        $("#pagerapportamodifier #bilan").text(data['bilan']);
    }

    
    
   /* ----------------------------- Partie 3 ----------------------------------*/
   
    $( document ).on( "pageinit", "#pagemedecins", function() 
    {   
        console.log("chem1")
        $( "#autocomplete" ).on( "filterablebeforefilter", function ( e, data )
        {
                $ul = $(this);
                $ul.html( "" );
                $input = $( data.input ),
                value = $input.val(),
                nom = $input.val();
            if ( value && value.length >2 )
            {    console.log("chem2")
                 $ul.html( "<li><div class='ui-loader'><span class='ui-icon ui-icon-loading'></span></div></li>" );
                 $ul.listview( "refresh" );
                $.post("ajax/traiterrecherchepagemedecins.php",
                {
                       
                    "nom" : nom
                }, 
                 
                 foncRetourRecherchePageMedecins,"json")
               
                   
            }
        });
    });
    
    function foncRetourRecherchePageMedecins(lesMedecins){
        console.log("lol");
        //var $ul = $(this);
        //$ul.html( "" );
          $('#pagemedecins #autocomplete').listview('refresh');
          for(i=0;i<lesMedecins.length;i++){
               console.log("affiche");
               var unMedecin=lesMedecins[i];
               var idMedecin=unMedecin['idMedecin'];
               var nomMedecin=unMedecin['nomMedecin'];
               var prenomMedecin=unMedecin['prenomMedecin'];
               var adresseMedecin=unMedecin['adresseMedecin'];
              
               html="<li id="+idMedecin+"><a href ='#'>";
               html+=nomMedecin+""+prenomMedecin+""+adresseMedecin+"</a></li>";
               $('#pagemedecins #autocomplete').append(html); 
           
          }
           //$ul.html(html);
           $ul.listview("refresh");
           $ul.trigger("updatelayout");
             
                // $('#pagemedecins #autocomplete').listview('refresh');            
    }
    
        $("#pagemedecins #autocomplete").on("click","li",function(e){
    //indique que cet événement click est ajouté à toutes les balises li 
    //de la page indiquée
    //puis récupère la valeur courante de l'attribut id (le rapport sélectionné pour la modification
        var idMedecin=$(this).attr("id");
       
        console.log("donc");
        //alert ("idrapport "+idRapport);
    //stocke cette valeur dans une variable accessible en dehors de la fonction 
    //portée script 
        window.idMedecin=idMedecin;
      
    //recuperer le contenu de type text de la balise <li>
        var medecin=$(this).text();
        //alert (medecin);
       
    //le mettre dans une variable window
        window.medecin=medecin;
    //lancer la requete Ajax (POST) qui prendra l'idRapport comme argument 
    //pointera sur le fichier php traiterchoixrapport.php
    //la fonction de retour sera foncRetourChoixRapport
     $("#pagemedecins #resultatRecherche").val("Medecin:"+idMedecin);
    console.log("vazy");
    });
    
});

