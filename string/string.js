// 🔥 1️⃣ What is a String in JavaScript?

// A string is a primitive data type that represents text.

// let str1 = "Hello";
// let str2 = 'World';
// let str3 = `Template literal`;

// ✔ Stored internally as UTF-16 code units
// ✔ Immutable (cannot be changed after creation)
// ✔ Indexed (str[0])
// ✔ Has many built-in methods

// 🔥 2️⃣ String Creation
// 🔹 Normal
// let name = "Abhishek";
// 🔹 Template Literal
// let age = 21;
// let msg = `My age is ${age}`;
// 🔹 Using Constructor (Avoid)
// let str = new String("hello"); // object
// 🔥 3️⃣ Important String Properties
// 🔹 length
// let str = "JavaScript";
// console.log(str.length); // 10

// ⚠️ Emoji issue:

// console.log("😀".length); // 2 (UTF-16)
// 🔥 4️⃣ Character Access Methods
// 🔹 1. charAt()
// let str = "Hello";
// console.log(str.charAt(1)); // "e"
// 🔹 2. at() (Modern, supports negative)
// console.log(str.at(-1)); // "o"
// 🔹 3. charCodeAt()

// Returns UTF-16 code.

// console.log("A".charCodeAt(0)); // 65
// 🔹 4. codePointAt()

// For emoji / unicode.

// console.log("😀".codePointAt(0)); 
// 🔥 5️⃣ Searching Methods
// 🔹 includes()
// "hello world".includes("world"); // true
// 🔹 indexOf()
// "hello".indexOf("l"); // 2
// 🔹 lastIndexOf()
// "hello".lastIndexOf("l"); // 3
// 🔹 startsWith()
// "JavaScript".startsWith("Java"); // true
// 🔹 endsWith()
// "JavaScript".endsWith("Script"); // true
// 🔹 search() (regex)
// "hello123".search(/\d/); // 5
// 🔥 6️⃣ Extracting Methods
// 🔹 slice(start, end)

// Supports negative.

// let str = "JavaScript";
// console.log(str.slice(0, 4)); // "Java"
// console.log(str.slice(-6));   // "Script"
// 🔹 substring(start, end)

// No negative support.

// console.log(str.substring(0, 4)); // "Java"
// 🔹 substr(start, length) (Deprecated)
// console.log(str.substr(4, 6)); // "Script"
// 🔥 7️⃣ Modifying Methods (Return New String)
// 🔹 toUpperCase()
// "hello".toUpperCase(); // "HELLO"
// 🔹 toLowerCase()
// "HELLO".toLowerCase(); // "hello"
// 🔹 trim()
// "   hello   ".trim(); // "hello"
// 🔹 trimStart()
// "   hello".trimStart();
// 🔹 trimEnd()
// "hello   ".trimEnd();
// 🔥 8️⃣ Replacing Methods
// 🔹 replace()
// "hello".replace("l", "x"); // "hexlo"

// (Only first match)

// 🔹 replaceAll()
// "hello".replaceAll("l", "x"); // "hexxo"
// 🔹 Regex replace
// "hello123".replace(/\d/g, "");
// 🔥 9️⃣ Splitting & Joining
// 🔹 split()
// "hello world".split(" "); 
// // ["hello", "world"]
// 🔥 🔟 Concatenation
// 🔹 +
// "Hello" + " World";
// 🔹 concat()
// "Hello".concat(" World");
// 🔹 Template literals
// `Hello ${name}`
// 🔥 1️⃣1️⃣ Repeat
// "ha".repeat(3); // "hahaha"
// 🔥 1️⃣2️⃣ Padding
// 🔹 padStart()
// "5".padStart(3, "0"); // "005"
// 🔹 padEnd()
// "5".padEnd(3, "0"); // "500"
// 🔥 1️⃣3️⃣ Comparing Strings
// "abc" < "abd"; // true

// Lexicographical comparison.

// 🔹 localeCompare()
// "a".localeCompare("b"); 

// Returns:

// -1 if a comes first in sorted form

// 0  if both are eqal in sorted form

// 1 if b comes first in sorted form

// 🔥 1️⃣4️⃣ Conversion Methods
// 🔹 toString()
// let num = 123;
// num.toString(); // "123"
// 🔹 String()
// String(123); // "123"
// 🔥 1️⃣5️⃣ Raw Strings
// String.raw`Hello\nWorld`;

// Does not interpret escape characters.

// 🔥 1️⃣6️⃣ Matching (Regex)
// 🔹 match()
// "hello123".match(/\d+/); 
// 🔹 matchAll()
// let str = "test1 test2";
// [...str.matchAll(/\d/g)];
// 🔥 1️⃣7️⃣ Unicode Methods
// 🔹 fromCharCode()
// String.fromCharCode(65); // "A"
// 🔹 fromCodePoint()
// String.fromCodePoint(128512); // 😀
// 🔥 1️⃣8️⃣ Immutability Example
// let str = "hello";
// str[0] = "H";
// console.log(str); // still "hello"

// Every change creates new string.

// 🔥 1️⃣9️⃣ Iterating Over String
// for (let char of "hello") {
//   console.log(char);
// }

// Or:

// [..."hello"];
// 🔥 2️⃣0️⃣ Escape Characters
// Escape	Meaning
// \n	New line
// \t	Tab
// \	Backslash
// "	Double quote
// '	Single quote

// Example:

// console.log("Hello\nWorld");
// 🔥 2️⃣1️⃣ Internal Engine Concepts (Advanced)

// Stored as UTF-16

// Immutable

// May use rope/cons string optimization

// String interning (same literal reused)

// 🔥 2️⃣2️⃣ Performance Tip

// Bad:

// let str = "";
// for(let i=0;i<10000;i++){
//    str += "a";
// }

// Better:

// let arr = [];
// for(let i=0;i<10000;i++){
//    arr.push("a");
// }
// arr.join("");
// 🎯 Final Clean Summary

// Strings in JavaScript:

// ✔ Primitive
// ✔ Immutable
// ✔ UTF-16 internally
// ✔ Have 40+ built-in methods
// ✔ Many methods return new string
// ✔ slice() is most flexible extraction method
// ✔ replaceAll() is modern
// ✔ substr() is deprecated