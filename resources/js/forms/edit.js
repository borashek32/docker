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