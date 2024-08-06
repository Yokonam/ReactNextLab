// 関数スコープとブロックスコープ

function a(){
    let b = 0;
    console.log(b);
}


a()

{
    let c = 1;
    const d = function(){
        console.log('d');
    }
}


d()
console.log(c);
