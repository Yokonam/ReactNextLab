function fn(){
    let a = arguments[0];
    let b = arguments[1];
    console.log(arguments)
    console.log(a, b);
    return a
}

let c = fn(1, undefined);
console.log(c);
// 意図して空で渡したい場合はnullを渡す
