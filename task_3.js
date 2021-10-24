let slideIndex = 1;
slideShow(slideIndex);

function changeSlide(n) {
    slideShow(slideIndex += n);
}

function slideShow(n) {
    let slides = document.getElementsByClassName('mySlide');
    if (n < 1) {
        slideIndex = slides.length;
    }
    if (n > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';
}
