$(document).ready(function() {
// let counter = 0;
// Grab the data from button:
$("#submit").click(function(e){
  // counter++;
   // using actual title (seperate the words)
   e.preventDefault();
   // $('#episodes').empty();
   // separate button into a show api call and a season api call
   let title = $('#title').val();
   let showUrl = "http://www.omdbapi.com/?t="+String(title)+"&apikey=297a2582"
   let seasonUrl = "http://www.omdbapi.com/?t="+String(title)+"&Season=1&apikey=297a2582"
   // Parse general show data
  $.get(showUrl, function(showData){
    $('#div-1').empty();
    $('#div-2').empty();
    $('#div-3').empty();
    $('#background').empty();
    // $('popcorn-maker').style.display = 'none';
    $('#info').empty();
    // $('#popcorn-maker').empty();
    console.log('showData: ', showData);
    console.log('Overall Rating: ', showData.imdbRating);
    console.log('Title: ', showData.Title);
    console.log('Plot: ', showData.Plot);
    console.log('Awards: ', showData.Awards);
    console.log('Released: ', showData.Released);
    console.log('Actors: ', showData.Actors);
    console.log('Genre: ', showData.Genre);
    console.log('IMDB Link: ', "www.imdb.com/title/"+showData.imdbID+"/");
    console.log('Poster: ', showData.Poster);
    let plot = showData.Plot;
    // console.log(plot1.length)
    // let plot = '';
    plot = plot.slice(0,Math.floor(plot.length/1.5)) + '...';
    // }
    let overallRating = showData.imdbRating;
    let actors = showData.Actors;
    let firstP = $('<p>');
    let link = "www.imdb.com/title/"+showData.imdbID+"/";
    $('#background').append('<img id="poster" src="'+showData.Poster+'" />');  
    firstP.html('<strong>Plot:</strong> ' + plot);//plot);
    let secondP = $("<p>");
    secondP.html('<strong>Overall Rating:</strong><i class="fa fa-star-o"></i><span style="color: #F5DC7E"><strong> ' + overallRating + '/10</span>');
    let thirdP = $("<p>");
    thirdP.html('<strong>Main Actors:</strong> ' + actors);
    let fourthP = $("<p>");
    fourthP.html('<a href="'+link+'"">Click for More</a>');
    console.log('link: ', '<a href='+link+'>Click for More</a>');
    $('#general-info').append('General Show Info');
    $('#info').append(firstP).append(secondP).append(thirdP).append(fourthP);
    // $('#episodes').css("biskground-color", "rgba(241,241,241,.8)");
    // $('#episodes').css("color", "blue");

  });

    $("#background").click(function(){
      // POPCORN ON THE TOP
      $('#popcorn-maker').prepend('<img id="popcorn" src="popcorn.png"/>');
      $('#popcorn-maker').prepend('<img id="popcorn" src="popcorn.png"/>');
      $('#popcorn-maker').prepend('<img id="popcorn" src="popcorn.png"/>');
      $('#popcorn-maker').prepend('<img id="popcorn" src="popcorn.png"/>');
      $('#popcorn-maker').prepend('<img id="popcorn" src="popcorn.png"/>');
      $('#popcorn-maker').prepend('<img id="popcorn" src="popcorn.png"/>');
      $('#popcorn-maker').prepend('<img id="popcorn" src="popcorn.png"/>');
      $('#popcorn-maker').prepend('<img id="popcorn" src="popcorn.png"/>');
      $('#popcorn-maker').prepend('<img id="popcorn" src="popcorn.png"/>');
      $('#popcorn-maker').prepend('<img id="popcorn" src="popcorn.png"/>');
      $('#popcorn-maker').prepend('<img id="popcorn" src="popcorn.png"/>');
      $('#popcorn-maker').prepend('<img id="popcorn" src="popcorn.png"/>');
      // POPCORN ON THE BOTTOM 
      $('#popcorn-eater').prepend('<img id="popcorn" src="popcorn.png"/>');
      $('#popcorn-eater').prepend('<img id="popcorn" src="popcorn.png"/>');
      $('#popcorn-eater').prepend('<img id="popcorn" src="popcorn.png"/>');
      $('#popcorn-eater').prepend('<img id="popcorn" src="popcorn.png"/>');
      $('#popcorn-eater').prepend('<img id="popcorn" src="popcorn.png"/>');
      $('#popcorn-eater').prepend('<img id="popcorn" src="popcorn.png"/>');
      $('#popcorn-eater').prepend('<img id="popcorn" src="popcorn.png"/>');
      $('#popcorn-eater').prepend('<img id="popcorn" src="popcorn.png"/>');
      $('#popcorn-eater').prepend('<img id="popcorn" src="popcorn.png"/>');
      $('#popcorn-eater').prepend('<img id="popcorn" src="popcorn.png"/>');
      $('#popcorn-eater').prepend('<img id="popcorn" src="popcorn.png"/>');
      $('#popcorn-eater').prepend('<img id="popcorn" src="popcorn.png"/>');     
    });

  $("a").click(function(e){
    window.replace = "www.imdb.com/title/"+showData.imdbID+"/";
  });

  // Parse show's season episode specific data
  $.get(seasonUrl, function(data){
      console.log(data)
      let episodesArr = data.Episodes;
      sortedArr = episodesArr.sort(function(a, b) {
        // console.log
        return (b.imdbRating - a.imdbRating);
     });


  // Update the dom with our data
  // let username = [];
  console.log(sortedArr);
  for (let i = 0; i <= 2; i++) {
    sortedArr[i].Title;
    let firstP = $("<p>");
    firstP.attr('class', 'title');
    firstP.html('<strong><span style="color: white">Ep. Name:</span> ' + sortedArr[i].Title + "</strong> ");
    let secondP = $("<p>");
    secondP.html('<strong>Ep. Num.:</strong> ' + sortedArr[i].Episode);
    let thirdP = $("<p>");
    thirdP.html('<strong>IMDb Rating: </strong><span style="color: #F5DC7E"><strong>' + sortedArr[i].imdbRating + '/10</strong> </span>');
    let x = "#div-"+(i+1);
    console.log(x)
    $(x).append(firstP).append(secondP).append(thirdP);
  }
  });
 });
    //  OK to DELETE?
    // $.get("https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3NTQ1NDg1Ml5BMl5BanBnXkFtZTgwNzY2NDA0MjI@._V1_SX300.jpg"), function(data) {
    //   let newDiv = $('<div>');
    //   newDiv.attr("id", );
    // }
});
