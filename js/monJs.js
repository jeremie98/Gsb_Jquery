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
            $.mobile.changePage("#pageaccueil");
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
          for(i=0;i<lesMedecins.length;i++){
               console.log("affiche");
               var unMedecin=lesMedecins[i];
               var idMedecin=unMedecin['idMedecin'];
               var nomMedecin=unMedecin['nomMedecin'];
               var prenomMedecin=unMedecin['prenomMedecin'];
               var adresseMedecin=unMedecin['adresseMedecin'];
               var telephoneMedecin=unMedecin['telephoneMedecin'];
              
               html="<li id="+idMedecin+"><input type='hidden' value="+telephoneMedecin+"/><a href ='#'>";
               html+=nomMedecin+" "+prenomMedecin+" "+adresseMedecin+"</a></li>";
               $('#pagemedecins #autocomplete').append(html); 
           
          }
           $ul.listview("refresh");
           $ul.trigger("updatelayout");
             
                // $('#pagemedecins #autocomplete').listview('refresh');            
    }
    
        $("#pagemedecins #autocomplete").on("click","li",function(e){
    //indique que cet événement click est ajouté à toutes les balises li 
    //de la page indiquée
    //puis récupère la valeur courante de l'attribut id (le rapport sélectionné pour la modification
        var idMedecin=$(this).attr("id");       
        var numeroTel = $(this).find("input:hidden").val() ; 
        console.log("donc");
        //alert ("idrapport "+idRapport);
    //stocke cette valeur dans une variable accessible en dehors de la fonction 
    //portée script 
        window.idMedecin=idMedecin;        
      
    //recuperer le contenu de type text de la balise <li>
        var medecin=$(this).text();        
        //alert (medecin);       
    //le mettre dans une variable window
      //  window.medecin=medecin;       
    //lancer la requete Ajax (POST) qui prendra l'idRapport comme argument 
    //pointera sur le fichier php traiterchoixrapport.php
    //la fonction de retour sera foncRetourChoixRapport
     $("#pagemedecins #resultatRecherche").val(" "+medecin);
    console.log("vazy");
    });
    
     $("#pagemedecins #btnMajMedecin").on( "click", function ( e ) {
         
          //indique que cet événement click est ajouté à toutes les balises li 
    //de la page indiquée
    //puis récupère la valeur courante de l'attribut id (le rapport sélectionné pour la modification
        console.log("lolkk");
        var idMedecinn;
        //alert ("idrapport "+idRapport);
        idMedecinn = window.idMedecin
    //stocke cette valeur dans une variable accessible en dehors de la fonction 
    //lancer la requete Ajax (POST) qui prendra l'idRapport comme argument 
    //pointera sur le fichier php traiterchoixrapport.php
    //la fonction de retour sera foncRetourChoixRapport
    $.post("ajax/traitergetmedecin.php",{
        "idMedecin" : idMedecinn 
        },
        foncRetourGetMedecin,"json");
     });
    
     function foncRetourGetMedecin(data){
        console.log("loli");
       // var adresse = data["adresse"];
        var telephone = data["telephone"];
        var specialite = data["specialite"];
        console.log("loli2");
       // $("#pagemajmedecin #adresse").val(adresse);
        $("#pagemajmedecin #adresse").text(data['adresse'])
        $("#pagemajmedecin #telephone").val(telephone);
        $("#pagemajmedecin #specialite").val(specialite);
        console.log("loli3");
       
    }

       $("#pagemajmedecin #btnEnregistrerMajMedecin").bind("click", function(){
           var adresse = $("#pagemajmedecin #adresse").val();
           var telephone = $("#pagemajmedecin #telephone").val();
           var specialite= $("#pagemajmedecin #specialite").val();
           
           $.post("ajax/traitermajmedecin.php",{
                      "idMedecin" : window.idMedecin,
                      "adresse" : adresse,
                      "telephone" : telephone,
                      "specialite" : specialite 
        },
        foncRetourMajMedecin,"json");
   
       });
       
       function foncRetourMajMedecin(data){
  
        $("#pagemajmedecin #message").css({color:'red'});
        $("#pagemajmedecin #message").html(data);
       
    }
    
    $("#pagemajmedecin #btnVoirRapports").on( "click", function (e) {
        console.log("okkk");
        
       $.post("ajax/traitergetlesrapports.php",{
        "idMedecin" : window.idMedecin 
        },
        foncRetourGetLesRapports,"json");
    });
    
    function foncRetourGetLesRapports(lesRapports){
        console.log("lol200");
          for(i=0;i<lesRapports.length;i++){
               console.log("affiche");
               var unRapport=lesRapports[i];
               var date = unRapport['date'];
               var motif=unRapport['motif'];
               var bilan=unRapport['bilan'];
               var nomVisiteur=unRapport['nomVisiteur'];
               var prenomVisiteur = unRapport['prenomVisiteur'];
               console.log("gvhfj");
               
               var html="<tr><td>"+date+"</td>"
                   html+="<td>"+motif+"</td>"
                   html+="<td>"+bilan+"</td>"
                   html+="<td>"+nomVisiteur+" "+prenomVisiteur+"</td></tr>";
                      
                        
                 $('#pagevoirlesrapports #table-column-toggle').append(html);               
                  
           }
        $('#pagevoirlesrapports #table-column-toggle').table('refresh');
    }
    
    /*------------------------------------ part 4 ----------------------------------------------------------*/
    
      
    $( document ).on( "pageinit", "#ajouterrapport", function() 
    {   
        console.log("chem1")
        $( "#lstMedecin" ).on( "filterablebeforefilter", function ( e, data )
        {
                $ul = $(this);
                $ul.html( "" );
                $input = $( data.input ),
                value = $input.val(),
                nom = $input.val();
            if ( value && value.length >2 )
            {    console.log("chem2")
                 $ul.html( "<li><div class='ui-loader'><span class='ui-icon ui-icon-loading'></span></div></li>" );
                $.post("ajax/traiterrecherchepagemedecins.php",
                {
                       
                    "nom" : nom
                }, 
                 
                 foncRetourRechercheAjouterrapport,"json")
               
                   
            }
        });
    });
    
     function foncRetourRechercheAjouterrapport(lesMedecins){
        console.log("yayay");
          for(i=0;i<lesMedecins.length;i++){
               console.log("affiche");
               var unMedecin=lesMedecins[i];
               var idMedecin=unMedecin['idMedecin'];
               var nomMedecin=unMedecin['nomMedecin'];
               var prenomMedecin=unMedecin['prenomMedecin'];
              
               html="<li id="+idMedecin+"><a href ='#'>";
               html+=nomMedecin+" "+prenomMedecin+"</a></li>";
               $('#ajouterrapport #lstMedecin').append(html); 
           
          }
           $ul.listview("refresh");
           $ul.trigger("updatelayout");
             
                // $('#pagemedecins #autocomplete').listview('refresh');            
    }
    
        $("#ajouterrapport #lstMedecin").on("click","li",function(e){
    //indique que cet événement click est ajouté à toutes les balises li 
    //de la page indiquée
    //puis récupère la valeur courante de l'attribut id (le rapport sélectionné pour la modification
        var idMedecin=$(this).attr("id");  
       
        console.log("donc");
        //alert ("idrapport "+idRapport);
    //stocke cette valeur dans une variable accessible en dehors de la fonction 
    //portée script 
          
        
    //recuperer le contenu de type text de la balise <li>
        var medecin=$(this).text();        
        //alert (medecin);       
    //le mettre dans une variable window
      //  window.medecin=medecin;       
    //lancer la requete Ajax (POST) qui prendra l'idRapport comme argument 
    //pointera sur le fichier php traiterchoixrapport.php
    //la fonction de retour sera foncRetourChoixRapport
     $("#ajouterrapport #nomMedecin").val(" "+medecin);
    console.log("vazy");
    });
    
     var imedecin = 0 ;
     window.imedecin = imedecin ;  
      
    $("#ajouterrapport #btnajoutmedicament").bind("click",function(){
      var i ;
      var input;
      i = window.imedecin;
      i=i+1;
      var html="<ul class='ui-listview' id='ul"+i+"' data-role='listview'data-filter='true' data-filter-placeholder='Nom' data-filter-theme='a' data-inset='true'medicament.... =''></ul><br/> <br/> <br/>" ; 
      html+="<div ><input name='' id='input"+i+"' type='text' value='' /></div><br/>";
      html+="<label for='nb'> Indiquer le nombre dexemplaires offerts : </label> <div class='ui-slider'><input type='range' name='slider-1' id='slider"+i+"' min='0' max='100' value=''></div> <br/><br/><br/>";
      $('#ajouterrapport #lesListesMedicaments').append(html); 
      $("#ajouterrapport #lesListesMedicaments").trigger("create");
      window.imedecin = i;
      window.input="input"+i;
      window.qte="slider"+i;
      var lesMedicaments=[];
      window.lesMedocs = lesMedicaments ;
      
    });
    
    
    
    
    $("#ajouterrapport #lesListesMedicaments").on( "filterablebeforefilter","ul", function (e,data ){
      var idul = e.currentTarget.id;
      window.ul = idul;
      
      var nomMedicament = data.input.val();
      if(nomMedicament && nomMedicament.length >=1){
           console.log("ca passe");
          $.post("ajax/traiterrecherchemedicaments.php",
          {
             
          "nomMedicament" : nomMedicament
          },
          
          foncRetourRechercheMedicaments,"json")
      };

    });
    
     function foncRetourRechercheMedicaments(lesMedicaments){
        console.log("yayay");
        
       html="";
        for(i=0;i<lesMedicaments.length;i++){
            console.log("affiche");
            var unMedicament=lesMedicaments[i];
            var idMedicament=unMedicament['idMedicament'];
            var nomMedicament=unMedicament['nom'];

            html+="<li id="+idMedicament+"><a href ='#'>";
            html+=""+nomMedicament+" </a></li>";
            $('#ajouterrapport #'+window.ul).append(html); 
            
          }
          $("#"+window.ul).html(html);
          $("#"+window.ul).listview("refresh");
          $("#"+window.ul).trigger("updatelayout");
             
                // $('#pagemedecins #autocomplete').listview('refresh');            
    }
    
    $("#ajouterrapport #lesListesMedicaments").on("click","li", function(e,data) {
     
        
    //recuperer le contenu de type text de la balise <li>
        var medicament=$(this).text();
        var idMedicament=$(this).attr("id");
        //alert (medecin);       
    //le mettre dans une variable window
      //  window.medecin=medecin;       
    //lancer la requete Ajax (POST) qui prendra l'idRapport comme argument 
    //pointera sur le fichier php traiterchoixrapport.php
    //la fonction de retour sera foncRetourChoixRapport
    $("#ajouterrapport #"+window.input).val(" "+medicament);
    $("#ajouterrapport #"+window.input).attr("name",idMedicament);
    console.log("vazy");
    });
    
    
   
   
   $("#ajouterrapport #btnenregistrerrapport").bind("click",function(){
       console.log("entré");
         i = window.imedecin;
        for(a=1;a<=i;a++){
        var idMedocs = $("#ajouterrapport #input"+a).attr("name");
        var quanti = $("#ajouterrapport #slider"+a).val();
        var unMedicament = { id : idMedocs , qte : quanti} ;
        window.lesMedocs.push(unMedicament);
         }
        //  var adresse = $("#ajouterrapport #motifRapport").val();
        //   var telephone = $("#ajouterrapport #bilanRapport").val();
        //   var specialite= $("#ajouterrapport #dateRapport").val();
           
        //   $.post("ajax/traitermajmedecin.php",{
        //              "idMedecin" : window.idMedecin,
        //              "adresse" : adresse,
        //              "telephone" : telephone,
       //               "specialite" : specialite 
      // },
       // foncRetourMajMedicament,"json");
       
       
   });
   
      function foncRetourMajMedicament(data){
  
        $("#pagemajmedecin #message").css({color:'red'});
        $("#pagemajmedecin #message").html(data);
       
    }
    
   
    
});

