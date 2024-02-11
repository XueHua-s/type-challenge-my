type Unshift<A extends any[], I> = [I, ...A];
type Result = Unshift<[1, 2], 0>; // [0, 1, 2,]
const result: Result = [0, 1, 2]
console.log(result);
