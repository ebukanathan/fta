const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: 'none',
      prevEl: 'none',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    autoplay:{
        Delay:200000
    }
  });


/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

/* ====validate if constant exist=======*/
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
        console.log('hello people')
      
        
    })
}

/*======close menu on mobile========*/
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
        
    })
    
}

if(!navMenu){
  navMenu.addEventListener('click',()=>{
    navMenu.classList.remove('show-menu')
  })

}

// /*=============== REMOVE MENU MOBILE ===============*/
 const navLink = document.querySelectorAll('.nav-item');
 const linkAction = ()=>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')

}

 navLink.forEach(n=>n.addEventListener('click',linkAction))

// ======= REMOVE MOBILE MENU WHEN OUTSIDE IS CLICKED===





/*=============== ADD BLUR TO HEADER ===============*/

const blurHeader=()=>{
  const header = document.getElementById('header')
  //when the scroll is greater than 50vh add the class 'blur-header'

  this.scrollY >= 50 ? header.classList.add('blur__header')
                     : header.classList.remove('blur__header')
}

window.addEventListener('scroll',blurHeader)


/*=============== SHOW SCROLL UP ===============*/ 

const scrollup =()=>{
  const scrollUp = document.getElementById('scroll-up')

  this.scrollY >=1000 ? scrollUp.classList.add('show__scrollup'):scrollUp.classList.remove('show__scrollup')
                      
} ;

window.addEventListener('scroll',scrollup)


const showWhatsapp =()=>{
  const whatsapp = document.getElementById('whatsapp')

  this.scrollY >=1800 ? whatsapp.classList.add('whatsapp'):whatsapp.classList.remove('whatsapp')
}

window.addEventListener('scroll',showWhatsapp)

