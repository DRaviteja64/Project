

const java = {
  data: [
    {
      question: `Which of the following is not a Java keyword?`,
      options: {
        a: "static",
        b: "try",
        c: "Integer",
        d: "final",
      },
      correctoption: "c",
    },
    {
      question: "What is the size of an int variable in Java?",
      options: {
        a: "8 bits",
        b: "16 bits",
        c: "32 bits",
        d: "64 bits",
      },
      correctoption: "c",
    },
    {
      question: "What is the output of: System.out.println(10 + 20 + \"30\")",
      options: {
        a: "3030",
        b: "102030",
        c: "3030.0",
        d: "f3030.0",
      },
      correctoption: "a",
    },
    {
      question: "Which of the following is used to create an object in Java?",
      options: {
        a: "malloc",
        b: "alloc",
        c: "new",
        d: "create",
      },
      correctoption: "c",
    },
    {
      question: "Which of these is not a feature of Java?",
      options: {
        a: "Platform-independent",
        b: "Object-oriented",
        c: "Pointer support",
        d: "Automatic garbage collection",
      },
      correctoption: "c",
    },
    {
      question: "Which of the following is a checked exception?",
      options: {
        a: "NullPointerException",
        b: "IOException",
        c: "ArrayIndexOutOfBoundsException",
        d: "ArithmeticException",
      },
      correctoption: "b",
    },
    {
      question: "Which method must be implemented by all threads?",
      options: {
        a: "start()",
        b: "run()",
        c: "stop()",
        d: "main()",
      },
      correctoption: "b",
    },
    {
      question: "Which of these collections guarantees insertion order?",
      options: {
        a: "HashSet",
        b: "TreeSet",
        c: "LinkedHashSet",
        d: "PriorityQueue",
      },
      correctoption: "c",
    },
    {
      question: "Which interface is used to implement lambda expressions in Java?",
      options: {
        a: "Serializable",
        b: "Runnable",
        c: "Comparable",
        d: "FunctionalInterface",
      },
      correctoption: "d",
    },
    {
      question: "What is the default value of a boolean in Java?",
      options: {
        a: "true",
        b: "false",
        c: "0",
        d: "null",
      },
      correctoption: "b",
    },
    {
      question: "What does JVM stand for?",
      options: {
        a: "Java Variable Machine",
        b: "Java Virtual Method",
        c: "Java Virtual Machine",
        d: "Java Verified Machine",
      },
      correctoption: "c",
    },
    {
      question: "Which keyword is used to inherit a class in Java?",
      options: {
        a: "implement",
        b: "extends",
        c: "inherits",
        d: "interface",
      },
      correctoption: "b",
    },
    {
      question: "Which operator is used to compare two values?",
      options: {
        a: "=",
        b: "==",
        c: "!=",
        d: "equals()",
      },
      correctoption: "b",
    },
    {
      question: "What is the superclass of all classes in Java?",
      options: {
        a: "Object",
        b: "Class",
        c: "Main",
        d: "Base",
      },
      correctoption: "a",
    },
    {
      question: "Which statement is true about constructor overloading?",
      options: {
        a: "Must have same number of parameters",
        b: "Must have different class names",
        c: "Must have different parameter types",
        d: "Must be private",
      },
      correctoption: "c",
    },
    {
      question: "What will happen if the main method is declared as private?",
      options: {
        a: "It will compile and run",
        b: "It will give a runtime error",
        c: "It will compile but not run",
        d: "It will not compile",
      },
      correctoption: "d",
    },
    {
      question: "What is the result of 5 / 2 in Java?",
      options: {
        a: "2",
        b: "2.5",
        c: "2.0",
        d: "Error",
      },
      correctoption: "a",
    },
    {
      question: "Which access modifier makes a member visible only within its own class?",
      options: {
        a: "public",
        b: "protected",
        c: "private",
        d: "default",
      },
      correctoption: "c",
    },
    {
      question: "What is used to prevent method overriding in Java?",
      options: {
        a: "static",
        b: "final",
        c: "private",
        d: "abstract",
      },
      correctoption: "b",
    },
    {
      question: "What does the 'this' keyword refer to?",
      options: {
        a: "Current method",
        b: "Current object",
        c: "Parent class",
        d: "Static variable",
      },
      correctoption: "b",
        },
    {
        question: "Which of the following is not a primitive data type in Java?",
        options: {
        a: "int",
        b: "boolean",
        c: "char",
        d: "String",
        },
        correctoption: "d",
    },
    {
        question: "What will be the output of: System.out.println(3 + 4 * 2);",
        options: {
        a: "14",
        b: "11",
        c: "10",
        d: "7",
        },
        correctoption: "b",
    },
    {
        question: "Which keyword is used to define a constant in Java?",
        options: {
        a: "const",
        b: "static",
        c: "final",
        d: "constant",
        },
        correctoption: "c",
    },
    {
        question: "Which of the following loops is guaranteed to execute at least once?",
        options: {
        a: "for loop",
        b: "while loop",
        c: "do-while loop",
        d: "None of the above",
        },
        correctoption: "c",
    },
    {
        question: "Which class is the parent of all exception classes?",
        options: {
        a: "Exception",
        b: "Throwable",
        c: "RuntimeException",
        d: "Error",
        },
        correctoption: "b",
    },
    {
        question: "Which method is used to compare two strings in Java?",
        options: {
        a: "equals()",
        b: "==",
        c: "compare()",
        d: "===",
        },
        correctoption: "a",
    },
    {
        question: "Which of these is not a type of constructor in Java?",
        options: {
        a: "Default constructor",
        b: "Parameterized constructor",
        c: "Copy constructor",
        d: "Virtual constructor",
        },
        correctoption: "d",
    },
    {
        question: "Which keyword is used to handle exceptions in Java?",
        options: {
        a: "catch",
        b: "throw",
        c: "try",
        d: "All of the above",
        },
        correctoption: "d",
    },
    {
        question: "Which data structure uses LIFO order?",
        options: {
        a: "Queue",
        b: "Array",
        c: "Stack",
        d: "List",
        },
        correctoption: "c",
    },
    {
        question: "Which operator is used for logical AND in Java?",
        options: {
        a: "&",
        b: "&&",
        c: "AND",
        d: "||",
        },
        correctoption: "b",
    },
    {
        question: "Which collection class allows duplicates and maintains order?",
        options: {
        a: "HashSet",
        b: "TreeSet",
        c: "ArrayList",
        d: "LinkedHashSet",
        },
        correctoption: "c",
    },
    {
        question: "Which package contains the Scanner class?",
        options: {
        a: "java.net",
        b: "java.io",
        c: "java.util",
        d: "java.lang",
        },
        correctoption: "c",
    },
    {
        question: "How can you prevent a class from being subclassed?",
        options: {
        a: "Use 'abstract'",
        b: "Use 'private'",
        c: "Use 'final'",
        d: "Use 'static'",
        },
        correctoption: "c",
    },
    {
        question: "What is the file extension for a compiled Java file?",
        options: {
        a: ".java",
        b: ".class",
        c: ".exe",
        d: ".jar",
        },
        correctoption: "b",
    },
    {
        question: "Which method is called when an object is garbage collected?",
        options: {
        a: "finalize()",
        b: "delete()",
        c: "dispose()",
        d: "close()",
        },
        correctoption: "a",
    },
    {
        question: "Which of the following is not a loop structure in Java?",
        options: {
        a: "for",
        b: "while",
        c: "repeat",
        d: "do-while",
        },
        correctoption: "c",
    },
    {
        question: "Which keyword is used to call the parent class constructor?",
        options: {
        a: "super",
        b: "this",
        c: "extends",
        d: "parent",
        },
        correctoption: "a",
    },
    {
        question: "What is the purpose of the 'break' statement in loops?",
        options: {
        a: "To pause execution",
        b: "To restart the loop",
        c: "To skip current iteration",
        d: "To exit the loop",
        },
        correctoption: "d",
    },
    {
        question: "Which class do all Java classes inherit from?",
        options: {
        a: "Base",
        b: "Main",
        c: "Object",
        d: "Core",
        },
        correctoption: "c",
    },
    {
        question: "Which keyword is used for method overriding?",
        options: {
        a: "overload",
        b: "override",
        c: "@Override",
        d: "virtual",
        },
        correctoption: "c",
    },
        {
        question: "Which of the following is used to define a package in Java?",
        options: {
        a: "package",
        b: "import",
        c: "define",
        d: "namespace",
        },
        correctoption: "a",
    },
    {
        question: "What will be the result of 7 % 3 in Java?",
        options: {
        a: "2",
        b: "1",
        c: "3",
        d: "0",
        },
        correctoption: "a",
    },
    {
        question: "Which of these cannot be used for a variable name in Java?",
        options: {
        a: "_name",
        b: "1value",
        c: "value1",
        d: "$total",
        },
        correctoption: "b",
    },
    {
        question: "Which access modifier gives the most restricted access?",
        options: {
        a: "public",
        b: "protected",
        c: "private",
        d: "default",
        },
        correctoption: "c",
    },
    {
        question: "Which of the following keywords is used to implement an interface?",
        options: {
        a: "inherits",
        b: "extends",
        c: "implements",
        d: "uses",
        },
        correctoption: "c",
    },
    {
        question: "Which Java keyword is used to define an abstract class?",
        options: {
        a: "abstract",
        b: "virtual",
        c: "interface",
        d: "base",
        },
        correctoption: "a",
    },
    {
        question: "Which of these is the correct syntax to inherit a class?",
        options: {
        a: "class B inherit A {}",
        b: "class B extends A {}",
        c: "class B implements A {}",
        d: "class B uses A {}",
        },
        correctoption: "b",
    },
    {
        question: "What is the result of: System.out.println(\"2\" + 3 + 4);",
        options: {
        a: "234",
        b: "9",
        c: "7",
        d: "2+3+4",
        },
        correctoption: "a",
    },
    {
        question: "Which keyword is used to stop a thread in Java?",
        options: {
        a: "exit",
        b: "stop",
        c: "destroy",
        d: "terminate",
        },
        correctoption: "b",
    },
    {
        question: "Which annotation is used to suppress compiler warnings in Java?",
        options: {
        a: "@Ignore",
        b: "@SuppressWarnings",
        c: "@NoWarning",
        d: "@SafeCode",
        },
        correctoption: "b",
    },
    {
        question: "Which exception is thrown when a division by zero occurs?",
        options: {
        a: "IOException",
        b: "ArithmeticException",
        c: "NullPointerException",
        d: "NumberFormatException",
        },
        correctoption: "b",
    },
    {
        question: "How many bytes does a float occupy in Java?",
        options: {
        a: "2",
        b: "4",
        c: "8",
        d: "16",
        },
        correctoption: "b",
    },
    {
        question: "Which collection class is synchronized?",
        options: {
        a: "ArrayList",
        b: "Vector",
        c: "HashMap",
        d: "LinkedList",
        },
        correctoption: "b",
    },
    {
        question: "Which method is used to find the length of a string in Java?",
        options: {
        a: "length",
        b: "size()",
        c: "length()",
        d: "getSize()",
        },
        correctoption: "c",
    },
    {
        question: "Which operator is used to concatenate two strings?",
        options: {
        a: "&",
        b: "+",
        c: "%",
        d: "concat",
        },
        correctoption: "b",
    },
    {
        question: "Which of these is a wrapper class for primitive int?",
        options: {
        a: "Int",
        b: "integer",
        c: "Integer",
        d: "intWrapper",
        },
        correctoption: "c",
    },
    {
        question: "Which stream is used for console output in Java?",
        options: {
        a: "System.in",
        b: "System.err",
        c: "System.out",
        d: "System.write",
        },
        correctoption: "c",
    },
    {
        question: "Which collection doesn't allow duplicate elements?",
        options: {
        a: "List",
        b: "Set",
        c: "Map",
        d: "ArrayList",
        },
        correctoption: "b",
    },
    {
        question: "Which keyword is used to define an enumeration in Java?",
        options: {
        a: "enum",
        b: "Enum",
        c: "enumeration",
        d: "define",
        },
        correctoption: "a",
    },
    {
        question: "Which concept allows multiple methods with the same name but different parameters?",
        options: {
        a: "Inheritance",
        b: "Polymorphism",
        c: "Overriding",
        d: "Overloading",
        },
        correctoption: "d",
    },
    {
        question: "Which of these is true about the Java memory model?",
        options: {
        a: "Heap memory is thread-safe by default",
        b: "Stack memory is shared among all threads",
        c: "Each thread has its own stack",
        d: "Static variables are stored in the stack",
        },
        correctoption: "c",
    },
    {
        question: "What does the `volatile` keyword ensure in Java?",
        options: {
        a: "Thread is locked on access",
        b: "Variable value is always read from main memory",
        c: "Object becomes immutable",
        d: "Thread-safe method",
        },
        correctoption: "b",
    },
    {
        question: "Which of these is not a valid functional interface?",
        options: {
        a: "Predicate",
        b: "Consumer",
        c: "Serializable",
        d: "Runnable",
        },
        correctoption: "c",
    },
    {
        question: "Which feature was introduced in Java 8 for asynchronous programming?",
        options: {
        a: "ThreadPoolExecutor",
        b: "CompletableFuture",
        c: "TimerTask",
        d: "ForkJoinPool",
        },
        correctoption: "b",
    },
    {
        question: "Which collection class allows null keys and values?",
        options: {
        a: "Hashtable",
        b: "TreeMap",
        c: "ConcurrentHashMap",
        d: "HashMap",
        },
        correctoption: "d",
    },
    {
        question: "Which class does not allow duplicate elements and maintains natural order?",
        options: {
        a: "HashSet",
        b: "TreeSet",
        c: "LinkedHashSet",
        d: "ArrayList",
        },
        correctoption: "b",
    },
    {
        question: "Which of the following best describes autoboxing?",
        options: {
        a: "Manually converting primitives to wrappers",
        b: "Automatically converting wrappers to primitives",
        c: "Automatically converting primitives to wrappers",
        d: "Using object streams to wrap data",
        },
        correctoption: "c",
    },
    {
        question: "What is the output of `System.out.println(1.0/0)`?",
        options: {
        a: "Infinity",
        b: "NaN",
        c: "0",
        d: "Runtime error",
        },
        correctoption: "a",
    },
    {
        question: "Which design pattern does `java.lang.Runtime` follow?",
        options: {
        a: "Factory",
        b: "Prototype",
        c: "Singleton",
        d: "Builder",
        },
        correctoption: "c",
    },
    {
        question: "Which operator is used in Java for bitwise inclusive OR?",
        options: {
        a: "&&",
        b: "||",
        c: "|",
        d: "^",
        },
        correctoption: "c",
    },
    {
        question: "Which statement about interfaces in Java is true?",
        options: {
        a: "Interfaces can have constructors",
        b: "Interfaces can have default methods",
        c: "Interfaces can have private variables",
        d: "Interfaces cannot have any method bodies",
        },
        correctoption: "b",
    },
    {
        question: "What happens when a thread calls wait() inside a synchronized block?",
        options: {
        a: "Thread continues execution",
        b: "Thread releases the lock and waits",
        c: "Thread holds the lock and waits",
        d: "Thread throws an error",
        },
        correctoption: "b",
    },
    {
        question: "Which of these allows duplicate keys?",
        options: {
        a: "HashMap",
        b: "TreeMap",
        c: "LinkedHashMap",
        d: "None of the above",
        },
        correctoption: "d",
    },
    {
        question: "What is the return type of the `hashCode()` method in Java?",
        options: {
        a: "long",
        b: "short",
        c: "int",
        d: "float",
        },
        correctoption: "c",
    },
    {
        question: "Which Java version introduced `var` for local variable type inference?",
        options: {
        a: "Java 8",
        b: "Java 9",
        c: "Java 10",
        d: "Java 11",
        },
        correctoption: "c",
    },
    {
        question: "Which feature in Java allows multiple inheritance of behavior?",
        options: {
        a: "Abstract classes",
        b: "Interfaces with default methods",
        c: "Enums",
        d: "Constructors",
        },
        correctoption: "b",
    },
    {
        question: "Which command is used to disassemble Java bytecode?",
        options: {
        a: "javap",
        b: "java",
        c: "javac",
        d: "jar",
        },
        correctoption: "a",
    },
    {
        question: "Which keyword is used to prevent inheritance of a class?",
        options: {
        a: "abstract",
        b: "final",
        c: "static",
        d: "sealed",
        },
        correctoption: "b",
    },
    {
        question: "Which method is called just before an object is garbage collected?",
        options: {
        a: "destroy()",
        b: "final()",
        c: "finalize()",
        d: "clean()",
        },
        correctoption: "c",
    },
    {
        question: "Which stream class is used to write primitive data types in binary form?",
        options: {
        a: "ObjectOutputStream",
        b: "DataOutputStream",
        c: "BufferedOutputStream",
        d: "PrintStream",
        },
        correctoption: "b",
    },
    {
        question: "Which of these is a valid way to start a thread in Java?",
        options: {
        a: "Calling run() method directly",
        b: "Creating a new Thread and calling start()",
        c: "Using static run()",
        d: "Calling execute() on Thread",
        },
        correctoption: "b",
    },
    {
        question: "What is the result of `\"Hello\" + 5 + 10` in Java?",
        options: {
        a: "Hello510",
        b: "Hello15",
        c: "15Hello",
        d: "Compilation error",
        },
        correctoption: "a",
    },
    {
        question: "Which class is the parent class of all exceptions in Java?",
        options: {
        a: "Throwable",
        b: "Exception",
        c: "Error",
        d: "Object",
        },
        correctoption: "a",
    },
    {
        question: "Which of the following keywords is used to prevent method overriding?",
        options: {
        a: "static",
        b: "abstract",
        c: "final",
        d: "protected",
        },
        correctoption: "c",
    },
    {
        question: "Which interface is implemented by ArrayList?",
        options: {
        a: "Set",
        b: "Map",
        c: "List",
        d: "Queue",
        },
        correctoption: "c",
    },
    {
        question: "Which Java keyword is used to handle exceptions?",
        options: {
        a: "try",
        b: "throw",
        c: "catch",
        d: "All of the above",
        },
        correctoption: "d",
    },
    {
        question: "Which method is used to read a single character from the console in Java?",
        options: {
        a: "System.read()",
        b: "Scanner.nextChar()",
        c: "System.in.read()",
        d: "BufferedReader.readChar()",
        },
        correctoption: "c",
    },
    {
        question: "Which collection is best suited for LIFO operations?",
        options: {
        a: "Queue",
        b: "Stack",
        c: "ArrayList",
        d: "HashMap",
        },
        correctoption: "b",
    },
    {
        question: "What is the use of `super` keyword in Java?",
        options: {
        a: "Refers to current object",
        b: "Refers to parent class",
        c: "Refers to static variable",
        d: "None of the above",
        },
        correctoption: "b",
    },
    {
        question: "Which class allows duplicate elements and maintains insertion order?",
        options: {
        a: "TreeSet",
        b: "HashSet",
        c: "LinkedHashSet",
        d: "ArrayList",
        },
        correctoption: "d",
    },
    {
        question: "Which access modifier allows visibility within the same package?",
        options: {
        a: "public",
        b: "private",
        c: "protected",
        d: "default",
        },
        correctoption: "d",
    },
    {
        question: "Which of the following can be overloaded in Java?",
        options: {
        a: "Constructors only",
        b: "Methods only",
        c: "Both methods and constructors",
        d: "Main method only",
        },
        correctoption: "c",
    },
    {
        question: "Which keyword is used to define a constant in Java?",
        options: {
        a: "const",
        b: "static",
        c: "final",
        d: "constant",
        },
        correctoption: "c",
    },
    {
        question: "Which of these is not part of the java.lang package?",
        options: {
        a: "String",
        b: "Math",
        c: "ArrayList",
        d: "Object",
        },
        correctoption: "c",
    },
    {
        question: "Which loop checks the condition after executing the loop body?",
        options: {
        a: "for",
        b: "while",
        c: "do-while",
        d: "foreach",
        },
        correctoption: "c",
    },
    {
        question: "Which of these exceptions is a runtime exception?",
        options: {
        a: "IOException",
        b: "SQLException",
        c: "NullPointerException",
        d: "FileNotFoundException",
        },
        correctoption: "c",
    },
    {
        question: "Which of the following allows method chaining?",
        options: {
        a: "Returning void",
        b: "Returning this",
        c: "Returning static",
        d: "Returning null",
        },
        correctoption: "b",
    },
    {
        question: "Which of these is used to take formatted input in Java?",
        options: {
        a: "Scanner",
        b: "BufferedReader",
        c: "System.in",
        d: "DataInputStream",
        },
        correctoption: "a",
    },
    {
        question: "Which keyword is used to create an abstract method?",
        options: {
        a: "final",
        b: "static",
        c: "abstract",
        d: "void",
        },
        correctoption: "c",
    },
    {
        question: "What is the purpose of `instanceof` keyword?",
        options: {
        a: "To cast objects",
        b: "To compare references",
        c: "To check type compatibility",
        d: "To access private members",
        },
        correctoption: "c",
    }
    ]
};


var i=0;
var count=0;

const question=document.querySelector("#question");
const a       =document.querySelector("#a");
const b       =document.querySelector("#b");
const c       =document.querySelector("#c");
const d       =document.querySelector("#d");
const submit  =document.querySelector("#submit");
const score   =document.querySelector("#score");


const arr=[];
while(arr.length<10){
    const random=Math.floor(Math.random()*100);
    if(!arr.includes(random)){
        arr.push(random);
    }
}

var selectoption = null;

function check(){
    if(i>=10){
        question.textContent="quiz completed";
        score.textContent=`your score is ${count}`;
        a.style.display=b.style.display=c.style.display=d.style.display="none",
        submit.style.display = "none";
        return;
    }

    const current=arr[i];
    question.textContent=`Q${i+1}) ${java.data[current].question}`;
    a.textContent       =`a)${java.data[current].options.a}`;
    b.textContent       =`b)${java.data[current].options.b}`;
    c.textContent       =`c)${java.data[current].options.c}`;
    d.textContent       =`d)${java.data[current].options.d}`;

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
        if(selectoption===java.data[check1].correctoption){
            count++;
        }
        i++;
        check();

   };

check();




