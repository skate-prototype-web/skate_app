const db = require ('./database/index.js')

const getAllParks = (req, res) => {
  console.log('hello from the other side')
  db.find()
  .then(parks => {
    res.json(parks)
  })
  .catch(error => {
    res.status(400).send(`error processing request: ${error}`)
  })
}

module.exports = { getAllParks }