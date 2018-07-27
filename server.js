const express = require('express');
const app = express();

const HOSTNAME = '127.0.0.1';
const PORT = 8872;

app.use(express.static('public'));

app.get('/', (req, res) => {
  // res.send("hello");
  res.sendFile(__dirname + "/index.html");
});


app.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`)
})