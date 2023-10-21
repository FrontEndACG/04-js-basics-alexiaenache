var s = "racecar";
var ok = 1;
for (var i = 0; i < s.length / 2; i++) {
  if (s[i] !== s[s.length - 1 - i]) {
    ok = 0;
  }
}
if (ok === 1) {
  console.log("The string " + s + " is a palindrom");
} else {
  console.log("The string " + s + " is not a palindrom");
}
