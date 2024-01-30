// keyof 将对象的key值转换为联合类型字符串
interface Todo {
  title: string;
  desc: string;
  com: string;
}
// P继承传入进来对象的key，只能选择T有的key
// keyof讲传入的接口key给序列化为可遍历，
type Mypick<T, P extends keyof T> = {
  [K in P]: T[K]
}
type MyToco = Mypick<Todo, 'title' | 'desc'>
const myTodo: MyToco = {
  title: '123',
  desc: '123'
}
export {}
