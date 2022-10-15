import getRefs from '../getRefs';
import { onClickMenu } from './onClickMenu';
import scrollFunction from './auto-close-menu';
import { sortByGenre } from './main-sort-api';

const refs = getRefs();
//open menu genres
refs.btn.addEventListener('click', onClickMenu);

//autoclose menu onscroll
window.onscroll = function () {
  scrollFunction();
};

//sort main with api
refs.menuList.addEventListener('click', sortByGenre);


