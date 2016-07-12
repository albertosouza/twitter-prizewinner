/**
 * We.js plugin file, use to load routes and configs
 *
 * @param  {String} projectPath current project path
 * @param  {Object} Plugin      we.js Plugin class
 * @return {Object}             intance of we.js Plugin class
 */

var Twitter = require('twitter')
var express = require('express')
var path = require('path')

module.exports = function loadPlugin(projectPath, Plugin) {
  var plugin = new Plugin(__dirname);

  plugin.setConfigs({
    twitter: {
      track: process.env.TWITTER_TAG || 'nodejs'
    },
    apiKeys: {
      twitter: {
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
      }
    }
  })

  plugin.events.on('we:bootstrap:done', function(we) {
    var client = new Twitter(we.config.apiKeys.twitter);

    var stream = client.stream('statuses/filter', we.config.twitter);

    stream.on('data', function (tweet) {
      // console.log(tweet.text);

      var data = {
        text: tweet.text,
        lang: tweet.lang,
        userName: tweet.user.screen_name,
        userDisplayName: tweet.user.name,
        userImage: tweet.user.profile_image_url
      }

      // data.imageUrl

      we.db.models.tweet.create(data)
      .then(function (r) {
        we.log.verbose('New tweet created:', r.id)
      })
      .catch(function (err) {
        we.log.error('Error on create tweet:', err)
      })
    })

    stream.on('error', function (error) {
      we.log.error('Erro on get tweet:', error);
    })
  })

  /**
   * Middleware for serve static client pages
   *
   * @param  {Object} we we.js app
   */
  plugin.bindClientAppFolder = function bindClientAppFolder(we) {

    plugin.clientAppMD = express.static(path.join( we.projectPath, 'client/dist'))

    we.express.use(function (req, res, next) {
      if (!req.accepts('html')) return next()

      plugin.clientAppMD(req, res, next)
    })
  }

  plugin.events.on('we:after:load:express', plugin.bindClientAppFolder)

  return plugin
};
