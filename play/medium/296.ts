type Permutation<T, C = TemplateStringsArray> = [T] extends [never] ? [] :
// 内容分发 
T extends any ? [T, ...Permutation<Exclude<C, T>>] : never;
type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']