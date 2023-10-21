var arr = [8, 2, 7, 3, 11];
var max = arr[0];
var min = arr[0];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log(max);
console.log(min);
