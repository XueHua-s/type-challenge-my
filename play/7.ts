interface Todo {
  title: string;
  description: string;
}
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}
const article: MyReadonly<Todo> = {
  title: 'title',
  description: 'description'
}
console.log(article);
