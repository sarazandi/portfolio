// JavaScript Document

var $out = $('#out');

function Car(make, model, horsepower, numberOfdoors, type){
	
	this.make = make;
	this.model = model;
	this.horsepower = horsepower;
	this.doors = numberOfdoors;
	this.type = type;
	
	this.accelerate = function(){
		return 'accelerating';	
	}
	
}

