let navbar = document.querySelector('nav');
let listItems = document.querySelector('li');
let mostrarMenu = document.querySelector('.mostrarMenu');
let contacto = documentquerySelector('.contacto');

if (matchMedia) {
    var mq = window.matchMedia("(max-width: 375px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
}

function WidthChange(mq) {
    if (mq.matches) {
        // Displaying Responisve design Hamburger Menu
        mostrarMenu.addEventListener("click", function () {
            navbar.style.display = "block";
        })

        // Hiding Responisve design Hamburger Menu when user clicks an element
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].addEventListener("click", function () {
                navbar.style.display = "none";
            })
        }
    } else {
        navbar.style.display = "none";
        contacto.display = "block";
    }
}