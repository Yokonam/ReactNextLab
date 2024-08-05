// グローバルスコープとスクリプトスコープ
let a = 0
var b = 0
function c(){
  console.log('c');
}

console.log('a' , a);
console.log('b', b);

window.d = 1
console.log(d);
