function getMainDishesTemplate(dishObject,objKeys, index){
    return `<div id="mainDish${index}" class="mainDish-box">
                <div class="headline-box">
                    <span class="head-description">${dishObject[objKeys[0]]}</span>
                    <img src="./assets/icons/add_24px.svg" alt="add icon">
                </div>
                <span>${dishObject[objKeys[2]]}</span>
                <span class="dish-price">${dishObject[objKeys[1]]} €</span>
            </div>`;
}

function getSideDishesTemplate(dishObject, objKeys, index){
    return `<div id="sideDish${index}" class="mainDish-box">
                <div class="headline-box">
                    <span class="head-description">${dishObject[objKeys[0]]}</span>
                    <img src="./assets/icons/add_24px.svg" alt="add icon">
                </div>
                <span>${dishObject[objKeys[2]]}</span>
                <span class="dish-price">${dishObject[objKeys[1]]} €</span>
            </div>`;
}