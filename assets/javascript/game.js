
	//Declaring global variables
		var crystals = {
			blue: { ref: "assets/images/blue.png", val: 0,},
			red: { ref: "assets/images/red.png", val: 0,},
			green: { ref: "assets/images/green.png", val: 0,},
			yellow: { ref: "assets/images/yellow.png", val: 0,},
		};

			var score = 0;
			var wins = 0;
			var losses = 0;
			var randomNum = 0;
			var gameOver = false;
			var losingGame = false;


$(document).ready(function(){

	//Appending crystals to HTML
	$("#blue").append('<img src=' + crystals.blue.ref + '>');
	$("#blue").click(function() {
		if (gameOver == false){
			score = score + crystals.blue.val;
			scoreCheck();
			$("#score").html(score);
		};
	})

	$("#red").append('<img src=' + crystals.red.ref + '>');
	$("#red").click(function() {
		if (gameOver == false){
			score = score + crystals.red.val;
			scoreCheck();
			$("#score").html(score);
		};
	})

	$("#green").append('<img src=' + crystals.green.ref + '>');
	$("#green").click(function() {
		if (gameOver == false){
			score = score + crystals.green.val;
			scoreCheck();
			$("#score").html(score);
		};
	})

	$("#yellow").append('<img src=' + crystals.yellow.ref + '>');
	$("#yellow").click(function() {
		if (gameOver == false){
			score = score + crystals.yellow.val;
			scoreCheck();
			$("#score").html(score);
		};
	})

	//Setting up playGame function
	function playGame(){
		gameOver = false;
		losingGame = false;
		score = 0;
		//Random number assignment to start the game
		randomNum = Math.floor(Math.random() * (120 - 19)) + 19;

		//Assigning random values to each crystal
		crystals.blue.val = Math.floor(Math.random() * (12 - 1)) + 1;
		crystals.red.val = Math.floor(Math.random() * (12 - 1)) + 1;
		crystals.green.val = Math.floor(Math.random() * (12 - 1)) + 1;
		crystals.yellow.val = Math.floor(Math.random() * (12 - 1)) + 1;

		$("#score").html(score);
		$("#randNum").html(randomNum);
		$("#win").html(wins);
		$("#loss").html(losses);
	}

	//Setting up scoreCheck function
	function scoreCheck(){
		
		$("#score").html(score);

		if (score == randomNum){
			gameOver = true;
			wins++;
			alert("You won!");
		}	
			else if (score > randomNum){
				losingGame = true;
				gameOver = true;
				losses++;
				alert("You lost!");
			};

		if (gameOver){
			$("#win").html(wins);
			$("#loss").html(losses);
			setTimeout(playGame);
		}
	}

playGame();
scoreCheck();


});

