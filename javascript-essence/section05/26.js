// スコープチェーン
let a = 2;

function fn1() {
    // let a = 1;
    function fn2() {
        // let a = 3;
        if(true) {
     console.log(a);
        }
    }
    fn2();
}

fn1();
