var age = prompt("How old are you? ");

function write(text) {
	document.write(text + '<br>')
}


write("This is a puzzle game, you can win but there is only one right way, it's kind of like a maze.");
write("I wish you great luck");

if(age < 18) {
	console.log("age question answer < 18");
	write("Ah, I see you're " + age + " years old?");
	var sure = prompt("You're sure about this? (yes/no)");
	if (sure == "yes") {
		console.log("age verification question answer = sure");
		write("You're too young to play. Let's play a different game");
		youngerThan18();
	} else if(sure == "no") {
		console.log("age verification question answer = not sure");
		write("Ok, I don't understand why you'd answer this but ok, let's move on.");
		olderThan18();
	} else {
		console.log("age verification question answer = wrong");
		write("You know what you did...");
	}
} else if(age >= 18) {
	console.log("age question answer > 18");
	write("You're old enough to play.");
	olderThan18();
} else {
	console.log("age question answer = wrong");
	write("Don't do this, it doesn't work.");
}

function youngerThan18() {
	console.log("started youngerthan18");
	write("The game is now loading...");
	write("This isn't a spooky game at all");
	write("Not for you at least. ;)");
	var sure = prompt("Do you want it to be scary? (yes/no)");
	if(sure == "yes") {
		console.log("youngerThan18 first question answer = yes");
		var verySure = prompt("Are you very sure? (yes/no)");
		if (verySure == "yes") {
			console.log("youngerThan18 second question answer = yes");
			write("Okay, let's load the 18+ game then");
			olderThan18();
		} else {
			console.log("youngerthan18 second question answer = wrong or no");
			write("Okay then...");
		}
	} else if(sure = "no") {
		console.log("youngerThan18 first question answer = no");
		write("Ok, good enough");
		write("Yea nevermind... Move on with your day");
	} else {
		console.log("youngerThan18 first question answer = wrong");
		write("No stop doing this");
	}
}

function olderThan18() {
	console.log("olderThan18 is now active");
	write("The game is now loading...");
	var sure = prompt("Do you think you know what this game is? (yes/no)");
	if(sure == "yes") {
		console.log("first question answer = yes");
		write("Okay... Let's see.");
		write("There are wrong and right choices, there is no inbetween right now, it's a puzzle game. You chose wrong, and That ends it here");
	} else if (sure == "no"){
		console.log("first question answer = no");
		write("There might or might not be a jumpscare somewhere");
		var goOn = prompt("Do you still want to continue?");
		if(goOn == "yes") {
			console.log("Wants to continue");
			write("Ok... What's 9 + 10?");
			var question = prompt("What's 9 + 10?");
			if (question == 21) {
				document.body.style.backgroundImage = "url('data/Images/21')";
				document.body.style.color = '#FFFFFF';
				write("Good job, very funny");
			} else if (question == 19) {
				console.log("Question answered right");
				write("GG, nice, that's an easy one");
				var secondQuestion = prompt("Want another one? (yes/no)");
				if(secondQuestion == "yes") {
					console.log("Spoiler: you died");
					write("This one is more difficult");
					thirdQuestion = prompt("What's 2̷̧͉̻̦̭͆͆̽͋͋͂1̶̛̬̓̓̽͆͆3̷̞̗̮͚͎͈̙̰̬̱́͊̑̂9̵̡̛̰̙̳̲̪̇̈́̈́̔̎̽̃̔ * 5̸̡̩̰̘̫͒͊͐̆̀̓͘6̸̘̫̺͖̻͎̌̅̄̈́̌́́͑͛̕3̷̢̢̤̰͐͊̓̆͒́͆͜");
					setInterval(no, 5);
				} else if(secondQuestion == "no") {
					console.log("won");
					write("Congrats, you won, the page will reload soon");
				}
			} else {
				console.log("Question answered wrong");
				setInterval(no, 10);
			}
		} else {
			write("Okay cya");
		}
	} else {
		setInterval(no, 5);
	}
}
function no() {
	document.write("NO. ");
}

function reloadPage() {
	location.reload(true);
}
setTimeout(reloadPage, 5000);