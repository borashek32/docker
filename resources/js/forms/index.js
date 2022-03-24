// to show a form to add a product
var modalCreate = document.querySelector("#modalCreate"),
  closeCreate = document.querySelector("#closeCreate"),
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

// to create a product
$.ajaxSetup({
	headers:{
			'X-CSRF-TOKEN':$('meta[name="csrf-token"]').attr('content')
	}
});
$(function(){
  $('#formAddProduct').on('submit', function(e){
    e.preventDefault();

		var form = this;
			modalOverlay = document.querySelector("#modal-overlay");
		
    $.ajax({
      url: $(form).attr('action'),
			method: $(form).attr('method'),
			data: new FormData(form),
			processData: false,
			dataType:'json',
			contentType:false,
			beforeSend:function(){
				$(form).find('span.error-text').text('');
	 		},
      success: function(data) {
				if(data.code == 0){
					$.each(data.error, function(prefix, val){
						$(form).find('span.'+prefix+'_error').text(val[0]);
					});
				} else { 
					$(modalOverlay).addClass("closed");
					if (data.status == 1) {
						available = `Доступен`;

						$('#products-table').append(`<tr>
						<td class="body__item">${data.article}</td>
						<td class="body__item">${data.name}</td>
						<td class="body__item">${available}</td>
						<td class="body__item">${data.data}</td>
					</tr>`)

					} else {
						unavilable = `Недоступен`;
						$('#products-table').append(`<tr>
						<td class="body__item">${data.article}</td>
						<td class="body__item">${data.name}</td>
						<td class="body__item">${unavilable}</td>
						<td class="body__item">${data.data}</td>
					</tr>`)
					}
				}
      }  
    })
  });
});

// to show a product
$(document).ready(function() {
  $(".body__item").click(function(e) {
    var id_click = e.target.id; // получаем id конкретного продукта

    $.ajax({
      url: '/products/' + id_click,
			data: {
				id_click
			},
			type: 'GET',
      success: function(product) {
        if(product) {
					$("#modalShow").removeClass('closed');
          document.getElementById("productName").innerHTML = product.name;
          document.getElementById("productArticle").innerHTML = product.article;
          document.getElementById("productNameTable").innerHTML = product.name;
          
          if(product.status == 0) {
            document.getElementById("productStatus").innerText = 'Недоступен';
          } else {
            document.getElementById("productStatus").innerText = 'Доступен';
          }

          // document.getElementById("").innerHTML = product.data;
        }
				$("#openEdit").click(function(e) {
					if(product) {
						$("#modalEdit").removeClass('closed');
						document.getElementById("articleProductEdit").value = product.article;
						document.getElementById("nameProductEdit").value = product.name;
						
						if(product.status == 0) {
							document.getElementById("statusProductEdit").innerText = 'Недоступен';
						} else {
							document.getElementById("statusProductEdit").innerText = 'Доступен';
						}
	
						// document.getElementById("").innerHTML = product.data;
					}
				});
      }
    });
  });
});

// to close show modal
var modalShow = document.querySelector("#modalShow");
	closeShow = document.getElementById("closeShow");  

  closeShow.addEventListener("click", function() {
    modalShow.classList.toggle("closed");
  }); 

// to edit a product
// $(document).ready(function() {
// 	$("#openEdit").click(function(e) {
// 		var id_click = e.target.id; // получаем id конкретного продукта

// 		$.ajax({
// 			url: '/products/edit',
// 			data: {
// 				id_click
// 			},
// 			type: 'GET',
// 			success: function(product) {
// 				console.log(product.id);
// 				if(product) {
// 					$("#modalEdit").removeClass('closed');
					
// 					document.getElementById("articleProductEdit").innerHTML = product.article;
// 					document.getElementById("nameProductEdit").innerHTML = product.name;
					
// 					if(product.status == 0) {
// 						document.getElementById("nameProductEdit").innerText = 'Недоступен';
// 					} else {
// 						document.getElementById("nameProductEdit").innerText = 'Доступен';
// 					}

// 					document.getElementById("productAttributes").innerHTML = product.data;
// 				}
				
// 			}
// 		});
// 	});
// });
// to close edit modal
var modalEdit = document.querySelector("#modalEdit");
  closeEdit = document.getElementById("closeEdit");  
  modalShow = document.querySelector("#modalShow");

  closeEdit.addEventListener("click", function() {
    modalEdit.classList.toggle("closed");
    modalShow.classList.toggle("closed");
  });