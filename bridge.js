// bridge.js

var concreteImplementor1 = function(){
    this.function1 = function(){
        console.log("Function 1 of Concrete Implementor 1");
    };
    this.function2 = function(){
        console.log("Function 2 of Concrete Implementor 1");
    };
};
var concreteImplementor2 = function(){
    this.function1 = function(){
        console.log("Function 1 of Concrete Implementor 2");
    };
    this.function2 = function(){
        console.log("Function 2 of Concrete Implementor 2");
    };
};
var implementor = function(concreteImplementor){
    this.CI = new concreteImplementor;
    this.function1 = function(){
        this.CI.function1();
    };
    this.function2 = function(){
        this.CI.function2();
    };
};
var abstraction = function(concreteImplementor){
    this.implementor = new implementor(concreteImplementor);
    this.function1 = function(){
        this.implementor.function1();
    };
    this.function2 = function(){
        this.implementor.function2();
    };
};
var refinedAbstraction = function(concreteImplementor){
    this.abstraction = new abstraction(concreteImplementor);
    this.function1 = function(){
        this.abstraction.function1();
    };
    this.function2 = function(){
        this.abstraction.function2();
    };
};
function client(){
    var result1 = new refinedAbstraction(concreteImplementor1);
    var result2 = new refinedAbstraction(concreteImplementor2);
    result1.function1();
    result1.function2();
    result2.function1();
    result2.function2();
}
client();