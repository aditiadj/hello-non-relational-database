const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

let db = mongoose.connection;
db.on('error', console.log.bind(console, 'Connection error :'));
db.once('open', () => {
  console.log('MongoDB connected');
});

let Schema = mongoose.Schema;

let charactersSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true,
    default: 0
  },
  abilities: {}
}, {
  versionKey: false
});

let Characters = mongoose.model('Characters', charactersSchema);

let majin = new Characters({
  name: 'Majin',
  age: 18,
  abilities: {
    style: 'magician',
    xp: 2250,
    type: 'water element'
  }
});

//POST data(save, create, insert)
majin.save((err) => {
  if (err) throw err;
  console.log('Characters saved successfully!');
});

// GET all data (find)
Characters.find((err, characters) => {
  if (err) throw err;
  console.log(characters);
});