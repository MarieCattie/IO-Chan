let btnUp = document.querySelector('.up-btn');
btnUp.onclick = function() {
window.scrollTo(0, 0);
}

window.onscroll = function() {
    if(window.pageYOffset > 500) {
        btnUp.classList.add('visible');
    }
    else {
        btnUp.classList.remove('visible');
    }
}