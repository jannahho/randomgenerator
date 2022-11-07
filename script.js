
// var title = document.getElementById("title");
var inputBox = document.getElementById("inputbox");

var executeButton = document.getElementById("executebutton");
var outputShape = document.getElementById("outputcontainer");
var outputPower = document.getElementById("outputpower");

var previouslyEntered = "";

executeButton.addEventListener("click", function () {
  generate();
});


function generate(inputText){
  var inputText = document.getElementById("inputbox").value;
  inputText = inputText.trim().toLowerCase();

  if (previouslyEntered == inputText) {
    return;
  }

  var powerOptions = [];
  var selectedPower = "";

  if ("apcxel".includes(inputText[0])) {
    powerOptions = ["Flying", "Invisbility", "Telekinesis", "Sonic Scream", "Healing", "Time Manipulation"];
    selectedPower = powerOptions[Math.floor(Math.random() * powerOptions.length)];

  } else if ("qhijk".includes(inputText[0])) {
    powerOptions = ["Super Strength", "Telepathy", "Mind Control", "Necromancy", "Super Speed", "Energy Manipulation", "Electrokinesis"];
    selectedPower = powerOptions[Math.floor(Math.random() * powerOptions.length)];

  } else if ("fmyobg".includes(inputText[0])) {
    powerOptions = ["Water Manipulation", "Shapeshifting", "Magnetokinesis", "Chlorokinesis", "Levitation", "Replication", "Regeneration"];
    selectedPower = powerOptions[Math.floor(Math.random() * powerOptions.length)];

  } else if ("rstuvwdnz".includes(inputText[0])) {
    powerOptions = ["Sixth Sense", "Pyrokinesis", "Teleportation", "X-Ray Vision", "Communicate with Animals", "Age Shifting"];
    selectedPower = powerOptions[Math.floor(Math.random() * powerOptions.length)];

  } else {
    powerOptions = ["No Power"];
    selectedPower = powerOptions[Math.floor(Math.random() * powerOptions.length)];
  }

  if (inputText == ""){
    inputBox.style.animation = "shake 0.5s";
  }
  else{
    outputPower.innerText = selectedPower;
    restyle();
  }

  if (inputText == "eunice"){
    outputPower.innerText = "Your power is simply being Eunice. Already goated.";
  }

  if (inputText == "effie"){
    outputPower.innerText = "Being an awesome Professor";
  }

  if (inputText == "ryan"){
    outputPower.innerText = "Shapes";
  }

  if (inputText == "joe"){
    outputPower.innerText = "Losing";
  }

  previouslyEntered = inputText;

};


function restyle(){
  var randomRed = Math.random() * 200;
  var randomGreen = Math.random() * 200;
  var randomBlue = Math.random() * 200;

  var newColor = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
  outputShape.style.backgroundColor = newColor;

  outputShape.style.height = "30vw";
  outputShape.style.width = "30vw";
  outputPower.style.color = "rgb(" + (randomRed + 100) + "," + (randomGreen + 100) + "," + (randomBlue + 100) + ")";


  var newBorderRadius = ["50%", "20%", "0%", "45%","40%", "10%"]
  outputShape.style.borderRadius = newBorderRadius[Math.floor(Math.random() * newBorderRadius.length)];;

}
