const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  route: {
    type: String
  },
  submenus: [
    {
      title: String,
      route: String
    }
  ]
});

module.exports = mongoose.model('Menu', menuSchema, 'Menu');