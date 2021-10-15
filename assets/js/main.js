/* ==========  MENU SHOW Y HIDDEN ========== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');


/* ==========  MENU SHOW ========== */
// Validate if constant exist

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
    console.log(6);
}

/* ==========  MENU HIDDEN ========== */
// Validate if constant exist

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
    console.log(5);
}

// Remove menu mobile

const navLink = document.querySelectorAll('.nav_link');

function linkAtion() {
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu');
}
navLink.forEach(element => element.addEventListener('click', linkAtion));

/* ==========  ACCORDION SKILLS ========== */
const skillContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header');

function skillsToggle(){
    const item = this.parentNode.className;
    console.log(item);

    for(i = 0; skillContent.length > i; i++) {
        skillContent[i].className = 'skills_content skills_close'; 
    }
    if (item === 'skills_content skills_close') {
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach(element => {
    element.addEventListener('click', skillsToggle)
});

/* ======================= ACTIVE MODAL ======================= */
const servicesModal = document.querySelectorAll('.services_modal'),
      servicesButton = document.querySelectorAll('.services_button'),
      servicesClose = document.querySelectorAll('.services_modal_close');

let modal = function(modalClick){
    servicesModal[modalClick].classList.add('active_modal')
}

servicesButton.forEach((modalBtn,i)=>{
    modalBtn.addEventListener('click', () =>{
        modal(i);
    })
})

servicesClose.forEach((modalClose) => {
    modalClose.addEventListener('click',()=>{
        servicesModal.forEach((element) => {
            element.classList.remove('active_modal')
        });
    })
})
/* ======================= PORTFOLIO SWIPER ======================= */
let swiper = new Swiper('.portfolio_container', {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

/* ======================= SCROLL SECTIONS ACTIVE LINK ======================= */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scrollup');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('change-theme')
const darkTheme = 'dark_theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// JQUERY
