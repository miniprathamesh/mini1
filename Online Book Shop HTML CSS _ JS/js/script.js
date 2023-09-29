/*------- search button ----------- */

searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
}




window.onscroll = () =>{

    searchform.classList.remove('active');

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');

    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = () =>{

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');

    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
 
}


/*----- login form -------- */

// var loginForm = document.querySelector('.login-form-container');

// document.querySelector('#login-btn').onclick = () =>{

//     loginForm.classList.toggle('active');
// }

// document.querySelector('#close-login-btn').onclick = () =>{

//     loginForm.classList.remove('active');
// }


/*-------- swiper ---------- */

var swiper = new Swiper(".books-list", {
   
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
     0: {
        slidesPerView: 1,   
      },
      768: {
        slidesPerView: 2, 
      },
      1024: {
        slidesPerView: 3, 
      },
    },
  });

/*-------- featured section start ---------- */

var swiper = new Swiper(".featured-slider", {
   
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints: {
     0: {
        slidesPerView: 1,   
      },
      450:{
        slidesPerView: 2,   
      },
      768: {
        slidesPerView: 3, 
      },
      1024: {
        slidesPerView: 4, 
      },
    },
  });


  /*-------- arrivals section start ---------- */

  var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
     0: {
        slidesPerView: 1,   
      },
      768: {
        slidesPerView: 2, 
      },
      1024: {
        slidesPerView: 3, 
      },
    },
  });

  
  /*-------- reviews section start ---------- */

  var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
     0: {
        slidesPerView: 1,   
      },
      768: {
        slidesPerView: 2, 
      },
      1024: {
        slidesPerView: 3, 
      },
    },
  });

   /*-------- blog section start ---------- */

   var swiper = new Swiper(".blog-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
     0: {
        slidesPerView: 1,   
      },
      768: {
        slidesPerView: 2, 
      },
      1024: {
        slidesPerView: 3, 
      },
    },
  });








//   var loginForm = document.querySelector('.login-form-container');
// var loginButton = document.querySelector('#login-btn');
// var closeButton = document.querySelector('#close-login-btn');
// var errorMessage = document.querySelector('#error-message');

// loginButton.onclick = () => {
//   // Get the input values
//   var usernameInput = document.querySelector('#username');
//   var passwordInput = document.querySelector('#password');
//   var username = usernameInput.value.trim(); // Trim removes leading/trailing spaces
//   var password = passwordInput.value.trim();

//   // Basic validation: Check if the fields are not empty
//   if (username === '' || password === '') {
//     errorMessage.textContent = 'Username and password are required.';
//     return; // Exit the function if validation fails
//   }

//   // Perform your login logic here
//   // For example, you can make an AJAX request to validate the credentials
//   // If login is successful, you can proceed, otherwise, show an error message
//   // Here, I'm just showing a success message for demonstration purposes
//   errorMessage.textContent = 'Login successful!';
//   loginForm.classList.remove('active');
// };

// closeButton.onclick = () => {
//   // Clear the form and error message when the close button is clicked
//   var usernameInput = document.querySelector('#username');
//   var passwordInput = document.querySelector('#password');
//   usernameInput.value = '';
//   passwordInput.value = '';
//   errorMessage.textContent = '';
//   loginForm.classList.remove('active');
// };
