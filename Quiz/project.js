console.log("✅ project.js is connected and running!");
//const readline = require("readline-sync");
//const enter =readline.question("enter language ");

const js = {
    data: [
        {
            question: "What is the output of console.log(typeof null)?",
            options: {
                a: "null",
                b: "object",
                c: "undefined",
                d: "boolean",
            },
            correctoption: "b",
        },
        {
            question: "Which of the following is a correct way to declare a JavaScript variable?",
            options: {
                a: "variable name : John",
                b: "v name John",
                c: "let name = 'John'",
                d: "name John"
            },
            correctoption: "c",
        },
        {
            question: "Which method converts a JSON string into a JavaScript object?",
            options: {
                a: "JSON.parse()",
                b: "JSON.stringify()",
                c: "JSON.toObject()",
                d: "parse.JSON()",
            },
            correctoption: "a"
        },
        {
            question: "What is the default value of an uninitialized variable?",
            options: {
                a: "null",
                b: "0",
                c: "undefined",
                d: "false",
            },
            correctoption: "c"
        },
        {
            question: "Which symbol is used for single-line comments in JavaScript?",
            options: {
                a: "<!--",
                b: "#",
                c: "//",
                d: "/*",
            },
            correctoption: "c"
        },
        {
            question: "console.log(2 + 2)",
            options: {
                a: "4",
                b: "22",
                c: "NaN",
                d: "error",
            },
            correctoption: "a"
        },
        {
            question: "What keyword is used to define a constant in JavaScript?",
            options: {
                a: "const",
                b: "constant",
                c: "var",
                d: "let"
            },
            correctoption: "a"
        },
        {
            question: "Which method is used to remove the last element from an array?",
            options: {
                a: "pop()",
                b: "shift()",
                c: "splice()",
                d: "delete()"
            },
            correctoption: "a"
        },
        {
            question: "console.log([1, 2] + [3, 4])",
            options: {
                a: "[1,2,3,4]",
                b: "1,23,4",
                c: "1,23,4",
                d: "1,23,4"
            },
            correctoption: "d"
        },
        {
            question: "What does the == operator do in JavaScript?",
            options: {
                a: "Compares value and type",
                b: "Assigns value",
                c: "Compares value only",
                d: "Always returns false"
            },
            correctoption: "c"
        },
        {
            question: "Which statement is true about let, var, and const?",
            options: {
                a: "var is block-scoped",
                b: "let and const are block-scoped",
                c: "All are function-scoped",
                d: "const can be reassigned"
            },
            correctoption: "b"
        },
        {
            question: "let a = [1, 2, 3]; let b = a; b.push(4); console.log(a);",
            options: {
                a: "[1, 2, 3]",
                b: "[1, 2, 3, 4]",
                c: "[4]",
                d: "undefined"
            },
            correctoption: "b"
        },
        {
            question: "Which built-in method calls a function for each array element?",
            options: {
                a: "forEach()",
                b: "map()",
                c: "filter()",
                d: "reduce()"
            },
            correctoption: "a"
        },
        {
            question: "How can you write an arrow function in JavaScript?",
            options: {
                a: "function => {}",
                b: "(args) => {}",
                c: "=> (args) {}",
                d: "function() => {}"
            },
            correctoption: "b"
        },
        {
            question: "What is a closure in JavaScript?",
            options: {
                a: "A function inside a class",
                b: "A function having access to its outer function scope even after the outer function has returned",
                c: "A loop that never ends",
                d: "A callback function"
            },
            correctoption: "b"
        },
        {
            question: "Which of the following is used to create a Promise?",
            options: {
                a: "new Promise()",
                b: "Promise.create()",
                c: "async Promise()",
                d: "Promise.make()"
            },
            correctoption: "a"
        },
        {
            question: "What does async/await simplify?",
            options: {
                a: "Array handling",
                b: "Asynchronous code",
                c: "CSS styling",
                d: "Class creation"
            },
            correctoption: "b"
        },
        {
            question: "console.log(typeof NaN);",
            options: {
                a: "NaN",
                b: "number",
                c: "undefined",
                d: "object"
            },
            correctoption: "b"
        },
        {
            question: "Which of the following is not a primitive type in JavaScript?",
            options: {
                a: "String",
                b: "Object",
                c: "Boolean",
                d: "Symbol"
            },
            correctoption: "b"
        },
        {
            question: "console.log(0.1 + 0.2 === 0.3);",
            options: {
                a: "true",
                b: "false",
                c: "NaN",
                d: "Error"
            },
            correctoption: "b"
        },
        {
        question: "Which keyword is used to define a function in JavaScript?",
        options: {
            a: "def",
            b: "function",
            c: "func",
            d: "define"
        },
        correctoption: "b"
        },
        {
        question: "What does the 'typeof' operator return for an array?",
        options: {
            a: "array",
            b: "object",
            c: "list",
            d: "undefined"
        },
        correctoption: "b"
        },
        {
        question: "Which of these is NOT a looping structure in JavaScript?",
        options: {
            a: "for",
            b: "while",
            c: "loop",
            d: "do...while"
        },
        correctoption: "c"
        },
        {
        question: "How do you write a strict equality comparison?",
        options: {
            a: "==",
            b: "=",
            c: "===",
            d: "!="
        },
        correctoption: "c"
        },
        {
        question: "Which built-in method returns the characters in a string beginning at the specified location?",
        options: {
            a: "getCharAt()",
            b: "slice()",
            c: "substr()",
            d: "charAt()"
        },
        correctoption: "d"
        },
        {
        question: "Which function is used to schedule code execution after a delay?",
        options: {
            a: "setTimeout()",
            b: "setInterval()",
            c: "delay()",
            d: "wait()"
        },
        correctoption: "a"
        },
        {
        question: "What does DOM stand for?",
        options: {
            a: "Document Object Mapper",
            b: "Document Object Model",
            c: "Data Object Model",
            d: "Data Order Mechanism"
        },
        correctoption: "b"
        },
        {
        question: "Which method joins array elements into a string?",
        options: {
            a: "join()",
            b: "concat()",
            c: "split()",
            d: "push()"
        },
        correctoption: "a"
        },
        {
        question: "What will this return: typeof NaN?",
        options: {
            a: "NaN",
            b: "undefined",
            c: "number",
            d: "object"
        },
        correctoption: "c"
        },
        {
        question: "Which of the following is a falsy value?",
        options: {
            a: "true",
            b: "[]",
            c: "0",
            d: "'false'"
        },
        correctoption: "c"
        },
        {
        question: "What is the scope of a variable declared with let?",
        options: {
            a: "Global",
            b: "Function",
            c: "Block",
            d: "None"
        },
        correctoption: "c"
        },
        {
        question: "Which array method creates a new array with the results of calling a function on every element?",
        options: {
            a: "forEach()",
            b: "map()",
            c: "filter()",
            d: "reduce()"
        },
        correctoption: "b"
        },
        {
        question: "Which JavaScript type is NOT primitive?",
        options: {
            a: "string",
            b: "number",
            c: "object",
            d: "boolean"
        },
        correctoption: "c"
        },
        {
        question: "What will the output be? console.log(typeof undefined);",
        options: {
            a: "null",
            b: "undefined",
            c: "object",
            d: "NaN"
        },
        correctoption: "b"
        },
        {
        question: "What is the purpose of the 'break' statement in loops?",
        options: {
            a: "Skips one iteration",
            b: "Exits the loop entirely",
            c: "Continues the next iteration",
            d: "Restarts the loop"
        },
        correctoption: "b"
        },
        {
        question: "How do you write an if statement in JavaScript?",
        options: {
            a: "if i == 5 then",
            b: "if i = 5",
            c: "if (i == 5)",
            d: "if i = 5 then"
        },
        correctoption: "c"
        },
        {
        question: "How can you add a comment that spans multiple lines in JavaScript?",
        options: {
            a: "// This is a comment",
            b: "/* This is a multi-line comment */",
            c: "# This is a comment",
            d: "<!-- Comment -->"
        },
        correctoption: "b"
        },
        {
        question: "What will this print? console.log(3 + '3');",
        options: {
            a: "6",
            b: "33",
            c: "NaN",
            d: "error"
        },
        correctoption: "b"
        },
        {
        question: "Which method is used to convert a number to a string?",
        options: {
            a: "parseInt()",
            b: "Number()",
            c: "toString()",
            d: "stringify()"
        },
        correctoption: "c"
        },
        {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: {
            a: "onmouseover",
            b: "onchange",
            c: "onclick",
            d: "onsubmit"
        },
        correctoption: "c"
        },
        {
        question: "Which keyword is used to exit a loop in JavaScript?",
        options: {
            a: "stop",
            b: "exit",
            c: "break",
            d: "return"
        },
        correctoption: "c"
        },
        {
        question: "How do you declare an async function?",
        options: {
            a: "function async myFunc()",
            b: "async function myFunc()",
            c: "function myFunc(async)",
            d: "myFunc = async()"
        },
        correctoption: "b"
        },
        {
        question: "What is the correct syntax for a ternary operator?",
        options: {
            a: "condition ? true : false",
            b: "if condition then true else false",
            c: "condition then true else false",
            d: "true if condition else false"
        },
        correctoption: "a"
        },
        {
        question: "Which keyword is used to catch errors in JavaScript?",
        options: {
            a: "catch",
            b: "handle",
            c: "error",
            d: "trap"
        },
        correctoption: "a"
        },
        {
        question: "What is the value of 'null == undefined'?",
        options: {
            a: "true",
            b: "false",
            c: "TypeError",
            d: "undefined"
        },
        correctoption: "a"
        },
        {
        question: "Which operator is used to spread elements in arrays or objects?",
        options: {
            a: ">>",
            b: "...",
            c: "**",
            d: "==="
        },
        correctoption: "b"
        },
        {
        question: "What will this output: console.log([] == false);",
        options: {
            a: "true",
            b: "false",
            c: "TypeError",
            d: "undefined"
        },
        correctoption: "a"
        },
        {
        question: "Which statement creates a new Promise?",
        options: {
            a: "Promise p = create()",
            b: "new Promise(function(resolve, reject) {})",
            c: "create Promise()",
            d: "async.Promise()"
        },
        correctoption: "b"
        },
        {
        question: "How can you prevent event bubbling?",
        options: {
            a: "event.stop()",
            b: "event.cancelBubble = true",
            c: "event.stopPropagation()",
            d: "event.preventBubble()"
        },
        correctoption: "c"
        },
        {
        question: "What is the result of 1 + true in JavaScript?",
        options: {
            a: "1true",
            b: "NaN",
            c: "2",
            d: "true1"
        },
        correctoption: "c"
        },
        {
        question: "Which method returns the index of the first match in a string?",
        options: {
            a: "matchIndex()",
            b: "indexOf()",
            c: "find()",
            d: "searchIndex()"
        },
        correctoption: "b"
        },
        {
        question: "Which function is used to serialize a JavaScript object into a JSON string?",
        options: {
            a: "JSON.encode()",
            b: "JSON.convert()",
            c: "JSON.stringify()",
            d: "JSON.parse()"
        },
        correctoption: "c"
        },
        {
        question: "Which JavaScript object allows you to store key-value pairs?",
        options: {
            a: "Map",
            b: "Set",
            c: "List",
            d: "Array"
        },
        correctoption: "a"
        },
        {
        question: "Which of the following is not a JavaScript data type?",
        options: {
            a: "string",
            b: "number",
            c: "float",
            d: "boolean"
        },
        correctoption: "c"
        },
        {
        question: "Which of the following variables is NOT hoisted?",
        options: {
            a: "var",
            b: "let",
            c: "function",
            d: "all are hoisted"
        },
        correctoption: "b"
        },
        {
        question: "What is a pure function?",
        options: {
            a: "A function that accesses global variables",
            b: "A function with no return value",
            c: "A function with no side effects",
            d: "A function that modifies its arguments"
        },
        correctoption: "c"
        },
        {
        question: "How do you check if a variable is an array?",
        options: {
            a: "typeof variable === 'array'",
            b: "variable instanceof Array",
            c: "Array.check(variable)",
            d: "typeof variable == 'object[]'"
        },
        correctoption: "b"
        },
        {
        question: "What does 'this' refer to in a regular function (not strict mode)?",
        options: {
            a: "The function itself",
            b: "The global object",
            c: "undefined",
            d: "The class"
        },
        correctoption: "b"
        },
        {
        question: "Which method is used to remove the first element of an array?",
        options: {
            a: "pop()",
            b: "shift()",
            c: "splice(0,1)",
            d: "remove()"
        },
        correctoption: "b"
        },
        {
        question: "What will this output: console.log(typeof function() {});",
        options: {
            a: "object",
            b: "function",
            c: "method",
            d: "undefined"
        },
        correctoption: "b"
        },
        {
        question: "What does the 'bind' method do in JavaScript?",
        options: {
            a: "Creates a new function with bound arguments",
            b: "Creates a new function with bound 'this'",
            c: "Links two variables together",
            d: "Locks the function from mutation"
        },
        correctoption: "b"
        },
        {
        question: "What will be the output of 'typeof NaN'?",
        options: {
            a: "NaN",
            b: "undefined",
            c: "number",
            d: "object"
        },
        correctoption: "c"
        },
        {
        question: "What is the result of this expression: '[] == ![]'?",
        options: {
            a: "true",
            b: "false",
            c: "TypeError",
            d: "undefined"
        },
        correctoption: "true"
        },
        {
        question: "Which of the following is a side effect of using 'eval()'?",
        options: {
            a: "Performance improvement",
            b: "Security vulnerability",
            c: "Faster parsing",
            d: "Memory optimization"
        },
        correctoption: "b"
        },
        {
        question: "What does the 'arguments' object represent?",
        options: {
            a: "All parameters passed to a function",
            b: "Only named parameters",
            c: "Global arguments",
            d: "Function return values"
        },
        correctoption: "a"
        },
        {
        question: "What will this log? console.log(typeof typeof 1);",
        options: {
            a: "'number'",
            b: "'string'",
            c: "'undefined'",
            d: "'object'"
        },
        correctoption: "b"
        },
        {
        question: "What is the prototype of an array in JavaScript?",
        options: {
            a: "Object",
            b: "Array",
            c: "Function",
            d: "Array.prototype"
        },
        correctoption: "d"
        },
        {
        question: "Which concept does JavaScript use for inheritance?",
        options: {
            a: "Class-based",
            b: "Prototype-based",
            c: "Object-based",
            d: "Inheritance tree"
        },
        correctoption: "b"
        },
        {
        question: "What does 'use strict' do?",
        options: {
            a: "Allows ES6 syntax",
            b: "Disables global variable declarations",
            c: "Enables strict mode, catching common mistakes",
            d: "Improves runtime speed"
        },
        correctoption: "c"
        },
        {
        question: "What is an Immediately Invoked Function Expression (IIFE)?",
        options: {
            a: "A function that runs after 1 second",
            b: "A function that runs once declared",
            c: "A function that returns another function",
            d: "A class constructor"
        },
        correctoption: "b"
        },
        {
        question: "What does the 'new' keyword do?",
        options: {
            a: "Creates a new primitive",
            b: "Creates a new instance and binds this",
            c: "Creates a constant",
            d: "Clones an object"
        },
        correctoption: "b"
        },
        {
        question: "Which event occurs when the DOM is fully loaded?",
        options: {
            a: "onload",
            b: "DOMContentLoaded",
            c: "window.ready",
            d: "rendered"
        },
        correctoption: "b"
        },
        {
        question: "What is a generator in JavaScript?",
        options: {
            a: "Function that executes once",
            b: "Function that returns a stream",
            c: "Function that can pause and resume",
            d: "Async arrow function"
        },
        correctoption: "c"
        },
        {
        question: "What will this output? console.log(1 < 2 < 3);",
        options: {
            a: "true",
            b: "false",
            c: "NaN",
            d: "SyntaxError"
        },
        correctoption: "a"
        },
        {
        question: "What will this output? console.log(3 > 2 > 1);",
        options: {
            a: "true",
            b: "false",
            c: "NaN",
            d: "Error"
        },
        correctoption: "b"
        },
        {
        question: "What is the role of the event loop?",
        options: {
            a: "Executes all code in parallel",
            b: "Handles promises and async operations",
            c: "Blocks synchronous code",
            d: "Executes infinite loops"
        },
        correctoption: "b"
        },
        {
        question: "How can you deep clone an object?",
        options: {
            a: "Object.assign()",
            b: "spread operator",
            c: "JSON.parse(JSON.stringify(obj))",
            d: "obj.clone()"
        },
        correctoption: "c"
        },
        {
        question: "What is a memory leak?",
        options: {
            a: "When memory usage increases quickly",
            b: "When references are never released",
            c: "When RAM overflows",
            d: "When code fails to compile"
        },
        correctoption: "b"
        },
        {
        question: "What does the `setTimeout` function return?",
        options: {
            a: "Nothing",
            b: "Delay in ms",
            c: "Timer ID",
            d: "Promise"
        },
        correctoption: "c"
        },
        {
        question: "What is hoisting?",
        options: {
            a: "Declaring variables only at top",
            b: "Lifting functions and vars to top scope",
            c: "Event bubbling",
            d: "Asynchronous calling"
        },
        correctoption: "b"
        },
        {
        question: "What will this log: console.log(typeof null)?",
        options: {
            a: "null",
            b: "undefined",
            c: "object",
            d: "string"
        },
        correctoption: "c"
        },
        {
        question: "What is the output of: !!false == false",
        options: {
            a: "true",
            b: "false",
            c: "undefined",
            d: "Error"
        },
        correctoption: "a"
        },
        {
        question: "Which feature allows default parameter values?",
        options: {
            a: "ES5",
            b: "ES6",
            c: "ES3",
            d: "None"
        },
        correctoption: "b"
        },
        {
        question: "How can you make a property non-writable?",
        options: {
            a: "writable: false",
            b: "configurable: false",
            c: "Object.seal",
            d: "makeNonWritable()"
        },
        correctoption: "a"
        },
        {
        question: "How do closures retain access to variables?",
        options: {
            a: "Prototype chain",
            b: "Lexical environment",
            c: "Scope chain",
            d: "Call stack"
        },
        correctoption: "b"
        },
        {
        question: "What’s the output: console.log([] + {})",
        options: {
            a: "'[object Object]'",
            b: "'[]{}'",
            c: "'{}[]'",
            d: "'[object Object][object Object]'"
        },
        correctoption: "a"
        },
        {
        question: "Which value is falsy in JavaScript?",
        options: {
            a: "[]",
            b: "{}",
            c: "''",
            d: "'false'"
        },
        correctoption: "c"
        },
        {
        question: "What does 'Object.freeze' do?",
        options: {
            a: "Makes object immutable",
            b: "Deletes object keys",
            c: "Protects only values",
            d: "Throws an error"
        },
        correctoption: "a"
        },
        {
        question: "What will happen here?\nconst a = [1]; a[10] = 2; console.log(a.length);",
        options: {
            a: "2",
            b: "10",
            c: "11",
            d: "undefined"
        },
        correctoption: "c"
        },
        {
        question: "What is the output of console.log(typeof Symbol())?",
        options: {
            a: "symbol",
            b: "object",
            c: "function",
            d: "string"
        },
        correctoption: "a"
        },
        {
        question: "How to detect if a variable is undefined?",
        options: {
            a: "var == null",
            b: "typeof var === 'undefined'",
            c: "var == undefined",
            d: "typeof var == undefined"
        },
        correctoption: "b"
        },
        {
        question: "Which loop is guaranteed to run at least once?",
        options: {
            a: "for",
            b: "while",
            c: "do...while",
            d: "none"
        },
        correctoption: "c"
        },
        {
        question: "What will this output? console.log('5' - 3);",
        options: {
            a: "'2'",
            b: "2",
            c: "53",
            d: "undefined"
        },
        correctoption: "b"
        },
        {
        question: "Which method copies enumerable properties?",
        options: {
            a: "copy()",
            b: "assign()",
            c: "Object.assign()",
            d: "Object.copy()"
        },
        correctoption: "c"
        },
        {
        question: "What is typeof Infinity?",
        options: {
            a: "undefined",
            b: "number",
            c: "object",
            d: "Infinity"
        },
        correctoption: "b"
        },
        {
        question: "What is tail call optimization?",
        options: {
            a: "Recursion that throws",
            b: "Storing return values on the stack",
            c: "Calling function without growing call stack",
            d: "Rewriting recursive functions"
        },
        correctoption: "c"
        },
        {
        question: "What is the result of typeof new Function()?",
        options: {
            a: "object",
            b: "function",
            c: "string",
            d: "undefined"
        },
        correctoption: "b"
        },
        {
        question: "Which keyword creates a block scope?",
        options: {
            a: "var",
            b: "const",
            c: "let",
            d: "Both b and c"
        },
        correctoption: "d"
        },
        {
        question: "Which operator checks both type and value?",
        options: {
            a: "==",
            b: "===",
            c: "=",
            d: "equals"
        },
        correctoption: "b"
        },
        {
        question: "What is a thunk in JavaScript?",
        options: {
            a: "A special loop",
            b: "A function returning another function",
            c: "An object with deferred computation",
            d: "A memory leak"
        },
        correctoption: "b"
        }
    ]
    };
let i=0;
let count=0;

const question = document.querySelector('#question');
const a        = document.querySelector('#a');
const b        = document.querySelector('#b');
const c        = document.querySelector('#c');
const d        = document.querySelector('#d');
const submit   = document.querySelector('#submit');
const score    = document.querySelector('#score');

const arr=[];
while(arr.length<10){
    const random=Math.floor(Math.random()*100);
    if(!arr.includes(random)){
        arr.push(random);
    }
}

let selectoption = null;

function letcheck(){
    if(i>=10){
        question.textContent="quiz ended";
        score.textContent = `Your score is ${count} out of 10`;
        a.style.display = b.style.display = c.style.display = d.style.display = "none";
        submit.style.display = "none";
        return;
    }

    const current=arr[i];
    const current1=js.data[current];


    question.textContent=`Q${i+1} ${current1.question}`;
    a.textContent=`a) ${current1.options.a}`;
    b.textContent=`b) ${current1.options.b}`;
    c.textContent=`c) ${current1.options.c}`;
    d.textContent=`d) ${current1.options.d}`;

    selectoption=null;
    const options=[a,b,c,d];
    for(let j=0;j<options.length;j++){
        options[j].style.background="";
    }
}

    function answer(option){
        selectoption=option;
        const options=[a,b,c,d];
        for(let j=0;j<options.length;j++){
            options[j].style.background="";
        }
        if('a'===option){
            a.style.background="lightblue";
        }
        if('b'===option){
            b.style.background="lightblue";
        }
        if('c'===option){
            c.style.background="lightblue";
        }
        if('d'===option){
            d.style.background="lightblue";
        }
    }

    a.onclick=()=>answer('a');
    b.onclick=()=>answer('b');
    c.onclick=()=>answer('c');
    d.onclick=()=>answer('d');
    
    submit.onclick = function () {
        if (selectoption === null) {
            alert("Please select an option before submitting.");
            return;
        }

        const current=arr[i];
        if(selectoption===js.data[current].correctoption){
            count++;
        }
        i++;
        letcheck();
    };



letcheck();


