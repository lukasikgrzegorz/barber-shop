(() => {
  const mobileMenu = document.querySelector('[js-menu-container]');
  const openMenuBtn = document.querySelector('[js-open-menu]');
  
  
  const toggleMenu = () => {
    const isMenuOpen = 
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    document.body.classList.add('no-scroll' , !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    let a = mobileMenu.classList.contains('is-open');
    if (a === true) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    
    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  mobileMenu .addEventListener('click', toggleMenu);


  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
