function hello(name, name2) {
    console.log('hello ' + name + name2);

}

const lee = {name: 'Lee'};

const b = hello.bind(lee);

b(); // hello Lee

hello.apply(lee, ['tom', 'bob']); // hello Lee
hello.call(lee, 'tom', 'bob'); // hello Lee

const array = [1, 2, 3, 4, 5];

// const max = Math.max.apply(null, array);
// console.log(max); // 5

// const result = Math.max.apply(null, array); // 5

// console.log(result)
const result = Math.max(...array); // 5
console.log(result)
