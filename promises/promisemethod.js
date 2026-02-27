// 🔥 Most Important Promise Methods
// 1️⃣ Promise.all()

// 👉 Waits for all promises
// 👉 Fails immediately if any one rejects

// Promise.all([p1, p2])

// ✔ Returns array of results
// ❌ Rejects if any fails

// 2️⃣ Promise.allSettled()

// 👉 Waits for all promises
// 👉 Never fails

// Promise.allSettled([p1, p2])

// Returns:

// [
//   { status: "fulfilled", value: ... },
//   { status: "rejected", reason: ... }
// ]

// Use when you want results of all, even failed ones.

// 3️⃣ Promise.race()

// 👉 Returns the first promise that settles
// (resolve OR reject — whichever happens first)

// Promise.race([p1, p2])

// Fastest wins.

// 4️⃣ Promise.any()

// 👉 Returns first fulfilled promise
// 👉 Ignores rejections
// 👉 Rejects only if ALL fail

// Promise.any([p1, p2])

// Very useful for fallback APIs.

// 5️⃣ Promise.resolve()

// Creates a resolved promise.

// Promise.resolve("Done")
// 6️⃣ Promise.reject()

// Creates a rejected promise.

// Promise.reject("Error")
// 🔥 Important Instance Methods (Used Daily)

// These are used on a promise object:

// 7️⃣ .then()

// Runs when promise resolves.

// promise.then(value => {})
// 8️⃣ .catch()

// Runs when promise rejects.

// promise.catch(error => {})
// 9️⃣ .finally()

// Runs always (resolve or reject).

// promise.finally(() => {})