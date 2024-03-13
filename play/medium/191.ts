type Fn = (a: number, b: string) => number;
type MyReturnType<F> = F extends () => infer O ? O : never; 
// 通过Parameters获取函数的参数联合类型+拓展运算符转换为元组
type AppendArgument<F extends (...args: any) => any, B extends any> = (...args: [...Parameters<F>, B]) => MyReturnType<F>;
type Result = AppendArgument<Fn, boolean>;
export {}