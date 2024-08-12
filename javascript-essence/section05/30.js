// 即時関数

function a() {
    console.log('called');
}

a();

let c = (function() {
    let privateVal = 0;
    let publicVal = 10;

    function privateFn() {
        console.log('privateFn is called');
    }

    function publicFn() {
        console.log('publicFn is called' + privateVal++);
    }
    console.log('called');

    return {
        publicVal,
        publicFn
    };

}   )();

console.log(c.publicVal);
c.publicFn();
// called
