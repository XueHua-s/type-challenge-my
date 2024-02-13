const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});
type MyAwaited<T> = T extends Promise<infer A> ? A : T;
const PromiseAll: <T extends any[]>(list: T) => Promise<{
  [P in keyof T]: MyAwaited<T[P]>
}> = (list) => Promise.all(list);
// expected to be `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const);