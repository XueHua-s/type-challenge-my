type MyEqual<A, B> = A extends B ? true : false;
// 通过...拓展运算符与infer类型变量，取出泛型数组第一个，与往后的。再配合相等类型+递归类型
type Includes<A extends readonly any[], B extends any> = A extends [infer F, ... infer R]
  ? (MyEqual<F, B> extends true ? true : Includes<R, B>) : false;
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], '1111'>; // expected to be `false`
export {}
