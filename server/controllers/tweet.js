module.exports = {
  getOneRandom: function getOneRandom (req, res) {
    var db = req.we.db;

    db.models.tweet.findOne({
      order: db.Sequelize.fn('RANDOM')
    })
    .then(function (r) {
      res.locals.data = r
      res.ok()
    })
    .catch(res.queryError)
  }
};
