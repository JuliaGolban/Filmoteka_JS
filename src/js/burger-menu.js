import LS from './localeStorage';

  
  const btn = document.querySelector('.genres-nav-button');
  const menu = document.querySelector('.mobile-menu');
  const menuList = document.querySelector('.mobile-menu-list')
  const firstLine = document.querySelector('.genres-nav-button .genres-nav-button__line:nth-of-type(1)');
  const secondLine = document.querySelector('.genres-nav-button .genres-nav-button__line:nth-of-type(2)');
  const thirdLine = document.querySelector('.genres-nav-button .genres-nav-button__line:nth-of-type(3)');
  let storageKey = 'genres';
  btn.addEventListener('click', onClickMenu)

  function onClickMenu() {
    firstLine.classList.toggle('genres-nav-button__line--1');
    secondLine.classList.toggle('genres-nav-button__line--2');
    thirdLine.classList.toggle('genres-nav-button__line--3');
    menu.classList.toggle('mobile-menu--open');
    renderGenres(getFromStorage())
  }

  function renderGenres(results) {
    menuList.innerHTML = ''
    const markup = results.map(({name}) =>{
            return `<li class="mobile-menu-item"><a>${name}</a></li>`
    }).join('');

    menuList.insertAdjacentHTML('beforeend', markup)

  }

  function getFromStorage() {
    try {
      const data = JSON.parse(localStorage.getItem(storageKey));
      return data;
    } catch (err) {
      console.warn('Cannot parse JSON from localStorage');
      return null;
    }
  }
