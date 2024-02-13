type arr1 = ['a', 'b', 'c', 'd'];
type arr2 = [3, 2, 1];
type Pop<T extends any[]> = T extends [...infer A, infer B] ? A : [];
type Shift<T extends any[]> = T extends [infer B, ...infer A] ? A : [];
type UnShift<T extends any[], I> = T extends [...infer A] ? [I, ...A] : [];
type re1 = Pop<arr1>; // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2>; // expected to be [3, 2]
type re3 = Shift<arr1>;
type re4 = Unshift<arr1, "你好">;
export {}
