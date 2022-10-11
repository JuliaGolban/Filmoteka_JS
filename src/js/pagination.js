import { getResponse } from './api-common'

function pag(totalPages, currentPage) {

    const main = document.querySelector('main');

    
    if (document.getElementById('pagination-container')) {
        document.getElementById('pagination-container').remove()
    };


    const paginationBlock = `<div id="pagination-container" class="pagination">
        <div class="pagination__elem pagination__prev id="prev"><a href="#" class="pagination__linkPrev link"><</a></div>
        <div class="pagination__elem pagination__firstPage id="firstPage"><a href="#" class="pagination__linkFirstPage link">1</a></div>
        <div class="pagination__elem pagination__dotsPrev id="dotsPrev"><a href="#" class="pagination__linkDotsPrev link">...</a></div>
        <div class="pagination__elem pagination__prev1Page id="prev1Page"><a href="#" class="pagination__linkPrev1Page link">${(currentPage - 2)}</a></div>
        <div class="pagination__elem pagination__prevPage id="prevPage"><a href="#" class="pagination__linkPrevPage link">${(currentPage - 1)}</a></div>
        <div class="pagination__elem pagination__currentPage id="currentPage">${currentPage}</div>
        <div class="pagination__elem pagination__nextPage id="nextPage"><a href="#" class="pagination__linkNextPage link">${(currentPage + 1)}</a></div>
        <div class="pagination__elem pagination__next1Page id="next1Page"><a href="#" class="pagination__linkNext1Page link">${(currentPage + 2)}</a></div>
        <div class="pagination__elem pagination__dotsNext id="dotsNext"><a href="#" class="pagination__linkDotsNext link">...</a></div>
        <div class="pagination__elem pagination__lastPage id="lastPage"><a href="#" class="pagination__linkLastPage link">${totalPages}</a></div>
        <div class="pagination__elem pagination__next id="next"><a href="#" class="pagination__linkNext link">></a></div>
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
                refs.next.style.pointerEvents = "none";
                refs.next.style.opacity = "0.5";
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
                refs.next.style.pointerEvents = "none";
                refs.next.style.opacity = "0.5";
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
        getResponse(currentPage, partUrl);
    });

    refs.next.addEventListener('click', () => {
        
        currentPage = currentPage + 1;
        getResponse(currentPage, partUrl);
    });
    
    refs.nextPage.addEventListener('click', () => {
        
        currentPage = currentPage + 1;
        getResponse(currentPage, partUrl);
    });
    
    refs.next1Page.addEventListener('click', () => {
        
        currentPage = currentPage + 2;
        getResponse(currentPage, partUrl);
    });
        
    refs.prevPage.addEventListener('click', () => {
        
        currentPage = currentPage - 1;
        getResponse(currentPage, partUrl);
    });
    
    refs.prev1Page.addEventListener('click', () => {
        
        currentPage = currentPage - 2;
        getResponse(currentPage, partUrl);
    });
    
    refs.lastPage.addEventListener('click', () => {
        
        currentPage = Number(totalPages);
        getResponse(currentPage, partUrl);
    });
    
    refs.firstPage.addEventListener('click', () => {
        
        currentPage = 1;
        getResponse(currentPage, partUrl);
    });


    
    refs.prev.addEventListener('click', () => {
        
        currentPage = currentPage - 1;
        getResponse(currentPage, partUrl);
    });
    
    refs.dotsPrev.addEventListener('click', () => {
        
        currentPage = currentPage - 5;
        getResponse(currentPage, partUrl);
    });
    
};

export { pag };

// function pagRight(totalPages, currentPage) {
    
//     const main = document.querySelector('main');
    
//     if (document.getElementById('pag-container')) {
//         document.getElementById('pag-container').remove()
//     };


//     const pagBlock = '<div id="pag-container" class="pag"></div>';
//     main.insertAdjacentHTML('beforeend', pagBlock);

//     const pagObject = {
//         btnPrev: '<button class="pagination__btn btn__prev" id="prev" type="button"><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.667 8H3.333M8 12.667 3.333 8 8 3.333" stroke="#000" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
//         btnFirstPage: '<button class="pagination__btn btn__firstPage" id="btn__firstPage">1</button>',
//         btnDotsPrev: '<button class="pagination__btn btn__dotsPrev" id="btn__dotsPrev">...</button>',
//         btnPrev1Page: `<button class="pagination__btn btn__prev1Page" id="btn__prev1Page">${(currentPage - 2)}</button>`,
//         btnPrevPage: `<button class="pagination__btn btn__prevPage" id="btn__prevPage">${(currentPage - 1)}</button>`,
//         btnCurrentPage: `<button class="pagination__btn btn__currentPage" id="btn__currentPage">${currentPage}</button>`,
//         btnNextPage: `<button class="pagination__btn btn__nextPage" id="btn__nextPage">${(currentPage + 1)}</button>`,
//         btnNext1Page: `<button class="pagination__btn btn__next1Page" id="btn__next1Page">${(currentPage + 2)}</button>`,
//         btnDotsNext: '<button class="pagination__btn btn__dotsNext" id="btn__dotsNext">...</button>',
//         btnLastPage: `<button class="pagination__btn btn__lastPage" id="btn__lastPage">${totalPages}</button>`,
//         btnNext: '<button class="pagination__btn btn__next" id="btn__next"><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.333 8h9.334M8 12.667 12.667 8 8 3.333" stroke="#000" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
//     }
//     const pagObject2 = [
//         '<button class="pagination__btn btn__prev" id="prev" type="button"><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.667 8H3.333M8 12.667 3.333 8 8 3.333" stroke="#000" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
//         '<button class="pagination__btn btn__firstPage" id="btn__firstPage">1</button>',
//         '<button class="pagination__btn btn__dotsPrev" id="btn__dotsPrev">...</button>',
//         `<button class="pagination__btn btn__prev1Page" id="btn__prev1Page">${(currentPage - 2)}</button>`,
//         `<button class="pagination__btn btn__prevPage" id="btn__prevPage">${(currentPage - 1)}</button>`,
//         `<button class="pagination__btn btn__currentPage" id="btn__currentPage">${currentPage}</button>`,
//         `<button class="pagination__btn btn__nextPage" id="btn__nextPage">${(currentPage + 1)}</button>`,
//         `<button class="pagination__btn btn__next1Page" id="btn__next1Page">${(currentPage + 2)}</button>`,
//         '<button class="pagination__btn btn__dotsNext" id="btn__dotsNext">...</button>',
//         `<button class="pagination__btn btn__lastPage" id="btn__lastPage">${totalPages}</button>`,
//         '<button class="pagination__btn btn__next" id="btn__next"><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.333 8h9.334M8 12.667 12.667 8 8 3.333" stroke="#000" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
//     ];

    
    
//     const pagString = [];
//     let insert = '';
    
    
//     function removeBtn(item1, item2, item3, item4) {
        
//         for (let i = 0; i < pagObject2.length; i++) {
//             if (!(i === Number(item1) | i === Number(item2) | i === Number(item3) | i === Number(item4))) {
//                 pagString.push(pagObject2[i]);
//             }
//         }
        
    
//         console.log(pagString)
//     }
    
//     const pagContainer = document.getElementById('pag-container');
    
    
//     if (Number(totalPages) === 1) {
//         removeBtn(3, 4, 6, 7);
//     } else if (Number(totalPages) === 2) {
//         if (Number(currentPage) === 2) { removeBtn(4, 5, 7); }
//         else { removeBtn(3, 4, 7); }
//     }

//     else if (Number(totalPages) === 3) {
//         removeBtn(3, 4);
//     }

//     else if (Number(totalPages) === 4) {
//         removeBtn(3, 4);
//     }

//     else if (Number(totalPages) >= 5) {
//         removeBtn(3, 4);
//     }
            
//     pagContainer.insertAdjacentHTML('beforeend', pagString.join(''))

// }


    
    // if (document.getElementById('pag-container')) {
    //     document.getElementById('pag-container').remove()
    // };


document.querySelector('main').insertAdjacentHTML('beforeend', '<div id="pag-container" class="pagination"></div>');


const paginationBox = document.querySelector('.pagination');


let globalCurrentpage = 0;
/**
 * Create pagination
 * @param {Number} currentPage - current page for search
 * @param {Number} allPages  - all pages for search
 * @return {String} markup - markup for pagination
 */
export default function pagination(currentPage, totalPages) {
  let markup = ''
  let beforeTwoPage = currentPage - 2;
  let beforePage = currentPage - 1;
  let afterPage = currentPage + 1;
  let afterTwoPage = currentPage + 2;
  globalCurrentpage = currentPage;

  if (currentPage > 1) {
    markup += `<li>&#129144;</li>`
  }
  if (currentPage > 1) {
    markup += `<li>1</li>`
  }
  if (currentPage > 4) {
    markup += `<li>...</li>`
  }
  if (currentPage > 3) {
    markup += `<li>${beforeTwoPage}</li>`
  }
  if (currentPage > 2) {
    markup += `<li>${beforePage}</li>`
  }
  markup += `<li><b>${currentPage}</b></li>`

  if (totalPages - 1 > currentPage) {
    markup += `<li>${afterPage}</li>`
  }

  if (totalPages - 2 > currentPage) {
    markup += `<li>${afterTwoPage}</li>`
  }


  if (totalPages - 3 > currentPage) {
    markup += `<li>,,,</li>`
  }

  if (totalPages > currentPage) {
    markup += `<li>${totalPages}</li>`
    markup += `<li>&#129146;<li>`
  }

  paginationBox.innerHTML = markup;
}

paginationBox.addEventListener('click', onPaginationBoxClick)


function onPaginationBoxClick(evt) {
    if (evt.target.nodeName !== 'LI') { return }
    if (evt.target.textContent === "🡸") { return getResponse(globalCurrentpage -= 1) }
    if (evt.target.textContent === "🡺") { return getResponse(globalCurrentpage += 1) }
    if (evt.target.textContent === "...") { return getResponse(globalCurrentpage -= 5) }
    if (evt.target.textContent === ",,,") { return getResponse(globalCurrentpage += 5) }
}