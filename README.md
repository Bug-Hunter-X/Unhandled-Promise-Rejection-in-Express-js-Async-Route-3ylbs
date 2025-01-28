# Unhandled Promise Rejection in Express.js Async Route

This repository demonstrates a common error in Node.js Express.js applications: improper error handling in asynchronous route handlers. The provided `bug.js` file showcases a scenario where an asynchronous operation within a route handler might throw an error, but the error is only logged to the console, leading to a generic 500 error being sent to the client.

The solution, found in `bugSolution.js`, demonstrates how to correctly handle such errors using `try...catch` blocks for both synchronous and asynchronous operations, resulting in more informative and robust error handling.