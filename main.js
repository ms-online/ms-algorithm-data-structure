function printAllNumbersThenAllPairSums(numbers) {
  console.log('数字有：')
  numbers.forEach(function (number) {
    console.log(number)
  })

  console.log('每对数字之和为：')
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber)
    })
  })
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5])

//大O符号： O(n^2) 平方时间复杂度
