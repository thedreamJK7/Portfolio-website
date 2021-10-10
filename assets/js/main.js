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
        console.log(i);
    })
})

servicesClose.forEach((modalClose) => {
    modalClose.addEventListener('click',()=>{
        servicesModal.forEach((element) => {
            element.classList.remove('active_modal')
        });
    })
})
