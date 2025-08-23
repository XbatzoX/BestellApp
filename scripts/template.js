function getMainDishesTemplate(dishObject,objKeys, index){
    return `<div id="mainDish${index}" class="mainDish-box">
                <div class="headline-box">
                    <span class="head-description">${dishObject[objKeys[0]]}</span>
                    <img src="./assets/icons/add_24px.svg" alt="add icon">
                </div>
                <span></span>
            </div>`;
}