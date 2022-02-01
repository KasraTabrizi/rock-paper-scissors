let selectedPlayerGesture = "";
let selectedComputerGesture = "";
let statusGame = "";
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
    console.log("player selected", selectedGesture);

    //put the selected gesture in the player gesture selected div
    let playerSelectedDIV =
      document.getElementsByClassName("player_selected")[0];

    playerSelectedDIV.textContent = "";

    let playerImage = document.createElement("img");
    playerImage.src = `/assets/${selectedGesture}_player.svg`;

    playerSelectedDIV.appendChild(playerImage);

    //create random gesture for pc and put the image under the pc gesture selected div
    selectedComputerGesture = gesturesArr[Math.round(Math.random() * 2)];
    console.log("Computer selected", selectedComputerGesture);
  });
}

//check who won and update status
function playRound(selectedPlayerGesture, selectedComputerGesture) {
  if (selectedPlayerGesture === selectedComputerGesture) {
    statusGame = "It's a tie!";
  } else if (
    selectedPlayerGesture === "rock" &&
    selectedComputerGesture === "scissor"
  ) {
    statusGame = "Player Wins!";
  } else if (
    selectedPlayerGesture === "rock" &&
    selectedComputerGesture === "paper"
  ) {
    statusGame = "Computer Wins!";
  } else if (
    selectedPlayerGesture === "paper" &&
    selectedComputerGesture === "rock"
  ) {
    statusGame = "Player Wins!";
  } else if (
    selectedPlayerGesture === "paper" &&
    selectedComputerGesture === "scissor"
  ) {
    statusGame = "Computer Wins!";
  } else if (
    selectedPlayerGesture === "scissor" &&
    selectedComputerGesture === "paper"
  ) {
    statusGame = "Player Wins!";
  } else if (
    selectedPlayerGesture === "scissor" &&
    selectedComputerGesture === "rock"
  ) {
    statusGame = "Computer Wins!";
  }
}

//update the correct score

//add message of who won
