


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



//END ALERT and PROMPT and START GREETING MESSAGE//
var new_name = "";
var today = new Date(); 
console.log(today);
var hourNow = today.getHours();
console.log (hourNow);

  if (hourNow > 17) {
      var greeting = 'Good Evening ';


  } else if (hourNow > 11) {
      var greeting = 'Good Afternoon ';


  } else if (hourNow > -1) {
      var greeting = 'Good Morning ';

  } 

document.getElementById("message").innerText = greeting;
console.log(new_name)

//ADD GREETING//


function helloName() {
 new_name = prompt ("What is your name?");
   console.log(new_name);
    var message = document.getElementById("message");
     
     alert (new_name + ", Welcome to our page!");
     
     message.innerText = greeting + new_name + ","  
     
}

//window.dblclick = helloName();

document.addEventListener("dblclick", helloName);





// READ MORE/READ LESS BUTTON for DECISION

function myFunction1() {
  var dots1 = document.getElementById("dots1");
  var moreText = document.getElementById("READMORERESOURCE");
  var btnText = document.getElementById("button1");

  if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    btnText.innerHTML = "Read more..."; 
    moreText.style.display = "none";
  } else {
    dots1.style.display = "none";
    btnText.innerHTML = "...Read less"; 
    moreText.style.display = "inline";
  }
}

// READ MORE/READ LESS BUTTON for MENTORSHIP//

function myFunction2() {
  var dots2 = document.getElementById("dots2");
  var moreText = document.getElementById("READMOREDECISION");
  var btnText = document.getElementById("button2");

  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText.innerHTML = "Read more..."; 
    moreText.style.display = "none";
  } else {
    dots2.style.display = "none";
    btnText.innerHTML = "...Read less"; 
    moreText.style.display = "inline";
  }
}

// READ MORE/READ LESS BUTTON for CAREER//

function myFunction3() {
  var dots3 = document.getElementById("dots3");
  var moreText = document.getElementById("READMOREMENTOR");
  var btnText = document.getElementById("button3");

  if (dots3.style.display === "none") {
    dots3.style.display = "inline";
    btnText.innerHTML = "Read more..."; 
    moreText.style.display = "none";

  } else {
    dots3.style.display = "none";
    btnText.innerHTML = "...Read less"; 
    moreText.style.display = "inline";
  }
}

function myFunction4() {
  var dots4 = document.getElementById("dots4");
  var moreText = document.getElementById("READMORECAREER");
  var btnText = document.getElementById("button4");

  if (dots4.style.display === "none") {
    dots4.style.display = "inline";
    btnText.innerHTML = "Read more..."; 
    moreText.style.display = "none";

  } else {
    dots4.style.display = "none";
    btnText.innerHTML = "...Read less"; 
    moreText.style.display = "inline";
  }
}



function myFunction5() {
  var dots5 = document.getElementById("dots5");
  var moreText = document.getElementById("READMOREEDUCATION");
  var btnText = document.getElementById("button5");

  if (dots5.style.display === "none") {
    dots5.style.display = "inline";
    btnText.innerHTML = "Read more..."; 
    moreText.style.display = "none";

  } else {
    dots5.style.display = "none";
    btnText.innerHTML = "...Read less"; 
    moreText.style.display = "inline";
  }
}



/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}