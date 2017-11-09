// var request = require('request');
// var cheerio = require('cheerio');

// var table2json = require('table2json');
// table2json.parse(table);

// request('http://www.imdb.com/title/tt0944947/eprate', function (error, response, html) {
//   console.log('here');
//   console.log(response.statusCode);
//   if (!error && response.statusCode == 200) {
//     console.log(html);
//   }
// });

// $(document).ready(() => {
//   console.log('WHY')
//   $('#submit').click((e) => {
//     $.ajax({
//       url: 'www.imdb.com/title/tt0944947/eprate',
//       method: 'GET',
//       success: data => console.log('data', data),
//       error: function(xhr, status, errorThrown) {
//         console.log('error?');
//         xhr.status;
//         xhr.responseText;
//       }
//     })
//   })

$(document).ready(function() {
$("#submit").click(function(e){
//   // using actual title (seperate the words)
   e.preventDefault();
   // console.log(e);
   let title = $('#title').val();
   // console.log('title?' + $('#title').val());
   // console.log('input?' + )
   let url = "http://www.omdbapi.com/?t="+String(title)+"&Season=1&apikey=297a2582"
   console.log(url);
   console.log('fake: ', "http://www.omdbapi.com/?t=Game of Thrones&Season=1&apikey=297a2582")
   console.log("http://www.omdbapi.com/?t="+String(title)+"&Season=1&apikey=297a2582");
    $.get(url, function(data){
        console.log(data)
    // $.get("http://www.omdbapi.com/?t=Game of Thrones&Season=1&apikey=297a2582", function(data){
        let episodesArr = data.Episodes;
        sortedArr = episodesArr.sort(function(a, b) {
          return (a.imdbRating < b.imdbRating);    
        });

    let username = [];
    console.log(sortedArr);
    for (let i = 0; i <= 2; i++) {
      console.log(sortedArr[i].Title);
      sortedArr[i].Title;
      let firstP = $("<p>");
      firstP.attr('class', 'title');
      firstP.html('<strong>' + sortedArr[i].Title + "</strong> ");
      let secondP = $("<p>");
      secondP.html('Episode: ' + sortedArr[i].Episode);
      let thirdP = $("<p>");
      thirdP.html('IMDb Rating: ' + sortedArr[i].imdbRating);
      $("#images").append(firstP).append(secondP).append(thirdP);
    }
    });

    }); 



    // $.get("https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3NTQ1NDg1Ml5BMl5BanBnXkFtZTgwNzY2NDA0MjI@._V1_SX300.jpg", function(data) {
      // $('#images').append('<img src=https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3NTQ1NDg1Ml5BMl5BanBnXkFtZTgwNzY2NDA0MjI@._V1_SX300.jpg>');
    // });


// });
});
