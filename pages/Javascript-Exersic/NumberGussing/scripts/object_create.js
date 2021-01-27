// JavaScript Document

// Create variable
// Store src attribute of the "dragon" image element

// Dragon variables
var dragonImage = document.getElementById('dragon');
var dragonImageSrc 	= document.getElementById('dragon').getAttribute('src');

var dragonNoAction 	= 'images/dragon_no_action.gif';
var dragonFire 		= 'images/dragon_fire_animated.gif';
var dragonGrowl 	= 'images/dragon_growl_animated.gif';  

// Button Variables
var btnBreathFire 		= document.getElementById('btn_06');
var btnBreathFireStop 	= document.getElementById('btn_07');
var btnGrowl	 		= document.getElementById('btn_08');
var btnGrowlStop 		= document.getElementById('btn_09');
var btnDisplayName 		= document.getElementById('btn_10');
var btnDisplayAge 		= document.getElementById('btn_11');

// Text Output Variables
var dragonNameOut = document.getElementById('d_name');
var dragonAgeOut = document.getElementById('d_age');

// Create our Dragon object...
var Dragon = {
	
	// Dragon's properties and methods...
	
	// properties..
	name: 'Smaug',
	age: 520,
	
	// methods...(things the dragon can do...)
	breathFire: function(){
		dragonImage.setAttribute('src', dragonFire); 	
	},
	
	growl: function(){
		dragonImage.setAttribute('src', dragonGrowl);	
	},
	
	stopAction: function(){
		dragonImage.setAttribute('src', dragonNoAction);
	}
	
} // end of Dragon object...

/*
Dragon.name = 'Sam';

alert(Dragon.name);
*/

// event handlers...
btnBreathFire.onclick = Dragon.breathFire;
btnGrowl.onclick = Dragon.growl;

btnBreathFireStop.onclick = Dragon.stopAction;
btnGrowlStop.onclick = Dragon.stopAction;

btnDisplayName.onclick = function(){
	dragonNameOut.innerHTML = Dragon.name;	
}

btnDisplayAge.onclick = function(){
	dragonAgeOut.innerHTML = Dragon.age;	
}




