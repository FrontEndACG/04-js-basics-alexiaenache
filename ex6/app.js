var s = "Hello Word";
var count = 0;
for (var i = 0; i < s.length; i++) {
  if (s[i] >= "A" && s[i] <= "Z") {
    count++;
  }
}
console.log(count);
