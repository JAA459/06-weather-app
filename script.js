var cities = ["phoenix"];

// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayWeatherInfo() {

  var city = $(this).attr("data-name");
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid=a919f8d6ebff3b8cdcbc03c1604cfc21"

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
          console.log(response);
      });

};
displayWeatherInfo();