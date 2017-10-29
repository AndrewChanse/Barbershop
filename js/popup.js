var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var mapcall = document.querySelector(".map");
var googlemap = document.querySelector(".modal-content-map");
var close = document.querySelector(".modal-content-close");
var mapclose = document.querySelector(".modal-content-mapclose");
var overlay	= document.querySelector(".modal-overlay");
var login = popup.querySelector("[name=login]");


link.addEventListener("click", function(event) {
 event.preventDefault();
  popup.classList.add("modal-content-view");
  overlay.classList.add("modal-overlay-view");
  login.focus();
 });

close.addEventListener("click", function(event) {
 event.preventDefault();
  popup.classList.remove("modal-content-view");
  overlay.classList.remove("modal-overlay-view");
});

mapcall.addEventListener("click", function(event) {
 event.preventDefault();
  googlemap.classList.add("map-view");
 });

mapclose.addEventListener("click", function(event) {
 event.preventDefault();
  googlemap.classList.remove("map-view");
 });
