$(document).ready(function () {
    
    // to show a form to add a product
    var modalCreate = document.querySelector("#modalCreate");
    closeCreate = document.querySelector("#closeCreate");
    openCreate = document.querySelector("#openCreate");

    attr1 = document.querySelector("#attr1");
    attrOverlay1 = document.querySelector("#attr-overlay1");

    openCreate.addEventListener("click", function() {
        modalCreate.classList.remove("closed");
    });

    closeCreate.addEventListener("click", function() {
        modalCreate.classList.add("closed");
        // clear the form to add a product
        $("#formAddProduct")[0].reset();
        // close extra attributes fields
        attrOverlay.classList.add("closed");
    });

    // add an attribute in the add form
    var addLink = document.querySelector("#add-link");
    attrOverlay = document.querySelector("#attr-overlay1");

    addLink.addEventListener("click", function() {
        attrOverlay.classList.remove("closed");
        addLink.classList.add("closed");
        $("#attr1")[0].reset();
    });
    
    // remove an attribute in the add form
    var trash = document.querySelector("#trash1");
    attrOverlay1 = document.querySelector("#attr-overlay1");

    trash.addEventListener("click", function() {
        attrOverlay1.classList.add("closed");
        addLink.classList.remove("closed");
    }); 
    
    document.getElementById("trash1").onclick = function(e) { 
        document.getElementById("extraDataKey").value = "";
        document.getElementById("extraDataValue").value = "";
    }

    $(document).on('click', '#closeCreate', function () {
      $("span").html("");
    });

    $(document).on('click', '#saveButton', function (e) {
        e.preventDefault();

        var data = {
            'name': $('.name').val(),
            'article': $('.article').val(),
            'status': $('.status').val(),
        }

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
            success: function (response) {
                if(response.status == 400) {
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

              data = $.each(item.data, function (i, value) {
                `<p>`+value+`</p>`
              }

              $("tbody").append(`<tr>\
                <td class="body__item" style="padding-left:18px"><a href="#" class="openLink" id="`+item.id+`">`+item.article+`</a></td>\
                <td class="body__item">`+item.name+`</td>\
                <td class="body__item">`+available+`</td>\
                <td class="body__item">`+data+`</td>\
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

$(document).on("click", ".openLink", function (e) {
    e.preventDefault();
    var id = $(this).attr("id");
    $("#modalShow").removeClass("closed");
    
    $.ajax({
        type: "GET",
        url: "/one-product/"+id,
        dataType: "json",
        success: function (response) {
            if(response.status == 404) {
                $('.show_error').html("");
                $('.show_error').addClass("text-red-500 text-sm");
                $('.show_error').append(err_values);
            } else {
                // console.log(response)
                $("#productName").html(`<p>`+response.product.name+`</p>`)
                $("#productArticle").html(`<p>`+response.product.article+`</p>`)
                $("#productNameTable").html(`<p>`+response.product.name+`</p>`)
                if(response.product.status == 1) {
                    $("#productStatus").html(`<p>Доступен</p>`)
                } else {
                    $("#productStatus").html(`<p>Недоступен</p>`)
                }

                $(".openEditDiv").html(`<img src="/img/edit.png" id="`+response.product.id+`" alt="edit" class="openEdit icons__close">`)
                $("#deleteShowDiv").html(`<img src="/img/trash1.png" alt="trash" class="icons__close deleteShow" id="`+response.product.id+`">`)
            }
        }
    });

    var closeShow = document.querySelector("#closeShow");
        modalShow = document.querySelector("#modalShow");

    closeShow.addEventListener("click", function() {
        modalShow.classList.add("closed");
    });
});
$(document).on("click", ".openEdit", function (e) {
    e.preventDefault()
    var id = $(this).attr("id")
    $("#modalEdit").removeClass("closed")
    $("#modalShow").addClass("closed")
    
    $.ajax({
        type: "GET",
        url: "/product/edit/"+id,
        dataType: "json",
        success: function (response) {
            if(response.status == 404) {
                $('.edit_error').html("");
                $('.edit_error').addClass("text-red-500 text-sm");
                $('.edit_error').append(err_values);
            } else {
                $("#articleProductEdit").val(response.product.article)
                $("#nameProductEdit").val(response.product.name)
                if(response.product.status == 1) {
                    $("#statusProductEdit").val(1)
                } else {
                    $("#statusProductEdit").val(0)
                }

                $("#editProductId").val(response.product.id)
            }
        }
    });

    var closeEdit = document.querySelector("#closeEdit")
        modalEdit = document.querySelector("#modalEdit")

    closeEdit.addEventListener("click", function() {
        modalEdit.classList.add("closed")
    });
});
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