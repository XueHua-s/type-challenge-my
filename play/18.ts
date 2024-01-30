type MyArray = Readonly<['hello', 'word']>
// 要继承 readonly any[]数组，对传入的泛型T进行约束
type Length<T extends readonly any[]> = T['length']
const lengthData: Length<MyArray> = 2
export {}
