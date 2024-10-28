function a() {
  console.log('hello');
}

a.prop = 0;
a.method = function() {
    console.log(
        'hellos'
    );
    }


    a(); // window
    a.method(); // a


    console.log(a.prop); // 0
