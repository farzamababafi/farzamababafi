const apik="5e6385ef196c0b4015cc7394802a24ec"

const searchbox = document.querySelector(".searchbox");
searchbox.addEventListener('keypress',set);
function set(evt){
    if (evt.keyCode == 13){
    getresult(searchbox.value);
    }
}
function getresult(query){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apik}`)
        .then(weather =>{ return weather.json()})
        .then(show)
}
function show(weather){
    let city= document.querySelector(".location");
    city.innerHTML=`${weather.name} ${weather.sys.country}`;
    let now =new Date();
    let date= document.querySelector(".date");
    date.innerHTML=`${now.getFullYear()} ${now.getMonth()} ${now.getDate()}`
    let weather2= document.querySelector(".weather");
    weather2.innerHTML=weather.weather[0].main;
    let temp=document.querySelector(".ptemp");
    temp.innerHTML=Math.round(weather.main.temp)-273+"c";


}
