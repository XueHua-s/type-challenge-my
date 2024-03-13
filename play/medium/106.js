"use strict";
const trimLeft = (str) => {
    return str.trimLeft();
};
const trimed = trimLeft('  Hello World  ');
console.log(trimed);
const eat = (food) => {
    if (food === '甜食') {
        return '长胖';
    }
    else if (food === '蔬菜') {
        return '健康';
    }
    return '没有什么风险';
};
const overFood = eat('火锅');
let b = 1;
