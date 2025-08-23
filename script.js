let countOfMainDishes = myDishes.length;

function renderDishes(){
    renderMainDishes(countOfMainDishes);
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