// プリミティブ型（Primitive Types）

let a = 10;
let b = a;
b = 20;

console.log(a); // 10 (aの値は変更されない)
console.log(b); // 20

//オブジェクト型（Objects）
let obj1 = { name: "Alice" };
let obj2 = obj1;

obj2.name = "Bob";

console.log(obj1.name); // "Bob" (obj1も影響を受ける)
console.log(obj2.name); // "Bob"
