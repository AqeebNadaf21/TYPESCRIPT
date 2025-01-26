function greet(name: string, greeting?: string):string {
    return`${greeting || 'Hello'}, ${name}!`;
}
console.log(greet('Jack')); //Hello, Jack
console.log(greet('Jack', 'Hi')); //Hi Jack


