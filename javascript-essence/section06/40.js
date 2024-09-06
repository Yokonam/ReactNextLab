let a = 0;

function printTypeAndValue(value) {
    console.log(typeof value, value);
}

printTypeAndValue(a);

let b = "1" + a;
printTypeAndValue(b);

let c = 15 - a;

printTypeAndValue(c);

let d = c - null;

printTypeAndValue(d);

let e = c - true

printTypeAndValue(e);
