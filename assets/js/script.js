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

// Element Styling

// color variables
var aliceBlue = "#DCEDFF";
var wildBlueYonder = "#94B0DA";
var manatee = "#8F91A2";
var davysGrey = "#505A5B";
var outerSpaceCrayola = "#343F3E";

// font variables
var pauline = "pauline, sans-serif";
var proxima = "proxima-soft, sans-serif";



// Functions

// Event Listeners