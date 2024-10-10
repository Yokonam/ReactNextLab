/**
 * 問題１：
 * 以下のコンソールにはどのような値が表示されるでしょうか？
 */
// console.log("0 == false", 0 == false);
// console.log("0 === false", 0 === false);
// console.log('"false" == false', "false" == false);
// console.log('"0" == 0', "0" == 0);
// console.log('Boolean("0") === false', Boolean("0") === false);
// console.log('Boolean(0) === false', Boolean(0) === false);
// console.log('!Boolean(0) === false', !Boolean(0) === false);
// console.log('-1 == false', -1 == false);
// console.log('!10 === false', !10 === false);

// console.log("0 == false", 0 == false);
// >>true

// console.log("0 === false", 0 === false);
// >>false

// console.log('"false" == false', "false" == false);
// >>false

// console.log('"0" == 0', "0" == 0);
// >>true
// 字列の "0" が数値に変換されて比較されるためtrue

// console.log('Boolean("0") === false', Boolean("0") === false);
// >>false

// console.log('Boolean(0) === false', Boolean(0) === false);
// >>true


/**
 * 問題２：
 * 関数fnの引数numが渡ってこない場合（undefinedまたはnullの場合）のみ、
 * 初期値として-1を設定したいものとします。
 *
 * 以下の関数fnの初期化を適切に書き直してください。
 * ※aには0以上の整数値が渡ってくるものとします。
 */
// let a = 1;

// function fn(num) {
//     num = num || -1;
//     console.log(num);
// }
// fn(a);

function fn(num) {
    if(num === undefined || num === null){
        num = -1;
    }
    console.log(num);
}

fn(undefined);
fn(0);
fn(null);


// 0の場合でも-1が表示されるが問題
// 0の場合は0が表示されるように修正する
//  if(num === undefined || num === null)

/**
 * 問題３：
 * 以下のコードを実行した際にコンソールに
 * 期待の出力を行うような関数greetingを
 * 作成してみてください。
 *
 * greeting("Bob", "hi"); -> 出力結果："hi, Bob"
 * greeting("Bob"); -> 出力結果："hello, Bob"
 *
 */
