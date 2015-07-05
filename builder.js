// builder.js

var car = new function(){
    this.gps = null;
    this.type = "";
    this.tripComputer = null;
    this.numberOfSeats = null;
    
    this.toString = function(){
        return ("GPS: " + this.gps + "\nType: " + this.type + "\nTrip Computer: " + this.tripComputer + "\nNumber of Seats: " + this.numberOfSeats);
    }
}
var carBuilder = new function(){
    this.car = car;
    this.setSeats = function(numSeats){
        this.car.numberOfSeats = numSeats;
    }
    this.setCityCar = function(){
        this.car.type = "City Car";
    }
    this.setCabriolet = function(){
        this.car.type = "Cabriolet";
    }
    this.setSportsCar = function(){
        this.car.type = "Sports Car";
    }
    this.setTripComputer = function(){
        this.car.tripComputer = true;
    }
    this.unsetTripComputer = function(){
        this.car.tripComputer = false;
    }
    this.setGPS = function(){
        this.car.gps = true;
    }
    this.unsetGPS = function(){
        this.car.gps = false;
    }
    this.getResult = function(){
        return this.car;
    }
}

var carBuilder = carBuilder;
carBuilder.setSeats(2)
carBuilder.setSportsCar()
carBuilder.setTripComputer()
carBuilder.unsetGPS()
var car = carBuilder.getResult()
console.log(car.toString());