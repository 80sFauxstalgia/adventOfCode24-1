const fs = require('fs');

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
let listOneSorted = listSort(listOne);
let listTwoSorted = listSort(listTwo);
function distance(arg1, arg2) {
  let distanceOutput = 0;
  for (let k = 0; k < arg1.length; k++) {
    if (arg1[k] >= arg2[k]) {
      distanceOutput += arg1[k] - arg2[k];
    } else if (arg2[k] >= arg1[k]) {
      distanceOutput += arg2[k] - arg1[k];
    }
  }
  console.log(distanceOutput);
  return distanceOutput;
}
distance(listOneSorted, listTwoSorted);
