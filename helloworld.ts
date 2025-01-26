function Hello(value: string) : string {
    return "Hello, Good Morning" + value;
}
    
let res = Hello("Jack");
console.log(res); // Hello, Good Morning jack



var s1 : string = 'You are the creater of your destiny';
var s2 : string = `Pwerful people come from powerful places`;

console.log(s1);
console.log(s2);



var b1 : boolean = true;
var b2 : boolean = false;
var b3 : boolean;

console.log(b1);
console.log(b2);

function test() {
    return b3 = true;
    console.log(b3); // o/p   
    return  b3 = false;
    
}
console.log(test()); // o/p  true

