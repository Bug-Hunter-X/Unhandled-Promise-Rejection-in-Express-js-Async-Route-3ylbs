const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  doSomethingAsync()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      // Error handling, but not the correct place for it
      console.error(err);
      res.status(500).send('Something went wrong');
    });
});

function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation that can fail
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.5) {
        reject(new Error('Something went wrong'));
      } else {
        resolve('Success');
      }
    }, 1000);
  });
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});