var s = "JavaScript is a powerful language";
var s2 = "powerful";
var ok = 0;
for (var i = 0; i < s.length; i++) {
  if (s[i] === s2[0]) {
    ok = 1;
    for (var j = 0; j < s2.length; j++) {
      if (s[i + j] !== s2[j]) {
        ok = 0;
        break;
      }
    }
  }
}
if (ok === 1) {
  console.log("The string contains the substring " + s2);
} else {
  console.log("The string does not contain the substring " + s2);
}
