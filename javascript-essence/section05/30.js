// 即時関数

function a() {
    console.log('called');
}

a();

(function() {
    console.log('called');
}   )();
