const slider = document.querySelector('.card-slider');

const track = document.querySelector('.track');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', () => {
    let offset = track.scrollLeft - track.firstElementChild.offsetWidth;

    next.removeAttribute('disabled');

    track.scrollTo({
    left: offset,
    behavior: 'smooth'
    });
});

next.addEventListener('click', () => {
    let offset = track.scrollLeft + track.firstElementChild.offsetWidth;

    prev.removeAttribute('disabled');

    track.scrollTo({
    left: offset,
    behavior: 'smooth'
    });
});

track.addEventListener('scroll', () => {
    const trackScrollWidth = track.scrollWidth;
    const trackOuterWidth = track.clientWidth;

    prev.removeAttribute('disabled');
    next.removeAttribute('disabled');

    if (track.scrollLeft <= 0) {
    prev.setAttribute('disabled', '');
    }

    if (track.scrollLeft === trackScrollWidth - trackOuterWidth) {
        next.setAttribute('disabled', '');
    }
});
