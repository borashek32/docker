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