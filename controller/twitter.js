const OAuth = require('oauth');
require('dotenv').config()
const userToken = process.env.USER_TOKEN
const userSecret = process.env.USER_SECRET
const apiKey = process.env.API_KEY
const apiSecret = process.env.API_SECRET

var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
   'https://api.twitter.com/oauth/access_token',// acces token secret
   apiKey,
   apiSecret,
   '1.0A',
   null,
   'HMAC-SHA1'
 );


const getAllStatusses = (req, res) => {
   oauth.get(
     'https://api.twitter.com/1.1/statuses/home_timeline.json',
     userToken, //test user token
     userSecret, //test user secret
     function (e, data, respond){
       if (e) console.error(e);
       console.log(require('util').inspect(data));
       res.send(data)
     });
}

const getUserTimeline = (req, res) => {
  const username = req.params.username
  console.log(username);
   oauth.get(
     `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${username}`,
     userToken, //test user token
     userSecret, //test user secret
     function (e, data, respond){
       if (e) console.error(e);
       //console.log(require('util').inspect(data));
       res.send(data)
     }
   );
}


const searchTweet = (req, res) => {
  const keyword = req.params.keyword
   oauth.get(
     `https://api.twitter.com/1.1/search/tweets.json?q=${keyword}`,
     userToken, //test user token
     userSecret, //test user secret
     function (e, data, respond){
       if (e) console.error(e);
       console.log(require('util').inspect(data));
       res.send(data)
     }
   );
}




const postTweet = (req, res) => {
  const status = {status:req.body.status}
   oauth.post(
     `https://api.twitter.com/1.1/statuses/update.json`,
     userToken, //test user token
     userSecret, //twTest user secret
     status,
     function (e, data, respond){
       if (e) console.error(e);
       console.log(require('util').inspect(data));
       res.send(data)
     }
   );
}



module.exports = {
  getAllStatusses,
  getUserTimeline,
  searchTweet,
  postTweet
};
