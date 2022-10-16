import getRefs from '../getRefs';
const refs = getRefs();
export default function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    refs.menu.classList.remove('mobile-menu--open');
    refs.firstLine.classList.remove('genres-nav-button__line--1');
    refs.secondLine.classList.remove('genres-nav-button__line--2');
    refs.thirdLine.classList.remove('genres-nav-button__line--3');
  }
}
