$(document).ready(function(){

  var $preloader = $('#loader');
  $preloader.hide();
$('select').on('change', function(){
  var category = $('#selector').val();
  $('header').switchClass( 'mainContainer', 'contentContainer', 1000, 'easeInOutQuad') ;
  $('header').switchClass('nytLogo','nytLogoWithContent', 1000, 'easeInOutQuad');
  $preloader.show();
// $( '.nytLogo' ).addClass( '.logoWithArticle');
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
  $preloader.hide();
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

}
)

.fail(function(err) {
 $('.news').append('Sorry cannot connect to the server');
})
//  .always(function(){
//    console.log('hello');
//    $('#loader').hide();
//  }


})
// .fail(function(err) {
//   throw ('Sorry, cannot connect to New York Times');
});