const mongoose = require ('mongoose')

mongoose.connect('mongodb://localhost:50252/zenskate', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .catch(error => console.log(`this is the error when connecting to database in database/index ${error}`));

const db = mongoose.connection; 

db.on('error', () => console.log ('error connecting to the database'));
db.once('open', () => console.log ('connected to the database'));

let parkSchema = mongoose.Schema({
  _id: String, 
  name: String,
  images: [String],
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
  },
  region: String,
  website: String,
  phone: String,
  latitude: String, 
  longitude: String,
  geolat: String, 
  geolong: String,
  reviews: Array,
  rating: Number,
  });

const Park = mongoose.model('Park', parkSchema);

module.exports = Park;