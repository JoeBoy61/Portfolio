const title = document.querySelector('.title');
const subTitle = document.querySelector('.sub-title');
const subSubTitle = document.querySelector('.sub-sub-title');


function showTitles(){
    title.classList.remove('hidden', 'translate');
    setTimeout(() => subTitle.classList.remove('hidden', 'translate'), 1000);
    setTimeout(() => subSubTitle.classList.remove('hidden', 'translate'), 2000)
}

// On Load
showTitles();