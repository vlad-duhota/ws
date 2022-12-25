import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

// smooth scroll
document.querySelectorAll('a.anchor').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});