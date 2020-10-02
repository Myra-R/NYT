// define variables
    var searchTerm =  "";
    var searchNum = 0;
    var startYear = 0;
    var endYear = 0;

// API URL
    

// Function for dumping the JSON content for each button into the div
    function displayArticle() {

        var article = $(this).attr("article-name");
        var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + articleRequest + '=election&api-key=LYzWgxYCysNiAmcwGN5cXJnHCfBcsUYR'
    }


    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        $("#movies-view").text(JSON.stringify(response));
      });
    }