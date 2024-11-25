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


function a(name) {
  console.log('hello ' + name);
}

const b = a.bind(null, 'tim');

b('tom'); // hello tim
