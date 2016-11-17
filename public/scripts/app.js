
$(function () {

 function createTweetElement() {
   var name = tweetData.user.name
   var avatar = tweetData.user.avatars.small
   var handle = tweetData.user.handle
   var content = tweetData.content.text
   var created = tweetData.created_at
   var $tweet = $("<article>").addClass("tweet");
   var $header = $('<header>');
   var $footer = $('<footer>');
   $tweet.append($header)
   var $name = $('<h2>').addClass('head-text').text(name);
   var $handle = $('<span>').addClass("userhandle").text(handle);
   var $avatar = $('<img>').addClass("avatar").attr("src", avatar)
   $header.append($handle).append($name).append($avatar)
   $('#created-tweets').append($tweet)
   var $tweettext = $('<p>').addClass("tweet-text").text(content)
   $tweet.append($tweettext)
   var $foottext = $('<p>').addClass("foot-text").text(created)
   $footer.append($foottext)
   $tweet.append($footer)
   // return $tweet
   // // }
   // return $tweet
   console.log($tweet[0])
 }









var tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet);

});