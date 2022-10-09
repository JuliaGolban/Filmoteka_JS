const btnWatched = document.querySelector('.watched');
const btnQueue = document.querySelector('.queue');

btnWatched.addEventListener('click', clickOnWatched);
btnQueue.addEventListener('click', clickOnQueue);

function clickOnWatched() { 
    btnWatched.classList.add('--active-btn');
    btnQueue.classList.remove('--active-btn');
};

function clickOnQueue() { 
    btnQueue.classList.add('--active-btn');
    btnWatched.classList.remove('--active-btn');
};