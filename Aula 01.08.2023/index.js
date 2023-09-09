const bubbleSort = (arr) => {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [myArray[i], myArray[i + 1]] = [myArray[i + 1], myArray[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
};

let myArray = [12, 10, 3, 7, 4];
console.log(bubbleSort(myArray)); // returns [3, 4, 7, 10, 12]