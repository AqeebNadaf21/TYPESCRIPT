function greet(name, greeting) {
    return "".concat(greeting || 'Hello', ", ").concat(name, "!");
}
console.log(greet('Jack')); //Hello, Jack
console.log(greet('Jack', 'Hi')); //Hi Jack
