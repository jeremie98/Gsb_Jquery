<div data-role = "page" id="pagevoirlesrapports">
 <?php
        include "vues/entetepagevoirlesrapports.html";
    ?>
    
    <div data-role = "content">
       <table data-role="table" id="table-column-toggle" data-mode="columntoggle" class="ui-responsive table-stroke">
         <thead>
           <tr>
            <th>Date</th>
             <th data-priority="2">Motif</th>
             <th data-priority="3">Bilan</th>
             <th data-priority="5">Visiteur</th>
           </tr>
         </thead>
         <tbody id="tbody">
         
         </tbody>
       </table>
    </div>
    
    <?php  
        include "vues/piedpage.html";
    ?>
</div>
