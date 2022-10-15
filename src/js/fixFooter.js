import getRefs from './getRefs';
const refs = getRefs();
console.log('refs', refs.galleryList.hasChildNodes);

if (refs.galleryList.hasChildNodes) {
  refs.footer.classList.remove('fixed');
}
