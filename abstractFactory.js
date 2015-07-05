// abstractFactory.js

function foo(name) {
    this.name = "Foo" + name;
    this.toString = function () {
        return this.name;
    };
}
 
function fooFactory() {
    this.bar = function() {
        return new foo("bar");
    };
    this.baz = function() {
        return new foo("baz");
    };
}
 
function fizz(name) {
    this.name = "Fizz" + name;
    this.toString = function () {
        return this.name;
    };
}
 
function fizzFactory() {
    this.buzz = function() {
        return new fizz("buzz");
    };
}


var fooFactory = new fooFactory();
var fizzFactory = new fizzFactory();

var foobar = fooFactory.bar();
var foobaz = fooFactory.baz();
var fizzbuzz = fizzFactory.buzz();

console.log(foobar.toString());
console.log(foobaz.toString());
console.log(fizzbuzz.toString());