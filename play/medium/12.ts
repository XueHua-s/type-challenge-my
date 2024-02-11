type Chainable<T = {}> = {
  option<K extends string, V>(key: K, value: V): Chainable<{
    // 如果说在原本T中有K一样的成员，就干掉。方便后面合并
    [P in keyof T as P extends K ? never : P]: T[P]
  } & {
    // 把声明的泛型K，通过in取为键，转换为数组的键名P。
    [P in K]: V
  }>,
  get(): T;
}

declare const config: Chainable;

const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get();

// 期望 result 的类型是：
interface Result {
  foo: number;
  name: string;
  bar: {
    value: string;
  };
}
