//打印数组里面所有成对的组合
const boxes = ['a', 'b', 'c', 'd', 'e']

function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j])
    }
  }
}

logAllPairsOfArray(boxes) //O(n^2) 平方时间复杂度
