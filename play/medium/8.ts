interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
type MyReadonly2<T, S extends keyof T> = {
  readonly [K in keyof T]: T[K]
} & {
  [K in keyof T as K extends S ? K : never]: T[K]
}
type Todo2 = MyReadonly2<Todo, 'title' | 'description'>
const tododata: Todo2 = {
  title: '123',
  description: '45565',
  completed: true
}
tododata.title = '4444'
// tododata.completed = false
export {}
