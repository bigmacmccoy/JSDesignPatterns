// Singleton.js

function singleton(name){
    if(this.instance){
        return this.instance;
    }else{
        this.instance = this
        this.name = name;
    }
    this.toString = function(){
      return this.name;  
    };
    return this;
}

var foo = singleton("Foo");
console.log(foo.toString());
var bar = singleton("Bar");
console.log(bar.toString());