$(function() {



  function renderTweets(tweets) {
    var container = $('#created-tweets').html('');

    tweets.forEach(function(tweet) {
      var tweetInfo = createTweetElement(tweet)
      console.log("tweetInfo", tweetInfo);
      container.prepend(tweetInfo);
    });
  };




  function createTweetElement(tweet) {
    var name = tweet.user.name
    var avatar = tweet.user.avatars.small
    var handle = tweet.user.handle
    var content = tweet.content.text
    var created = tweet.created_at
    var $tweet = $("<article>").addClass("tweet");
    var $header = $('<header>');
    var $footer = $('<footer>');
    $tweet.append($header)
    var $name = $('<h2>').addClass('head-text').text(name);
    var $handle = $('<span>').addClass("userhandle").text(handle);
    var $avatar = $('<img>').addClass("grow").attr("src", avatar)
    $header.append($handle).append($name).append($avatar)
    var $tweettext = $('<p>').addClass("tweet-text").text(content)
    $tweet.append($tweettext)
    var $foottext = $('<p>').addClass("foot-text").text(created)

    $footer.append($foottext)
    $footer.append('<i class="fa fa-heart" aria-hidden="true"></i>')
    $footer.append('<i class="fa fa-retweet" aria-hidden="true"></i>')
    $footer.append('<i class="fa fa-flag" aria-hidden="true"></i>')


    $tweet.append($footer)
    $('#tweets-container').append($tweet);
    // console.log($tweet[0])
    // $('#created-tweets').append($tweet)
    return $tweet;
  }


  $('form[action="/tweets/"]').on('submit', function(event) {
    event.preventDefault();
    var tweetInput = $(this)
    console.log(tweetInput)


    $.ajax({
      method: 'post',
      url: tweetInput.attr('action'),
      data: tweetInput.find("textarea").serialize(),
    }).done(function() {
      loadTweets()
    });


  });


  function loadTweets() {
    $.ajax({
      type: 'get',
      url: "/tweets/",
      dataType: 'json',
      success: function(tweetData) {
        renderTweets(tweetData)
      }
    });
  }

  loadTweets()


});
