function getMainDishesTemplate(dishObject,objKeys, index){
    return `<div id="mainDish${index}" class="mainDish-box" onclick="putDishToBasket(${index})">
                <div class="headline-box">
                    <span class="head-description">${dishObject[objKeys[0]]}</span>
                    <img src="./assets/icons/add_24px.svg" alt="add icon">
                </div>
                <span>${dishObject[objKeys[2]]}</span>
                <span class="dish-price">${dishObject[objKeys[1]]} €</span>
            </div>`;
}

function getSideDishesTemplate(dishObject, objKeys, index){
    return `<div id="sideDish${index}" class="mainDish-box" onclick="putDishToBasketSide(${index})">
                <div class="headline-box">
                    <span class="head-description">${dishObject[objKeys[0]]}</span>
                    <img src="./assets/icons/add_24px.svg" alt="add icon">
                </div>
                <span>${dishObject[objKeys[2]]}</span>
                <span class="dish-price">${dishObject[objKeys[1]]} €</span>
            </div>`;
}

function getBasketMainTemplate(basketObj, objKeys, index){
    return `<div id="basketMain${index}" class="basket-box">
                <span class="head-basket">${basketObj[objKeys[1]]}</span>
                <div class="control-basket">
                    <div class="count-basket">
                        <img class="basket-img" src="./assets/icons/remove_20px.svg" alt="minus icon for sub button"
                            onclick=(subCountOfMainDish(${index}))>
                        <span>${basketObj[objKeys[3]]} x</span>
                        <img class="basket-img" src="./assets/icons/add_20px.svg" alt="plus icon for add button"
                            onclick="increaseCountOfMainDish(${index})">
                    </div>
                    <span>${basketObj[objKeys[2]]} €</span>
                    <img class="basket-img" src="./assets/icons/delete_20px.svg" alt="trash icon for remove dish"
                        onclick="removeMainDishFromBasket(${index})">
                </div>
            </div>`;
}

function getBasketSideTemplate(basketObj, objKeys, index){
    return `<div id="basketSide${index}" class="basket-box">
                <span class="head-basket">${basketObj[objKeys[1]]}</span>
                <div class="control-basket">
                    <div class="count-basket">
                        <img class="basket-img" src="./assets/icons/remove_20px.svg" alt="minus icon for sub button"
                            onclick=(subCountOfSideDish(${index}))>
                        <span>${basketObj[objKeys[3]]} x</span>
                        <img class="basket-img" src="./assets/icons/add_20px.svg" alt="plus icon for add button"
                            onclick="increaseCountOfSideDish(${index})">
                    </div>
                    <span>${basketObj[objKeys[2]]} €</span>
                    <img class="basket-img" src="./assets/icons/delete_20px.svg" alt="trash icon for remove dish"
                        onclick="removeSideDishFromBasket(${index})">
                </div>
            </div>`;
}

function getCostsTemplate(orderCosts, totalCosts){
    return `<div class="subtotal">
                <span>Zwischensumme</span>
                <span>${orderCosts} €</span>
            </div>
            <div id="delivery_costs" class="delivery">
                <span>Lieferkosten</span>
                <span>5,00 €</span>
            </div>
            <div class="total">
                <span>Gesamt</span>
                <span>${totalCosts} €</span>
            </div>`;
}