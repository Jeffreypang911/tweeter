$(document).ready(function() { 
  //   example: var $tweet = $("<article>").addClass("tweet");
  function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  const createTweetElement = function (tweetObject) {
    var $article = $("<article>").addClass("article");
    var $articlebox = $("<article>").addClass("articlebox");
    var $header = $("<header>").addClass("header");
    var $content = $("<p>").addClass("tweet").append(escape(tweetObject.content.text));
    var $footer = $("<footer>").addClass("tweet");

    var $image = $("<img>").addClass("userimg").attr('src', tweetObject.user.avatars.large);
    var $name = $("<h2>").addClass("username").append(tweetObject.user.name);
    var $account = $("<p>").addClass("account").append(tweetObject.user.handle);
    var $timestamp = $("<p>").addClass("foot").attr('id', 'timestamp').text(moment(tweetObject.created_at).fromNow());
    var $likebutton = $("<img>").addClass("likebutton").attr('src', '/images/likebutton.png');
    
    $header.append($name);
    $header.append($image);
    $header.append($account);
    $footer.append($likebutton);
    $footer.append($timestamp);

    $article.append($header);
    $article.append($content);
    $article.append($footer);
    $article.append($articlebox);

    $('#post-container').prepend($article);     
  }

  function renderTweets(tweets) {
    $('#post-container').empty();
    tweets.forEach(tweet => {
      createTweetElement(tweet);
    });
  }
  //slides tweet box up and down upon button press
  $( "#compose" ).click(function() {
    $( ".new-tweet" ).slideToggle()
  });
  //resets warning box message
  $( "#text" ).click(function() {
    $("#warningbox1").slideUp();
    $("#warningbox2").slideUp();
  });
  //like button
  $('body').on("click", ".likebutton", function(){
    alert("You Like This!");
  });
  // renderTweets(tweetData);
  $('#tweet-new').on('submit', function(e) {
    e.preventDefault();
    
    let formData = $('#tweet-new').serialize()
    let textArea = $('textarea').val();
    if (textArea === '') {
      $( "#warningbox1" ).slideDown();
    } else if (textArea.length > 140) {
      $( "#warningbox2" ).slideDown();
    } else {
      $.ajax('/tweets/', { method:'POST', data: formData })
      .then(function() {
        $('textarea').val('');
        loadTweets();
      });
    }
  });

  var loadTweets = function() {
    $.ajax('/tweets/', { method: 'GET' })
    .then(renderTweets);
  };

  loadTweets();

});
