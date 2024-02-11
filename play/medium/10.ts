type Arr = ['1', '2', '3'];
// 通过索引签名获取, 或者通过转成对象再去keyof获取
type TupleToUnion<T extends any[]> = T[number]
type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'
