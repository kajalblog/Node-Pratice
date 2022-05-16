function abc() {
    return "kajal";
}
console.log(abc());

function add(a, b) {
    return a + b;
}
var sum = function data(x, y) {
    return x + y;
}
console.log(sum(40, 40))
// console.log(add(10, 20));

// function exp(add) {
//     console.log(add(20, 20));
// }
// exp(add);
function exp(add) {
    console.log(add(20, 30));
}
exp(function add(a, b) {
    return a + b;
})