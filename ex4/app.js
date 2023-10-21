var arr = [1, 2, 3, 4, 5];

function reverseArr(arr) {
  var arr2 = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    arr2.push(arr[i]);
  }
  //   console.log(arr1);
  return arr2;
}
var arr3 = reverseArr(arr);
console.log(arr3);
