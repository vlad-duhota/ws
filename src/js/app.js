
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
let teamSwiper = new Swiper('.team-member__swiper', {
    autoHeight: true,
    loop: true,
    speed: 650,
    pagination: {
      el: '.team-member__pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.team-member__next',
        // prevEl: '.team-member__prev',
      },
  });

// company swiper
let companySwiper = new Swiper('.company__swiper', {
    loop: true,
    slidesPerView: 3,
    slidesPerSlide: 1,
    speed: 850,
    navigation: {
        nextEl: '.company__next',
        prevEl: '.company__prev',
      },
  });

