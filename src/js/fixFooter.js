import getRefs from './getRefs';
const refs = getRefs();
console.log('refs', refs);

let children = Number(document.querySelector('.gallery__list').children);
console.log('children', children);
if (children < 9) {
  refs.footer.classList.add('fixed');
} else {
  refs.footer.classList.remove('fixed');
}
