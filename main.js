const nemo = ['nemo']
const everyone = [
  'dory',
  'bruce',
  'marlin',
  'nemo',
  'gill',
  'bloat',
  'nigel',
  'squirt',
  'darla',
  'hank',
]
const large = new Array(100000).fill('nemo')

function findNemo(array) {
  let t0 = performance.now()
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('尼莫找到了！')
    }
  }
  let t1 = performance.now()
  console.log('找到尼莫花费的时间为 ' + (t1 - t0) + ' 毫秒')
}

findNemo(large)
