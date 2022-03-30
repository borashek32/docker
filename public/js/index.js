$(document).ready(function () {
  // to show a form to add a product
  var modalCreate = document.querySelector("#modalCreate");
  closeCreate = document.querySelector("#closeCreate");
  openCreate = document.querySelector("#openCreate");
  attr1 = document.querySelector("#attr1");
  attrOverlay1 = document.querySelector("#attr-overlay1");
  openCreate.addEventListener("click", function () {
    modalCreate.classList.remove("closed");
  });
  closeCreate.addEventListener("click", function () {
    modalCreate.classList.add("closed"); // clear the form to add a product

    $("#formAddProduct")[0].reset(); // close extra attributes fields

    attrOverlay.classList.add("closed");
  }); // add an attribute in the add form

  var addLink = document.querySelector("#add-link");
  attrOverlay = document.querySelector("#attr-overlay1");
  addLink.addEventListener("click", function () {
    attrOverlay.classList.remove("closed");
    addLink.classList.add("closed");
    $("#attr1")[0].reset();
  }); // remove an attribute in the add form

  var trash = document.querySelector("#trash1");
  attrOverlay1 = document.querySelector("#attr-overlay1");
  trash.addEventListener("click", function () {
    attrOverlay1.classList.add("closed");
    addLink.classList.remove("closed");
  });

  document.getElementById("trash1").onclick = function (e) {
    document.getElementById("extraDataKey").value = "";
    document.getElementById("extraDataValue").value = "";
  };

  $(document).on('click', '#closeCreate', function () {
    $("span").html("");
  });
  $(document).on('click', '.add_product', function (e) {
    e.preventDefault();
    var data = {
      'name': $('.name').val(),
      'article': $('.article').val(),
      'status': $('.status').val()
    };
    $.ajaxSetup({
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    });
    $.ajax({
      type: "POST",
      url: "/products",
      data: data,
      dataType: "json",
      success: function success(response) {
        if (response.status == 400) {
          $.each(response.errors.name, function (key, err_values) {
            $('.name_error').html("");
            $('.name_error').addClass("text-red-500 text-sm");
            $('.name_error').append(err_values);
          });
          $.each(response.errors.article, function (key, err_values) {
            $('.article_error ').html("");
            $('.article_error ').addClass("text-red-500 text-sm");
            $('.article_error ').append(err_values);
          });
          $.each(response.errors.status, function (key, err_values) {
            $('.status_error').html("");
            $('.status_error').addClass("text-red-500 text-sm");
            $('.status_error').append(err_values);
          });
        } else {
          $('#modalCreate').addClass('closed');
          $('#modalCreate').find('input').val("");
          fetchProducts();
        }
      }
    });
  });
  fetchProducts();

  function fetchProducts() {
    $.ajax({
      type: "GET",
      url: "/fetch-products",
      dataType: "json",
      success: function success(response) {
        if (response.status == 200) {
          $("tbody").html("");
          $.each(response.products, function (key, item) {
            if (item.status == 1) {
              available = "Доступен";
              $("tbody").append("<tr>                <td class=\"body__item\"><a href=\"#\" id=\"\">" + item.article + "</a></td>                <td class=\"body__item\">" + item.name + "</td>                <td class=\"body__item\">" + available + "</td>                <td class=\"body__item\">" + item.data + "</td>              </tr>");
            } else {
              unavailable = "Недоступен";
              $("tbody").append("<tr>                <td class=\"body__item\"><a href=\"#\" id=\"\">" + item.article + "</a></td>                <td class=\"body__item\">" + item.name + "</td>                <td class=\"body__item\">" + unavailable + "</td>                <td class=\"body__item\">" + item.data + "</td>              </tr>");
            }
          });
        }
      }
    });
  }
});
$(document).ready(function () {
  fetchProducts();

  function fetchProducts() {
    $.ajax({
      type: "GET",
      url: "/fetch-products",
      dataType: "json",
      success: function success(response) {
        if (response.status == 200) {
          $("tbody").html("");
          $.each(response.products, function (key, item) {
            if (item.status == 1) {
              available = "Доступен";
              $("tbody").append("<tr>                <td class=\"body__item\"><a href=\"#\" id=\"\">" + item.article + "</a></td>                <td class=\"body__item\">" + item.name + "</td>                <td class=\"body__item\">" + available + "</td>                <td class=\"body__item\">" + item.data + "</td>              </tr>");
            } else {
              unavailable = "Недоступен";
              $("tbody").append("<tr>                <td class=\"body__item\"><a href=\"#\" id=\"\">" + item.article + "</a></td>                <td class=\"body__item\">" + item.name + "</td>                <td class=\"body__item\">" + unavailable + "</td>                <td class=\"body__item\">" + item.data + "</td>              </tr>");
            }
          });
        }
      }
    });
  }
});
