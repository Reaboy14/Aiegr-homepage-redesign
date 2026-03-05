/* File: script.js */
document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.getElementById('mobileToggle');
  let navOpen=false;
  toggle.addEventListener('click',()=>{
    navOpen=!navOpen;
    toggle.setAttribute('aria-expanded',navOpen);
    if(navOpen){
      const nav=document.createElement('nav');
      nav.className='nav-open';
      nav.id='mobile-menu';
      nav.innerHTML='<a href="#about">About</a><a href="#programs">Programs</a><a href="#impact">Our Impact</a><a href="#partners">Partners</a><a href="#blog">Blog</a><a class="cta-primary" href="#join">Join the Movement Today</a>';
      document.body.appendChild(nav);
    } else{
      const m=document.getElementById('mobile-menu');
      if(m) m.remove();
    }
  });
});
