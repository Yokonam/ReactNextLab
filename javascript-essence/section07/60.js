function hello(name) {
  console.log('hello ' + name );
}

function bye() {
  console.log('bye');
}

function fn(cb){
    cb('tom');
}

fn(hello); // hello
fn(bye); // bye

fn(function(name){
  console.log('hello ' + name);
}); // hello


setTimeout(hello, 2000); // hello
