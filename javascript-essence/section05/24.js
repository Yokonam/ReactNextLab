// レキシカルスコープ
let a = 2;

function fn1() {
    let b = 1;
    console.log(a);
    function fn2() {
        let c = 3;
        console.log(b);
    }
    fn2();
}

fn1();
