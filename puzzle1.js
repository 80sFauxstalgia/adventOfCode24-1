const fs = require('fs');

// This is my function that sorts the puzzle input.
function listSort(array) {
  let arraySorted = [];
  arraySorted.push(array[0]);

  for (let i = 1; i < array.length; i++) {
    let inserted = false;
    for (let j = 0; j < arraySorted.length; j++) {
  
      if (array[i] < arraySorted[j]) {
        arraySorted.splice(j, 0, array[i]);
        inserted = true;
        break;
      }
    }
    if (!inserted) {
      arraySorted.push(array[i]);
    }
  }
  return arraySorted;
}

//Function to calculate the "distance" between the two lists

function distance(arg1, arg2) {
  let distanceOutput = 0;
  for (let k = 0; k < arg1.length; k++) {
    distanceOutput += Math.abs(arg1[k] - arg2[k]);
  }
  console.log("Total Distance:", distanceOutput);
  return distanceOutput;
}
// Reading and processing the input file
fs.readFile('puzzle1Input.text', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  // Parse the input into two separate lists
  const lines = data.split('\n').filter(line => line.trim() !== '');
  const listOne = [];
  const listTwo = [];

  lines.forEach(line => {
    const [num1, num2] = line.split(/\s+/).map(Number);
    if (!isNaN(num1) && !isNaN(num2)) {
      listOne.push(num1);
      listTwo.push(num2);
    }
  });

// Sort the lists
let listOneSorted = listSort(listOne);
let listTwoSorted = listSort(listTwo);

//perform the distance calculation
distance(listOneSorted, listTwoSorted);
});