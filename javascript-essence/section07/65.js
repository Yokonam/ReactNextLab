function hello() {
    console.log('hello ' + this.name);

}

const b = hello.bind({name: 'Lee'});
