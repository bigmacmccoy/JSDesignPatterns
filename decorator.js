// decorator.js

var coffee = function(){
    this.cost = 2.5;
    this.ingredients = new Array("Coffee");
};
var coffeeDecorator = function(){
    this.decoratedCoffee = new coffee();
    this.getCost = function(){
        return Number(this.decoratedCoffee.cost);
    };
    this.getIngredients = function(){
        return this.decoratedCoffee.ingredients;
    };
};
var irishCoffee = function(){
    this.coffee = new coffeeDecorator();
    this.getCost = function(){
        return (this.coffee.getCost() + 1);
    };
    this.getIngredients = function(){
        var newIngredients = this.coffee.getIngredients();
        newIngredients.push("Baileys");
        newIngredients.push("Jameson");
        return (newIngredients);
    };
};

var coffee = new irishCoffee();
var info = ("Cost: $" + coffee.getCost() + "\nIngredients: ");
var len = coffee.getIngredients().length;
for(var i = 0; i < len; i++){
    info += "\n\t" + coffee.getIngredients()[i];
}
console.log(info);