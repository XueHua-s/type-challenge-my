// 如果T满足了Promise<infer R>的类型，就返回传入Promise类型中变量R，不然就是泛型本身
type MyAwaited<T> = T extends Promise<infer R> ? R : T
type ExampleType = Promise<string>;
type Result = MyAwaited<ExampleType>; // string
