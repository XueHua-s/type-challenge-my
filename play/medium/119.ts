type ReplaceAll<S extends string, A extends  string, B extends string> = A extends '' ? S : S extends `${infer F}${A}${infer T}` ? `${F}${B}${ReplaceAll<T, A, B>}` : S;
type replaced = ReplaceAll<'t y p e s', ' ', ''>; // 期望是 'types'
export {}
