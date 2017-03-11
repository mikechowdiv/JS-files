function getWiki (search) {
   $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&search=' + search + '&format=json&utf8&callback=?', function(data){
     console.log(data);
     var html = "";
     
     for(var i=0; i < data[1].length; i++) {
          html += "<div class='col-md-12 wiki'><a href='" + data[3][i] +"' target='_blank' style='text-decoration:none''><h3>"+ data[1][i] +"</h3><p>"+ data[2][i] +"</p></a></div>"          
      };
     
     $(".WikiList").html(html);
     
   });
}
             
$(document).ready(function() {
   // getWiki("picasso");  
    $("#btn-search").on("click", function(){
      getWiki(document.getElementById("search").value);
    });
});             
             