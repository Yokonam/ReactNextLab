/**
 * 問題：
 * 以下の操作を行った際にコンソールで表示される
 * 値はどうなるでしょうか？結果を考えてみてください。
 */
let val = 0;
let val2 = val;
val2 = 1;

// console.log(val); // 問題１
// 0
// console.log(val);

let obj = {
    prop1: 10
}
const obj2 = obj;
obj2.prop1 = 9;

// console.log(obj); // 問題２
// { prop1: 9 }
// console.log(obj);
function fn1(arg) {
    arg.prop2 = 8;
    return arg;
}
let obj3 = fn1(obj2);

// console.log(obj); // 問題３
// { prop1: 9, prop2: 8 }
// console.log(obj);
function fn2(arg) {
    arg = {};
    return arg;
}
const obj4 = fn2(obj); // 問題４

// console.log(obj); // 問題４
// { prop1: 9, prop2: 8 }
// console.log(obj);
