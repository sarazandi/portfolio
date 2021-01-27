// JavaScript Document

// Global Variables
var $selectAccountInput = $('#select_account');
var $selectAction		= $('#select_action');
var $amount       		= $('#amount');
var $submit             = $('input[type="submit"]');
var $balanceHeading		= $('.balance_heading');
var $outBalance			= $('#out_balance');

// BankAccount Object
function BankAccount (accountNumber, type){
	
	var balance = 0;
	
	this.accountNumber = accountNumber;
	this.type = type;
	
	this.deposit = function(amount){
		
		var depositAmount = false;
		
		depositAmount = validateAmount(amount);
		
		if(depositAmount != false){
			balance = balance + depositAmount;
		}
	
	};
	
	this.withdrawal = function(amount){
		
		var withdrawalAmount = false;
	
		withdrawalAmount = validateAmount(amount);
		
		if(withdrawalAmount != false){
		
			//balance = balance + withdrawalAmount;
			if(withdrawalAmount > balance){
				alert('Insufficient funds, please withdraw a lower amount.');	
			}else{
				balance = balance - withdrawalAmount;
			}
	
		}	
	
	}
	
	this.getBalance = function(){
		return balance;	
	}
	
	this.updateAccount = function(action, amount){
		
		if(action === 'Deposit'){
		
		  if(amount != ''){
			  this.deposit(amount);
			  $amount.val('');
		  }
		
		}else if(action === 'Withdrawal'){
			
			if(amount != ''){
				this.withdrawal(amount);
				$amount.val('');
			}
			
		}
		
	}
	
	function validateAmount(amount){
		
		/*
		
		This breakdown of a regular expression from:
		
http://stackoverflow.com/questions/308122/simple-regular-expression-for-a-decimal-with-a-precision-of-2
		
		
		^               # Start of string.
		[0-9]+          # Must have one or more numbers.
		(               # Begin optional group.
    	\.              # The decimal point, . must be escaped, 
                    	# or it is treated as "any character".
    	[0-9]{1,2}      # One or two numbers.
		)?              # End group, signify it's optional with ?
		$               # End of string.
		
		*/
		
		// returns true or false depending if the regular expression
		// matches or not
		var isValid = amount.search(/^[0-9]+(\.[0-9]{2})?$/) >= 0;

		if(isValid){
			amount = Number(amount);
		}else{
			alert('Please enter a dollar amount in a valid format. Example (1000.00 or 1000)');
			return false;	
		}
		
		return amount;
	}
		
} // End Bank Account Object

var chequing = new BankAccount(12345, 'Chequing');
var savings = new BankAccount(12346, 'Savings');

// Event listeners...

// Click event
$submit.click(function(e){

	e.preventDefault();
	
	var selectAccountValue = $selectAccountInput.val();
	var selectActionValue = $selectAction.val();
	var amountValue = $amount.val();
	
	if(selectAccountValue === 'Chequing'){
		
		updateAccountOnClick(chequing, selectActionValue, amountValue);
	
	}else if(selectAccountValue === 'Savings'){
		
		updateAccountOnClick(savings, selectActionValue, amountValue);
	
	}
		
});

// Change event
$selectAccountInput.change(function() {
    
	var selectAccountValue = $selectAccountInput.val();
	
	if(selectAccountValue === 'Chequing'){
		
		updateBalanceOutOnChange(chequing);
	
	}else if(selectAccountValue === 'Savings'){
		
		updateBalanceOutOnChange(savings);
	
	}
	
});

// Updating Account functions
function updateAccountOnClick(account, action, amount){
	$balanceHeading.text('Balance ' + account.type);
	account.updateAccount(action, amount);
	var newBalance = account.getBalance();
	$outBalance.text((Number(newBalance).toMoney(2, '.', ',')));
}

function updateBalanceOutOnChange(account){
	$balanceHeading.text('Balance ' + account.type);
	var newBalance = account.getBalance();
	$outBalance.text((Number(newBalance).toMoney(2, '.', ',')));
}

// Add addtional functionality to the JavaScript Number() method

// Code below is modified from code found at:

// http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript

// Michael Whyte - Modified Output to include a '$' at the start of the returned formatted number 

// Formats a number into a currency format

/* 
decimal_sep: character used as deciaml separtor, it defaults to '.' when omitted
thousands_sep: char used as thousands separator, it defaults to ',' when omitted
*/
Number.prototype.toMoney = function(decimals, decimal_sep, thousands_sep) {
	 
   var n = this,
   c = isNaN(decimals) ? 2 : Math.abs(decimals), //if decimal is zero we must take it, it means user does not want to show any decimal
   d = decimal_sep || '.', //if no decimal separator is passed we use the dot as default decimal separator (we MUST use a decimal separator)

   /*
   according to [http://stackoverflow.com/questions/411352/how-best-to-determine-if-an-argument-is-not-sent-to-the-javascript-function]
   the fastest way to check for not defined parameter is to use typeof value === 'undefined' 
   rather than doing value === undefined.
   */   
   t = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep, //if you don't want to use a thousands separator you can pass empty string as thousands_sep value

   sign = (n < 0) ? '-' : '',

   //extracting the absolute value of the integer part of the number and converting to string
   i = parseInt(n = Math.abs(n).toFixed(c)) + '', 

   j = ((j = i.length) > 3) ? j % 3 : 0; 
   return '$' + sign + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : ''); 
   
}





