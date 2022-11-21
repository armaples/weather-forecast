// Element Variables
var body = $("body");
var header = $("<header>");
var title = $("<h1>");

var main = $("<main>");
var searchContainer = $("<div>");
var searchBar = $("<section>");
var searchInput = $("<input>");

var searchButton = $("<button>");
var searchHistory = $("<section>");
var forecastContainer = $("<div>");
var subHeading = $("<h2>");
var forecastText = $("<p>");
var currentForecast = $("<section>");
var fiveDayForecast = $("<section>");

var footer = $("<footer>");
var footerText = $("<h3>");

var cities = [];
var lat;
var lon;
var coordinates;
var key = "a3a268abd380f8f992da5766d194633f";


// Color variables
var aliceBlue = "#DCEDFF";
var wildBlueYonder = "#94B0DA";
var manatee = "#8F91A2";
var davysGrey = "#505A5B";
var outerSpaceCrayola = "#343F3E";

// Font variables
var pauline = "pauline, sans-serif";
var proxima = "proxima-soft, sans-serif";

// Element Append
header.appendTo(body);
title.appendTo(header);

main.appendTo(body);
searchContainer.appendTo(main);
searchBar.appendTo(searchContainer);
searchInput.appendTo(searchBar)

searchButton.appendTo(searchBar);
forecastContainer.appendTo(main);

footer.appendTo(body);

// Element Content
title.text("Weather Forecast");
searchButton.text("Search");
searchInput.attr("placeholder", "City Name")

// Element Styling
body.css("display", "flex").css("flex-flow", "column wrap").css("align-items", "center").css("text-align", "center").css("background-color", wildBlueYonder).css("width", "100vw");
main.css("width", "100%");
header.css("width", "100%");
title.css("font", "bold max(10vw, 40px)" + pauline).css("padding", "10px").css("color", aliceBlue);
searchContainer.css("width", "100%").css("display", "flex").css("flex-flow", "row wrap").css("justify-content", "center");
searchInput.css("background-color", aliceBlue).css("border", "1px solid" + manatee).css("margin", "2.5px").css("width", "55%").css("height", "30px").css("border-radius", "5px").css("outline", "0px").css("font-family", proxima).css("font-size", "90%").css("color", manatee).css("padding", "2.5px").css("text-align", "center");
searchButton.css("background-color", manatee).css("border", "0px solid" + wildBlueYonder).css("font-family", proxima).css("font-size", "90%").css("color", aliceBlue).css("margin", "2.5px").css("border-radius", "5px").css("width", "30%").css("height", "30px").css("padding", "2.5px");
forecastContainer.css("display", "flex").css("flex-flow", "column wrap").css("justify-content", "center").css("align-items", "center").css("width", "100%");


// Functions
function getWeather() {
    var location = searchInput.val().split(" ").join("");
    console.log(location);
    
    // get user input
    if (!location) {
        return
    } else {
        console.log(location);
        var requestLatLon = "http://api.openweathermap.org/geo/1.0/direct?q=" + location + "&limit=5&appid=" + key;
        console.log(requestLatLon);

        fetch (requestLatLon)
            .then(function (response) {
                return response.json();
            })
            .then(function (data, coordinates) {
                if (data.length === 0) {
                    return
                }
                console.log(data);
                console.log(data[0].lat + " & " + data[0].lon);
                var lat = data[0].lat;
                var lon = data[0].lon;
                var coordinates = "lat=" + lat + "&lon=" + lon;
                return coordinates;
            })
            .then(function (coordinates) {
                if (!coordinates) {
                    var errorMsg = $("<div>");
                    errorMsg.text("Please enter a valid city name.");
                    errorMsg.appendTo(forecastContainer);
                    errorMsg.css("font-family", proxima).css("font-style", "italic").css("font-size", "20px").css("color", aliceBlue).css("padding", "10px").css("margin", "10px");
                    return
                }
                console.log(coordinates);
                
                var requestWeather = "http://api.openweathermap.org/data/2.5/weather?" + coordinates + "&units=imperial&appid=" + key;
                console.log(requestWeather)

                fetch (requestWeather)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    if (data.length === 0) {
                        return
                    }

                    console.log(data);
                    console.log("Current Temp: " + data.main.temp + "°F");
                    console.log("Current Humidity: " + data.main.humidity + "%");
                    console.log("Current Wind Speed: " + data.wind.speed + "MPH");

                    var temp = data.main.temp;
                    var humid = data.main.humidity;
                    var wind = data.wind.speed;
                    var city = data.name;
                    var iconId = data.weather[0].icon;
                    var descr = data.weather[0].main;

                    var currentCity = $("<h2>");
                    var currentHead = $("<h3>");
                    var currentIcon = $("<img>");
                    var currentDescr = $("<p>");
                    var currentTemp = $("<p>");
                    var currentHumidity = $("<p>");
                    var currentWind = $("<p>");

                    currentHead.text("Today's Forecast")
                    currentIcon.attr("src", "https://openweathermap.org/img/wn/" + iconId + ".png");
                    currentDescr.text(descr)
                    currentCity.text(city);
                    currentTemp.text("Temperature: " + temp + "°F");
                    currentHumidity.text("Humidity: " + humid + "%");
                    currentWind.text("Wind Speed: " + wind + "MPH");

                    currentCity.appendTo(forecastContainer);
                    currentHead.appendTo(forecastContainer);
                    currentForecast.appendTo(forecastContainer);
                    currentIcon.appendTo(currentForecast);
                    currentDescr.appendTo(currentForecast);
                    currentTemp.appendTo(currentForecast);
                    currentHumidity.appendTo(currentForecast);
                    currentWind.appendTo(currentForecast);
                    
                    currentForecast.css("background-color", aliceBlue).css("margin", "10px").css("padding", "10px").css("font-family", proxima).css("font-size", "13px").css("color", davysGrey).css("border-radius", "5px").css("line-height", "20px").css("width", "65%");
                    currentCity.css("font-family", pauline).css("font-size", "max(5vw, 30px)").css("color", aliceBlue).css("margin", "10px").css("padding", "5px");
                    currentHead.css("font-family", proxima).css("font-size", "15px").css("color", aliceBlue).css("padding", "5px");
                    currentDescr.css("font-style", "italic").css("font-size", "14px");
                })

                var requestForecast = "http://api.openweathermap.org/data/2.5/forecast?" + coordinates + "&units=imperial&appid=" + key;
                console.log(requestForecast);

                fetch (requestForecast)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        if (data.length === 0) {
                            return
                        }
                        console.log(data);
                        var forecastHeading = $("<h3>");
                        forecastHeading.text("5-Day Forecast").css("font-family", proxima).css("font-size", "15px").css("color", aliceBlue).css("padding", "5px");;
                        forecastHeading.appendTo(forecastContainer);
                        fiveDayForecast.appendTo(forecastContainer);
                        fiveDayForecast.css("display", "flex").css("flex-flow", "row wrap").css("justify-content", "center").css("align-items", "center").css("width", "90%");

                        for (let i = 4; i < data.list.length; i+=8) {
                            console.log("Weather for: " + data.list[i].dt_txt)
                            console.log("Temp: " + data.list[0].main.temp + "°F");
                            console.log("Humidity: " + data.list[0].main.humidity + "%");
                            console.log("Wind Speed: " + data.list[0].wind.speed + "MPH");

                            var temp = data.list[i].main.temp;
                            var humid = data.list[i].main.humidity;
                            var wind = data.list[i].wind.speed;
                            var date = data.list[i].dt_txt;
                            var iconId = data.list[i].weather[0].icon;
                            var descr = data.list[i].weather[0].main;

                            var forecastBox = $("<section>");
                            var forecastDay = $("<h4>");
                            var forecastIcon = $("<img>");
                            var forecastDescr = $("<p>");
                            var forecastTemp = $("<p>");
                            var forecastHumidity = $("<p>");
                            var forecastWind = $("<p>");
                            
                            forecastDay.text(date.split(" ")[0]);
                            forecastIcon.attr("src", "https://openweathermap.org/img/wn/" + iconId + ".png")
                            forecastDescr.text(descr);
                            forecastTemp.text("Temperature: " + temp + "°F");
                            forecastHumidity.text("Humidity: " + humid + "%");
                            forecastWind.text("Wind Speed: " + wind + "MPH");

                            forecastBox.appendTo(fiveDayForecast);
                            forecastDay.appendTo(forecastBox);
                            forecastIcon.appendTo(forecastBox);
                            forecastDescr.appendTo(forecastBox);
                            forecastTemp.appendTo(forecastBox);
                            forecastHumidity.appendTo(forecastBox);
                            forecastWind.appendTo(forecastBox);

                            forecastBox.css("width", "250px").css("margin", "10px").css("padding", "10px").css("background-color", aliceBlue).css("font-family", proxima).css("font-size", "12px").css("color", davysGrey).css("border-radius", "5px").css("line-height", "20px");
                            forecastDescr.css("font-style", "italic").css("font-size", "13px");
                            forecastDay.css("font-weight", "bold");
                        }

                    })
            });

    };
};

function createHistoryTab() {

}

// Event Listeners
searchInput.keyup(function() {

});

searchButton.click(function() {
    forecastContainer.empty();
    currentForecast.empty();
    fiveDayForecast.empty();

    getWeather();
});