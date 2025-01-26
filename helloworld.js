function Hello(value) {
    return "Hello, Good Morning" + value;
}
var res = Hello("Jack");
console.log(res); // Hello, Good Morning jack
var s1 = 'You are the creater of your destiny';
var s2 = "Pwerful people come from powerful places";
console.log(s1);
console.log(s2);
var b1 = true;
var b2 = false;
var b3;
console.log(b1);
console.log(b2);
function test() {
    return b3 = true;
    console.log(b3); // o/p   
    return b3 = false;
}
console.log(test()); // o/p  true
