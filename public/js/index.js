/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./resources/js/forms/index.js ***!
  \*************************************/
// add a product
var modal = document.querySelector("#modal"),
    modalOverlay = document.querySelector("#modal-overlay"),
    closeButton = document.querySelector("#close-button"),
    openButton = document.querySelector("#open-button");
openButton.addEventListener("click", function () {
  modal.classList.remove("closed");
  modalOverlay.classList.remove("closed");
});
closeButton.addEventListener("click", function () {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
}); // add more attributes

$("#open-link").click(function () {
  $("#attributes").clone().appendTo("#attributes-overflow");
}); // remove extra attributes

$("#close-button").on("click", '#attributes', function () {
  $(this).parent().remove();
}); // $(document).ready(function() {
//   for (let i = 0; i < 3; i++) {
//     $("#open-link").click(function() { 
//     $("#attributes").clone().attr('id', 'attributes' + i).appendTo("#attributes-overflow");
//     $("#close-button").attr('id', 'close-button' + i);
//     breack;
//     });
//   }
// });
/******/ })()
;