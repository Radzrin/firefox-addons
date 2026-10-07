

var url = window.location.href;
var site = url.substring(30, url.length);


site = site.replace(/%2F/g, "/");
site = site.replace(/%3A/g, ":");

window.location.replace(site);




