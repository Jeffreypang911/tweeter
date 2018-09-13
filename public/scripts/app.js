$(document).ready(function() { 

  const tweetData = [
      {
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
      },
      {
        "user": {
          "name": "Descartes",
          "avatars": {
            "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
            "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
            "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
          },
          "handle": "@rd" },
        "content": {
          "text": "Je pense , donc je suis"
        },
        "created_at": 1461113959088
      },
      {
        "user": {
          "name": "Johann von Goethe",
          "avatars": {
            "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
            "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
            "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
          },
          "handle": "@johann49"
        },
        "content": {
          "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
        },
        "created_at": 1461113796368
      }
    ];

  //   example: var $tweet = $("<article>").addClass("tweet");

  function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }



  const createTweetElement = function (tweetObject) {
      var $article = $("<article>");
      var $header = $("<header>").addClass("header");
      var $content = $("<p>").addClass("tweet").append(escape(tweetObject.content.text));
      var $footer = $("<footer>").addClass("tweet");

      var $image = $("<img>").addClass("userimg").attr('src', tweetObject.user.avatars.large);
      var $name = $("<h2>").addClass("username").append(tweetObject.user.name);
      var $account = $("<p>").addClass("account").append(tweetObject.user.handle);
      var $timestamp = $("<p>").addClass("foot").attr('id', 'timestamp').append(tweetObject.created_at);

      $header.append($name);
      $header.append($image);
      $header.append($account);
      $footer.append($timestamp);

      $article.append($header);
      $article.append($content);
      $article.append($footer);

      $('#post-container').prepend($article);     
  }

  function renderTweets(tweets) {
      $('#post-container').empty();
      tweets.forEach(object => {
      createTweetElement(object);
      });
  }



  $( "#compose" ).click(function() {
      $( ".new-tweet" ).slideToggle()
  })



  // renderTweets(tweetData);
  // $.ajax('//').done(renderTweets);

  $('#tweet-new').on('submit', function(e) {
    e.preventDefault();
    
    let formData = $('#tweet-new').serialize()
    let textArea = $('textarea').val();
    if (textArea === '') {
      alert("Please Enter Tweet");
    } 
    else if (textArea.length > 140) {
      alert("Your tweet is too long")
    }
    else {
    $.ajax('/tweets/', { method:'POST', data: formData}).then(function() {
      $('textarea').val('');
      return $.ajax('/tweets/');
    
    }).then(function(tweets){ 
        renderTweets(tweets);
    });
  }
});




// $(function() {
//   var $button = $('#load-more-posts');
//   $button.on('click', function () {
//     console.log('Button clicked, performing ajax call...');
//     $.ajax('more-posts.html', { method: 'GET' })
//     .then(function (morePostsHtml) {
//       console.log('Success: ', morePostsHtml);
//       $button.replaceWith(morePostsHtml);
//     });
//   });
// });


var loadTweets = function() {
  $.ajax('/tweets/', { method: 'GET' })
  .then(function(tweets){
    renderTweets(tweets);
  });
};

loadTweets();

});
