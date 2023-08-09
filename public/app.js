// document.addEventListener("DOMContentLoaded", function () {
//     const dropdownButton = document.querySelector(".dropdown-button");
//     const dropdownContent = document.querySelector(".dropdown-content");
  
//     dropdownButton.addEventListener("click", function () {
//       dropdownContent.classList.toggle("show");
//     });
  
//     const searchInput = document.querySelector(".search-input");
//     const mainContent = document.querySelector(".main-section");
  
//     searchInput.addEventListener("input", function () {
//       const searchTerm = searchInput.value.toLowerCase();
//       const paragraphs = mainContent.querySelectorAll("p");
      
//       paragraphs.forEach(paragraph => {
//         const text = paragraph.textContent.toLowerCase();
//         if (text.includes(searchTerm)) {
//           paragraph.style.display = "block";
//         } else {
//           paragraph.style.display = "none";
//         }
//       });
//     });
//   });

$(document).ready(function () {
  const tweets = [
      { text: "My first post!", timestamp: "2023-08-01 12:00" },
      { text: "Me seond post!", timestamp: "2023-08-01 12:30" },
  ];


  const templateSource = $('#tweet-template').html();
  const template = Handlebars.compile(templateSource);

 
  renderTweets(tweets);


  $('#tweet-button').on('click', function () {
      const tweetText = $('#tweet-text').val();
      const timestamp = new Date().toLocaleString();

  
      const newTweet = {
          text: tweetText,
          timestamp: timestamp,
      };

  
      tweets.push(newTweet);
  });

 
  function renderTweets(tweetData) {
      const context = { tweets: tweetData };
      const html = template(context);
      $('#timeline').html(html);
  }
});
