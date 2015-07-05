// Singleton.js

var singleton = function singleton(singletonName) {
	if(singleton.prototype._instance){
		return singleton.prototype._instance;
	}
	singleton.prototype._instance = this;

	this.Name = singletonName;
	this.printName = function(){
		console.log(this.Name)
	};
}

var foo = new singleton("Foo");
foo.printName();
var bar = new singleton("Bar");
bar.printName();