var s = "javascript";
function reverse(s) {
  var s2 = [];
  for (var i = s.length - 1; i >= 0; i--) {
    s2.push(s[i]);
  }
  return s2.join("");
}
var s3 = reverse(s);
console.log(s3);
