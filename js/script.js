/*  Ocultar/mostrar icono barra de navegacion   */

let iconoMenu = document.querySelector("#icono-menu");
let navBar = document.querySelector(".navbar");

iconoMenu.onclick = () => {
    iconoMenu.classList.toggle("bx-x");
    navBar.classList.toggle("active");
}


/*Scroll personalizado*/

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

/*manejo de evento scroll para agregar la clase active a los enlaces del nav
cada vez que se haga un scroll se ejecuta e itera los elementos, por lo tanto puede verse afectado el rendimiento*/
window.onscroll = () => {
    sections.forEach(section => {
        //top = pixeles desplazados
        let top = window.scrollY;

        //distancia del elemento section al body menos -150
        let offset = section.offsetTop - 150;
        //altura total del elemento
        let height = section.offsetHeight;
        //selecciono el atributo id y lo guardo en variable
        let id = section.getAttribute("id");

        /*compruebo si la distancia actual de la pantalla (top) esta dentro de los limites de la seccion actual iterada.
        si la posicion de scroll es mayor o igual a la distancia entre el body y el section iterado y la posicion del scroll es menor a 
        la distancia entre el body y el section iterado + la altura total del elemento*/

        if( top >= offset && 
            top < offset + height){

                /*itero los lnks del nav */
                navLinks.forEach(links => {
                    //remuevo la clase active de todos
                    links.classList.remove("active");
                    //le asigno la clase active al elemento con id iterado anteriormente
                    document.querySelector(`header nav a[href*=${id}]`).classList.add("active");
                });
        };
    });

    let header = document.querySelector("header");
    //cuando la posicion del scroll sea mayor a 100, agregara la clase sticky al header, cuando sea menor, la quitara
    header.classList.toggle("sticky", window.scrollY>100) 

    /*remover toggle en icono y ocultar nav bar cuando se haga click en algun link de la misma o se haga scroll*/

    iconoMenu.classList.remove("bx-x");
    navBar.classList.remove("active");
};

/*  para que se valla revelando los elementos al hacer scroll */

ScrollReveal({ 
    //reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-container, .cabecera', { origin: "top" });
ScrollReveal().reveal('.home-img, .portafolio-box, .contacto form', { origin: "bottom" });
ScrollReveal().reveal('.home-container h1, .acerca-de_img img', { origin: "left" });
ScrollReveal().reveal('.home-container p, .acerca-de_container', { origin: "right" });

/*  tipeo de texto    */

const typed = new Typed(".texto-cambiante", {
    strings: ['Frontend Developer Jr!', 'Profesora de Geografía!', 'Backend Dev en formación!'] ,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

