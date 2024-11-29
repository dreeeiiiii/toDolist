const button = document.getElementsByClassName("button-box");

const search = document.getElementsById("search");
const result = document.getElementsByClassName("result");
const apiKey = "7276908ee1a78049868f55a223f03459";


button.addEventlistener("submit", async event =>{
    event.preventDefault();

    const city = search.value;

    if(city){
        try{
            const WeatherData = await GettingWeatherData(city);
            DisplayWeather(WeatherData);         
        }
        catch(error){
            console.error(error);
            DisplayError(error);
        }

    }else {
        DisplayError("Please enter a city")
    }

});

async function GettingWeatherData(city){
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    const response = await fetch(apiKey);
    console,log(response);
}

function DisplayWeather(data){

}
function DisplayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay = textContent = message;
}
