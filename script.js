
$(document).ready(function() {

	//font sizes menu
	var fontSizes = [];
	for (let i = 10; i <= 72; i++) {
		fontSizes.push(i);
	}

	$.each(fontSizes, function(count, fontSize){
		$("#fontSizes").append($("<option>", {
			text: fontSize
		}));
	});

	// get fonts from file
	var fonts = [
		"Helvetica",
		"Arial",
		"Arial Black",
		"Verdana",
		"Tahoma",
		"Trebuchet MS",
		"Impact",
		"Gill Sans",
		"Times New Roman",
		"Georgia",
		"Palatino",
		"Baskerville",
		"Andalé Mono",
		"Courier",
		"Lucida",
		"Monaco",
		"Bradley Hand",
		"Brush Script MT",
		"Luminari",
		"Comic Sans MS"
	];
	fonts.sort();
	//add fonts to menu
	$.each(fonts, function(count, font){
		$("#fonts").append($("<option>", {
			text: font
		}));
	});
	$("#fonts").val("Arial");

	//fonts in their respective fonts
	$("#fonts option").each(function(){
		$(this).css("font-family", this.text);
	});

	//change font
	$("#fonts").on("input", function(){
		$("#text").css("font-family", $(this).val());
	});

	//change color
	$("#textColor").on("input", function(){
		$("#text").css("color", $(this).val());
	});

	//change font size
	$("#fontSize").on("input", function(){
		$("#text").css("font-size", $(this).val() + "px");
		$("#fontSizes").val($(this).val());
	});

	$("#fontSizes").on("input", function(){
		$("#text").css("font-size", $(this).val() + "px");
		$("#fontSizes").val($(this).val());
	});

	//bold
	var bold = false;
	$("b").click(function(){
		if (bold == false) {
			bold = true;
			$(this).css("background-color", "#aaaaaa");
			$("#text").css("font-weight", "600");
		} else {
			bold = false;
			$(this).css("background-color", "white");
			$("#text").css("font-weight", "400");
		}
	});

	//italic
	var italic = false;
	$("i").click(function(){
		if (italic == false) {
			italic = true;
			$(this).css("background-color", "#aaaaaa");
			$("#text").css("font-style", "italic");
		} else {
			italic = false;
			$(this).css("background-color", "white");
			$("#text").css("font-style", "normal");
		}
	});

	//underline
	var underline = false;
	$("u").click(function(){
		if (underline == false) {
			underline = true;
			$(this).css("background-color", "#aaaaaa");
			$("#text").css("text-decoration", "underline");
		} else {
			underline = false;
			$(this).css("background-color", "white");
			$("#text").css("text-decoration", "none");
		}
	});

});