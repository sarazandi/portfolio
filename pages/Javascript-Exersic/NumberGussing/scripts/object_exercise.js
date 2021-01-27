// JavaScript Document

var $peopleOut = $('.people_out');

// Person constructor...
function Person(name, gender){
	
	// Public properties
	this.name = name;
	this.gender = gender;
	
	this.avatar = createAvatar(gender);
	
	
	// Public method...
	this.sayHello = function(){
		alert('Hello my name is ' + name);	
	};
	
	// Private Methods...
	function createAvatar(gender){
	
		if(gender === 'female'){
			
			img = $('<img />')
						.attr({
							'src' : 'images/8_bit_woman.png',
							'class' : 'avatar avatar_female',
							'alt' : 'female avatar' 	
						});
						
			return img;
			
		}else{
			
			img = $('<img />')
						.attr({
							'src' : 'images/8_bit_man.png',
							'class' : 'avatar avatar_male',
							'alt' : 'male avatar' 	
						});
						
			return img;
				
		} // end if --> male or female...
		
	} // end createAvatar()...
	
} // end Person constructor...

// Create new instances of the Person class...
var person01 = new Person('Jessica', 'female');
var person02 = new Person('Chad', 'male');

$peopleOut.append(person01.avatar);
$peopleOut.append(person02.avatar);
