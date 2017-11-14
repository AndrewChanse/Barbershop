var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");

var mapcall = document.querySelector(".map");
var googlemap = document.querySelector(".modal-content-map");
var mapclose = document.querySelector(".modal-content-mapclose");

var overlay	= document.querySelector(".modal-overlay");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");


link.addEventListener("click", function(event) {
 event.preventDefault();
  popup.classList.add("modal-content-view");
  overlay.classList.add("modal-overlay-view");
 if (storage) {
	login.value = storage;
	password.focus();
	} else {
	login.focus();
	}
 });

form.addEventListener("submit", function(event) {
	{localStorage.clear(login);
}
});

close.addEventListener("click", function(event) {
 event.preventDefault();
  popup.classList.remove("modal-content-view");
  overlay.classList.remove("modal-overlay-view");
});

window.addEventListener("keydown", function(event) {
 	if (event.keyCode === 27) {
 		if (popup.classList.contains("modal-content-view"));
 		popup.classList.remove("modal-content-view");
 		overlay.classList.remove("modal-overlay-view");
 	}
});

mapcall.addEventListener("click", function(event) {
 event.preventDefault();
  googlemap.classList.add("map-view");
 });

mapclose.addEventListener("click", function(event) {
 event.preventDefault();
  googlemap.classList.remove("map-view");
 });
