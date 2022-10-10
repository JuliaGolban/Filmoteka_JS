  const btn = document.querySelector('.mobile-nav-button');
  const menu = document.querySelector('.mobile-menu');
  const firstLine = document.querySelector('.mobile-nav-button .mobile-nav-button__line:nth-of-type(1)');
  const secondLine = document.querySelector('.mobile-nav-button .mobile-nav-button__line:nth-of-type(2)');
  const thirdLine = document.querySelector('.mobile-nav-button .mobile-nav-button__line:nth-of-type(3)');

  btn.addEventListener('click', onClickMenu)

  function onClickMenu() {
    firstLine.classList.toggle('mobile-nav-button__line--1');
    secondLine.classList.toggle('mobile-nav-button__line--2');
    thirdLine.classList.toggle('mobile-nav-button__line--3');
    menu.classList.toggle('mobile-menu--open');
  }