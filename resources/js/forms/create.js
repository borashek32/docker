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

    $(document).on('click', '#article', function () {
      $(".article_error").addClass("closed");
    });

    $(document).on('click', '.add_product', function (e) {
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
                }
            }
        });
    });
});