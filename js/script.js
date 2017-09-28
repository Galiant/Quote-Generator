/*GENERATE QUOTE*/

$(document).ready(function() {
  $("#newQuote").on("click", function getQuote() {
    var cb = Math.round(new Date().getTime() / 500);
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
    var twtLink =
      "https://twitter.com/home?status=" + encodeURIComponent(textToTweet);
    window.open(twtLink, "_blank");
  });
});

/*FACEBOOK*/
$(document).ready(function() {
  $(".facebook").click(function(e) {
    var textToFace = $("#quoteBox").text();
    var faceLink =
      "https://www.facebook.com/sharer/sharer.php?u=http%3A//antonijogalic.com/quote-generator/" +
      encodeURIComponent(textToFace);
    window.open(faceLink, "_blank");
  });
});
