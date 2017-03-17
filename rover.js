/* ROVER MARS POSITION */

// Rover grid
var rows = 10;
var cols = 10;
var arr = [];

for (i = 0; i < rows; i++) {
  arr[i] = [];
  for (j = 0; j < cols; j++) {
    arr[i][j] = 0;
  }
}

//Rover object
var myRover = {
  position: arr,
  north: 'N',
  south: 'S',
  east: 'E',
  west: 'W'
};

//Forward
function goForward(rover) {
  switch(rover.north) {
    case 'N':
      rover.position[0][0]++;
      break;
    case 'E':
      rover.position[1][0]++;
      break;
    case 'S':
      rover.position[0][0]--;
      break;
    case 'W':
      rover.position[1][0]--;
      break;
  }
  console.log("New Rover Position: [" + rover.position[0][0] + ", " + rover.position[1][0] + "]");
}
//Back
function goBack(rover) {
  switch(rover.south) {
    case 'N':
      rover.position[0][0]++;
      break;
    case 'E':
      rover.position[1][0]++;
      break;
    case 'S':
      rover.position[0][0]--;
      break;
    case 'W':
      rover.position[1][0]--;
      break;
  }
  console.log("New Rover Position: [" + rover.position[0][0] + ", " + rover.position[1][0] + "]");
}
//Left
function goLeft(rover) {
  switch(rover.west) {
    case 'N':
      rover.position[0][0]++;
      break;
    case 'E':
      rover.position[1][0]++;
      break;
    case 'S':
      rover.position[0][0]--;
      break;
    case 'W':
      rover.position[1][0]--;
      break;
  }
  console.log("New Rover Position: [" + rover.position[0][0] + ", " + rover.position[1][0] + "]");
}
//Right
function goRight(rover) {
  switch(rover.east) {
    case 'N':
      rover.position[0][0]++;
      break;
    case 'E':
      rover.position[1][0]++;
      break;
    case 'S':
      rover.position[0][0]--;
      break;
    case 'W':
      rover.position[1][0]--;
      break;
  }
  console.log("New Rover Position: [" + rover.position[0][0] + ", " + rover.position[1][0] + "]");
}

//Rover init
var initPrompt = function(){

  var userComand = prompt("Dirije tu Mars Rover: F, B, R y L");

  for (var i = 0; i < userComand.length; i++) {
    var count = userComand.charAt(i);

    if(count === "F" || count === "f") {
      goForward(myRover);
    }else if(count === "B" || count === "b") {
      goBack(myRover);
    }else if(count === "L" || count === "l") {
      goLeft(myRover);
    }else if(count === "R" || count === "r") {
      goRight(myRover);
    }
  }
  
};

initPrompt();
