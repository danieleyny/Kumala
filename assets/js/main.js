/*===== Nav Bar =====*/

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', ()=> {
        // TOGGLE NAV
        nav.classList.toggle('nav-active');

    //ANIMATE LINKS 
    navLinks.forEach((link, index)=>{
        if(link.style.animation){
            link.style.animation = '';
        }   else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;
        }
    });

    //burger animation
    burger.classList.toggle('toggle');

    });
  
}
navSlide();


/*===== Nav Bar End =====*/



/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__social', {delay: 200})
sr.reveal('.home__img', {origin:'right', delay: 1000})

/*SCROLL ABOUT*/
sr.reveal('.about__img', {delay: 400})
sr.reveal('.about__subtitle', {delay: 200})
sr.reveal('.about__profession', {delay: 300})
sr.reveal('.about__text', {delay: 400})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})
sr.reveal('.about__button', {delay: 400})

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__img', {delay: 400})

/*SCROLL PORTFOLIO*/
sr.reveal('.left', {origin:'right', delay: 100})
sr.reveal('.right', {origin:'left', delay: 600})

sr.reveal('.portfolio__img', {interval: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})

/*===== SCROLL REVEAL ANIMATION End =====*/


