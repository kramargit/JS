function summTotalCosts(massElem, targetElem) {
    let summ = 0;
    for (let i of massElem) {
        summ += parseInt(i.querySelector('input').value) * parseInt(i.querySelector('span').innerText);
    }
    targetElem.innerText = 'Итого: ' + summ;
}

function createCart(i = '') {

    //проверка на "покупок нет?"
    if (!buyExists) {

        //body > .cart
        let body = document.querySelector('body');
        body.style.margin = 0;
        let cart = document.createElement('section');
        cart.classList.add('cart');
        cart.style.minHeight = 100 + 'px';
        body.append(cart);

        //body > .cart > .cart-wrap
        let cartWrap = document.createElement('div');
        cartWrap.classList.add('cart-wrap');
        cartWrap.style.width = 1024 + 'px';
        cartWrap.style.minHeight = 100 + 'px';
        cartWrap.style.margin = '0 auto';
        cartWrap.style.textAlign = 'center';
        cart.append(cartWrap);

        //body > .cart > .cart-wrap > .cart-product
        let cartProduct = document.createElement('article');
        cartProduct.classList.add('cart-product');
        cartProduct.innerHTML = '<h2>Корзина пуста ...</h2>';
        cartProduct.style.fontSize = '40px';
        cartProduct.style.width = 'auto';
        cartWrap.append(cartProduct);
    } else if (clearCart == 0) {

        let cart = document.querySelector('section');
        cart.innerHTML = '';
        clearCart++;

        //body > .cart > .cart-wrap
        let cartWrap = document.createElement('div');
        cartWrap.classList.add('cart-wrap');
        cartWrap.style.width = 1024 + 'px';
        cartWrap.style.minHeight = 100 + 'px';
        cartWrap.style.margin = '0 auto';
        cartWrap.style.textAlign = 'center';
        cart.append(cartWrap);

        //body > .cart > .cart-wrap > .totalPrice
        let totalPrice = document.createElement('div');
        totalPrice.classList.add('cart-totalPrice');
        cartWrap.append(totalPrice);


        //body > .cart > .cart-wrap > .cart-product
        let cartProduct = document.createElement('article');
        cartProduct.classList.add('cart-product');
        cartProduct.id = goods[i].key;
        cartWrap.insertBefore(cartProduct, totalPrice);

        //body > .cart > .cart-wrap > .cart-product > .cart-title
        let cartTitle = document.createElement('div');
        cartTitle.classList.add('cart-title');
        cartTitle.style.display = 'inline-block';
        cartTitle.innerText = goods[i].title + ' ' + goods[i].name;
        cartProduct.append(cartTitle);

        //body > .cart > .cart-wrap > .cart-product > .cartCount
        let cartCount = document.createElement('input');
        cartCount.classList.add('cart-count');
        cartCount.type = 'number';
        cartCount.value = 1;
        cartProduct.append(cartCount);

        //body > .cart > .cart-wrap > .cart-product > .cartCost
        let cartCost = document.createElement('span');
        cartCost.classList.add('cart-cost');
        cartCost.innerHTML = goods[i].price + ' ' + '&#8381';
        cartProduct.append(cartCost);

        let totalSumm = document.createElement('p');
        totalSumm.classList.add('totalCosts');
        totalPrice.append(totalSumm);
        let cartObj = cartWrap.querySelectorAll('article');
        let summTotal = summTotalCosts(cartObj, totalSumm);






    } else {
        let cart = document.querySelector('section');
        let cartWrap = document.getElementsByClassName('cart-wrap');
        let totalPrice = document.getElementsByClassName('cart-totalPrice');
        let lotsOfCartProduct = document.getElementsByClassName('cart-product');


        //body > .cart > .cart-wrap > .cart-product
        let cartProduct = document.createElement('article');
        cartProduct.classList.add('cart-product');
        cartProduct.id = goods[i].key;
        let allArticle = cartWrap[0].querySelectorAll('article');
        let countArticle = 0;
        let inputValue;
        for (let item of allArticle) {
            if (cartProduct.id == item.id) {
                countArticle++;
                inputValue = item.querySelector('input');
            }
        }
        if (countArticle == 0) {
            cartWrap[0].insertBefore(cartProduct, totalPrice[0]);
        } else {
            inputValue.value = parseInt(inputValue.value) + 1;
        }


        let totalSumm = cartWrap[0].querySelector('p');
        let summTotal = summTotalCosts(allArticle, totalSumm);



        //body > .cart > .cart-wrap > .cart-product > .cart-title
        let cartTitle = document.createElement('div');
        cartTitle.classList.add('cart-title');
        cartTitle.style.display = 'inline-block';
        cartTitle.innerText = goods[i].title + ' ' + goods[i].name;
        cartProduct.append(cartTitle);

        //body > .cart > .cart-wrap > .cart-product > .cartCount
        let cartCount = document.createElement('input');
        cartCount.classList.add('cart-count');
        cartCount.type = 'number';
        cartCount.value = 1;
        cartProduct.append(cartCount);

        //body > .cart > .cart-wrap > .cart-product > .cartCost
        let cartCost = document.createElement('span');
        cartCost.classList.add('cart-cost');
        cartCost.innerHTML = goods[i].price + ' ' + '&#8381';
        cartProduct.append(cartCost);
    }



}



function createCatalog() {

    //body > .catalog
    let body = document.querySelector('body');
    let catalog = document.createElement('section');
    catalog.classList.add('catalog');
    catalog.style.minHeight = 500 + 'px';
    body.append(catalog);

    //body > .catalog > .catalog-wrap
    let catalogWrap = document.createElement('div');
    catalogWrap.classList.add('catalog-wrap');
    catalogWrap.style.width = 1024 + 'px';
    catalogWrap.style.margin = '0 auto';
    catalogWrap.style.minHeight = 500 + 'px';
    catalog.append(catalogWrap);

    //body > .catalog > .catalog-wrap > .catalog-flex
    let catalogFlex = document.createElement('div');
    catalogFlex.classList.add('catalog-flex');
    catalogFlex.style.display = 'flex';
    catalogFlex.style.justifyContent = 'space-between';
    catalogWrap.append(catalogFlex);

    let count = 0;
    for (let item of goods) {

        //body > .catalog > .catalog-wrap > .catalog-flex > .catalog-product
        let catalogProduct = document.createElement('article');
        catalogProduct.classList.add('catalog-product');
        catalogFlex.append(catalogProduct);

        //body > .catalog > .catalog-wrap > .catalog-flex > .catalog-product > h3
        let title = document.createElement('h3');
        title.classList.add('catalog-title-product');
        title.style.margin = 0;
        title.style.textTransform = 'uppercase';
        title.innerText = item.title;
        catalogProduct.append(title);

        //body > .catalog > .catalog-wrap > .catalog-flex > .catalog-product > h4
        let name = document.createElement('h4');
        name.classList.add('catalog-name-product');
        name.style.margin = 0;
        name.innerText = item.name;
        catalogProduct.append(name);

        //body > .catalog > .catalog-wrap > .catalog-flex > .catalog-product > img
        let figure = document.createElement('figure');
        figure.classList.add('catalog-figure-product');
        figure.style.margin = 0;
        catalogProduct.append(figure);

        let image = document.createElement('img');
        image.src = item.image;
        image.style.width = 100 + 'px';
        figure.append(image);

        //body > .catalog > .catalog-wrap > .catalog-flex > .catalog-product > p
        let price = document.createElement('p');
        price.classList.add('catalog-price-product');
        price.style.margin = 0;
        price.innerText = item.price;
        price.innerHTML += '&#8381';
        catalogProduct.append(price);

        //body > .catalog > .catalog-wrap > .catalog-flex > .catalog-product > button
        let buy = document.createElement('div');
        buy.classList.add('catalog-buy-product');
        buy.style.width = 70 + 'px';
        buy.style.height = 40 + 'px';
        buy.style.margin = '0 auto';
        buy.style.backgroundColor = '#900';
        buy.style.color = '#fff';
        buy.style.boxSizing = 'border-box';
        buy.style.paddingTop = 10 + 'px';
        buy.style.paddingLeft = 3 + 'px';
        buy.style.cursor = 'pointer';
        buy.id = count++;
        buy.onclick = f;
        buy.innerText = 'в корзину';
        catalogProduct.append(buy);
    }
}

function f(e) {
    let i = e.target.id;
    buyExists = true;
    createCart(i);
}
let clearCart = 0;
let buyExists = false;
createCart();
createCatalog();
