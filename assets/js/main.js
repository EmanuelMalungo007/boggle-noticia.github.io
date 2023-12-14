function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}


let ips = document.querySelectorAll(".inputs");
let txtValidat = document.querySelectorAll(".text-validat");
let btn_form = document.querySelector("#form-btn-cadastro");

ScrollReveal().reveal('.punchline', { delay: 1000 });

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);






