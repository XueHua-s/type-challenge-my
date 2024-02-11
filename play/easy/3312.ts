// 对infer类型变量的用法。...遍历剩余函数参数, 给剩余函数参数指向->类型变量(自定义泛型)，然后返回声明的类型变量
type MyParameters<F extends (...args: any[]) => any> = F extends (...args: infer P) => any ? P : never;
type Foo = (arg1: string, arg2: number) => void

// [arg1: string, arg2: number]
// typeof语句将js实例代码转换为类型
// keyof将对象的键取出来为联合字符串类型
type FunctionParamsType = MyParameters<Foo>;
type ObjT<T extends readonly PropertyKey[]> = {
  // 通过索引签名，取出数组的类型值为键值对
  [K in T[number]]: K
}
type Keys = ObjT<FunctionParamsType>
const keys: Keys = {
  'aaa': '123'
}
