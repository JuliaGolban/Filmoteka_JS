import { getResponse } from './api-common'

function pag(totalPages, currentPage) {

    const main = document.querySelector('main');
    
    if (document.getElementById('pagination-container')) {
        document.getElementById('pagination-container').remove()
    };


    const paginationBlock = `<div id="pagination-container" class="pagination">
        <div class="pagination__elem pagination__prev id="prev"><a href="#" class="pagination__linkPrev link">left<svg class="pagination__icon"><use href="./image/sprite.svg#arrow-left"></use></svg></a></div>
        <div class="pagination__elem pagination__firstPage id="firstPage"><a href="#" class="pagination__linkFirstPage link">1</a></div>
        <div class="pagination__elem pagination__dotsPrev id="dotsPrev"><a href="#" class="pagination__linkDotsPrev link">...</a></div>
        <div class="pagination__elem pagination__prev1Page id="prev1Page"><a href="#" class="pagination__linkPrev1Page link">${(currentPage - 2)}</a></div>
        <div class="pagination__elem pagination__prevPage id="prevPage"><a href="#" class="pagination__linkPrevPage link">${(currentPage - 1)}</a></div>
        <div class="pagination__elem pagination__currentPage id="currentPage">${currentPage}</div>
        <div class="pagination__elem pagination__nextPage id="nextPage"><a href="#" class="pagination__linkNextPage link">${(currentPage + 1)}</a></div>
        <div class="pagination__elem pagination__next1Page id="next1Page"><a href="#" class="pagination__linkNext1Page link">${(currentPage + 2)}</a></div>
        <div class="pagination__elem pagination__dotsNext id="dotsNext"><a href="#" class="pagination__linkDotsNext link">...</a></div>
        <div class="pagination__elem pagination__lastPage id="lastPage"><a href="#" class="pagination__linkLastPage link">${totalPages}</a></div>
        <div class="pagination__elem pagination__next id="next"><a href="#" class="pagination__linkNext link">right<svg class="pagination__icon"><use href="./image/sprite.svg#arrow-right"></use></svg></a></div>
        </div >`;
    


    main.insertAdjacentHTML('beforeend', paginationBlock);
    
    const refs = {
        paginationCont: document.querySelector('#pagination-container'),
        prev: document.querySelector('.pagination__linkPrev'),
        firstPage: document.querySelector('.pagination__linkFirstPage'),
        dotsPrev: document.querySelector('.pagination__linkDotsPrev'),
        prev1Page: document.querySelector('.pagination__linkPrev1Page'),
        prevPage: document.querySelector('.pagination__linkPrevPage'),
        currentPage: document.querySelector('#currentPage'),
        nextPage: document.querySelector('.pagination__linkNextPage'),
        next1Page: document.querySelector('.pagination__linkNext1Page'),
        dotsNext: document.querySelector('.pagination__linkDotsNext'),
        lastPage: document.querySelector('.pagination__linkLastPage'),
        next: document.querySelector('.pagination__linkNext'),
    };

    paginationHiddens();
    
    function paginationHiddens() {
        refs.prev.style.pointerEvents = "none";
        refs.prev.style.opacity = "0.5";
        refs.firstPage.style.pointerEvents = "none";
        refs.firstPage.style.opacity = "0.5";
        refs.dotsPrev.style.pointerEvents = "none";
        refs.dotsPrev.style.opacity = "0.5";
        refs.prev1Page.style.visibility = "hidden";
        refs.prevPage.style.visibility = "hidden";
        refs.nextPage.style.visibility = "hidden";
        refs.next1Page.style.visibility = "hidden";
        refs.dotsNext.style.pointerEvents = "none";
        refs.dotsNext.style.opacity = "0.5";
        refs.lastPage.style.pointerEvents = "none";
        refs.lastPage.style.opacity = "0.5";
        refs.next.style.pointerEvents = "none";
        refs.next.style.opacity = "0.5";

        if (totalPages === '0') {
            refs.prev.style.visibility = "hidden";
            refs.firstPage.style.visibility = "hidden";
            refs.dotsPrev.style.visibility = "hidden";
            refs.prev1Page.style.visibility = "hidden";
            refs.prevPage.style.visibility = "hidden";
            refs.currentPage.style.visibility = "hidden";
            refs.nextPage.style.visibility = "hidden";
            refs.next1Page.style.visibility = "hidden";
            refs.dotsNext.style.visibility = "hidden";
            refs.lastPage.style.visibility = "hidden";
            refs.next.style.visibility = "hidden";
            //caterpillar
        }  else if (totalPages === '2') {
            refs.nextPage.style.visibility = "visible";
            refs.next.style.pointerEvents = "visible";
            refs.next.style.opacity = "1";
            
            if (Number(currentPage) === 2) {
                refs.prev.style.pointerEvents = "visible";
                refs.prev.style.opacity = "1";
                refs.prevPage.style.visibility = "visible";
                refs.nextPage.style.visibility = "hidden";
            }
        }
            //doggy
        else if (totalPages === '3') {
            refs.nextPage.style.visibility = "visible";
            refs.next1Page.style.visibility = "visible";
            refs.next.style.pointerEvents = "visible";
            refs.next.style.opacity = "1";
           
            if (Number(currentPage) === 2) {
                refs.prev.style.pointerEvents = "visible";
                refs.prev.style.opacity = "1";
                refs.prevPage.style.visibility = "visible";
                refs.next1Page.style.visibility = "hidden";
            } else if (Number(currentPage) === 3) {
                refs.prev.style.pointerEvents = "visible";
                refs.prev.style.opacity = "1";
                refs.prevPage.style.visibility = "visible";
                refs.prev1Page.style.visibility = "visible";
                refs.nextPage.style.visibility = "hidden";
                refs.next1Page.style.visibility = "hidden";
            }
        }
            //bordo
        else if (totalPages === '4') {
            refs.nextPage.style.visibility = "visible";
            refs.next1Page.style.visibility = "visible";
            refs.lastPage.style.pointerEvents = "visible";
            refs.lastPage.style.opacity = "1";
            refs.next.style.pointerEvents = "visible";
            refs.next.style.opacity = "1";
            
            if (Number(currentPage) === 2) {
                refs.prev.style.pointerEvents = "visible";
                refs.prev.style.opacity = "1";
                refs.prevPage.style.visibility = "visible";
                refs.lastPage.style.pointerEvents = "none";
                refs.lastPage.style.opacity = "0.5";
            } else if (Number(currentPage) === 3) {
                refs.prev.style.pointerEvents = "visible";
                refs.prev.style.opacity = "1";
                refs.prevPage.style.visibility = "visible";
                refs.prev1Page.style.visibility = "visible";
                refs.next1Page.style.visibility = "hidden";
                refs.lastPage.style.pointerEvents = "none";
                refs.lastPage.style.opacity = "0.5";
            } else if (Number(currentPage) === 4) {
                refs.prev.style.pointerEvents = "visible";
                refs.prev.style.opacity = "1";
                refs.prevPage.style.visibility = "visible";
                refs.prev1Page.style.visibility = "visible";
                refs.nextPage.style.visibility = "hidden";
                refs.next1Page.style.visibility = "hidden";
                refs.lastPage.style.pointerEvents = "none";
                refs.lastPage.style.opacity = "0.5";
                refs.next.style.pointerEvents = "none";
                refs.next.style.opacity = "0.5";
            }
        }
            //corrida 5
        else if (Number(totalPages) > 4) {
            refs.nextPage.style.visibility = "visible";
            refs.next1Page.style.visibility = "visible";
            refs.dotsNext.style.pointerEvents = "none";
            refs.dotsNext.style.opacity = "0.5";
            refs.lastPage.style.pointerEvents = "visible";
            refs.lastPage.style.opacity = "1";
            refs.next.style.pointerEvents = "visible";
            refs.next.style.opacity = "1";
            
            if (Number(currentPage) === 2) {
                refs.prev.style.pointerEvents = "visible";
                refs.prev.style.opacity = "1";
                refs.prevPage.style.visibility = "visible";
            } else if (Number(currentPage) === 3) {
                refs.prev.style.pointerEvents = "visible";
                refs.prev.style.opacity = "1";
                refs.prevPage.style.visibility = "visible";
                refs.prev1Page.style.visibility = "visible";
            } else if (Number(currentPage) === 4) {
                refs.prev.style.pointerEvents = "visible";
                refs.prev.style.opacity = "1";
                refs.firstPage.style.pointerEvents = "visible";
                refs.firstPage.style.opacity = "1";
                refs.prevPage.style.visibility = "visible";
                refs.prev1Page.style.visibility = "visible";
            } else if (Number(totalPages) === Number(currentPage)) {
                refs.prev.style.pointerEvents = "visible";
                refs.prev.style.opacity = "1";
                refs.firstPage.style.pointerEvents = "visible";
                refs.firstPage.style.opacity = "1";
                refs.prevPage.style.visibility = "visible";
                refs.prev1Page.style.visibility = "visible";
                refs.nextPage.style.visibility = "hidden";
                refs.next1Page.style.visibility = "hidden";
                refs.dotsNext.style.pointerEvents = "none";
                refs.dotsNext.style.opacity = "0.5";
                refs.lastPage.style.pointerEvents = "none";
                refs.lastPage.style.opacity = "0.5";
                refs.next.style.pointerEvents = "none";
                refs.next.style.opacity = "0.5";
                if (Number(currentPage) > 5) {
                    refs.dotsPrev.style.pointerEvents = "visible";
                    refs.dotsPrev.style.opacity = "1";
                }
            } else if (Number(currentPage) > 4) {
                refs.prev.style.pointerEvents = "visible";
                refs.prev.style.opacity = "1";
                refs.firstPage.style.pointerEvents = "visible";
                refs.firstPage.style.opacity = "1";
                refs.dotsPrev.style.pointerEvents = "visible";
                refs.dotsPrev.style.opacity = "1";
                refs.prevPage.style.visibility = "visible";
                refs.prev1Page.style.visibility = "visible";
                refs.dotsNext.style.pointerEvents = "visible";
                refs.dotsNext.style.opacity = "1";
                if (Number(currentPage) < 6) {
                    refs.dotsPrev.style.pointerEvents = "none";
                    refs.dotsPrev.style.opacity = "0.5";
                }
            } 
        }
    };

    
    refs.dotsNext.addEventListener('click', () => {
        
        currentPage = currentPage + 5;
        getResponse(currentPage);
    });

    refs.next.addEventListener('click', () => {
        
        currentPage = currentPage + 1;
        getResponse(currentPage);
    });
    
    refs.nextPage.addEventListener('click', () => {
        
        currentPage = currentPage + 1;
        getResponse(currentPage);
    });
    
    refs.next1Page.addEventListener('click', () => {
        
        currentPage = currentPage + 2;
        getResponse(currentPage);
    });
        
    refs.prevPage.addEventListener('click', () => {
        
        currentPage = currentPage - 1;
        getResponse(currentPage);
    });
    
    refs.prev1Page.addEventListener('click', () => {
        
        currentPage = currentPage - 2;
        getResponse(currentPage);
    });
    
    refs.lastPage.addEventListener('click', () => {
        
        currentPage = Number(totalPages);
        getResponse(currentPage);
    });
    
    refs.firstPage.addEventListener('click', () => {
        
        currentPage = 1;
        getResponse(currentPage);
    });


    
    refs.prev.addEventListener('click', () => {
        
        currentPage = currentPage - 1;
        getResponse(currentPage);
    });
    
    refs.dotsPrev.addEventListener('click', () => {
        
        currentPage = currentPage - 5;
        getResponse(currentPage);
    });
    
};

export { pag };