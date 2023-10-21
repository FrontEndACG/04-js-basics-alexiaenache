var s = "Hello Word";
var s2 = "";
for (var i = 0; i < s.length; i++) {
  if (s[i] !== " ") {
    s2 += s[i];
  }
}
console.log(s2);
