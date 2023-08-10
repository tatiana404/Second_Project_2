$(document).ready(function () {
  const templateSource = $('#tweet-template').html();
  const template = Handlebars.compile(templateSource);
  
  $('#tweet-button').on('click', function () {
      const tweetText = $('#tweet-text').val();
      const timestamp = new Date().toLocaleString();
     
      
      const newTweet = {
          text: tweetText,
          timestamp: timestamp,
      };
      
      const context = { tweets: [newTweet] };
      const html = template(context);
      
      $('#timeline').prepend(html);
      $('#tweet-text').val('');
  });
});