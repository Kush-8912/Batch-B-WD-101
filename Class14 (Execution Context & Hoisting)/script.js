// console.log(a) // undefined
// console.log(sum)
// console.log(sum(120, 60))  // 180

console.log(sumExpr)
console.log(sumExpr(10, 20))

var a = 20
console.log(a) // 20
var b = 14

function sum ( num1, num2){
  var ans = num1+num2
  return ans
}

var sumExpr = function(num1, num2){
  var ans = num1+num2
  return ans
}
var sum1 = sum(100, 300)
console.log(sum1) // 400
var sum2 = sum(a, b)
console.log(sum2) // 34

