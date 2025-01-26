function greet2(name?: string, greeting: string = 'Good Morning'):string {
    return`${greeting}, ${name}!`;
}
console.log(greet2('Jack')); //Hello, Jack
console.log(greet2('Jack', 'Hi')); //Hi Jack


