const express = require('express')
const router  = express.Router()
const OAuth = require('oauth');
const twitterController = require('../controller/twitter')


// home timeline ==== GET statuses/home_timeline
router.get('/statuses/home_timeline', twitterController.getAllStatusses)

// user timeline ===== GET statuses/user_timeline
router.get('/statuses/user_timeline/:username', twitterController.getUserTimeline)

// Search Tweets ===== GET statuses/search/keyword
router.get('/statuses/search/:keyword', twitterController.searchTweet)

// Post Tweets ===== POST statuses/update
router.post('/statuses/update', twitterController.postTweet )





module.exports = router
