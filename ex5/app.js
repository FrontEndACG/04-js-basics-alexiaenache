var arr = [10, 20, 30, 40, 50];
var x = 30;
var arr2 = [];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] == x) {
    arr2.push(i);
  }
}
console.log(arr2);
