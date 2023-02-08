const menuHamburger = document.querySelector(".Hamburger")
const navLinks = document.querySelector(".nav-links")
const banner = document.querySelector(".banner")
 
menuHamburger.addEventListener('click',()=>{
        
    navLinks.classList.toggle('mobile-menu')

})

menuHamburger.addEventListener('click',()=>{
        
    banner.classList.toggle('cache-banner')
        

})


