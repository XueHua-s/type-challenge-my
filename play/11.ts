const tuple = ['model 3', 'model X', 'model Y'] as const;
// 需要继承类型，传进来的叔祖值得被约束为 number ｜ string ｜ symbol。因为key只能为这三种类型
type TupleToObject<T extends readonly PropertyKey[]> = {
  // 通过in遍历+索引签名取出与索引类型符合的值，作为对象的key
  [K in T[number]]?: string
}
// expected { tesla: 'tesla', 'model 3': 'model 3',
// 'model X': 'model X', 'model Y': 'model Y' }
type result = TupleToObject<typeof tuple>;
const obj: result = {
  'model 3': ''
}
