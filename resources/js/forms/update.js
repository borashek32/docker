$(document).on("click", "#submitButton", function (e) {
  e.preventDefault();

  var editId = $("#editProductId").val();
  var data = {
    'article': $('#articleProductEdit').val(),
    'name': $('#nameProductEdit').val(),
    'status': $('#statusProductEdit').val(),
  };
      
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  });

  $.ajax({
    type: "PUT",
    url: "/update-product/"+editId,
    data: data,
    dataType: "json",
    success: function (response) {
      if(response.status == 200) {
        $('#modalEdit').addClass('closed');
        $('#modalEdit').find('input').val("");
        fetchProducts();
        
      } else if(response.status == 404) {
        $(".edit_error").html("")
        $(".edit_error").text(response.message)

      } else {
        $.each(response.errors.name, function (key, err_values) { 
          $('.name_edit_error').html("");
          $('.name_edit_error').addClass("text-red-500 text-sm");
          $('.name_edit_error').append(err_values);
        });

        $.each(response.errors.article, function (key, err_values) { 
          $('.article_edit_error ').html("");
          $('.article_edit_error ').addClass("text-red-500 text-sm");
          $('.article_edit_error ').append(err_values);
        });

        $.each(response.errors.status, function (key, err_values) { 
          $('.status_edit_error').html("");
          $('.status_edit_error').addClass("text-red-500 text-sm");
          $('.status_edit_error').append(err_values);
        });
      }
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