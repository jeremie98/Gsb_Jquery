<div data-role = "page" id="pagechoisirrapportamodifier">
<?php 
      //  include_once "entetehtml.html";
       // session_start();
	include "vues/enteteavecboutons.html";
?>


	<div data-role ="content">
		<h3>choisir un rapport</h3>
		<div class="ui-field-contain">
			<label for="date">date de la visite</label>
			<input type ="date" name ="date" id ="date" value ='' class ="required" />
			<label id ="lgddate" for ="lgddate"></label>
			<ul data-role="listview" id='listerapports'>
			
			</ul>
		</div>
	</div>
<?php 
	include "vues/piedpage.html";
?>
</div>
	