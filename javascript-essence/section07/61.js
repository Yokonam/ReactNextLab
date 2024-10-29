const person = {
    name: 'Lee',
    hello() {
        console.log('hello ' + this.name);
    }
};

person.hello(); // hello Lee
