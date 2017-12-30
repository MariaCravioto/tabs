$(document).ready(function(){ //giving a function to the jquery
$("ul.tabs li a:first").addClass("active"); //adding active class to the first li
$(".text article").hide(); //hide the sections
$(".text article:first").show(); //show the first article

$("ul.tabs li a").click(function(){
  $("ul.tabs li a").removeClass("active");
  $(this).addClass("active"); //add the class to each elect chosen
  $(".text article").hide();

var activeTab = $(this).attr("href"); //we create a variable whose value will be the href attribute
$(activeTab).show();
return false;
});
});
