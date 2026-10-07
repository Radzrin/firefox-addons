var url = window.location.href;
var img;
var pos = 4;


if(url.includes(".jpg")){
	pos += url.indexOf(".jpg");
}

if(url.includes(".png")){
	pos += url.indexOf(".png");
}

if(url.includes(".gif")){
	pos += url.indexOf(".gif");
}

img = url.substring(0, pos);

window.location.replace(img);