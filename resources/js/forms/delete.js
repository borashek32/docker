$(document).on("click", ".deleteShow", function (e) {
    e.preventDefault();
    
    var deleteId = $(this).attr("id")
    $("#modalShow").addClass("closed")

    $.ajaxSetup({
        headers: 
        {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $.ajax({
        type: "DELETE",
        url: "/delete/"+deleteId,
        success: function (response) {
            fetchProducts()
        }
    });


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
                <td class="body__item" style="padding-left:18px"><a href="#" class="openLink" id="`+item.id+`">`+item.article+`</a></td>\
                <td class="body__item">`+item.name+`</td>\
                <td class="body__item">`+available+`</td>\
                <td class="body__item">`+item.data+`</td>\
              </tr>`);
            } else {
              unavailable = "Недоступен";
              $("tbody").append(`<tr>\
                <td class="body__item" style="padding-left:18px"><a href="#" class="openLink" id="`+item.id+`">`+item.article+`</a></td>\
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