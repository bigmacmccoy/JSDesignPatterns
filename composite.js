// composite.js

var leaf = function(type){
    this.type = type;
}
var redLeaf = function(){
    this.leaf = new leaf("Red Leaf");
    this.print = function(){
        console.log(this.leaf.type);
    };
};
var greenLeaf = function(){
    this.leaf = new leaf("Green Leaf");
    this.print = function(){
        console.log(this.leaf.type);
    };
};
var leafPile = function() {
    this.leaf = new leaf("Pile of leaves");
    this.leaves = [];
    this.add = function(newLeaf){
        this.leaves.push(newLeaf);
    };
    this.print = function(){
        console.log("\nPile of Leaves containing " + this.leaves.length +" leaves: ");
        for(var i = 0; i < this.leaves.length; i++){
            this.leaves[i].print();
        }
    }
};
var pile0 = new leafPile();

var pile1 = new leafPile();
var pile2 = new leafPile();

pile1.add(new redLeaf());
pile1.add(new greenLeaf());
pile1.add(new greenLeaf());

pile2.add(new redLeaf());
pile2.add(new redLeaf());

pile0.add(pile1);
pile0.add(pile2);
pile0.add(new redLeaf());
pile0.add(new redLeaf());
pile0.add(new greenLeaf());

pile0.print();