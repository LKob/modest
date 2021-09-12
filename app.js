// modal block appeared disappeared
// let btnContactForm = document.querySelector(".btn-contact");
// let modal = document.querySelector(".modal");
// let btnClose = document.querySelector(".btn-close");

    
// btnClose.addEventListener("click", closeModal);

// function openModal() {
//     modal.classList.add("show");
//     modal.classList.remove("hide");
// }

// function closeModal() {
//     modal.classList.add("hide");
//     modal.classList.remove("show");
// } 

// modal.addEventListener("click", function (e) {
//    if(e.target === modal) {
//     closeModal();
//    }
// });

// mobile menu =====
let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu")
    } else {
        mainMenu.classList.remove("active-menu") 
    }

})