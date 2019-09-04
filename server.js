const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// app.use(express.static('public'));

app.get('/listing/:id', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('File sent!');
    }
  })
});

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`FEC Proxy listening on port ${port}!`));