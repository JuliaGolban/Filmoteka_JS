import Pagination from 'tui-pagination';


const body = document.querySelector('body');

const paginationBlock = '<div id="tui-pagination-container" class="tui-pagination"></div>';

body.insertAdjacentHTML('beforeend', paginationBlock);

const container = document.getElementById('tui-pagination-container');
const instance = new Pagination(container, { ... });

instance.getCurrentPage();