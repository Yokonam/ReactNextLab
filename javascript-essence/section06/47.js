const a = "hello";

// a = "bye"; Error

const b = {
    prop: "hello"
};


b.prop = "bye";

console.log(a, b.prop);
