import getRefs from './getRefs';
const refs = getRefs();

let child = Number(refs.galleryList.childElementCount);
if (child < 9) {
  refs.footer.classList.add('fixed');
} else {
  refs.footer.classList.remove('fixed');
}
