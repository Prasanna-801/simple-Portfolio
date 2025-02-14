const showmenu = (toggleID, navID) =>{
    const toggle = document.getElementById(toggleID),
    nav = document.getElementById(navID)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
        nav.classList.toggle('show')
    })
    }
}
showmenu('nav-toggle','nav-menu')
//Active and Remove Menu
const navLink = document.querySelectorAll('.nav_link')
function linkAction(){
    //Active link 
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //remove menu 
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.home_title',{})
sr.reveal('.button',{delay: 200})
sr.reveal('.home_img',{delay: 400})
sr.reveal('.home_social-icon',{delay: 200})

sr.reveal('.about_img',{})
sr.reveal('.about_subtitle',{delay: 200})
sr.reveal('.about_text',{delay: 400})

sr.reveal('.skills_subtitle',{})
sr.reveal('.skills_text',{delay: 200})
sr.reveal('.skills_data',{interval: 200})
sr.reveal('.skills_img',{delay: 400})


sr.reveal('.work_img',{interval: 200})
sr.reveal('.work_s',{delay: 200})

sr.reveal('.contact_input',{interval: 200})