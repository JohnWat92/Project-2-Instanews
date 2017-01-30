$(document).ready(function(){

  var $loadingMessage = $('#loading');
  $loadingMessage.hide();
$('select').on('change', function(){
  var category = $('#selector').val();
  $loadingMessage.show();
  var url = 'https://api.nytimes.com/svc/topstories/v2/' + category + '.json';
url += '?' + $.param({
  'api-key': '3d28473005934732a782b978011b1421'
});
$('.news').empty();
$.ajax({
  url: url,
  method: 'GET',
})

.done(function(result) {
  console.log(result);
  $loadingMessage.hide();
  var nytDataSet = result.results; 

  function mmCheck(nytDataSet){
   return nytDataSet.multimedia.length === 5;
  }
// console.log(dataSet);
var filteredArray = nytDataSet.filter(mmCheck)
// console.log(filteredArray); 
var slicedArray = filteredArray.slice(0,12);
// console.log(slicedArray);

$.each(slicedArray, function(index, value){
  // console.log(value.abstract);
  var abstract = value.abstract;
  var siteURL = value.url;
  var imageURL = value.multimedia[4].url;
  var listItem = ' ';

  listItem += '<li><a href=' + siteURL + ' target="_blank">';
        listItem += '<img src=" '+ imageURL +'">';
        listItem += '<div id=wrapper><p>'+ abstract +'</p></div>';
        listItem += '</a></li>';
  $('.news').append(listItem);
})

})
})})
// .fail(function(err) {
//   throw err;
// });
// $('select').on('change')