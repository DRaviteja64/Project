const C = {
  data: [
    {
      question: "Which of the following is a valid C variable name?",
      options: {
        a: "int",
        b: "float_num",
        c: "2value",
        d: "value#"
      },
      correctoption: "b"
    },
    {
      question: "What is the output of: printf(\"%d\", 10 + 20);",
      options: {
        a: "1020",
        b: "30",
        c: "10 + 20",
        d: "Error"
      },
      correctoption: "b"
    },
    {
      question: "C language was developed by:",
      options: {
        a: "Bjarne Stroustrup",
        b: "Dennis Ritchie",
        c: "James Gosling",
        d: "Ken Thompson"
      },
      correctoption: "b"
    },
    {
      question: "Which of the following is the correct operator to compare two values?",
      options: {
        a: "=",
        b: "!=",
        c: "==",
        d: "equals"
      },
      correctoption: "c"
    },
    {
      question: "What is the size of `int` in a 32-bit C compiler?",
      options: {
        a: "2 bytes",
        b: "4 bytes",
        c: "8 bytes",
        d: "Depends on system"
      },
      correctoption: "b"
    },
    {
      question: "Which of the following is used to take input from the user in C?",
      options: {
        a: "scanf()",
        b: "print()",
        c: "gets()",
        d: "input()"
      },
      correctoption: "a"
    },
    {
      question: "What will be the output of `5/2` in C?",
      options: {
        a: "2.5",
        b: "2",
        c: "2.0",
        d: "Error"
      },
      correctoption: "b"
    },
    {
      question: "Which of the following is not a loop in C?",
      options: {
        a: "for",
        b: "while",
        c: "loop",
        d: "do...while"
      },
      correctoption: "c"
    },
    {
      question: "Which header file is needed for `printf()` and `scanf()`?",
      options: {
        a: "string.h",
        b: "stdlib.h",
        c: "stdio.h",
        d: "conio.h"
      },
      correctoption: "c"
    },
    {
      question: "Which function is used to find the length of a string in C?",
      options: {
        a: "strlen()",
        b: "strlength()",
        c: "size()",
        d: "len()"
      },
      correctoption: "a"
    },
    {
      question: "What is the default return type of a function in C if not specified?",
      options: {
        a: "int",
        b: "float",
        c: "void",
        d: "char"
      },
      correctoption: "a"
    },
    {
      question: "What will `sizeof(char)` return?",
      options: {
        a: "2",
        b: "4",
        c: "1",
        d: "Depends on OS"
      },
      correctoption: "c"
    },
    {
      question: "Which of the following is used to define constants in C?",
      options: {
        a: "#define",
        b: "const",
        c: "constant",
        d: "Both a and b"
      },
      correctoption: "d"
    },
    {
      question: "What is the keyword to declare a structure?",
      options: {
        a: "struct",
        b: "structure",
        c: "record",
        d: "define"
      },
      correctoption: "a"
    },
    {
      question: "Which format specifier is used for `float`?",
      options: {
        a: "%d",
        b: "%c",
        c: "%f",
        d: "%s"
      },
      correctoption: "c"
    },
    {
      question: "Which loop is guaranteed to execute at least once?",
      options: {
        a: "for",
        b: "while",
        c: "do...while",
        d: "None"
      },
      correctoption: "c"
    },
    {
      question: "What does `break` keyword do in C?",
      options: {
        a: "Pauses the loop",
        b: "Restarts the loop",
        c: "Exits from the loop",
        d: "Skips current iteration"
      },
      correctoption: "c"
    },
    {
      question: "Which operator is used to access structure members?",
      options: {
        a: ".",
        b: "->",
        c: "&",
        d: "Both a and b"
      },
      correctoption: "d"
    },
    {
      question: "Which memory allocation function is used to allocate zero-initialized memory?",
      options: {
        a: "malloc()",
        b: "calloc()",
        c: "realloc()",
        d: "free()"
      },
      correctoption: "b"
    },
    {
      question: "Which keyword is used to exit a function and return to caller?",
      options: {
        a: "break",
        b: "exit",
        c: "return",
        d: "continue"
      },
      correctoption: "c"
    },
    
    {
        question: "What does the `continue` keyword do in a loop?",
        options: {
        a: "Stops the loop",
        b: "Skips the current iteration",
        c: "Exits the program",
        d: "None"
        },
        correctoption: "b"
    },
    {
        question: "Which of the following is not a valid storage class in C?",
        options: {
        a: "auto",
        b: "register",
        c: "static",
        d: "private"
        },
        correctoption: "d"
    },
    {
        question: "What is the output of `printf(\"%d\", 5 == 5);`?",
        options: {
        a: "0",
        b: "1",
        c: "true",
        d: "Error"
        },
        correctoption: "b"
    },
    {
        question: "Which function is used to allocate memory dynamically?",
        options: {
        a: "alloc()",
        b: "calloc()",
        c: "memalloc()",
        d: "stralloc()"
        },
        correctoption: "b"
    },
    {
        question: "What will be the value of `x` after `int x = 5 / 2;`?",
        options: {
        a: "2.5",
        b: "2",
        c: "2.0",
        d: "Error"
        },
        correctoption: "b"
    },
    {
        question: "What is the keyword to prevent modification of a variable?",
        options: {
        a: "fixed",
        b: "const",
        c: "static",
        d: "define"
        },
        correctoption: "b"
    },
    {
        question: "Which of the following is not a relational operator in C?",
        options: {
        a: "<=",
        b: "!=",
        c: "==",
        d: "==="
        },
        correctoption: "d"
    },
    {
        question: "What is the output of `printf(\"%c\", 65);`?",
        options: {
        a: "A",
        b: "65",
        c: "Error",
        d: "a"
        },
        correctoption: "a"
    },
    {
        question: "Which operator has the highest precedence in C?",
        options: {
        a: "++",
        b: "*",
        c: "&&",
        d: "="
        },
        correctoption: "a"
    },
    {
        question: "Which of the following is a preprocessor directive?",
        options: {
        a: "if",
        b: "include",
        c: "#include",
        d: "#define"
        },
        correctoption: "c"
    },
    {
        question: "Which data type is used to store a single character?",
        options: {
        a: "char",
        b: "int",
        c: "float",
        d: "string"
        },
        correctoption: "a"
    },
    {
        question: "Which loop is best when the number of iterations is known?",
        options: {
        a: "while",
        b: "do...while",
        c: "for",
        d: "goto"
        },
        correctoption: "c"
    },
    {
        question: "How do you declare a pointer in C?",
        options: {
        a: "int *ptr;",
        b: "int ptr*;",
        c: "*int ptr;",
        d: "ptr int*;"
        },
        correctoption: "a"
    },
    {
        question: "What does `NULL` represent in C?",
        options: {
        a: "0",
        b: "Uninitialized variable",
        c: "No value",
        d: "A memory address that points to nothing"
        },
        correctoption: "d"
    },
    {
        question: "What is a correct format for an array declaration?",
        options: {
        a: "int arr[];",
        b: "int arr[10];",
        c: "array int[10];",
        d: "int[] arr;"
        },
        correctoption: "b"
    },
    {
        question: "Which function is used to copy strings in C?",
        options: {
        a: "copystr()",
        b: "strcopy()",
        c: "strcpy()",
        d: "stringcpy()"
        },
        correctoption: "c"
    },
    {
        question: "What does `%p` format specifier print?",
        options: {
        a: "percentage",
        b: "pointer address",
        c: "char",
        d: "float"
        },
        correctoption: "b"
    },
    {
        question: "Which symbol is used for conditional compilation?",
        options: {
        a: "#ifdef",
        b: "#if",
        c: "#endif",
        d: "All of the above"
        },
        correctoption: "d"
    },
    {
        question: "Which of these is not a valid pointer operation?",
        options: {
        a: "ptr++;",
        b: "*ptr = 10;",
        c: "ptr = ptr + 2;",
        d: "ptr ** 2;"
        },
        correctoption: "d"
    },
    {
        question: "Which keyword is used to define an enumeration?",
        options: {
        a: "enum",
        b: "enumerate",
        c: "define",
        d: "constant"
        },
        correctoption: "a"
    },
  {
    question: "Who is the creator of C language?",
    options: {
      a: "James Gosling",
      b: "Dennis Ritchie",
      c: "Bjarne Stroustrup",
      d: "Guido van Rossum"
    },
    correctoption: "b"
  },
  {
    question: "Which of the following is a valid C variable name?",
    options: {
      a: "int",
      b: "float",
      c: "my_var",
      d: "2value"
    },
    correctoption: "c"
  },
  {
    question: "Which symbol is used to end a statement in C?",
    options: {
      a: ":",
      b: ";",
      c: ".",
      d: "!"
    },
    correctoption: "b"
  },
  {
    question: "C language is a ______ language.",
    options: {
      a: "High-level",
      b: "Low-level",
      c: "Middle-level",
      d: "Object-oriented"
    },
    correctoption: "c"
  },
  {
    question: "Which one is a keyword in C?",
    options: {
      a: "main",
      b: "int",
      c: "printf",
      d: "scanf"
    },
    correctoption: "b"
  },
  {
    question: "Which of these is used to take input in C?",
    options: {
      a: "cin",
      b: "input()",
      c: "scanf()",
      d: "read()"
    },
    correctoption: "c"
  },
  {
    question: "Which of these is used to print output in C?",
    options: {
      a: "echo",
      b: "print()",
      c: "printf()",
      d: "cout"
    },
    correctoption: "c"
  },
  {
    question: "Which header file is required for printf and scanf?",
    options: {
      a: "conio.h",
      b: "string.h",
      c: "stdio.h",
      d: "math.h"
    },
    correctoption: "c"
  },
  {
    question: "What is the file extension of a C program?",
    options: {
      a: ".java",
      b: ".py",
      c: ".cpp",
      d: ".c"
    },
    correctoption: "d"
  },
  {
    question: "Which loop checks the condition after execution?",
    options: {
      a: "for",
      b: "while",
      c: "do...while",
      d: "goto"
    },
    correctoption: "c"
  },
  {
    question: "What is the default return type of `main()` in C?",
    options: {
      a: "void",
      b: "float",
      c: "int",
      d: "char"
    },
    correctoption: "c"
  },
  {
    question: "Which operator is used for AND operation?",
    options: {
      a: "&&",
      b: "||",
      c: "!",
      d: "&|"
    },
    correctoption: "a"
  },
  {
    question: "Which operator is used for OR operation?",
    options: {
      a: "&&",
      b: "||",
      c: "!",
      d: "&"
    },
    correctoption: "b"
  },
  {
    question: "Which data type is used to store decimal numbers?",
    options: {
      a: "int",
      b: "float",
      c: "char",
      d: "void"
    },
    correctoption: "b"
  },
  {
    question: "Which keyword is used to create a constant in C?",
    options: {
      a: "fixed",
      b: "immutable",
      c: "const",
      d: "permanent"
    },
    correctoption: "c"
  },
  {
    question: "Which character is used to escape in strings?",
    options: {
      a: "/",
      b: "#",
      c: "\\",
      d: "$"
    },
    correctoption: "c"
  },
  {
    question: "Which of the following is a loop construct in C?",
    options: {
      a: "repeat",
      b: "next",
      c: "for",
      d: "select"
    },
    correctoption: "c"
  },
  {
    question: "What is the range of `char` data type?",
    options: {
      a: "0 to 255",
      b: "-128 to 127",
      c: "-256 to 255",
      d: "0 to 127"
    },
    correctoption: "b"
  },
  {
    question: "How do you define a single-line comment in C?",
    options: {
      a: "// comment",
      b: "# comment",
      c: "-- comment",
      d: "/* comment */"
    },
    correctoption: "a"
  },
  {
    question: "Which function ends the program in C?",
    options: {
      a: "break()",
      b: "stop()",
      c: "return",
      d: "end()"
    },
    correctoption: "c"
  },
    {
      question: "What is the output of printf(\"%d\", sizeof('A'));?",
      options: {
        a: "1",
        b: "2",
        c: "4",
        d: "8"
      },
      correctoption: "c"
    },
    {
      question: "Which of the following is not a valid storage class in C?",
      options: {
        a: "static",
        b: "extern",
        c: "volatile",
        d: "register"
      },
      correctoption: "c"
    },
    {
      question: "What is the default return type of a function in C if not specified?",
      options: {
        a: "int",
        b: "void",
        c: "float",
        d: "double"
      },
      correctoption: "a"
    },
    {
      question: "Which function is used to dynamically allocate memory in C?",
      options: {
        a: "alloc()",
        b: "calloc()",
        c: "memory()",
        d: "new()"
      },
      correctoption: "b"
    },
    {
      question: "Which header file is required for `malloc()`?",
      options: {
        a: "stdlib.h",
        b: "stdio.h",
        c: "malloc.h",
        d: "string.h"
      },
      correctoption: "a"
    },
    {
      question: "What does the `#define` preprocessor directive do?",
      options: {
        a: "Defines a function",
        b: "Defines a macro",
        c: "Includes a file",
        d: "Creates a variable"
      },
      correctoption: "b"
    },
    {
      question: "Which of the following is used to read a single character from the user?",
      options: {
        a: "scanf()",
        b: "getchar()",
        c: "gets()",
        d: "fgets()"
      },
      correctoption: "b"
    },
    {
      question: "What is the output of: int a = 5; printf(\"%d\", a++);",
      options: {
        a: "6",
        b: "5",
        c: "Error",
        d: "Undefined"
      },
      correctoption: "b"
    },
    {
      question: "Which operator has the highest precedence in C?",
      options: {
        a: "++",
        b: "*",
        c: "=",
        d: "&&"
      },
      correctoption: "a"
    },
    {
      question: "What is a correct way to declare a pointer in C?",
      options: {
        a: "int ptr;",
        b: "ptr int*;",
        c: "int *ptr;",
        d: "pointer int;"
      },
      correctoption: "c"
    },
    {
      question: "What is the keyword used to prevent modification of a variable?",
      options: {
        a: "immutable",
        b: "volatile",
        c: "static",
        d: "const"
      },
      correctoption: "d"
    },
    {
      question: "Which loop is guaranteed to execute at least once?",
      options: {
        a: "for",
        b: "while",
        c: "do-while",
        d: "none"
      },
      correctoption: "c"
    },
    {
      question: "Which of the following is a valid string declaration?",
      options: {
        a: "char str[] = \"Hello\";",
        b: "string str = 'Hello';",
        c: "char str = 'Hello';",
        d: "char str(10);"
      },
      correctoption: "a"
    },
    {
      question: "How to comment a single line in C?",
      options: {
        a: "# This is a comment",
        b: "// This is a comment",
        c: "-- This is a comment",
        d: "/* This is a comment */"
      },
      correctoption: "b"
    },
    {
      question: "What is the correct format to access the value pointed by a pointer?",
      options: {
        a: "*pointer",
        b: "&pointer",
        c: "pointer&",
        d: "pointer*"
      },
      correctoption: "a"
    },
    {
      question: "What will `sizeof(int)` return on most 32-bit systems?",
      options: {
        a: "2",
        b: "4",
        c: "8",
        d: "1"
      },
      correctoption: "b"
    },
    {
      question: "Which operator is used to get the address of a variable?",
      options: {
        a: "*",
        b: "#",
        c: "&",
        d: "@"
      },
      correctoption: "c"
    },
    {
      question: "What is the purpose of `fflush(stdin);`?",
      options: {
        a: "Flush file buffer",
        b: "Clear screen",
        c: "Clear input buffer",
        d: "Close file"
      },
      correctoption: "c"
    },
    {
      question: "Which data type can store a single character?",
      options: {
        a: "int",
        b: "char",
        c: "float",
        d: "string"
      },
      correctoption: "b"
    },
    {
      question: "Which of the following is used to terminate a C statement?",
      options: {
        a: ":",
        b: ",",
        c: ";",
        d: "."
      },
      correctoption: "c"
    },
  {
    question: "What is the correct syntax to declare an array of 10 integers?",
    options: {
      a: "int arr(10);",
      b: "int arr[10];",
      c: "int arr = 10;",
      d: "array arr[10];"
    },
    correctoption: "b"
  },
  {
    question: "What does `fopen()` return if the file cannot be opened?",
    options: {
      a: "1",
      b: "0",
      c: "NULL",
      d: "EOF"
    },
    correctoption: "c"
  },
  {
    question: "What is the format specifier for printing a float in C?",
    options: {
      a: "%f",
      b: "%d",
      c: "%lf",
      d: "%c"
    },
    correctoption: "a"
  },
  {
    question: "Which of these is not a loop structure in C?",
    options: {
      a: "for",
      b: "repeat-until",
      c: "while",
      d: "do-while"
    },
    correctoption: "b"
  },
  {
    question: "What is the output of `printf(\"%c\", 65);`?",
    options: {
      a: "65",
      b: "A",
      c: "B",
      d: "Error"
    },
    correctoption: "b"
  },
  {
    question: "Which function is used to compare two strings in C?",
    options: {
      a: "strcmp()",
      b: "strcomp()",
      c: "stringcmp()",
      d: "compare()"
    },
    correctoption: "a"
  },
  {
    question: "Which of these is not a valid C identifier?",
    options: {
      a: "_main",
      b: "2sum",
      c: "sum_2",
      d: "sum"
    },
    correctoption: "b"
  },
  {
    question: "What is the output of: `printf(\"%d\", 10 != 2);`?",
    options: {
      a: "0",
      b: "2",
      c: "1",
      d: "Error"
    },
    correctoption: "c"
  },
  {
    question: "What is the maximum number of `else if` blocks allowed in C?",
    options: {
      a: "1",
      b: "10",
      c: "Unlimited",
      d: "Depends on compiler"
    },
    correctoption: "c"
  },
  {
    question: "Which function is used to allocate memory dynamically in C?",
    options: {
      a: "realloc()",
      b: "calloc()",
      c: "malloc()",
      d: "All of the above"
    },
    correctoption: "d"
  },
  {
    question: "What will `printf(\"%d\", sizeof(3.14));` output on most systems?",
    options: {
      a: "4",
      b: "8",
      c: "2",
      d: "6"
    },
    correctoption: "b"
  },
  {
    question: "Which symbol is used to declare a preprocessor directive?",
    options: {
      a: "%",
      b: "&",
      c: "#",
      d: "*"
    },
    correctoption: "c"
  },
  {
    question: "What is the correct way to end a `main()` function?",
    options: {
      a: "return 0;",
      b: "exit();",
      c: "end;",
      d: "stop();"
    },
    correctoption: "a"
  },
  {
    question: "What will be the result of `10 / 3` in C?",
    options: {
      a: "3.333",
      b: "3",
      c: "3.0",
      d: "Error"
    },
    correctoption: "b"
  },
  {
    question: "Which keyword is used to prevent further inheritance in C?",
    options: {
      a: "final",
      b: "const",
      c: "C does not support inheritance",
      d: "restrict"
    },
    correctoption: "c"
  },
  {
    question: "Which function is used to move the file pointer to a specific location?",
    options: {
      a: "fmove()",
      b: "fseek()",
      c: "fread()",
      d: "ftell()"
    },
    correctoption: "b"
  },
  {
    question: "What will `int a = 2.9; printf(\"%d\", a);` print?",
    options: {
      a: "2.9",
      b: "2",
      c: "3",
      d: "Error"
    },
    correctoption: "b"
  },
  {
    question: "How many bytes are there in a `char` type in C?",
    options: {
      a: "1",
      b: "2",
      c: "4",
      d: "Depends on OS"
    },
    correctoption: "a"
  },
  {
    question: "What is the correct extension for a C source file?",
    options: {
      a: ".cpp",
      b: ".java",
      c: ".c",
      d: ".cs"
    },
    correctoption: "c"
  },
  {
    question: "What is the output of: `printf(\"%d\", 5 && 0);`?",
    options: {
      a: "1",
      b: "0",
      c: "5",
      d: "Error"
    },
    correctoption: "b"
  }
]
}


var i=0;
var count=0;
var selectoption = null;

const question=document.querySelector("#question");
const a=document.querySelector("#a");
const b=document.querySelector("#b");
const c=document.querySelector("#c");
const d=document.querySelector("#d");
const score=document.querySelector("#score");
const submit=document.querySelector("#submit");


const arr=[];
while(arr.length<10){
    const rand=Math.floor(Math.random()*100);
    if(!arr.includes(rand)){
        arr.push(rand);
    }
}

function check(){
    if(i>=10){
        question.textContent=`quiz completed`,
        score.textContent=`${count}`,
        a.style.display="none";
        b.style.display="none";
        c.style.display="none";
        d.style.display="none";
        submit.style.display = "none";
        return;
    }
     
    const current=arr[i];
    question.textContent=`Q${i+1}) ${C.data[current].question}`;
    a.textContent       =`a)${C.data[current].options.a}`;
    b.textContent       =`b)${C.data[current].options.b}`;
    c.textContent       =`c)${C.data[current].options.c}`;
    d.textContent       =`d)${C.data[current].options.d}`;

    selectoption = null;
    const opt=[a,b,c,d];
    for(let i=0;i<opt.length;i++){
        opt[i].style.background="none";
    }
}


function answer(value){
    selectoption = value;
    const options=[a,b,c,d];
    for(let j=0;j<options.length;j++){
            options[j].style.background="";
        }
    if(value==='a'){
        a.style.background="lightblue";
    }
    if(value==='b'){
        b.style.background="lightblue";
    }
    if(value==='c'){
        c.style.background="lightblue";
    }
    if(value==='d'){
        d.style.background="lightblue";
    }
}

    a.onclick=()=>answer('a');
    b.onclick=()=>answer('b');
    c.onclick=()=>answer('c');
    d.onclick=()=>answer('d');

    submit.onclick=function () {
        if(selectoption===null){
            alert("enter option");
            return;
        }

        const check1=arr[i];
        if(selectoption===C.data[check1].correctoption){
            count++;
        }
        i++;
        check();

   };

check();
