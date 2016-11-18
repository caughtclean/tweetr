$(function() {



  function renderTweets(tweets) {
    var container = $('#created-tweets').html('');

    tweets.forEach(function(tweet) {
      var tweetInfo = createTweetElement(tweet)
      container.prepend(tweetInfo);
    });
  };


  function createTweetElement(tweet) {
    var name = tweet.user.name
    var avatar = tweet.user.avatars.small
    var handle = tweet.user.handle
    var content = tweet.content.text
    var created = tweet.created_at
    var time = moment(created).fromNow();
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
    var $foottext = $('<p>').addClass("foot-text").text(time)
    $footer.append($foottext)
    $footer.append('<i class="fa fa-heart" aria-hidden="true"></i>')
    $footer.append('<i class="fa fa-retweet" aria-hidden="true"></i>')
    $footer.append('<i class="fa fa-flag" aria-hidden="true"></i>')
    $tweet.append($footer)
    $('#tweets-container').append($tweet);
    return $tweet;
  }


  $('form[action="/tweets/"]').on('submit', function(event) {
    event.preventDefault();
    var tweetInput = $(this)
    var input = tweetInput.find("textarea").serialize()
    if (input.length > 145) {
      $.flash("Exceeded maximum tweetage bro!")
      return
    }

    if (input === "text=") {
      event.preventDefault();
      $.flash("Tweetage Empty!")
    } else


      $.ajax({
      method: 'post',
      url: tweetInput.attr('action'),
      data: tweetInput.find("textarea").serialize(),
    }).done(function() {
      loadTweets()
      $('form[action="/tweets/"]').each(function() {
        this.reset();
      })
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

  $('.compose').click(function() {
    $('.compose').fadeTo("fast", $('.compose').css("opacity") == "1" ? "0.5" : "1");
    if ($('.new-tweet').is(":hidden")) {
      $('.new-tweet').slideDown("ease");
      $('textarea').focus()
    } else {
      $('.new-tweet').slideUp("ease");
    }
  });


});
