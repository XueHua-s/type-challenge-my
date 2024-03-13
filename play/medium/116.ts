type Replace<T extends string, F extends string, S extends  string> = F extends ''
  ? S : T extends `${infer A}${F}${infer B}` // 利用泛型声明进行模糊匹配
    ? `${A}${S}${B}` : T
type replaced = Replace<'types are fun!', 'fun', 'awesome'>; // 期望是 'types are awesome!'
