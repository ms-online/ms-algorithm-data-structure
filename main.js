//随堂练习（一） ：推导下方函数的大O符号（可以一行一行判断）
function funChallenge(input) {
  let a = 10 //O(1)
  a = 50 + 3 //O(1)

  for (let i = 0; i < input.length; i++) {
    //O(n)
    anotherFunction() //O(n)
    let stranger = true //O(n)
    a++ //O(n)
  }
  return a //O(1)
}

// 大O符号：3 + 4n --> O(3+4n) --> O(n)
