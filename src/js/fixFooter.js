import getRefs from './getRefs';
const refs = getRefs();
console.log('refs', refs);

if (refs.galleryList.childElementCount > 9) {
  refs.footer.classList.remove('fixed');
}
