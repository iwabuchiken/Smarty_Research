//alert("main.js");

function message() {
	
	alert("message");
	
}

function expectations() {

	var hostname = window.location.hostname;
	
	var url = "";
	
	if (hostname == "localhost") {
		
		url = "http://localhost/Smarty_Research/main/main_D-2_Stat.php";
		
	} else {
		
		url = "http://benfranklin.chips.jp/Labs/Smarty_Research/main/main_D-2_Stat.php";
		
	}
	
	
	$.ajax({
		
	    url: url,
	    type: "GET",
	    //REF http://stackoverflow.com/questions/1916309/pass-multiple-parameters-to-jquery-ajax-call answered Dec 16 '09 at 17:37
	    data: {method: "v-1.1"},
//	    data: {id: id},
	    
	    timeout: 10000
	    
	}).done(function(data, status, xhr) {

		alert("done");

	}).fail(function(xhr, status, error) {
		
		alert(xhr.status);
		
	});

	
}

$(document).ready(function(){
	
//	alert("ready");
//
//	var txt = $("#tmp").text();
//	
//	alert(txt);
	
	/***************************
		d3-related
	 ***************************/
	
//	d3.select("body").style("background-color", "black");
	
})//$(document).ready(function(){

//var txt = $("#tmp").text();
//
//alert(txt);