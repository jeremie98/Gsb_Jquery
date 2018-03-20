<div data-role = "page" id="pagechoisirrapportamodifier">
<?php 
	include "vues/entetepageavecboutons.html";
?>


	<div data-role ="content">
		<h3>Choisir un rapport</h3>
		<div class="ui-field-contain">
			<label for="date">Date de la visite</label>
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
	