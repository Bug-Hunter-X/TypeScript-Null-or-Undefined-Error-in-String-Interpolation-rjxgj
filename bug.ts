function greet(name: string | null): string {
  if (name === null) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

console.log(greet(null)); // Output: Hello, world!
console.log(greet("Alice")); // Output: Hello, Alice!

//Problem:
//The above code has a subtle bug. If you attempt to use a variable that can be null or undefined without checking it first, you will run into issues with the TypeScript compiler.  If the value of the name parameter is null or undefined, the string interpolation will throw a runtime error because it cannot convert null to a string.