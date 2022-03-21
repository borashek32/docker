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



// to send a request to a show route
$(document).ready(function(){
  $(".body__item").click(function(e){
    var id_click = e.target.id; // получаем id конкретного продукта
    $("#show-modal").removeClass("closed"); // делаем видимым модальное окно php вывода продукта
    $("#show-modal-overlay").removeClass("closed"); // делаем видимым модальное окно php вывода продукта
    // $.ajax({
    //   type: "GET",
    //   url: '/products/'+ id_click,
    //   success: function(response) {
    //     console.log(response); 
    //   }
    // });
    $.ajax({
      type: 'GET',
      url: '/products/' + id_click,
      success: function(product) {
        if(product) {
          console.log(product); 
         }
      }   
  });
  });

    // $.get("/products/", {param: id_click}, function(data, status){
      
      
  });

// to close a show modal window  
var showModal = document.querySelector("#show-modal");
  showModalOverlay = document.querySelector("#show-modal-overlay");
  closeButton = document.getElementById("close");  

  closeButton.addEventListener("click", function() {
    showModal.classList.add("closed");
    showModalOverlay.classList.add("closed");
  });

// to show a product
// $(".body__item").on("click", event => console.log(event.target.id));

// $('.body__item').on('click', function(e) {
//   var id_click = e.target.id;
//     showLink = document.getElementById(id_click);
//     showModal = document.querySelector("#show-modal");
//     showModalOverlay = document.querySelector("#show-modal-overlay");
//     closeButton = document.getElementById("close");

//   showLink.addEventListener("click", function() {
//     showModal.classList.remove("closed");
//     showModalOverlay.classList.remove("closed");
//   });

  // closeButton.addEventListener("click", function() {
  //   showModal.classList.add("closed");
  //   showModalOverlay.classList.add("closed");
  // });
  
//   $.ajax({
//     type: 'GET',
//     url: '/products/show/',
//     dataType: 'html', 
//     data: {
      
//     },
//     success: function(data){
//       console.log(data)
//     }, 
//     error: function(){
//         console.log('AJAX load did not work');
//     }
//   });
// });


// var showLink = document.querySelector("#showLink");

// showLink.addEventListener("click", function() {
//   let xhttp = new XMLHttpRequest();

//   xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//           myFunction(this.responseText)
//       }
//   }

//   xhttp.open("GET", "http://localhost:8000/products/show/{{ $product->id }}", true);
//   xhttp.send();

//   function myFunction(data) {
//       console.log(data)
//   }
// });

// $.ajax({
//   url: "http://localhost:8000/products/1",
//   data: data,
//   success: success,
//   dataType: dataType
// });

// $.get( "http://localhost:8000/products/1", function( data ) {
//   alert( "Load was performed." );
// });

