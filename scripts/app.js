let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let lizard = document.getElementById("lizard");
let spock = document.getElementById("spock");
let injectHere = document.getElementById("injectHere");
let userOneWins = document.getElementById("userOneWins");
let botWins = document.getElementById("botWins");
let rdCounter = document.getElementById("rdCounter");
let tiCounter = document.getElementById("tiCounter");
let result = "";

let userInput = "";
let player1counter = 0;
console.log("player1counter");

let botCounter = 0;
console.log("botCounter");

let dlockCounter = 0;
console.log("dlockCounter");


let roundCounter = player1counter + botCounter + dlockCounter;
console.log("roundCounter");


//we want to count if we win or loose best of 5, is 3. were not going to count if you tie
//total of counters? where do i get the counters, were do i put them. what happens when the 

rock.addEventListener("click", function () {
  userInput = "rock";
  console.log("user's choice is: " + userInput);
  console.log("bot's choice is: " + result);
  GetData();
  endResult();

  
});

paper.addEventListener("click", function () {
  userInput = "paper";
  console.log("user's choice is: " + userInput);
  console.log("bot's choice is: " + result);
  GetData();
  endResult();

});

scissors.addEventListener("click", function () {
  userInput = "scissors";
  console.log("user's choice is: " + userInput);
  console.log("bot's choice is: " + result);
  GetData();
  endResult();

});

lizard.addEventListener("click", function () {
  userInput = "lizard";
  console.log("user's choice is: " + userInput);
  console.log("bot's choice is: " + result);
  GetData();
  endResult();

});

spock.addEventListener("click", function () {
  userInput = "spock";
  console.log("user's choice is: " + userInput);
  console.log("bot's choice is: " + result);
  GetData();
  endResult();

});

//////////////////////////////////// event listers for counters below
////////////PLAYER COUNTER

rock.addEventListener("click", () => {
 userOneWins.textContent = "User Wins " + player1counter;
})
paper.addEventListener("click", () => {
  userOneWins.textContent = "User Wins " + player1counter;
})
scissors.addEventListener("click", () => {
  userOneWins.textContent = "User Wins " + player1counter;
})
lizard.addEventListener("click", () => {
  userOneWins.textContent = "User Wins " + player1counter;
})
spock.addEventListener("click", () => {
  userOneWins.textContent = "User Wins " + player1counter;
})

//////////////////////
//////////BOT COUNTER

rock.addEventListener("click", () => {
  botWins.textContent = "BOT Wins " + botCounter;
});
paper.addEventListener("click", () => {
  botWins.textContent = "BOT Wins " + botCounter;
});
scissors.addEventListener("click", () => {
  botWins.textContent = "BOT Wins " + botCounter;
});
lizard.addEventListener("click", () => {
  botWins.textContent = "BOT Wins " + botCounter;
});
spock.addEventListener("click", () => {
  botWins.textContent = "BOT Wins " + botCounter;
});

///////////////////
///////////////////ROUND COUNTER

rock.addEventListener("click", () => {
  rdCounter.textContent = "Rounds Counter " + roundCounter;
});
paper.addEventListener("click", () => {
  rdCounter.textContent = "Rounds Counter " + roundCounter;
});
scissors.addEventListener("click", () => {
  rdCounter.textContent = "Rounds Counter " + roundCounter;
});
lizard.addEventListener("click", () => {
  rdCounter.textContent = "Rounds Counter " + roundCounter;
});
spock.addEventListener("click", () => {
  rdCounter.textContent = "Rounds Counter " + roundCounter;
});

/////////////
///////////////TIE COUNTER

rock.addEventListener("click", () => {
  tiCounter.textContent = "Tie Counter " + dlockCounter;
});
paper.addEventListener("click", () => {
  tiCounter.textContent = "Tie Counter " + dlockCounter;
});
scissors.addEventListener("click", () => {
  tiCounter.textContent = "Tie Counter " + dlockCounter;
});
lizard.addEventListener("click", () => {
  tiCounter.textContent = "Tie Counter " + dlockCounter;
});
spock.addEventListener("click", () => {
  tiCounter.textContent = "Tie Counter " + dlockCounter;
});

///////////////
////////////////FETCHI FUNCTION BELOW

function GetData() {
  fetch(
    "https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption"
  )
    .then((response) => response.text())
    .then((data) => {
      result = data.toLowerCase();
    });
}
GetData();

function endResult() {

  //////ROCKS
  if (userInput == "rock" && result == "rock") {
    injectHere.textContent = "Rock vs. Rock, We Have a Tie!";
    dlockCounter++
    roundCounter++
  } 
  if (userInput == "rock" && result == "paper") {
    injectHere.textContent = "Paper covers Rock, You Lose!";
    botCounter++
    roundCounter++
  }
  if (userInput == "rock" && result == "scissors") {
    injectHere.textContent = "Rock Crushes Scissors, You Win!";
    player1counter++
    roundCounter++
  }
  if (userInput == "rock" && result == "lizard") {
    injectHere.textContent = "Rock Crushes Lizard, You Win!";
    player1counter++
    roundCounter++
  }
  if (userInput == "rock" && result == "spock") {
    injectHere.textContent = "Spock Vaporizes Rock, You Lose!";
    botCounter++
    roundCounter++
  }

  /////////PAPERS

  if (userInput == "paper" && result == "paper") {
    injectHere.textContent = "Paper vs. Paper, We Have a Tie!";
     dlockCounter++;
     roundCounter++;
  } 
  if (userInput == "paper" && result == "rock") {
    injectHere.textContent = "Paper Covers Rock, You Win!";
    player1counter++
    roundCounter++
  } 
  if (userInput == "paper" && result == "scissors") {
    injectHere.textContent = "Paper Cutz Scissors, You Lose!";
    botCounter++
    roundCounter++
  } 
  if (userInput == "paper" && result == "lizard") {
    injectHere.textContent = "Lizard eats Paper, You Lose!";
    botCounter++
    roundCounter++
  }  
  if (userInput == "paper" && result == "spock") {
    injectHere.textContent = "Paper Disproves Spock, You Win!";
    player1counter++
    roundCounter++
  }
  

  ///////SCISSORS

  if (userInput == "scissors" && result == "scissors") {
    injectHere.textContent = "Scissors vs. scissors, We Have a Tie!";
    dlockCounter++
    roundCounter++
  } 
  if (userInput == "scissors" && result == "rock") {
    injectHere.textContent = "Scissors Crushes Rock, You Lose!";
    botCounter++
    roundCounter++
  } 
  if (userInput == "scissors" && result == "paper") {
    injectHere.textContent = "Scissors Cuts Paper, You Win!";
    player1counter++
    roundCounter++
  } 
  if (userInput == "scissors" && result == "lizard") {
    injectHere.textContent = "Scissors Decapitates Lizard, You Win!";
    player1counter++
    roundCounter++
  } 
  if (userInput == "scissors" && result == "pock") {
    injectHere.textContent = "Scissors Smashes Spock, You Lose!";
    botCounter++
    roundCounter++
  }

  //////LIZARDS


  if (userInput == "lizard" && result == "lizard") {
    injectHere.textContent = "Lizard vs. Lizard, We Have a Tie!";
    dlockCounter++
    roundCounter++
  } 
  if (userInput == "lizard" && result == "rock") {
    injectHere.textContent = "Rock Crushes Lizard, You Lose!";
    botCounter++
    roundCounter++
  } 
  if (userInput == "lizard" && result == "paper") {
    injectHere.textContent = "Lizard Eats Paper, You Win!";
    player1counter++
    roundCounter++
  } 
  if (userInput == "lizard" && result == "scissor") {
    injectHere.textContent = "Scissors Decapitates Lizzard, You Lose!";
    botCounter++
    roundCounter++
  } 
  if (userInput == "lizard" && result == "spock") {
    injectHere.textContent = "Spock Vaporizes Lizard, You Lose!";
    botCounter++
    roundCounter++
  }


  /////SPOCKS


  if (userInput == "spock" && result == "spock") {
    injectHere.textContent = "Spock vs. Spock, We Have a Tie!";
    dlockCounter++
    roundCounter++
  }
  if (userInput == "spock" && result == "rock") {
    injectHere.textContent = "Spock Vaporizes Rock, You Win!";
    player1counter++
    roundCounter++
  }
  if (userInput == "spock" && result == "paper") {
    injectHere.textContent = "Spock Disproves Paper, You Lose!";
    botCounter++
    roundCounter++
  }
  if (userInput == "spock" && result == "scissor") {
    injectHere.textContent = "Spock Crushes Scissors, You Lose!";
    botCounter++
    roundCounter++
  }
  if (userInput == "spock" && result == "Lizard") {
    injectHere.textContent = "Spock Poisoned by Lizard, You Lose!";
    botCounter++
    roundCounter++
  }


 }

