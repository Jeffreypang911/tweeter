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

const createTweetElement = function (tweetObject) {
    var $article = $("<article>");
    var $header = $("<header>").addClass("header");
    var $content = $("<p>").addClass("tweet").append(tweetObject.content.text);
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

    $('#post-container').append($article);     
}

function renderTweets(tweets) {
    tweetData.forEach(object => {
    createTweetElement(object);
    });
}

renderTweets(tweetData);
    // loops through tweets
      // calls createTweetElement for each tweet
      // takes return value and appends it to the tweets container
  

  

});