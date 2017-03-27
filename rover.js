/* ROVER MARS POSITION */

// Rover grid
var rows = 10;
var cols = 10;
var arr = [];

for (i = 0; i < rows; i++) {
  arr[i] = [i];
  for (j = 0; j < cols; j++) {
    arr[i][j] = [j];
  }
}

var myRover = {
  position: arr,
  direction: 'N'
};

var alertLi = document.getElementsByClassName('list')[0];

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0][0]++;
      if(rover.position[0][0] === 10){
        rover.position[0][0] = 0;
      }
      break;
    case 'E':
      rover.position[1][0]++;
      if(rover.position[1][0] === 10){
        rover.position[1][0] = 0;
      }
      break;
    case 'S':
      rover.position[0][0]--;
      if(rover.position[0][0] === -1){
        rover.position[0][0] = 9;
      }
      break;
    case 'W':
      rover.position[1][0]--;
      if(rover.position[1][0] === -1){
        rover.position[1][0] = 9;
      }
      break;
  }
  alertLi.innerHTML += "<li>New Rover Position: [" + rover.position[0][0] + ", " + rover.position[1][0] + "]</li>";
}
function goRight(rover){
  switch(rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  }
  alertLi.innerHTML += "<li>Turn Right</li>";
}
function goBackward(rover){
  switch(rover.direction) {
    case 'N':
      rover.position[0][0]--;
      if(rover.position[0][0] === -1){
        rover.position[0][0] = 9;
      }
      break;
    case 'E':
      rover.position[1][0]--;
      if(rover.position[1][0] === -1){
        rover.position[1][0] = 9;
      }
      break;
    case 'S':
      rover.position[0][0]++;
      if(rover.position[0][0] === 10){
        rover.position[0][0] = 0;
      }
      break;
    case 'W':
      rover.position[1][0]++;
      if(rover.position[1][0] === 10){
        rover.position[1][0] = 0;
      }
      break;
  }
  alertLi.innerHTML += "<li>New Rover Position: [" + rover.position[0][0] + ", " + rover.position[1][0] + "]</li>";
}
function goLeft(rover){
  switch(rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'E':
      rover.direction = 'N';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'W':
      rover.direction = 'S';
      break;
  }
  alertLi.innerHTML += "<li>Turn Left</li>";
}

function initRover() {

  var valueInput = document.getElementById("coordinates").value;

  for (var i = 0; i < valueInput.length; i++) {
    var count = valueInput.charAt(i);
    if(count === "F" || count === "f") {
      goForward(myRover);
    }else if(count === "R" || count === "r") {
      goRight(myRover);
    }else if(count === "B" || count === "b") {
      goBackward(myRover);
    }else if(count === "L" || count === "l") {
      goLeft(myRover);
    }else{
      alertLi.innerHTML += "<li class='notFound'>Command not found</li>";
    }
  }

  return false;
}

initRover();
