// // factory.js

var fooFactory = new function() {
    function fooFactory(special) {
        this.name = "Foo" + special;
        this.toString = function(){
            return this.name;
        }
    }
    this.bar = function() {
        return new fooFactory("bar");
    }
    this.baz = function() {
        return new fooFactory("baz");
    }
}

var foobar = fooFactory.bar();
console.log(foobar.toString());

var foobaz = fooFactory.baz();
console.log(foobaz.toString());