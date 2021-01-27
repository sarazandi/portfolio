// JavaScript Document

// Create Variables

// Boxes
var imgBox01 = document.getElementById('image_box_01');
var imgBox02 = document.getElementById('image_box_02');
var imgBox03 = document.getElementById('image_box_03');

// Output Paragraphs
var p01 = document.getElementById('p_01');
var p02 = document.getElementById('p_02');
var p03 = document.getElementById('p_03');

// Dragon Pictures
var graugPic = '<img src="images/graug.gif"  alt="Graug the dragon">';
var smaugPic = '<img src="images/smaug.gif"  alt="Smaug the dragon">';
var taugPic = '<img src="images/taug.gif"  alt="Taug the dragon">';

// Dragon Constructor --> or Dragon Factory...
function Dragon(name, age, picture){
	
	// public properties
	this.name = name;
	this.age = age;
	this.profilePic = picture;
	
	// private properties
	var strength = 92;
	
} // end Dragon constructor...

// Create instances of the Dragon constructor...
var Smaug = new Dragon('Smaug', 520, smaugPic);
var Graug = new Dragon('Graug', 300, graugPic);
var Taug = new Dragon('Taug', 520, taugPic);

// Output the Dragons...to the screen...
imgBox01.innerHTML = Smaug.profilePic;
imgBox02.innerHTML = Graug.profilePic;
imgBox03.innerHTML = Taug.profilePic;





