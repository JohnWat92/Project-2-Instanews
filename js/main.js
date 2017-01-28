// Built by LucyBot. www.lucybot.com
$(document).ready(function(){
$('select').on('change', function(){
  var category = $('#selector').val();

  var url = 'https://api.nytimes.com/svc/topstories/v2/' + category + '.json';
url += '?' + $.param({
  'api-key': '3d28473005934732a782b978011b1421'
});

$.ajax({
  url: url,
  method: 'GET',
})


.done(function(result) {
  console.log(result);
  var dataSet = result.results; 

  function mmCheck(dataSet){
   return dataSet.multimedia.length == 5;
  }
console.log(dataSet);
var filteredArray = dataSet.filter(mmCheck)
console.log(filteredArray); 
var slicedArray = filteredArray.slice(0,12);
console.log(slicedArray);

$.each()



  // var testedData
  // function contentTest(dataSet.results.length)
  // console.log(dataSet.results[0])
  // console.log(dataSet.results[3].multimedia[4].url);
  // function(dataSet.results){
  // var multimedia = dataSet.results;
  // console.log(multimedia.length)})


// var array = [1, 2, 3, 4, 5, 54,43,23,321, 32,42,65];
// function biggerThanForty(value){
//   return value >40;
// }

// var newArray = array.filter(biggerThanForty);
// console.log(newArray);

  
    // if (dataSet.results.length > 0) {

    //   $.each(dataSet.results, function (index, value) {
    //    var changeInput = $('.selector').val();
    //    console.log(changeInput)
    //     /*
    //     set the newsImageLink to empty and only add
    //     the image link if there is stuff in it
    //      */
    //     var newsImageLink='';
    //     //debugger;
    //     if ( value.multimedia.length){
    //        newsImageLink = value.multimedia[3].url;
    //       console.log(newsImageLink);
    //     }
         
  //       $('.news').append('<li class="results_wrap"><h3 class="h1result">' + value.title + '</h3><img src=' + newsImageLink + ' /></li>');

  //     })

  //   }

  //   else {
  //     alert('got no data back from server');
  // }
}).fail(function(err) {
  throw err;
});
// $('select').on('change')
})})