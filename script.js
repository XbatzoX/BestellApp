let countOfMainDishes = myDishes.length;
let countOfSideDishes = mySideDishes.length;

let basketMainDishes = [];
let basketSideDishes = [];

function renderDishes(){
    renderMainDishes(countOfMainDishes);
    renderSideDishes(countOfSideDishes);
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
}

function increaseCountOfSideDish(index){
    basketSideDishes[index].count += 1;
    renderBasketSide();
}
