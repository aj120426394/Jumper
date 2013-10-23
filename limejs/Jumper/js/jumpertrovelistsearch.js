var apiKey = "offrok1dfg6fd8u0";
var listreference = 47494;
var articleinfo = new Array();
var articleindex = 2;

$(document).ready(function(){

	//$("form#searchTrove").submit(function() {
		
		var listURL = "http://api.trove.nla.gov.au/list/"
			+ listreference
			+ "?key="+apiKey
			+ "&encoding=json&include=listitems&callback=?";
	
		console.log(listURL);
	
		// Perform the search
		$.getJSON(listURL, function(data){
			
			console.log("listURL json function");
					
			if (data.list[0].listItem) {
				$.each(data.list[0].listItem, getArticleText);
				};
			
			console.log("end of listURL json function");
			
			});
		
	//});

	$("#righthandimg").click(function() {
		articleindex += 1;
		createarticlecontent();
		if (articleindex == data.length) {
			$("#righthandimg").hide();
			};
		if (articleindex < data.length) {
			$("#righthandimg").show();
			};
		if (articleindex > 1) {
			$("#lefthandimg").show();
			};
	});
	
	$("#lefthandimg").click(function() {
		articleindex -= 1;
		createarticlecontent();
		if (articleindex == 1) {
			$("#lefthandimg").hide();
			};
		if (articleindex > 1) {
			$("#lefthandimg").show();
			};
		if (articleindex < data.length) {
			$("#righthandimg").show();
			};
	});
});

function getArticleText(index, item) {

	var articleURL = "http://api.trove.nla.gov.au/newspaper/"
		+item.article.id
		+"?key="+apiKey
		+"&include=articletext&encoding=json&callback=?";
		
	$.getJSON(encodeURI(articleURL), function(data) {
		
		var info = document.createElement("div");
		
		$(info).addClass("panel");
		$(info).attr("id", "article"+index);
		
		$(info).append("<div class='articlenewspaper'>"+data.article.title.value+"</div>");
		$(info).append("<div class='articletitle'>"+data.article.heading+"</div>");
		$(info).append("<div class='articledate'>"+data.article.date+"</div>");
		$(info).append("<div class='articletext'>"+data.article.articleText+"</div>");
		
		$("#output").append($(info));
		
		articleinfo.push("'<div class='panel' id='article"+index+"'><div class='articlenewspaper'>"+data.article.title.value+"</div><div class='articletitle'>"+data.article.heading+"</div><div class='articledate'>"+data.article.date+"</div><div class='articletext'>"+data.article.articleText+"</div>'")
	
	});
};

function createarticlecontent() {

	document.getElementById('output').innerHTML = articleinfo[articleindex];

}

