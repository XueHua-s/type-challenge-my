// 类型一直去除到参数左边没有空格
type TrimLeft<T extends string> = T extends `${' ' | '\n' | '\t'}${infer S}` ? TrimLeft<S> : T;
const trimLeft = <T extends string>(str: T): TrimLeft<T> => {
  return str.trimLeft() as TrimLeft<T>
}
const trimed = trimLeft('  Hello World  ');
console.log(trimed);
// 应推导出 'Hello World  '
type EatOver<T extends string> = T extends '甜食' ? '长胖' : T extends '蔬菜' ? '健康' : '没有什么风险';
const eat = <T extends string>(food: T): EatOver<T> => {
  if (food === '甜食') {
    return '长胖' as EatOver<T>
  } else if (food === '蔬菜') {
    return '健康' as EatOver<T>
  }
  return '没有什么风险' as EatOver<T>
}
const overFood = eat('火锅')
let b = 1;

