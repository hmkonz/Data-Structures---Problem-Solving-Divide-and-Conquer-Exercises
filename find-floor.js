// return the floor of 'num' in 'array'
function findFloor(array, num, leftIdx = 0, rightIdx = array.length - 1) {
  // if leftIdx > rightIdx, that means no floor of 'num' was found; therefore, return -1 (There is no element in 'array' that is smaller than or equal to 'num')
  if (leftIdx > rightIdx) return -1;

  // if 'num' >= the value of the element in 'array' with an index of 'rightIdx' then return the value of that element at rightIdx
  if (num >= array[rightIdx]) return array[rightIdx];

  // find the middle of the array, floored
  let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

  // if the value of the element in 'array' with an index of 'middleIdx' equals 'num' then return the value of that element at middleIdx
  if (array[middleIdx] === num) return array[middleIdx];

  // check to see if floor of 'num' is inbetween the element to the left of middleIdx and the element at middleIdx:
  // check to see if 'middleIdx' is a positive number and also check if 'num' is greater than or equal to the value of the element to the left of middleIdx and less than the value of the element at middleIdx. If so, then the floor of 'num' equals the value of the element at middleIdx-1 (i.e. let array = [1,2,8,10,10,12,19], num=9 and middleIdx=3 (the first 10 in the array). array[middleIdx-1] (equals 8) < num (equals 9) < array[middleIdx] (equals 10); therefore, floor of 9 in 'array' is 8. floor of 'num' is the element in 'array' that is smaller than or equal to 'num' )]
  if (middleIdx > 0 && array[middleIdx - 1] <= num && num < array[middleIdx]) {
    return array[middleIdx - 1];
  }

  // if 'num' is less than the value of the element at middleIdx but not greater than or equal to the value of the element to the left of middleIdx, return the result of recursive function 'findFloor' with parameter 'rightIdx' now equaling middleIdx-1 (now only looking at left half of 'array', disregarding the right half)
  if (num < array[middleIdx]) {
    return findFloor(array, num, leftIdx, middleIdx - 1);
  }
  // if 'num' is greater than the value of the element at middleIdx, return the result of  recursive function 'findFloor' with parameter 'leftIdx' now equaling middleIdx+1 (now only looking at right half of 'array', disregarding the left side)
  if (num > array[middleIdx]) {
    return findFloor(array, num, middleIdx + 1, rightIdx);
  }
}

module.exports = findFloor;
