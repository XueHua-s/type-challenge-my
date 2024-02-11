type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];
// 通过拓展运算符与infer类型变量，取出最后一个元素。
type Last<A extends any[]> = A extends [...infer S, infer L] ? L : never;
type tail1 = Last<arr1>; // expected to be 'c'
type tail2 = Last<arr2>; // expected to be 1
