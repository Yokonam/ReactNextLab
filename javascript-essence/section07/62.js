window.name = 'John';

const person = {
    name: 'Lee',
    hello: function() {
        console.log('hello ' + this.name);
        a();

        const person = {
            name: 'Tom',
            hello: function() {
                console.log('hello ' + this.name);
                a();
          }
        };
        person.hello();

  }
};

// const ref = person.hello;
// ref()

person.hello(); // hello Lee
function a(){
    console.log('hello ' + this.name);
}
