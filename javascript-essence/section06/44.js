function hello(name = 'Tom') {
    // name = name || 'Tom';
    console.log('Hello ' + name);
}

hello('Tom');

let name

name && hello(name);
