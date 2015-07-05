// adapter.js

var adaptee = new function(){
    this.name = "Mike";
    this.age = "25";
    this.friendNames = ["Bob", "Alice", "Joe"];
    this.friendNumbers = ["6175550001", "6175550002", "6175550003"];
}
var adaptor = new function(){
    this.adaptee = adaptee;
    this.getAge = function(){
        return Number(adaptee.age);
    };
    this.getName = function(){
        return adaptee.name;
    };
    this.getFriendInfo = function(){
        var hash = {};
        for(var info in adaptee.friendNames){
            hash[info] = adaptee.friendNumbers[adaptee.friendNames.indexOf(info)];
        }
        return hash;
    };
    this.toString = function(){
        var friendInfo = this.getFriendInfo();
        var infoString = "\n\t";
        for(var i = 0; i<adaptee.friendNames.length; i++){
            infoString += (adaptee.friendNames[i] + ": " + adaptee.friendNumbers[i] + "\n\t");
        }
        return("Name: " + this.getName() + "\nAge: " + this.getAge() + "\nFriends Info: " + infoString);
    };
}
var client = adaptor;
console.log(client.toString());