$(document).ready(function () {

  var $preloader = $('#loader');
  $preloader.hide();
  $('select').on('change', function () {
    var category = $('#selector').val();
    $('header').switchClass('mainContainer', 'contentContainer', 1000, 'easeInOutQuad');
    $('header').switchClass('nytLogo', 'nytLogoWithContent', 1000, 'easeInOutQuad');
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

      .done(function (result) {
        console.log(result);
        $preloader.hide();
        var nytDataSet = result.results;

        function mmCheck(nytDataSet) {
          return nytDataSet.multimedia.length === 5;
        }
        var filteredArray = nytDataSet.filter(mmCheck)
        var slicedArray = filteredArray.slice(0, 12);

        $.each(slicedArray, function (index, value) {
          var abstract = value.abstract;
          var siteURL = value.url;
          var imageURL = value.multimedia[4].url;
          var listItem = ' ';

          listItem += '<li><a href=' + siteURL + ' target="_blank">';
          listItem += '<img src=" ' + imageURL + '">';
          listItem += '<div id=wrapper><p>' + abstract + '</p></div>';
          listItem += '</a></li>';
          $('.news').append(listItem);
        })

      }
      )

      .fail(function (err) {
        $preloader.hide();
        $('.news').append('Sorry cannot connect to the server');
      })
  })
});