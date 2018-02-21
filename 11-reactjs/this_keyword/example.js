var karensAccount = {
	balance: 0
}

var marksAccount = {
	balance: 0
}

function deposit() {
	marksAccount.balance = marksAccount.balance + amount
}

deposit(1000)

function deposit(amount, account) {
	account.balance = account.balance + amount
}

deposit(500, karensAccount)

function withdraw(amount, account) {

}

function showBalance() {
	
}