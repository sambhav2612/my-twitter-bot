// app.js

var Twitter = require('twitter');
var config = require('./config.js');

var T = new Twitter(config);

// Set up your search parameters
var params = {
  q: '#android',
  q: '#androiddev',
  q: '#googledev',
  q: '#googlecloud',
  q: '#searchconsole',
  q: '#googleanalytics',
  q: '#documentation',
  q: '#developerguide',
  q: '#androidstudio',
  q: '#twitterdev',
  q: '#developer',
  q: '#github',
  q: '#git',
  q: '#versioncontrol',
  q: '#outreachy',
  q: '#mozilla',
  q: '#firefox',
  q: '#python',
  q: '#pydata',
  q: '#nodejs',
  q: '#npm',
  q: '#node',
  q: '#google',
  q: '#ubuntu',
  q: '#gdgfest',
  q: '#androiddevelopers',
  q: '#googledevelopers',
  count: 100
}

/*  T.post('statuses/update', {
  status: 'Hello World!'
}, (err, data, response) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`${data.text} tweeted!`)
  }
})
*/

/*T.get('friendships/lookup', {screen_name: 'sambhavvjain'}, (err, data, response) => {
	"use strict";
  if (err) {
    console.log(err)
  } else {
    let me = 'sambhavvjain';
    T.post('friendships/create', {me}, function(err, res){
    if(err){
      console.log(err);
    } else {
      console.log(me, ': **FOLLOWED**');
    }
  });
  }
})*/

T.get('search/tweets', params, function(err, data, response) {
	"use strict";
  if(!err){
  
	// Loop through the returned tweets
    for(let i = 0; i < data.statuses.length; i++){
      // Get the tweet Id from the returned data
      let id = { id: data.statuses[i].id_str }
      
      let screen_name = data.statuses[i].user.screen_name;
      // Try to Favorite the selected Tweet
      T.post('favorites/create', id, function(err, response){
        // If the favorite fails, log the error message
        if(err){
          console.log(err[0].message);
        }
        // If the favorite is successful, log the url of the tweet
        else{
          let username = response.user.screen_name;
          let tweetId = response.id_str;
          console.log('Favorited: ', `https://twitter.com/${username}/status/${tweetId}`)
        }
      });
      
      T.post('friendships/create', {screen_name}, function(err, res){
    if(err){
      console.log(err);
    } else {
      console.log(screen_name, ': **FOLLOWED**');
    }
  });
  
  T.post('statuses/retweet', id, function(err, res){
    if(err){
      console.log(err);
    } else {
      console.log(screen_name, ': **RETWEETED**');
    }
  });
  
    }
  } else {
    console.log(err);
  }
})

// grab & 'favorite' as soon as program is running...//
//myBot();
// 'favorite' a tweet in every 5 minutes
//setInterval(myBot, 300000);
