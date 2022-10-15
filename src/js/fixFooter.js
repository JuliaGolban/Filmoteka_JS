import getRefs from './getRefs';
const refs = getRefs();

if (refs.galleryList.hasChildNodes) {
  refs.footer.classList.remove('fixed');
}
