type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];
/*
* 题解：泛型T继承了any数组。对传入的泛型，进行了约束。
* First类型赋值中，使用三元表达式，判断T是不是继承了 [] 空数组类型。
* 如果是空数组，肯定是没有值的。如果不是空数组，直接取第0位。
* */
type First<T extends any[]> = T extends [] ? never : T[0]
type First2<T extends any[]> = T extends [infer F, ...infer R] ? F : never
type head1 = First<arr1>; // expected to be 'a'
type head2 = First2<arr2>; // expected to be 3
