interface Todo {
  title: string;
  description: string;
}
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}
// const article: Readonly<Todo> = {
const article: MyReadonly<Todo> = {
  title: '123',
  description: '444'
}
// article.title = '123'
