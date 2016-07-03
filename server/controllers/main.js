/**
 * Main project controller
 */

module.exports = {
  index: function index(req, res) {
    res.goTo('/tweet')
  }
};
