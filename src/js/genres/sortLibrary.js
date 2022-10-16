import getRefs from '../getRefs';
import { onClickMenu } from './onClickMenu';
import scrollFunction from './auto-close-menu';
import sortByGenre from './sort-library-local';

import renderMarkupCardLibrary from './render-from-storage';

const refs = getRefs();
//open menu genres
refs.btn.addEventListener('click', onClickMenu)
//autoclose menu onscroll
window.onscroll = function () {
  scrollFunction();
};

//sort
refs.menuList.addEventListener('click', sortByGenre);