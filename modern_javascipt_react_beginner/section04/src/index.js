// var val1 = 'var変数';
// console.log(val1);


// val1 = 'var変数を上書き';
// console.log(val1);

// var val1 = 'var変数を再宣言';
// console.log(val1);

// let val2 = 'let変数';
// console.log(val2);

// val2 = 'let変数を上書き';
// console.log(val2);

// let val2 = 'let変数を再宣言';

// const val3 = 'const変数';
// console.log(val3);

// val3 = 'const変数を上書き';
// const val3 = 'const変数を再宣言';

// const val4 = {
//   name: '名前',
//   age: 22,
// };

// console.log(val4);

// val4.name = '名前変更';
// val4.address = '住所';
// console.log(val4);

// const val5 = ['dog', 'cat'];
// val5[0] = 'bird';
// val5.push('monkey');
// console.log(val5);

// const name = '名前';
// const age = 22;

// const message1 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message1);

// 従来
// function func1(str) {
//   return str;
// }
// console.log(func1('func1です'));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2('func2です'));


// const sum = (num1, num2) => num1 + num2;

// console.log(sum(1,2))

// const myProfile = {
//   name: '名前',
//   age: '22'
// }

// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1)

// const {name, age} = myProfile
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2)


const myProfile = ['名前', 22]

const [name, age] = myProfile

const message4 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message4)
