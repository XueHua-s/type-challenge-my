// 题解3: 使用... 拓展运算符（只有可迭代类型可用）
// 取出类型只能给数组用，因为是使用数组类型[]的 ... 拓展运算符
type Concat<A extends any[], B extends any[]> = [
  ...A,
  ...B
]
type Result = Concat<[1], [2]>; // expected to be [1, 2]
const result: Result = [1, 2]
//////////////////////////////////
// 合并对象类型
type A = {
  title: string
}
type B = {
  description: string
}
type AB = A & B
// 使用interface能继承自定义类型的特性
// 不同于type和泛型内的继承特性是条件判断与约束）
interface AB2 extends A {
  description: string
}
const ab: AB2 = {
  title: '你好',
  description: ''
}
export {}
