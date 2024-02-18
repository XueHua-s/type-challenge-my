interface Cat {
  type: 'cat';
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal';
}

interface Dog {
  type: 'dog';
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer';
  color: 'brown' | 'white' | 'black';
}
// 使用内容粉发规则+继承语句，判断T传入的联合类型内的接口，又没有满足右边的对象规则。
// S传入的字符串为type对象的值。
type LookUp<T, S extends string> = T extends {
  type: S
} ? T : never;
type MyDog = LookUp<Cat | Dog, 'dog'>; // expected to be `Dog`
