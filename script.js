let countOfMainDishes = myDishes.length;
let countOfSideDishes = mySideDishes.length;

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