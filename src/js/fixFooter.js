import getRefs from './getRefs';
const refs = getRefs();

if (refs.galleryList.childElementCount > 9) {
  refs.footer.classList.remove('fixed');
}
