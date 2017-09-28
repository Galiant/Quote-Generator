/*GENERATE QUOTE*/

$(document).ready(function() {
  $("#newQuote").on("click", function getQuote() {
    var cb = Math.round(new Date().getTime() / 1000);
    $.getJSON(
      "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=" +
        cb,
      function(a) {
        $("#quoteBox").html(a[0].content + "<p>— " + a[0].title + "</p>");
      }
    );
  });
});

/*TWEET*/
$(document).ready(function() {
  $(".twitter").click(function(e) {
    var textToTweet = $("#quoteBox").text();
    if (textToTweet.length > 140) {
      alert("Tweet should be less than 140 Chars");
    } else {
      var twtLink =
        "https://twitter.com/home?status=" + encodeURIComponent(textToTweet);
      window.open(twtLink, "_blank");
    }
  });
});

/*FACEBOOK*/
$(document).ready(function() {
  $(".facebook").click(function(e) {
    var textToFace = $("#quoteBox").text();
    if (textToFace.length > 140) {
      alert("Facebook post should be less than 140 Chars");
    } else {
      var faceLink =
        "https://www.facebook.com/sharer/sharer.php?u=http%3A//codepen.io/Galiant/full/EKOpKq/" +
        encodeURIComponent(textToFace);
      window.open(faceLink, "_blank");
    }
  });
});
