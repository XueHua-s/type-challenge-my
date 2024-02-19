// 排序，正序
const sortArry = [
  1, 2, 3, 4, 8, 7, 6, 5
]
const sortArryOver = sortArry.sort((a, b) => a - b);
console.log(sortArryOver);
// 一维去重
const deWeightArry = [1, 2, 3, 3, 4, 4]
const deWeightArryOver = Array.from(new Set(deWeightArry));
console.log(deWeightArryOver);
// 二维去重(根据id去重, 预期结果只有一个对象)
const mapDeWeight = [
  {
    id: 1,
    name: '小明'
  },
  {
    id: 1,
    name: '小红'
  },
  {
    id: 1,
    name: '小王'
  }
]
const mapDeWeightOver = mapDeWeight.reduce((prev, item) => {
  if (!prev.hash[item.id]) {
    prev.hash[item.id] = true
    prev.arr.push(item)
  }
  return prev
}, {
  hash: {},
  arr: []
}).arr
console.log(mapDeWeightOver);
