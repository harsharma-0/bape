document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('#bicons');
    let navlist =  document.querySelector('.navlist');
  
    menu.onclick = () => {
        navlist.classList.toggle('open');
    }
  
    const sr = ScrollReveal ({
        distance:'65px',
        duration:2600,
        delay:450,
        reset:true
    });
  
    ScrollReveal().reveal('.hero-text', { delay: 500 ,origin:'top'});
    ScrollReveal().reveal('.hero-img', { delay: 500,origin:'left'});
  });