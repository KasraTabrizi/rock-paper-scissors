let selectedPlayerGesture = "";
let selectedComputerGesture = "";
let statusGame = "";
let playerScore = 0;
let computerScore = 0;
const gesturesArr = ["rock", "paper", "scissors"];

//when start button is pressed
document.getElementById("start_button").addEventListener("click", function () {
  //hide startscreen
  document.getElementById("start_screen").style.display = "none";

  //show playscreen
  document.getElementById("play_screen").style.display = "block";
});

//choose rock, paper or scissors
const gestureImage = document.querySelectorAll(".gesture_image");

for (let i = 0; i < gestureImage.length; i++) {
  gestureImage[i].addEventListener("click", function () {
    selectedGesture = gestureImage[i].getElementsByTagName("img")[0].alt;
    selectedPlayerGesture = selectedGesture;

    //put the selected gesture in the player gesture selected div
    let playerSelectedDIV =
      document.getElementsByClassName("player_selected")[0];

    playerSelectedDIV.textContent = "";

    let playerImage = document.createElement("img");
    playerImage.src = `assets/${selectedGesture}_player.svg`;

    playerSelectedDIV.appendChild(playerImage);

    //create random gesture for pc and put the image under the pc gesture selected div
    selectedComputerGesture = gesturesArr[Math.round(Math.random() * 2)];

    //put the selected gesture in the player gesture selected div
    let computerSelectedDIV = document.getElementsByClassName("pc_selected")[0];

    computerSelectedDIV.textContent = "";

    let computerImage = document.createElement("img");
    computerImage.src = `assets/${selectedComputerGesture}_pc.svg`;

    computerSelectedDIV.appendChild(computerImage);

    //check who won
    playRound(selectedPlayerGesture, selectedComputerGesture);

    //update status
    let statusHeader = document.getElementById("status").childNodes[1];
    statusHeader.textContent = statusGame;

    //update score
    let playerHeader =
      document.getElementById("player_container").childNodes[1];
    let playerScoreSPAN = playerHeader.childNodes[1];
    playerScoreSPAN.textContent = `:${playerScore}`;

    let computerHeader = document.getElementById("pc_container").childNodes[1];
    let computerScoreSPAN = computerHeader.childNodes[1];
    computerScoreSPAN.textContent = `:${computerScore}`;
  });
}

//check who won and update status
function playRound(selectedPlayerGesture, selectedComputerGesture) {
  if (selectedPlayerGesture === selectedComputerGesture) {
    statusGame = "It's a tie!";
  } else if (
    selectedPlayerGesture === "rock" &&
    selectedComputerGesture === "scissors"
  ) {
    statusGame = "Player Wins!";
    playerScore++;
  } else if (
    selectedPlayerGesture === "rock" &&
    selectedComputerGesture === "paper"
  ) {
    statusGame = "Computer Wins!";
    computerScore++;
  } else if (
    selectedPlayerGesture === "paper" &&
    selectedComputerGesture === "rock"
  ) {
    statusGame = "Player Wins!";
    playerScore++;
  } else if (
    selectedPlayerGesture === "paper" &&
    selectedComputerGesture === "scissors"
  ) {
    statusGame = "Computer Wins!";
    computerScore++;
  } else if (
    selectedPlayerGesture === "scissors" &&
    selectedComputerGesture === "paper"
  ) {
    statusGame = "Player Wins!";
    playerScore++;
  } else if (
    selectedPlayerGesture === "scissors" &&
    selectedComputerGesture === "rock"
  ) {
    statusGame = "Computer Wins!";
    computerScore++;
  }
}
