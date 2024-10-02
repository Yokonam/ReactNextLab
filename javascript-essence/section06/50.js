const a = {
    prop: 0
}

const b = {
    prop: 0
}

console.log(a === b) // false
console.log(a.prop === b.prop) // true

const c = a

console.log(a === c) // true
