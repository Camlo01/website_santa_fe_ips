document.addEventListener("DOMContentLoaded", function () {

    const nav = document.getElementById("nav");
    const navItems = document.getElementsByClassName("nav-items")

    for (let i = 0; i < navItems.length; i++) {

        navItems[i].addEventListener("mouseover", function () {
            nav.style.backgroundColor = "#049FDC";
        })

    }

    // Add functionality for toggle menu when any button is pressed
    for (var element of document.getElementsByClassName("nav-btn-behavior")) {
        element.addEventListener("click", toggleMenu);
    }

    setNavColor()
})

window.onresize = () => {
    setNavColor()
}

window.onscroll = () => {
    setNavColor()
}

/**
 * Method for toggle the menu button in the navegation bar
 */
function toggleMenu() {
    let menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}


/**
 * Configure styles for the navegation bar
 */
function setNavColor() {

    //Colors to use
    const normalColor = '#049FDC';
    const specialColor = '#6ed6ff';

    const position = window.scrollY;

    const header = document.getElementById("portada");
    const minimunPosition = (header == null) ? window.innerHeight : header.offsetHeight - 140;
    const mobileScreenSize = (window.getComputedStyle(document.getElementById("menu")).flexDirection == "column") ? true : false;


    const nav = document.getElementById("nav");

    // styles for apply special color to the navbar
    if (position > minimunPosition && !mobileScreenSize) {
        nav.style.backgroundColor = specialColor;

        // Add functionality for normalize the navbar color after determined time
        nav.addEventListener("mouseleave", function () {

            setTimeout(() => {
                nav.style.backgroundColor = specialColor;
            }, 4500);
        })

    } else {
        nav.style.backgroundColor = normalColor

        nav.addEventListener("mouseover", function () {
            nav.style.backgroundColor = normalColor
        })
        nav.addEventListener("mouseleave", function () {
            nav.style.backgroundColor = normalColor;
        })

    }

}


