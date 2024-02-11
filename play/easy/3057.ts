// 使用拓展运算符遍历类型。
type Push<A extends any[], I> = [...A, I];
type Result = Push<[1, 2], '3'>; // [1, 2, '3']
const result: Result = [1, 2, "3"];
export {}
