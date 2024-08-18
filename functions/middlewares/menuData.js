const Menu = require('../models/menu');

module.exports = (async (req, res, next) => {
    try {
      const menus = await Menu.find();
      res.locals.menus = menus; // Attach menus to res.locals
      next();
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching menus');
    }
  });