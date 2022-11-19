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
searchInput.appendTo(searchBar);
searchButton.appendTo(searchBar);
forecastContainer.appendTo(main);

footer.appendTo(body);

// Element Content
title.text("Weather Forecast");
searchButton.text("Search");

// Element Styling
body.css("display", "flex").css("flex-flow", "column wrap").css("align-items", "center").css("text-align", "center").css("background-color", wildBlueYonder);
main.css("width", "75vw")
header.css("width", "100%");
title.css("font", "bold max(10vw, 40px)" + pauline).css("padding", "10px").css("color", aliceBlue);
searchContainer.css("width", "100%").css("display", "flex").css("flex-flow", "row wrap").css("justify-content", "center");
searchInput.css("background-color", aliceBlue).css("border", "1px solid" + manatee).css("margin", "2.5px").css("width", "50vw").css("height", "30px").css("border-radius", "5px").css("outline", "0px").css("font-family", proxima).css("font-size", "90%").css("color", manatee).css("padding", "2.5px").css("text-align", "center");
searchButton.css("background-color", manatee).css("border", "0px solid" + wildBlueYonder).css("font-family", proxima).css("font-size", "90%").css("color", aliceBlue).css("margin", "2.5px").css("border-radius", "5px").css("width", "50vw").css("height", "30px").css("padding", "2.5px");

// Functions
// Fetch 
function getLocation() {
    var city = "raleigh";
    var state = "nc";
    var country = "us";

    var requestUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + ',' + state + ',' + country + '&limit=1&appid=a3a268abd380f8f992da5766d194633f'

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        });

    var lat;
    var lon;
}
function getWeather() {
    var requestUrl = 'api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=a3a268abd380f8f992da5766d194633f'

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        });
}

getLocation();
// Event Listeners