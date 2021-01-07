function sayHello(array) {
  for (let i = 0; i < array.length; i++) {
    console.log('Hello')
  }
}

sayHello([1, 2, 3, 4, 5]) //O(1) 常数空间复杂度

function arrayOfHiTiems(n) {
  var hiArray = []

  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi'
  }
  console.log(hiArray)
}

arrayOfHiTiems(6) //O(n) 线性空间复杂度
