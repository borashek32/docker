$(document).ready(function () {
  fetchProducts();

  function fetchProducts() {
    $.ajax({
      type: "GET",
      url: "/fetch-products",
      dataType: "json",
      success: function (response) {
        if(response.status == 200) {
          $("tbody").html("");
          $.each(response.products, function (key, item) {
            if(item.status == 1) {
              available = "Доступен";
              $("tbody").append(`<tr>\
                <td class="body__item"><a href="#" id="">`+item.article+`</a></td>\
                <td class="body__item">`+item.name+`</td>\
                <td class="body__item">`+available+`</td>\
                <td class="body__item">`+item.data+`</td>\
              </tr>`);
            } else {
              unavailable = "Недоступен";
              $("tbody").append(`<tr>\
                <td class="body__item"><a href="#" id="">`+item.article+`</a></td>\
                <td class="body__item">`+item.name+`</td>\
                <td class="body__item">`+unavailable+`</td>\
                <td class="body__item">`+item.data+`</td>\
              </tr>`);
            }
          });
        }
      }
    });
  }
});