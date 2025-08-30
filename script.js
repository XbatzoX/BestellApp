let countOfMainDishes = myDishes.length;
let countOfSideDishes = mySideDishes.length;

let basketMainDishes = [];
let basketSideDishes = [];

function renderDishes(){
    renderMainDishes(countOfMainDishes);
    renderSideDishes(countOfSideDishes);
    hiddenDeliveryOptions();
}

function renderMainDishes(amount){
    const contentMainDishesRef = document.getElementById('main_dishes');
    contentMainDishesRef.innerHTML = '';

    for (let index = 0; index < amount; index++) {
        let actualDish = {
            "name" : myDishes[index].name,
            "price" : myDishes[index].price,
            "info" : myDishes[index].info
        };
        actualDish.price = actualDish.price.toFixed(2);
        let objKeys = Object.keys(actualDish);

        contentMainDishesRef.innerHTML += getMainDishesTemplate(actualDish, objKeys, index);
        
    }
}

function renderSideDishes(amount){
    const contentSideDishesRef = document.getElementById('side_dishes');
    contentSideDishesRef.innerHTML = '';

    for (let index = 0; index < amount; index++){
        let actualSideDish = {
            "name" : mySideDishes[index].name,
            "price" : mySideDishes[index].price,
            "info" : mySideDishes[index].info
        };
        actualSideDish.price = actualSideDish.price.toFixed(2);
        let objKeys = Object.keys(actualSideDish);

        contentSideDishesRef.innerHTML += getSideDishesTemplate(actualSideDish, objKeys, index);
    }
}

function renderBasket(){
    const contentBasketMainRef = document.getElementById('my_basket_main');
    contentBasketMainRef.innerHTML = '';

    for (let index = 0; index < basketMainDishes.length; index++) {
        let dish = {
        "number" : basketMainDishes[index].number,
        "name" : basketMainDishes[index].name,
        "price" : basketMainDishes[index].price,
        "count" : basketMainDishes[index].count
        };

        dish.price = ((dish.count) * (dish.price));
        dish.price = dish.price.toFixed(2);

        let objKeys = Object.keys(dish);

        contentBasketMainRef.innerHTML += getBasketMainTemplate(dish, objKeys, index);
    }

    renderCosts();
}

function putDishToBasket(index){
    let dish = {
        "number" : index,
        "name" : myDishes[index].name,
        "price" : myDishes[index].price,
        "count" : 1
    };
    let elementIndexNum = findElementInArr(index, dish);

    if (elementIndexNum != (-1)){
        basketMainDishes[elementIndexNum].count += 1;
    }
    else{
        basketMainDishes.push(dish);
    }

    renderBasket();
    hiddenDeliveryOptions();
}

function findElementInArr(index, obj){
    let objKeys = Object.keys(obj);
    return basketMainDishes.findIndex((element) => {return (element[objKeys[0]] == index)});
}

function subCountOfMainDish(index){
    basketMainDishes[index].count -= 1;

    if (basketMainDishes[index].count <= 0){
        removeMainDishFromBasket(index);
    }
    renderBasket();
}

function removeMainDishFromBasket(index){
    basketMainDishes.splice(index, 1);
    renderBasket();
    hiddenDeliveryOptions();
}

function increaseCountOfMainDish(index){
    basketMainDishes[index].count += 1;
    renderBasket();
}

function renderBasketSide(){
    const contentBasketSideRef = document.getElementById('my_basket_side');
    contentBasketSideRef.innerHTML = '';

    for (let index = 0; index < basketSideDishes.length; index++) {
        let dish = {
        "number" : basketSideDishes[index].number,
        "name" : basketSideDishes[index].name,
        "price" : basketSideDishes[index].price,
        "count" : basketSideDishes[index].count
        };

        dish.price = ((dish.count) * (dish.price));
        dish.price = dish.price.toFixed(2);

        let objKeys = Object.keys(dish);

        contentBasketSideRef.innerHTML += getBasketSideTemplate(dish, objKeys, index);
    }

    renderCosts();
}

function putDishToBasketSide(index){
    let dish = {
        "number" : index,
        "name" : mySideDishes[index].name,
        "price" : mySideDishes[index].price,
        "count" : 1
    };
    let elementIndexNum = findElementInArrSide(index, dish);

    if (elementIndexNum != (-1)){
        basketSideDishes[elementIndexNum].count += 1;
    }
    else{
        basketSideDishes.push(dish);
    }

    renderBasketSide();
    hiddenDeliveryOptions();
}

function findElementInArrSide(index, obj){
    let objKeys = Object.keys(obj);
    return basketSideDishes.findIndex((element) => {return (element[objKeys[0]] == index)});
}


function subCountOfSideDish(index){
    basketSideDishes[index].count -= 1;

    if (basketSideDishes[index].count <= 0){
        removeSideDishFromBasket(index);
    }
    renderBasketSide();
}

function removeSideDishFromBasket(index){
    basketSideDishes.splice(index, 1);
    renderBasketSide();
    hiddenDeliveryOptions();
}

function increaseCountOfSideDish(index){
    basketSideDishes[index].count += 1;
    renderBasketSide();
}

function emptyBasket(){
    basketMainDishes = [];
    basketSideDishes = [];

    renderBasket();
    renderBasketSide();
    hiddenDeliveryOptions();
}

function hiddenDeliveryOptions(){
    let countMainInBasket = basketMainDishes.length;
    let countSideInBasket = basketSideDishes.length;

    if ((countMainInBasket > 0) || (countSideInBasket > 0)){
        document.getElementById('option_basket').classList.remove('hide-delivery-options');
        document.getElementById('costs').classList.remove('hide-delivery-options');
        document.getElementById('order-btn').classList.remove('hide-delivery-options');
    }
    else{
        document.getElementById('option_basket').classList.add('hide-delivery-options');
        document.getElementById('costs').classList.add('hide-delivery-options');
        document.getElementById('order-btn').classList.add('hide-delivery-options');
    }
}

function renderCosts(){
    const contentCostsRef = document.getElementById('costs');
    contentCostsRef.innerHTML = '';

    let orderCosts = calculateCosts();
    let isDeliveryChecked = document.getElementById('radio_delivery').checked;
    let totalCosts;

    if (isDeliveryChecked == false){
        totalCosts = orderCosts;
    }
    else{
        totalCosts = (orderCosts + 5.0);
    }

    orderCosts = orderCosts.toFixed(2);
    totalCosts = totalCosts.toFixed(2);

    contentCostsRef.innerHTML = getCostsTemplate(orderCosts, totalCosts);

    classDeliveryCosts(isDeliveryChecked);
}

function calculateCosts(){
    let countMainInBasket = basketMainDishes.length;
    let countSideInBasket = basketSideDishes.length;
    let amountMain = 0.0;
    let amountSide = 0.0;
    let costs = 0.0;

    for (let i = 0; i < countMainInBasket; i++) {
        amountMain += (basketMainDishes[i].price * basketMainDishes[i].count);
    }

    for (let i = 0; i < countSideInBasket; i++) {
        amountSide += (basketSideDishes[i].price * basketSideDishes[i].count);
    }

    costs = amountMain + amountSide;

    return costs;
}

function classDeliveryCosts(isDeliveryChecked){
    if (isDeliveryChecked == false){
        document.getElementById('delivery_costs').classList.add('crossed-out');
    }
    else{
        document.getElementById('delivery_costs').classList.remove('crossed-out');
    }
}

function showBasket(){
    document.getElementById('main_section').classList.add('hide');
    document.getElementById('basket_section').classList.remove('basket-show');
    document.getElementById('basket_section').classList.add('popup');
}

function closeBasket(){
    document.getElementById('basket_section').classList.remove('popup');
    document.getElementById('basket_section').classList.add('basket-show');
    document.getElementById('main_section').classList.remove('hide');
    
}

function openDialog(){
    const contentDialogRef = document.getElementById('order_dialog');
    contentDialogRef.showModal();
    contentDialogRef.classList.add('opened');

    emptyBasket();
}

function closeDialog(){
    const contentDialogRef = document.getElementById('order_dialog');
    contentDialogRef.close();
    contentDialogRef.classList.remove('opened');
}
