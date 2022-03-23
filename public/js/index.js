/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./resources/js/forms/index.js ***!
  \*************************************/
// to show a form to add a product
var modal = document.querySelector("#modal"),
    modalOverlay = document.querySelector("#modal-overlay"),
    closeButton = document.querySelector("#closeCreate"),
    openButton = document.querySelector("#open-button");
attr1 = document.querySelector("#attr1");
attrOverlay1 = document.querySelector("#attr-overlay1");
openButton.addEventListener("click", function () {
  modal.classList.remove("closed");
  modalOverlay.classList.remove("closed");
});
closeButton.addEventListener("click", function () {
  modal.classList.add("closed");
  modalOverlay.classList.add("closed"); // clear the form to add a product

  $("#formAddProduct")[0].reset(); // close extra attributes fields

  attr1.classList.add("closed");
  attrOverlay.classList.add("closed");
}); // add an attribute in the add form

var addLink = document.querySelector("#add-link");
attr = document.querySelector("#attr1");
attrOverlay = document.querySelector("#attr-overlay1");
addLink.addEventListener("click", function () {
  attr.classList.remove("closed");
  attrOverlay.classList.remove("closed");
  addLink.classList.add("closed");
  $("#attr1")[0].reset();
}); // remove an attribute in the add form

var trash = document.querySelector("#trash1");
attr1 = document.querySelector("#attr1");
attrOverlay1 = document.querySelector("#attr-overlay1");
trash.addEventListener("click", function () {
  attr1.classList.add("closed");
  attrOverlay1.classList.add("closed");
  addLink.classList.remove("closed");
});

document.getElementById("trash1").onclick = function (e) {
  document.getElementById("extraDataKey").value = "";
  document.getElementById("extraDataValue").value = "";
}; // to create a product


$.ajaxSetup({
  headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  }
});
$(function () {
  $('#formAddProduct').on('submit', function (e) {
    e.preventDefault();
    var form = this;
    modalOverlay = document.querySelector("#modal-overlay");
    table = document.querySelector("#products-table");
    $.ajax({
      url: $(form).attr('action'),
      method: $(form).attr('method'),
      data: new FormData(form),
      processData: false,
      dataType: 'json',
      contentType: false,
      beforeSend: function beforeSend() {
        $(form).find('span.error-text').text('');
      },
      success: function success(data) {
        if (data.code == 0) {
          $.each(data.error, function (prefix, val) {
            $(form).find('span.' + prefix + '_error').text(val[0]);
          });
        } else {
          $(modalOverlay).addClass("closed");

          if (data.status == 1) {
            available = "\u0414\u043E\u0441\u0442\u0443\u043F\u0435\u043D";
            $('#products-table').append("<tr>\n\t\t\t\t\t\t<td class=\"body__item\">".concat(data.article, "</td>\n\t\t\t\t\t\t<td class=\"body__item\">").concat(data.name, "</td>\n\t\t\t\t\t\t<td class=\"body__item\">").concat(available, "</td>\n\t\t\t\t\t\t<td class=\"body__item\">").concat(data.data, "</td>\n\t\t\t\t\t</tr>"));
          } else {
            unavilable = "\u041D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D";
            $('#products-table').append("<tr>\n\t\t\t\t\t\t<td class=\"body__item\">".concat(data.article, "</td>\n\t\t\t\t\t\t<td class=\"body__item\">").concat(data.name, "</td>\n\t\t\t\t\t\t<td class=\"body__item\">").concat(unavilable, "</td>\n\t\t\t\t\t\t<td class=\"body__item\">").concat(data.data, "</td>\n\t\t\t\t\t</tr>"));
          }
        }
      }
    });
  });
}); // to show a product

$(document).ready(function () {
  $(".body__item").click(function (e) {
    var id_click = e.target.id; // получаем id конкретного продукта

    $.ajax({
      type: 'GET',
      url: '/products/' + id_click,
      success: function success(response) {
        if (response) {
          $("#show-modal-overlay").removeClass('closed');
          $("#show-modal").removeClass('closed');
          document.getElementById("productName").innerHTML = response.name;
          document.getElementById("productArticle").innerHTML = response.article;
          document.getElementById("productNameTable").innerHTML = response.name;

          if (response.status == 0) {
            document.getElementById("productStatus").innerText = 'Недоступен';
          } else {
            document.getElementById("productStatus").innerText = 'Доступен';
          }

          document.getElementById("productAttributes").innerHTML = response.data;
          $("#edit").click(function () {
            $("#edit-modal-overlay").removeClass('closed');
            $("#edit-modal").removeClass('closed');
            document.getElementById("nameProductEdit").value = response.name;
            document.getElementById("articleProductEdit").value = response.article;
            document.getElementById("statusProductEdit").value = response.status;
            document.getElementById("productAttributes").innerHTML = response.data;
          });
        }
      }
    });
  });
}); // to close show modal

var showModal = document.querySelector("#show-modal");
showModalOverlay = document.querySelector("#show-modal-overlay");
closeButton = document.getElementById("closeShow");
closeButton.addEventListener("click", function () {
  showModal.classList.toggle("closed");
  showModalOverlay.classList.toggle("closed");
}); // to close edit modal

var editModal = document.querySelector("#edit-modal");
editModalOverlay = document.querySelector("#edit-modal-overlay");
closeButton = document.getElementById("closeEdit");
showModal = document.querySelector("#show-modal");
showModalOverlay = document.querySelector("#show-modal-overlay");
closeButton.addEventListener("click", function () {
  editModal.classList.toggle("closed");
  editModalOverlay.classList.toggle("closed");
  showModal.classList.toggle("closed");
  showModalOverlay.classList.toggle("closed");
});
/******/ })()
;