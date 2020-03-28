const express = require('express');
const path = require('path');
const parser = require('body-parser');

const port = 4000;
const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/about', express.static(path.join(__dirname, '../client/dist')))
app.use('/skateparks', express.static(path.join(__dirname, '../client/dist')))

app.listen(port, () => console.log(`connected to port ${port}!`))

// app.use('/about', ((req, res) => {
//   console.log ('goodboy')
//   res.sendFile(path.join(__dirname, '../client/dist'), (error) => {
//     if (error) {
//       res.status (500).send(error)
//     }
//   })
// }))

// app.use('/skateparks', ((req, res) => {
//   res.sendFile(path.join(__dirname, '../client/dist'), (error) => {
//     if (error) {
//       res.status (500).send(error)
//     }
//   })
// }))