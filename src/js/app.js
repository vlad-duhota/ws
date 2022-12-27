
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
    speed: 900,
    pagination: {
      el: '.team-member__pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.team-member__zone_2',
        prevEl: '.team-member__zone_1',
      },

  });

  // custom cursor
  const cursor = document.querySelector('.cursor');
  
  document.addEventListener('mousemove', function(e){
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
  });

  const zone1 = document.querySelector('.team-member__zone_1');
  const zone2 = document.querySelector('.team-member__zone_2');
  const bodyElem = document.querySelector('body');

  let zone1Hover = false;
  let zone2Hover = false;

  zone1.addEventListener('mouseover', (e) => {
    zone1Hover = true;
    cursor.style.visibility = 'visible';
    cursor.style.opacity = 1;
    bodyElem.style.cursor = 'none';
    cursor.classList.add('left');
  });

  zone2.addEventListener('mouseover', (e) => {
    zone2Hover = true;
    cursor.style.visibility = 'visible';
    cursor.style.opacity = 1;
    bodyElem.style.cursor = 'none';
    cursor.classList.remove('left');
  });

   zone1.addEventListener('mouseout', (e) => {
    zone1Hover = false;
    if(zone2Hover === false){
      cursor.style.visibility = 'hidden';
      cursor.style.opacity = 0;
      bodyElem.style.cursor = 'pointer';
      cursor.classList.remove('left');
    }
  });

  zone2.addEventListener('mouseout', (e) => {
    zone2Hover = false;
    if(zone1Hover === false){
      cursor.style.visibility = 'hidden';
      cursor.style.opacity = 0;
      bodyElem.style.cursor = 'pointer';
      bodyElem.style.cursor = 'pointer';
      cursor.classList.remove('left');
    }
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

// img
// let options = {
//     rootMargin: '0px',
//     threshold: .7
//   }

  const zoomScreen = document.querySelector(".main-block__img");
  let zoom = .83;
  let imageOnScreen = false;
  const zoomingSpeed = 0.056;
  
//   let observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         imageOnScreen = true;
//         console.log(imageOnScreen);
//       } else{
//         imageOnScreen = false;
//         console.log(imageOnScreen);
//       }
//     });
//   }, options);

//   observer.observe(zoomScreen);

document.addEventListener("wheel", (e)=> {
  if(isInViewport(zoomScreen)){
        if (e.deltaY > 0 && !((zoom + zoomingSpeed) > 1)) {
              zoomScreen.style.transform = `scale(${(zoom += zoomingSpeed)})`;
          }
        }
      });
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.height > rect.top;
}