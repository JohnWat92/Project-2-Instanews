$(document).ready(function () {
  var $preloader = $('#loader');
  $preloader.hide();
  $('select').selectric().on('change', function () {
    var category = $('#selector').val();
    $('header').addClass('contentContainer' );
    $('header').addClass('nytLogoWithContent');
    $preloader.show();
    var url = 'https://api.nytimes.com/svc/topstories/v2/' + category + '.json';
    url += '?' + $.param({
      'api-key': '3d28473005934732a782b978011b1421'
    });
    $('.news').empty();
    $.ajax({
      url: url,
      method: 'GET',
    })
    .done(function (result){
      $preloader.hide();
      var nytDataSet = result.results;
      function multimediaCheck(nytDataSet){
        return nytDataSet.multimedia.length === 5;
      }
      var nytFilterDataSetArray = nytDataSet.filter(multimediaCheck).slice(0, 12);
      $.each(nytFilterDataSetArray, function (index, value){
        var abstract = value.abstract;
        var title = value.title;
        var siteURL = value.url;
        var imageURL = value.multimedia[4].url;
        var listItem = '';
        listItem += '<li><a href=' + siteURL + ' target="_blank">';
        listItem += '<img src=" ' + imageURL + '">';
        listItem += '<div class="articleTitle"><p>' + title + '</p></div>';
        listItem += '<div id="wrapper"><p>' + abstract + '</p></div>';
        listItem += '</a></li>';
        $('.news').append(listItem);
      })
    })
    .fail(function (){
      $('.news').append('<li class = "errorMessage"> Sorry cannot connect to the server </li>');
    }).always(function (){
      $preloader.hide();
    });  })
});
