function openCard() {
    const envelope = document.querySelector('.envelope');

    envelope.style.display = 'none';
}

function setVh() {
    const root = document.documentElement;
    const vh = window.innerHeight * 0.01;
    root.style.setProperty('--vh', vh + 'px');
}

setVh();
window.addEventListener('resize', setVh);
document.querySelector('.card__open-btn').addEventListener('click', openCard);