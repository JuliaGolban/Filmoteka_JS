import Pagination from 'tui-pagination';

import { getResponse } from './api-common'

function pag(totalItems, currentPage) {

    const body = document.querySelector('body');

    const paginationBlock = '<div id="tui-pagination-container" class="tui-pagination"></div>';

    body.insertAdjacentHTML('beforeend', paginationBlock);

    const container = document.getElementById('tui-pagination-container');
    const options = { // below default value of options
        totalItems: totalItems,
        itemsPerPage: 20,
        visiblePages: 5,
        page: `${currentPage}`,
        centerAlign: true,
    }

    const instance = new Pagination(container, options);
    
    instance.on('afterMove', function (eventData) {
        currentPage = eventData.page;
        getResponse(currentPage);
    });
}

export { pag };