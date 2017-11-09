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
// $("#submit").click(function(){
//   // using actual title (seperate the words)
//    let title = document.getElementById('#title');
//     $.get("http://www.omdbapi.com/?t="+title+"&apikey=297a2582", function(data){

    $.get("http://www.omdbapi.com/?t=Game of Thrones&Season=1&apikey=297a2582", function(data){
        console.log(data.Episodes);
        // console.log(JSON.parse(JSON.stringify(data)));
    });

    $.get("https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3NTQ1NDg1Ml5BMl5BanBnXkFtZTgwNzY2NDA0MjI@._V1_SX300.jpg"), function(data) {
      let newDiv = $('<div>');
      newDiv.attr("id", );
    }


// });
});
