var arr = [0, 1];
var n = 8;
for (var i = 2; i < n; i++) {
  arr.push(arr[i - 2] + arr[i - 1]);
}
console.log(arr);
