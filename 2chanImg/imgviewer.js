
var elems = document.getElementsByTagName("a");
var size = 350;

for (var i = 0; i < elems.length; i++) {
	if(elems[i].href.includes(".jpg") || elems[i].href.includes(".png") || elems[i].href.includes(".gif") || elems[i].href.includes(".jpeg") || elems[i].href.includes(".webp")){
		elems[i].outerHTML = "<img src='" +  elems[i].href + "' height='" + size + "px'>";
	}

	if(elems[i].innerHTML.includes(".jpg") || elems[i].href.includes(".png") || elems[i].href.includes(".gif") || elems[i].href.includes(".jpeg") || elems[i].href.includes(".webp")){
		elems[i].outerHTML = "<img src='" +  elems[i].innerHTML + "' height='" + size + "px'>";
	}
}

for (var i = 0; i < elems.length; i++) {
	if(elems[i].href.includes(".jpg") || elems[i].href.includes(".png") || elems[i].href.includes(".gif") || elems[i].href.includes(".jpeg") || elems[i].href.includes(".webp")){
		elems[i].outerHTML = "<img src='" +  elems[i].href + "' height='" + size + "px'>";
	}

	if(elems[i].innerHTML.includes(".jpg") || elems[i].href.includes(".png") || elems[i].href.includes(".gif") || elems[i].href.includes(".jpeg") || elems[i].href.includes(".webp")){
		elems[i].outerHTML = "<img src='" +  elems[i].innerHTML + "' height='" + size + "px'>";
	}
}

