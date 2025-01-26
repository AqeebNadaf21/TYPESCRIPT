function greet2(name, greeting) {
    if (greeting === void 0) { greeting = 'Good Morning'; }
    return "".concat(greeting, ", ").concat(name, "!");
}
console.log(greet2('Jack')); //Hello, Jack
console.log(greet2('Jack', 'Hi')); //Hi Jack
