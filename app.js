const openWeatherKey ="bb80b84eb277cd8651d5b6b6e5e17a66";
const cityToLongLatKey ="918c83751cd7c7db357c30ac78db0f83";

const searchBox =document.getElementById("searchBox");
const searchBTN =document.getElementById("searchBTN");
const city =document.getElementById("city");
const country =document.getElementById("country");
const temp =document.getElementById("temp");
const condition =document.getElementById("condition");
const icon =document.getElementById("icon");

const searchBoxValue = searchBox.value;


searchBTN.addEventListener("click",function(){

    const searchBoxValue = searchBox.value;

        fetch("http://api.positionstack.com/v1/forward?access_key="+cityToLongLatKey+"&query="+searchBoxValue) 
        .then(res => res.json())
        .then(data => {

        const info = data.data[0];

        const lat = info.latitude;
        
        const long = info.longitude;

        fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid="+openWeatherKey) 
        .then(res => res.json())
        .then(data => {

            
            const iconcode = data.weather[0].icon;
            city.innerText = data.name;
            const celsiusTemp = data.main.temp - 273.15;
            temp.innerText =celsiusTemp.toFixed(1);
            condition.innerText = data.weather[0].main;

            var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
            icon.src = iconurl;

            country.innerText = data.sys.country;


        })


})

})






