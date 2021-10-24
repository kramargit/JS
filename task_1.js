function f1(e) {
    let imgBlock = document.querySelector('section');
    let image = document.createElement('img');

    if (imgBlock.innerHTML == '') {
        image.src = 'bigImage/1.jpg';
        image.classList.add('big-image');
        imgBlock.append(image);
    } else {
        imgBlock.innerHTML = '';
        image.src = 'bigImage/1.jpg';
        image.classList.add('big-image');
        imgBlock.append(image);
    }

}

function f2(e) {
    let imgBlock = document.querySelector('section');
    let image = document.createElement('img');

    if (imgBlock.innerHTML == '') {
        image.src = 'bigImage/2.jpg';
        image.classList.add('big-image');
        imgBlock.append(image);
    } else {
        imgBlock.innerHTML = '';
        image.src = 'bigImage/2.jpg';
        image.classList.add('big-image');
        imgBlock.append(image);
    }

}

function f3(e) {

    let imgBlock = document.querySelector('section');
    let image = document.createElement('img');

    if (imgBlock.innerHTML == '') {
        image.src = 'bigImage/3.jpg';
        image.onerror = function () {
            imgBlock.innerHTML = "<h1> Этой картинки нет на сервере... </h1>";
        };
        image.classList.add('big-image');
        imgBlock.append(image);
    } else {
        imgBlock.innerHTML = '';
        image.src = 'bigImage/3.jpg';
        image.onerror = function () {
            imgBlock.innerHTML = "<h1> Этой картинки нет на сервере... </h1>";
        };
        image.classList.add('big-image');
        imgBlock.append(image);
    }

}

document.addEventListener('DOMContentLoaded', function (e) {
    let img1 = document.getElementById('first');
    let img2 = document.getElementById('second');
    let img3 = document.getElementById('third');
    img1.addEventListener('click', f1);
    img2.addEventListener('click', f2);
    img3.addEventListener('click', f3);
});