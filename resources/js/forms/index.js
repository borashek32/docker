// to show a form to add a product
var modal = document.querySelector("#modal"),
  modalOverlay = document.querySelector("#modal-overlay"),
  closeButton = document.querySelector("#close-button"),
  openButton = document.querySelector("#open-button");

  attr1 = document.querySelector("#attr1");
  attrOverlay1 = document.querySelector("#attr-overlay1");

  openButton.addEventListener("click", function() {
    modal.classList.remove("closed");
    modalOverlay.classList.remove("closed");
  });

  closeButton.addEventListener("click", function() {
    modal.classList.add("closed");
    modalOverlay.classList.add("closed");
    // clear the form to add a product
    $("#formAddProduct")[0].reset();
    // close extra attributes fields
    attr1.classList.add("closed");
    attrOverlay.classList.add("closed");
  });

// add an attribute in the add form
var addLink = document.querySelector("#add-link");
  attr = document.querySelector("#attr1");
  attrOverlay = document.querySelector("#attr-overlay1");

  addLink.addEventListener("click", function() {
    attr.classList.remove("closed");
    attrOverlay.classList.remove("closed");
    addLink.classList.add("closed");
    $("#attr1")[0].reset();
  });
  
// remove an attribute in the add form
var trash = document.querySelector("#trash1");
  attr1 = document.querySelector("#attr1");
  attrOverlay1 = document.querySelector("#attr-overlay1");

  trash.addEventListener("click", function() {
    attr1.classList.add("closed");
    attrOverlay1.classList.add("closed");
    addLink.classList.remove("closed");
  }); 
  
  document.getElementById("trash1").onclick = function(e) { 
    document.getElementById("extraDataKey").value = "";
    document.getElementById("extraDataValue").value = "";
  }
  
// form validation ДОДЕЛАТЬ!!
function validate() {
  var article = document.getElementById("article");
    
    errorArticle = document.querySelector("#error-article");
    textErrorArticle = document.querySelector("#text-error-article");

  if(!article.value) {
      errorArticle.classList.remove("closed");
      textErrorArticle.classList.remove("closed");
      article.style.border = "1px solid red";
      return false;
    }

  var nameProduct = document.querySelector("#nameProduct");

    errorName = document.querySelector("#error-name");
    textErrorName = document.querySelector("#text-error-name");

  if(!nameProduct.value) {
      errorName.classList.remove("closed");
      textErrorName.classList.remove("closed");
      article.style.border = "1px solid red";
      return false;
    }
}

// to show a product
$(document).ready(function() {
  $(".body__item").click(function(e) {
    var id_click = e.target.id; // получаем id конкретного продукта
    $.ajax({
      type: 'GET',
      url: '/products/' + id_click,
      success: function(product) {

        if(product) {
          $("#show-modal-overlay").removeClass('closed');
          $("#show-modal").removeClass('closed');

          document.getElementById("productName").innerHTML = product.name;
          document.getElementById("productArticle").innerHTML = product.article;
          document.getElementById("productNameTable").innerHTML = product.name;
          
          if(product.status == 0) {
            document.getElementById("productStatus").innerText = 'Недоступен';
          } else {
            document.getElementById("productStatus").innerText = 'Доступен';
          }

          document.getElementById("productAttributes").innerHTML = product.data;
        }
      }   
    });
  }); 
});

// to close a show modal window  
var showModal = document.querySelector("#show-modal");
  showModalOverlay = document.querySelector("#show-modal-overlay");
  closeButton = document.getElementById("close");  

  closeButton.addEventListener("click", function() {
    showModal.classList.add("closed");
    showModalOverlay.classList.add("closed");
  });
