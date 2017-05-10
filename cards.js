var BasicCard = require("./basicCard.js");
var ClozeCard = require("./ClozeCard.js");
var inquirer = require("inquirer");
var basicflashcards = [];
var clozeflashcards = [];
var score;
var x = 0;
var i = 0;



basicflashcards.push(new BasicCard(
	"Who saves Simba and Nala when they sneak off to the elephant graveyard?", "Mufasa"));
basicflashcards.push(new BasicCard(
	"What doe Genie turn Aladdin into for his first wish?", "a prince"));
basicflashcards.push(new BasicCard(
	"How many days on land does Ursela give Ariel to make Prince Eric fall in love with her?", "3"));
basicflashcards.push(new BasicCard(
	"Who wins Woody and Buzz out of the claw machine at Pizza Planet?", "Sid"));
basicflashcards.push(new BasicCard(
	"What does King Louie want Mogoli to teach him to make?", "fire"));
basicflashcards.push(new BasicCard(
	"Who gives Hercules Pegasus?", "Zeus"));
clozeflashcards.push(new ClozeCard(
	"Mufasa saves Simba and Nala when they sneak off to the elephant graveyard", "Mufasa"));
clozeflashcards.push(new ClozeCard(
	"Genie turns Aladdin into a prince for his first wish", "prince"));
clozeflashcards.push(new ClozeCard(
	"Ursela gives Ariel 3 days on land to make Prince Eric fall in love with her", "3"));
clozeflashcards.push(new ClozeCard(
	"Sid wins Woody and Buzz out of the claw machine at Pizza Planet", "Sid"));
clozeflashcards.push(new ClozeCard(
	"King Louie wants Mogoli to teach him how to make fire", "fire"));
clozeflashcards.push(new ClozeCard(
	"Hercules is given Pegasus by Zeus", "Zeus"));

function startGame() {
	score = 0;
	console.log("");
	console.log("");
	console.log("*********************");
	console.log("");
	console.log("Disney Flashcards");
	console.log("");
	console.log("*********************");
	console.log("");
		inquirer.prompt([
		{	
			type: "list",
			name: "cardType",
			message: "which type of flashcards do you want to use?",
			choices: ["Basic Cards", "Cloze Cards"]
		}
		]).then(function(choice) {
			if (choice.cardType === "Basic Cards") {
				playBasic(0);
			}
			else {
				console.log("Fill in the blanks:")
				playCloze(0);
			};
		});
	};


function playBasic() {
	
	if (i < 5) {
			inquirer.prompt([
			{	
				type: "input",
				name: "card",
				message: basicflashcards[i].front		
			}
			]).then(function(response) {

					if (response.card === basicflashcards[i].back) {
						console.log("");
						console.log("**~correct!~**");
						console.log("");
						i++;
						score++;
						playBasic();
					}
					else {
						console.log("wrong!");
						console.log("the answer is " + basicflashcards[i].back);
						i++;
						
						playBasic();	
					}
			});	
	}
	else {
		console.log("");
		console.log("..............................");
		console.log("");
		console.log("Game Over");
		console.log("");
		console.log("*~Your Score: " + score + "/6~*");
		console.log("");
		console.log("..............................");
		console.log("");
		inquirer.prompt([
		{
			type: "list",
			name: "newGame",
			message: "Play Again?",
			choices: ["Yes", "No"]
			
		}
		]).then(function(response) {
			if (response.newGame === "Yes") {
				startGame();
				score = 0;
				x = 0;
				i = 0;
			}
			 
		});
		
	};
};



function playCloze() {
	
	if (x < 5) {
			inquirer.prompt([
			{	
				type: "input",
				name: "card",
				message: clozeflashcards[x].partial		
			}
			]).then(function(response) {

					if (response.card === clozeflashcards[x].cloze) {
						console.log("**~correct!~**");
						x++;
						score++;
						playCloze();
					}
					else {
						console.log("incorect!");
						console.log("the answer is " + clozeflashcards[x].cloze);
						x++;
						
						playCloze();	
					}
			});	
	}
	else {
		console.log("");
		console.log("..............................");
		console.log("");
		console.log("Game Over");
		console.log("");
		console.log("*~Your Score: " + score + "/6~*");
		console.log("");
		console.log("..............................");
		console.log("");
		inquirer.prompt([
		{
			type: "list",
			name: "newGame",
			message: "Play Again?",
			choices: ["Yes", "No"]
			
		}
		]).then(function(response) {
			if (response.newGame === "Yes") {
				score = 0;
				x = 0;
				i = 0;
				startGame();

			}
			 
		});
		
	};
};

startGame();



