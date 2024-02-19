type Trim<T extends string> = T extends `${' ' | '\n' | '\t'}${infer S}${' ' | '\n' | '\t'}` ? S : T;
type trimed = Trim<'  Hello World  '>; // expected to be 'Hello World'
export {}
