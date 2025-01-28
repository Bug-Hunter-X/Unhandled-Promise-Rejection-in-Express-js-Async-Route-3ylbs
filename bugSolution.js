const express = require('express');
const app = express();

app.get('/', (req, res) => {
  try {
    // Wrap asynchronous operation in a try...catch block
    doSomethingAsync()
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        //Properly handle the error
        console.error('Error in async operation:', err);
        res.status(500).send({ error: 'Something went wrong', details: err.message });
      });
  } catch (error) {
    // Handle synchronous errors
    console.error('Synchronous error:', error);
    res.status(500).send({ error: 'A synchronous error occurred', details: error.message });
  }
});

function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.5) {
        reject(new Error('Something went wrong asynchronously'));
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