type MyExclude<T, P> = T extends P ? never : T
// 泛型的类型分发机制。除了泛型以外的基本类型不会触发分发机制
// 这样理解的，如果传入联合类型泛型，类型'a' 不满足就反悔'b'类型
// 泛型里传入了两个参数，T 如果没继承（满足） P的类型，就没类型。
// 不然就子集类型本身
type Result = MyExclude<'a' | 'b' | 'c', 'a' | 'c'>; // 'b' | 'c'
const result: Result = 'b'
