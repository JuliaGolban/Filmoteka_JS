import getRefs from '../getRefs';
const refs = getRefs();

class Scroll {
  constructor() {}

  scrollBy() {
    const { height: cardHeight } =
      refs.gallery.firstElementChild.getBoundingClientRect();

    return window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }

  scrollToTop() {
    const start = refs.gallery.firstElementChild;
    return window.scrollTo({ top: start, behavior: 'smooth' });
  }

  showScrollToTop() {
    refs.scrollToTop.classList.remove('is-hidden');
  }

  hideScrollToTop() {
    refs.scrollToTop.classList.add('is-hidden');
  }

  handleScrollToTop() {
    const GOLDEN_RATIO = 0.5;
    document.documentElement.scrollTop > GOLDEN_RATIO
      ? this.showScrollToTop()
      : this.hideScrollToTop();
  }
}

const scroll = new Scroll();

refs.scrollToTop.addEventListener('click', () => {
  scroll.scrollToTop();
});
document.addEventListener('scroll', () => {
  scroll.handleScrollToTop();
});
