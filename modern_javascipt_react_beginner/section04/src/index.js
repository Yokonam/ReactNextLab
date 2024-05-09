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


// const myProfile = ['名前', 22]

// const [name, age] = myProfile

// const message4 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message4)

// const sayHello = (name= 'ゲスト') => console.log(`hello${name}`)

// sayHello()

// const myProfile ={
//     age: 22
// }

// const {age, name='ゲスト'} = myProfile

// console.log(name)

// const name = 'モンキ'
// const age =22

// const myProfile={
//     name,
//     age
// }

// console.log(myProfile)

// const arr1 = [1,2]
// // console.log(arr1)
// // console.log(...arr1)

// const sumFunc = (num1, num2) => console.log(num1 + num2)

// // sumFunc(arr1[0], arr1[1])
// sumFunc(...arr1)

// const arr2=[1,2,3,4,5]
// const [num1, num2, ...arr3] = arr2

// console.log(num1)
// console.log(num2)
// console.log(arr3)

// const arr4 = [10,20]
// const arr5=[30,40]

// const arr6 = [...arr4]

// arr6[0]=100
// console.log(arr6)
// console.log(arr4)
// console.log(arr6)

// const arr7 = [...arr4, ...arr5]
// console.log(arr7)

// const arr8 = arr4
// arr8[0]=100

// console.log(arr4)


const nameArr = ['モンキ', 'どれみ', '真']

// for(let index = 0; index < nameArr.length; index++){
//     console.log(nameArr[index])
// }

// const nameArr2= nameArr.map((name, index)=>{
// return console.log(`${index+1}${name}`)
// })


// const numArr=[1,2,3,4,5]
// const newNumber = numArr.filter((num)=>{
//     return num %2===1
// })

// console.log(newNumber)

// const name = nameArr.map((name) =>{
//     if (name ==='モンキ'){
//        return name
//     } else{
//         return `${name}さん`
//     }
// })

// console.log(name)


// const val1 = 1 > 0 ? 'true': 'false'

// console.log(val1)

// const num = 1300

// console.log(num.toLocaleString())


// const formattedNum = typeof num === 'number' ? num.toLocaleString() :'数値入れて'

// console.log(formattedNum)

// const sum = (num1, num2)=>{
//     return num1 + num2 >100 ? '100以上': '以下'
// }

// console.log(sum(100,1))


// || は左側がtruthyの時その時点で返却する
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// && は左側がfalsyの時その時点で返却する
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
