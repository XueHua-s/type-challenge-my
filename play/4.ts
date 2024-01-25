// keyof 将对象的key值转换为联合类型字符串
interface Todo {
  title: string;
  desc?: string;
  com?: string;
}
// P继承传入进来对象的key，只能选择T有的key
type Mypick<T, P extends keyof T> = {
  // k从传入的联合字符串类型中遍历取值
  [K in P]: T[K]
}
type MyToco = Mypick<Todo, 'title'>
const myTodo: MyToco = {
  title: '111',
}
