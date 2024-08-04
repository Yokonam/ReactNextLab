// ホイスティング
a()

const a = function() {
    let c = 0
  console.log('a');
    d()
  function d(){
    console.log('d');
  }
}

// console.log(b);
// let b = 0
