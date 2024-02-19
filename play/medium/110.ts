// 会使用Uppercase就行
type Capitalize<T> = T extends `${infer F}${infer S}` ? `${Uppercase<F>}${S}` : never;
type capitalized = Capitalize<'hello world'>; // expected to be 'Hello world'
export {}
