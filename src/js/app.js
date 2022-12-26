
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// smooth scroll
document.querySelectorAll('a.anchor').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// team member swiper
let swiper = new Swiper('.team-member__swiper', {
    autoHeight: true,
    loop: true,
    pagination: {
      el: '.team-member__pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.team-member__next',
        // prevEl: '.team-member__prev',
      },
  });