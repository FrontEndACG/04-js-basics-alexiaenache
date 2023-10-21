var n = 20;
function div(a) {
  if (a === 0 || a === 1) {
    return 1;
  }

  var count = 0;
  for (var i = 1; i <= a / 2; i++) {
    if (a % i == 0) {
      if (i !== a / i) {
        count += 2;
      } else {
        count += 1;
      }
    }
  }
  return count;
}
for (var i = 2; i < n; i++) {
  if (div(i) == 2) {
    console.log(i);
  }
}
