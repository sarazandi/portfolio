// JavaScript Document

$out = $('#out');

// Person constructor...with public and private
// properties and methods...
function Person(name, age, id, weight, height){
	
	
	
	// Public properties
	this.name = name;
	this.age = age;
	this.weight = weight;
	this.height = height;

	// Private properties...
	var id = id;
	
	// to keep track of the instance of the class
	// we create a variable to store the "this" keyword
	// --> var self == this || var that = this || var this = _this 
	var that = this;
	
	// To allow outside scripts to read but not change
	// private properties we can use public 
	// methods that return private property values...
	
	// Return the Persons id...
	this.getID = function(){
		return id;	
	}
	
	// Call a private method...
	this.getBMI = function(){
		return calculateBMI();	
	}
	
	// Private Method...
	function calculateBMI(){
	
		var weight = that.weight;
		var height = that.height;
		
		console.log(weight);
		console.log(height);
		
		var bmi = (weight / (height * height)) * 703;
		
		// .toFixed() --> built in JavaScript method...
		// makes floating point value to a set number of
		// decimal places...
		return bmi.toFixed(2);	
		
	} // calculateBMI	
	
} // end Person constructor...

// Create an instance
var Bob = new Person('Bob', 60, 'A00123456', 200, 72);



