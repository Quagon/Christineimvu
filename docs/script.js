function List(){
	$("#Index1").show();
	$("#logo1").show();
	$("#logo2").hide();
	$("#Support1").hide();
	$("#Other1").hide();
}
 
$(document).ready(function(){
	$("#Index").click(function(){
	$("#Index1").show();$("#Support1").hide();$("#Other1").hide();
	});
	$("#Support").click(function(){
	$("#Support1").show();$("#Index1").hide();$("#Other1").hide();
	});
	$("#Other").click(function(){
	$("#Other1").show();$("#Index1").hide();$("#Support1").hide();
	});
});

$(document).ready(function(){
	$("#logo1").hover(function(){
	$("#logo2").show();$("#logo1").hide();
	});
	$("#logo2").hover(function(){
	$("#logo1").show();$("#logo2").hide();
	});
	$("#flex-logo").hover(function(){
	$("#logo1").show();$("#logo2").hide();
	});
});
