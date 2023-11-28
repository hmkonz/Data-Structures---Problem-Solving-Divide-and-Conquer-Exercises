// find the number of times the array has been rotated counter-clockwise
function findRotationCount(array) {
  // if 'array' only has one element OR the first element in 'array' < the last element in 'array', return 0 as the pivot (first element in the array is the pivot)
  if (array.length === 1 || array[0] < array[array.length - 1]) return 0;
  // assign the index of the first element in 'array'
  let leftIdx = 0;
  // assign the index of the last element in 'array'
  let rightIdx = array.length - 1;

  // continue looping only while leftIdx <= rightIdx
  while (leftIdx <= rightIdx) {
    // find the middle of the array, floored
    let middleIdx = Math.floor((rightIdx + leftIdx) / 2);
    // assign the value of the element in the middle of 'array'
    let middleVal = array[middleIdx];

    // if 'middleVal' (the value of the element in the middle of the array) > 'middleVal +1' (the value of the element in 'array' to the right of 'middleVal'), return a pivot of 'middleIdx +1' (pivot is the number to the right of middleVal. i.e for array=[6,7,8,1,2,3] and num=8, middleIdx=2 and middleVal=8. Since middleVal > middleVal + 1 (8 > 1) then the pivot = index of 1 (middleVal + 1))
    if (middleVal > array[middleIdx + 1]) return middleIdx + 1;
    // if the value of the element in 'array' at 'leftIdx' <= 'middleVal' (the value of the element at 'middleIdx') then assign 'leftIdx' to 'middleIdx + 1' (now will only look at the right side of 'array' for the pivot)
    else if (array[leftIdx] <= middleVal) {
      leftIdx = middleIdx + 1;
      // if the value of the element in 'array' at 'leftIdx' >= 'middleVal' (the value of the element at 'middleIdx') then assign 'rightIdx' to 'middleIdx - 1' (now will only look at the left side of 'array' for the pivot)
    } else {
      rightIdx = middleIdx - 1;
    }
  }
}

module.exports = findRotationCount;
