interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
type MyOmit<T, S extends keyof T> = {
  [K in keyof T as K extends S ? never : K]: T[K]
}
type TodoPreview = MyOmit<Todo, 'description' | 'title'>;

const todo: TodoPreview = {
  completed: false,
};
