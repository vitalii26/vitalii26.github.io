// navSlide();
 const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.home__list');
  const navLinks = document.querySelectorAll('.home__list-item');


  burger.addEventListener('click', () => {
    //Toggle Nav
    nav.classList.toggle('nav-active');

    //Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `homeLinkFade 0.5s ease forwards ${index / 7}s`;
        }
    });
    //Burger Animation
    burger.classList.toggle('toggle');
  });
}

navSlide();