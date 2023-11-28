function findRotatedIndex(array, num) {
  // let 'pivot' equal the result of the findPivot function below
  let pivot = findPivot(array);
  // looks to see if 'num' is to the left side of the pivot
  if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
    // return the result of binarySearch function below with leftIdx=0 and rightIdx= pivot-1 (only search the left side of 'array', from 0 to pivot - 1)
    return binarySearch(array, num, 0, pivot - 1);
    // execute binarySearch function below with leftIdx = pivot and rightIdx = array.length-1 (only search the right side of 'array', from pivot to end of array)
  } else {
    return binarySearch(array, num, pivot, array.length - 1);
  }
}

// searches for the index of 'num' in the array
function binarySearch(array, num, leftIdx, rightIdx) {
  // if array is empty, return -1
  if (array.length === 0) return -1;
  // if 'num' is not in the left or right side of the array, return -1
  if (num < array[leftIdx] || num > array[rightIdx]) return -1;

  // continue looping only while leftIdx <= rightIdx
  while (leftIdx <= rightIdx) {
    // find the middle of the array
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    // if the value of the element in 'array' at middleIdx === num then search ends and middleIdx is the index of 'num' in the array
    if (array[middleIdx] === num) {
      return middleIdx;
      // if 'num' < the value of the element in 'array' at middleIdx then move 'rightIdx' to the left one place and only look for 'num' in the left half of 'array'
    } else if (num < array[middleIdx]) {
      rightIdx = middleIdx - 1;
      // if 'num' > the value of the element in 'array' at middleIdx then move 'leftIdx' to the right one place and only look for 'num' in the right half of 'array'
    } else {
      leftIdx = middleIdx + 1;
    }
  }
  // if 'num' is not in the array, return -1
  return -1;
}

// find the index (pivot) where the array rotation occurrs
function findPivot(array) {
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

module.exports = findRotatedIndex;
