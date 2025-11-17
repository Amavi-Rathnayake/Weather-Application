
function searchWeather(){
    let location=document.getElementById("header_input").value;

    if(location===""){
        alert("Please enter a location");
    }

    let api_url='http://api.weatherapi.com/v1/current.json?key=...&q=${location}&&aqi=no';

    fetch(api_url)
    .then(res => res.json())
    .then(data =>{console.log(data);

    document.getElementById("location").textContent= data.location.name;
    document.getElementById("country").textContent= data.location.country;
    document.getElementById("date").textContent= data.location.localtime;

    document.getElementById("temperature").textContent= data.current.temp_c + " °C";
    document.getElementById("weather_state").textContent= data.current.condition.text;

    document.getElementById("sunstate2").textContent= data.location.name;
    document.getElementById("sunstate1").textContent= data.location.name;

    document.getElementById("txthumidity").textContent= data.current.humidity + " %";
    document.getElementById("txtpressure").textContent= data.current.pressure_mb + " mb";
    document.getElementById("txtuv").textContent= data.current.uv;
    document.getElementById("txttemp").textContent= data.current.feelslike_c + " °C";
    document.getElementById("txtwind").textContent= data.current.feelslike_c +"km/h";

    document.getElementById("state").src= data.current.condition.icon; 

      })
    }

