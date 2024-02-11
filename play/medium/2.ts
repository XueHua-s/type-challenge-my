const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};
// 通过infer类型比变量拿出函数返回值
type MyReturnType<T extends Function> = T extends (...args: any[]) => infer R ? R : never;
type a = MyReturnType<typeof fn>; // 应推导出 "1 | 2"
export {}
