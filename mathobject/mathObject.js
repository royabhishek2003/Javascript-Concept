// Top 10 Most Important Math Functions for Interviews
// 1️⃣ Math.floor() ⭐ (VERY IMPORTANT)

// Rounds down.

// Math.floor(4.9);  // 4
// Math.floor(-4.1); // -5
// 💡 Used For:

// Random number generation

// Binary search

// Pagination logic

// Dividing indexes

// 🎯 Classic Interview Example
// // Random number between 1–10
// let random = Math.floor(Math.random() * 10) + 1;
// 2️⃣ Math.ceil()

// Rounds up.

// Math.ceil(4.1);  // 5
// Math.ceil(-4.9); // -4
// 💡 Used For:

// Calculating total pages

// Minimum containers needed

// Example:

// let items = 23;
// let perPage = 5;

// let pages = Math.ceil(items / perPage); // 5 pages
// 3️⃣ Math.round()

// Rounds to nearest integer.

// Math.round(4.4); // 4
// Math.round(4.6); // 5

// Used for:

// UI rounding

// Display values

// 4️⃣ Math.random() ⭐⭐

// Returns value between:

// 0 (inclusive) to 1 (exclusive)
// Math.random();
// 🎯 Most Asked Pattern:
// // Random between min and max
// function getRandom(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// Interviewers LOVE this one.

// 5️⃣ Math.max() ⭐
// Math.max(1, 5, 3); // 5

// With array:

// let arr = [4, 9, 2];
// Math.max(...arr); // 9
// 💡 Used For:

// Finding largest number

// Kadane’s algorithm

// Comparing values

// 6️⃣ Math.min() ⭐
// Math.min(1, 5, 3); // 1

// Used in:

// Finding minimum

// Sliding window problems

// 7️⃣ Math.abs() ⭐

// Returns absolute value.

// Math.abs(-10); // 10
// 💡 Used In:

// Distance between numbers

// Comparing difference

// Example:

// Math.abs(a - b)

// Very common in coding questions.

// 8️⃣ Math.pow() / ** ⭐
// Math.pow(2, 3); // 8

// Modern way:

// 2 ** 3

// Used in:

// Exponent problems

// Bit manipulation

// Algorithms

// 9️⃣ Math.sqrt() ⭐
// Math.sqrt(25); // 5

// Used in:

// Prime checking

// Distance formula

// Geometry problems

// 🔟 Math.trunc() (Modern Interview Favorite)

// Removes decimal.

// Math.trunc(4.9);  // 4
// Math.trunc(-4.9); // -4

// Difference from floor for negatives is important.

// 💥 Bonus (Asked Sometimes)
// 🔹 Math.sign()
// Math.sign(-10); // -1
// 🔹 Math.log2()

// Used in:

// Binary tree height

// Bit problems

// 🔥 Most Common Interview Patterns
// 🎯 1. Random number in range
// Math.floor(Math.random() * (max - min + 1)) + min;
// 🎯 2. Swap two numbers without temp
// a = a + b;
// b = a - b;
// a = a - b;

// (Math logic concept)

// 🎯 3. Prime check using sqrt
// function isPrime(n) {
//   if (n < 2) return false;

//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }
// 🎯 4. Find max in array
// Math.max(...arr);
// 🔥 Interview Ranking (Most Important)

// If I rank them for interviews:

// Math.floor ⭐⭐⭐

// Math.random ⭐⭐⭐

// Math.max ⭐⭐

// Math.min ⭐⭐

// Math.abs ⭐⭐

// Math.ceil ⭐⭐

// Math.sqrt ⭐

// Math.pow / ** ⭐

// Math.round ⭐

// Math.trunc ⭐

// ⚠ Important Trap
// Math.random() * 10

// Will NEVER give 10.

// It gives:

// 0 to 9.999...