
module.exports = async (req, res) => {

    res.render('index', { menus: res.locals.menus, currentRoute: req.path  });
}