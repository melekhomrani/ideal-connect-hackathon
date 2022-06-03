function test() {
  let error3 = document.getElementById("erreur3");
  let email = document.getElementById("email").value;
  if (
    email.lastIndexOf(".") < email.lastIndexOf("@") ||
    email.lastIndexOf(".") == -1 ||
    email.length == 0
  ) {
    error3.style.display = "block";
    return false;
  } else {
    error3.style.display = "none";
  }
}

$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        setting: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        setting: {
          slidesToShow: 3,
        },
      },
    ],
  });
});


 //Get the button
 let mybutton = document.getElementById("btn-back-to-top");

 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function () {
 scrollFunction();
 };
 
 function scrollFunction() {
 if (
   document.body.scrollTop > 20 ||
   document.documentElement.scrollTop > 20
 ) {
   mybutton.style.display = "block";
 } else {
   mybutton.style.display = "none";
 }
 }
 // When the user clicks on the button, scroll to the top of the document
 mybutton.addEventListener("click", backToTop);
 
 function backToTop() {
 document.body.scrollTop = 0;
 document.documentElement.scrollTop = 0;
 }
 function myFunction() {
   var x = document.getElementById("myTopnav");
   if (x.className === "topnav") {
     x.className += " responsive";
   } else {
     x.className = "topnav";
   }
 }
     
  
    
