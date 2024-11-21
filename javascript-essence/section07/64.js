window.name = 'John';

const person = {
  name: 'Lee',
  hello: function() {
    console.log('hello ' + this.name);
  }
};

person.hello(); // hello Lee

const helloLee = person.hello.bind(person);
function fn(ref) {
  ref();
}

fn(helloLee); // hello Lee


function a() {
  console.log(this.b);
}

const b = a.bind({name: 'b'});

b(); // b
