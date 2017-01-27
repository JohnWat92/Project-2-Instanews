// Built by LucyBot. www.lucybot.com
$(document).ready(function(){

var url = 'https://api.nytimes.com/svc/topstories/v2/home.json';
url += '?' + $.param({
  'api-key': '3d28473005934732a782b978011b1421'
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
  var dataSet = result;

    if (dataSet.results.length > 0) {

      $.each(dataSet.results, function (index, value) {
       var changeInput = $('.selector').val();
       console.log(changeInput)
        /*
        set the newsImageLink to empty and only add
        the image link if there is stuff in it
         */
        var newsImageLink='';
        //debugger;
        if ( value.multimedia.length){
           newsImageLink = value.multimedia[3].url;
          console.log(newsImageLink);
        }
         
        $('.news').append('<li class="results_wrap"><h3 class="h1result">' + value.title + '</h3><img src=' + newsImageLink + ' /></li>');

      })

    }

    else {
      alert('got no data back from server');
  }
}).fail(function(err) {
  throw err;
});
$('select').on('change')

})