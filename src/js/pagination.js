// import Pagination from 'tui-pagination';

// import { getResponse } from './api-common'

// function pag(totalItems, currentPage) {

//     const body = document.querySelector('body');

//     const paginationBlock = '<div id="tui-pagination-container" class="tui-pagination"></div>';

//     body.insertAdjacentHTML('beforeend', paginationBlock);

//     const container = document.getElementById('tui-pagination-container');
//     const options = { // below default value of options
//         totalItems: totalItems,
//         itemsPerPage: 20,
//         visiblePages: 5,
//         page: `${currentPage}`,
//         centerAlign: true,
//     }

//     const instance = new Pagination(container, options);
    
//     instance.on('afterMove', function (eventData) {
//         currentPage = eventData.page;
//         getResponse(currentPage);
//     });
// }

// export { pag };


import { getResponse } from './api-common'

function pag(totalPages, currentPage) {

    const main = document.querySelector('main');

    const paginationBlock = `<div id="pagination-container" class="pagination">
        <div class="pagination__elem pagination__firstPage id="firstPage>1</div>
        <div class="pagination__elem pagination__dots id="dots>...</div>
        <div class="pagination__elem pagination__prev2Page id="prev2Page>${(currentPage - 3)}</div>
        <div class="pagination__elem pagination__prev1Page id="prev1Page>${(currentPage - 2)}</div>
        <div class="pagination__elem pagination__prevPage id="prevPage>${(currentPage - 1)}</div>
        <div class="pagination__elem pagination__currentPage id="currentPage>${currentPage}</div>
        <div class="pagination__elem pagination__nextPage id="nextPage>${(currentPage + 1)}</div>
        <div class="pagination__elem pagination__next1Page id="next1Page>${(currentPage + 2)}</div>
        <div class="pagination__elem pagination__dots id="dots>...</div>
        <div class="pagination__elem pagination__lastPage id="lastPage>${totalPages}</div>
        <div class="pagination__elem pagination__next id="next><img class="pagina/></div>
        </div >`;

    main.insertAdjacentHTML('beforeend', paginationBlock);

    // const container = document.getElementById('pagination-container');
    // const options = { // below default value of options
    //     totalItems: totalItems,
    //     itemsPerPage: 20,
    //     visiblePages: 5,
    //     page: `${currentPage}`,
    //     centerAlign: true,
    // }

    // const instance = new Pagination(container, options);
    
    // instance.on('afterMove', function (eventData) {
    //     currentPage = eventData.page;
    //     getResponse(currentPage);
    // });
}

export { pag };