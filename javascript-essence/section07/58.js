function fn(a, b=1){
    console.log(a, b);
}

fn(1, null)

// 意図して空で渡したい場合はnullを渡す
