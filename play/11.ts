const tuple = ["v"] as const;
// 断言为常量，长度不可变化
// 需要继承类型，传进来的叔祖值得被约束为 number ｜ string ｜ symbol。因为key只能为这三种类型
// 传入的数组值，得满足键值类型，所以得继承PropertyKey[], 并且为只读。加readonly
type TupleToObject<T extends readonly PropertyKey[]> = {
  // 遍历元素中的数字索引的值
  [K in T[number]]?: K
}
// expected { tesla: 'tesla', 'model 3': 'model 3',
// 'model X': 'model X', 'model Y': 'model Y' }
// typeof 将实体数据转换为ts断言类型
type result = TupleToObject<typeof tuple>;
const obj: result = {
  "v": "v"
}
