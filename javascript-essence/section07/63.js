window.name = 'John';

const person = {
  name: 'Lee',
  hello: function() {
    console.log('hello ' + this.name);
  }
};

person.hello(); // hello Lee

function fn(ref) {
  ref();
}

fn(person.hello); // hello John
