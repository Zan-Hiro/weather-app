(this["webpackJsonpopen-weather-map"]=this["webpackJsonpopen-weather-map"]||[]).push([[0],[,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),r=a(4),i=a.n(r),n=(a(9),a(2)),l=(a(10),a(0)),h=function(e){var t=e.setUrlData,a=e.setGetCity,s=Object(c.useState)(""),r=Object(n.a)(s,2),i=r[0],h=r[1],o="https://api.openweathermap.org/data/2.5/weather?q=".concat(i,"&appid=").concat("86b52f45450891ccba96a01f19197865");return Object(l.jsxs)("div",{className:"HeaderSearchBox",children:[Object(l.jsx)("div",{className:"logo-container",children:Object(l.jsx)("img",{src:"https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png",alt:"logo",className:"logo"})}),Object(l.jsxs)("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),fetch(o).then((function(e){if(!e.ok)throw Error("could not fetch the data for that resourse");return e.json()})).then((function(e){t({lat:e.coord.lat,lon:e.coord.lon}),a(i)})).catch((function(e){return console.log(e)}))},children:[Object(l.jsx)("input",{type:"text",name:"search",placeholder:"Enter a city",onChange:function(e){return h(e.target.value)},value:i}),Object(l.jsx)("button",{type:"submit",children:"Search"})]})]})},o=(a(12),function(e){var t=e.weatherData,a=e.getCity;return t&&Object(l.jsxs)("div",{className:"TodaysWeatherContainer",children:[Object(l.jsxs)("div",{className:"todaysweather",children:[Object(l.jsx)("h1",{className:"city-name",children:a.toUpperCase()}),Object(l.jsx)("h2",{className:"weather",children:t.current.weather.description}),Object(l.jsxs)("h1",{className:"temp",children:[(t.current.temp-273.15).toFixed(0),"\xb0"]}),Object(l.jsxs)("p",{children:["H:",Object(l.jsxs)("span",{className:"max-temp",children:[(t.daily[0].temp.max-273.15).toFixed(0),"\xb0"]})," ","L:",Object(l.jsxs)("span",{className:"min-temp",children:[(t.daily[0].temp.min-273.15).toFixed(0),"\xb0"]})]})]}),Object(l.jsxs)("div",{className:"weekly-weather",children:[Object(l.jsxs)("div",{className:"hourly-weather",children:[Object(l.jsx)("p",{className:"hourly now",children:"Now"}),Object(l.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(t.current.weather[0].icon,"@4x.png"),alt:"weather-icon",className:"weather-icon"}),Object(l.jsxs)("p",{className:"air-temp",children:[(t.current.temp-273.15).toFixed(0),"\xb0"]})]}),Object(l.jsxs)("div",{className:"hourly-weather",children:[Object(l.jsx)("p",{className:"hourly",children:new Date(1e3*t.hourly[1].dt).getHours()}),Object(l.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(t.hourly[1].weather[0].icon,"@4x.png"),alt:"weather-icon",className:"weather-icon"}),Object(l.jsxs)("p",{className:"air-temp",children:[(t.hourly[1].temp-273.15).toFixed(0),"\xb0"]})]}),Object(l.jsxs)("div",{className:"hourly-weather",children:[Object(l.jsx)("p",{className:"hourly",children:new Date(1e3*t.hourly[2].dt).getHours()}),Object(l.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(t.hourly[2].weather[0].icon,"@4x.png"),alt:"weather-icon",className:"weather-icon"}),Object(l.jsxs)("p",{className:"air-temp",children:[(t.hourly[2].temp-273.15).toFixed(0),"\xb0"]})]}),Object(l.jsxs)("div",{className:"hourly-weather",children:[Object(l.jsx)("p",{className:"hourly",children:new Date(1e3*t.hourly[3].dt).getHours()}),Object(l.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(t.hourly[3].weather[0].icon,"@4x.png"),alt:"weather-icon",className:"weather-icon"}),Object(l.jsxs)("p",{className:"air-temp",children:[(t.hourly[3].temp-273.15).toFixed(0),"\xb0"]})]}),Object(l.jsxs)("div",{className:"hourly-weather",children:[Object(l.jsx)("p",{className:"hourly",children:new Date(1e3*t.hourly[4].dt).getHours()}),Object(l.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(t.hourly[4].weather[0].icon,"@4x.png"),alt:"weather-icon",className:"weather-icon"}),Object(l.jsxs)("p",{className:"air-temp",children:[(t.hourly[4].temp-273.15).toFixed(0),"\xb0"]})]}),Object(l.jsxs)("div",{className:"hourly-weather",children:[Object(l.jsx)("p",{className:"hourly",children:new Date(1e3*t.hourly[5].dt).getHours()}),Object(l.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(t.hourly[5].weather[0].icon,"@4x.png"),alt:"weather-icon",className:"weather-icon"}),Object(l.jsxs)("p",{className:"air-temp",children:[(t.hourly[5].temp-273.15).toFixed(0),"\xb0"]})]}),Object(l.jsxs)("div",{className:"hourly-weather",children:[Object(l.jsx)("p",{className:"hourly",children:new Date(1e3*t.hourly[6].dt).getHours()}),Object(l.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(t.hourly[6].weather[0].icon,"@4x.png"),alt:"weather-icon",className:"weather-icon"}),Object(l.jsxs)("p",{className:"air-temp",children:[(t.hourly[6].temp-273.15).toFixed(0),"\xb0"]})]}),Object(l.jsxs)("div",{className:"hourly-weather",children:[Object(l.jsx)("p",{className:"hourly",children:new Date(1e3*t.hourly[7].dt).getHours()}),Object(l.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(t.hourly[7].weather[0].icon,"@4x.png"),alt:"weather-icon",className:"weather-icon"}),Object(l.jsxs)("p",{className:"air-temp",children:[(t.hourly[7].temp-273.15).toFixed(0),"\xb0"]})]}),Object(l.jsxs)("div",{className:"hourly-weather",children:[Object(l.jsx)("p",{className:"hourly",children:new Date(1e3*t.hourly[8].dt).getHours()}),Object(l.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(t.hourly[8].weather[0].icon,"@4x.png"),alt:"weather-icon",className:"weather-icon"}),Object(l.jsxs)("p",{className:"air-temp",children:[(t.hourly[8].temp-273.15).toFixed(0),"\xb0"]})]}),Object(l.jsxs)("div",{className:"hourly-weather",children:[Object(l.jsx)("p",{className:"hourly",children:new Date(1e3*t.hourly[9].dt).getHours()}),Object(l.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(t.hourly[9].weather[0].icon,"@4x.png"),alt:"weather-icon",className:"weather-icon"}),Object(l.jsxs)("p",{className:"air-temp",children:[(t.hourly[9].temp-273.15).toFixed(0),"\xb0"]})]}),Object(l.jsxs)("div",{className:"hourly-weather",children:[Object(l.jsx)("p",{className:"hourly",children:new Date(1e3*t.hourly[10].dt).getHours()}),Object(l.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(t.hourly[10].weather[0].icon,"@4x.png"),alt:"weather-icon",className:"weather-icon"}),Object(l.jsxs)("p",{className:"air-temp",children:[(t.hourly[10].temp-273.15).toFixed(0),"\xb0"]})]}),Object(l.jsxs)("div",{className:"hourly-weather",children:[Object(l.jsx)("p",{className:"hourly",children:new Date(1e3*t.hourly[11].dt).getHours()}),Object(l.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(t.hourly[11].weather[0].icon,"@4x.png"),alt:"weather-icon",className:"weather-icon"}),Object(l.jsxs)("p",{className:"air-temp",children:[(t.hourly[11].temp-273.15).toFixed(0),"\xb0"]})]}),Object(l.jsxs)("div",{className:"hourly-weather",children:[Object(l.jsx)("p",{className:"hourly",children:new Date(1e3*t.hourly[12].dt).getHours()}),Object(l.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(t.hourly[12].weather[0].icon,"@4x.png"),alt:"weather-icon",className:"weather-icon"}),Object(l.jsxs)("p",{className:"air-temp",children:[(t.hourly[12].temp-273.15).toFixed(0),"\xb0"]})]}),Object(l.jsxs)("div",{className:"hourly-weather",children:[Object(l.jsx)("p",{className:"hourly",children:new Date(1e3*t.hourly[13].dt).getHours()}),Object(l.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(t.hourly[13].weather[0].icon,"@4x.png"),alt:"weather-icon",className:"weather-icon"}),Object(l.jsxs)("p",{className:"air-temp",children:[(t.hourly[13].temp-273.15).toFixed(0),"\xb0"]})]}),Object(l.jsxs)("div",{className:"hourly-weather",children:[Object(l.jsx)("p",{className:"hourly",children:new Date(1e3*t.hourly[14].dt).getHours()}),Object(l.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(t.hourly[14].weather[0].icon,"@4x.png"),alt:"weather-icon",className:"weather-icon"}),Object(l.jsxs)("p",{className:"air-temp",children:[(t.hourly[14].temp-273.15).toFixed(0),"\xb0"]})]}),Object(l.jsxs)("div",{className:"hourly-weather",children:[Object(l.jsx)("p",{className:"hourly",children:new Date(1e3*t.hourly[15].dt).getHours()}),Object(l.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(t.hourly[15].weather[0].icon,"@4x.png"),alt:"weather-icon",className:"weather-icon"}),Object(l.jsxs)("p",{className:"air-temp",children:[(t.hourly[15].temp-273.15).toFixed(0),"\xb0"]})]}),Object(l.jsxs)("div",{className:"hourly-weather",children:[Object(l.jsx)("p",{className:"hourly",children:new Date(1e3*t.hourly[16].dt).getHours()}),Object(l.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(t.hourly[16].weather[0].icon,"@4x.png"),alt:"weather-icon",className:"weather-icon"}),Object(l.jsxs)("p",{className:"air-temp",children:[(t.hourly[16].temp-273.15).toFixed(0),"\xb0"]})]}),Object(l.jsxs)("div",{className:"hourly-weather",children:[Object(l.jsx)("p",{className:"hourly",children:new Date(1e3*t.hourly[17].dt).getHours()}),Object(l.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(t.hourly[17].weather[0].icon,"@4x.png"),alt:"weather-icon",className:"weather-icon"}),Object(l.jsxs)("p",{className:"air-temp",children:[(t.hourly[17].temp-273.15).toFixed(0),"\xb0"]})]}),Object(l.jsxs)("div",{className:"hourly-weather",children:[Object(l.jsx)("p",{className:"hourly",children:new Date(1e3*t.hourly[18].dt).getHours()}),Object(l.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(t.hourly[18].weather[0].icon,"@4x.png"),alt:"weather-icon",className:"weather-icon"}),Object(l.jsxs)("p",{className:"air-temp",children:[(t.hourly[18].temp-273.15).toFixed(0),"\xb0"]})]}),Object(l.jsxs)("div",{className:"hourly-weather",children:[Object(l.jsx)("p",{className:"hourly",children:new Date(1e3*t.hourly[19].dt).getHours()}),Object(l.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(t.hourly[19].weather[0].icon,"@4x.png"),alt:"weather-icon",className:"weather-icon"}),Object(l.jsxs)("p",{className:"air-temp",children:[(t.hourly[19].temp-273.15).toFixed(0),"\xb0"]})]})]})]})}),d=(a(13),function(e){var t=e.weatherData;return t&&Object(l.jsx)("div",{className:"WeatherTextContainer",children:Object(l.jsxs)("p",{children:["Today:"," ",Object(l.jsxs)("span",{className:"WeatherTextContainer-weather",children:[" ",t.daily[0].weather[0].description]}),". The high will be"," ",Object(l.jsxs)("span",{className:"WeatherTextContainer-max-temp",children:[" ",(t.daily[0].temp.max-273.15).toFixed(0),"\xb0"]}),". The low tonight will be"," ",Object(l.jsxs)("span",{className:"WeatherTextContainer-min-temp",children:[" ",(t.daily[0].temp.min-273.15).toFixed(0),"\xb0"]})," ","."]})})}),j=(a(14),function(e){var t=e.weatherData;return t&&Object(l.jsxs)("div",{className:"DetailTodaysWeatherContainer",children:[Object(l.jsxs)("div",{className:"DetailTodaysWeatherContainer-sunrise",children:[Object(l.jsx)("p",{children:"SUNRISE"}),Object(l.jsx)("h1",{children:new Date(1e3*t.current.sunrise).toLocaleTimeString("ja").slice(0,-3)})]}),Object(l.jsxs)("div",{className:"DetailTodaysWeatherContainer-sunset",children:[Object(l.jsx)("p",{children:"SUNSET"}),Object(l.jsx)("h1",{children:new Date(1e3*t.current.sunset).toLocaleTimeString("ja").slice(0,-3)})]}),Object(l.jsxs)("div",{className:"DetailTodaysWeatherContainer-pressure",children:[Object(l.jsx)("p",{children:"PRESSURE"}),Object(l.jsxs)("h1",{children:[t.current.pressure," hPa"]})]}),Object(l.jsxs)("div",{className:"DetailTodaysWeatherContainer-humidity",children:[Object(l.jsx)("p",{children:"HUMIDITY"}),Object(l.jsxs)("h1",{children:[t.current.humidity,"%"]})]}),Object(l.jsxs)("div",{className:"DetailTodaysWeatherContainer-wind",children:[Object(l.jsx)("p",{children:"WIND"}),Object(l.jsxs)("h1",{children:["ssw ",t.current.wind_gust," km/hr"]})]}),Object(l.jsxs)("div",{className:"DetailTodaysWeatherContainer-feelslike",children:[Object(l.jsx)("p",{children:"FEELS LIKE"}),Object(l.jsxs)("h1",{children:[(t.current.feels_like-273.15).toFixed(0),"\xb0"]})]}),Object(l.jsxs)("div",{className:"DetailTodaysWeatherContainer-prescipitation",children:[Object(l.jsx)("p",{children:"MOONRISE"}),Object(l.jsx)("h1",{children:new Date(1e3*t.daily[0].moonrise).toLocaleTimeString("ja").slice(0,-3)})]}),Object(l.jsxs)("div",{className:"DetailTodaysWeatherContainer-pressure",children:[Object(l.jsx)("p",{children:"MOONSET"}),Object(l.jsx)("h1",{children:new Date(1e3*t.daily[0].moonset).toLocaleTimeString("ja").slice(0,-3)})]}),Object(l.jsxs)("div",{className:"DetailTodaysWeatherContainer-visibility",children:[Object(l.jsx)("p",{children:"Chance of Rain"}),Object(l.jsxs)("h1",{children:[100*t.daily[0].pop," %"]})]}),Object(l.jsxs)("div",{className:"DetailTodaysWeatherContainer-uvindex",children:[Object(l.jsx)("p",{children:"UV INDEX"}),Object(l.jsx)("h1",{children:t.current.uvi})]})]})}),m=(a(15),function(e){var t=e.weatherData;return t&&Object(l.jsx)("div",{className:"WeeklyWeatherContainer",children:Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"DAY"}),Object(l.jsx)("th",{children:"WEATHER"}),Object(l.jsx)("th",{className:"th-chanceofrain",children:"CHANCE OF RAIN"}),Object(l.jsx)("th",{className:"th-humidity",children:"HUMIDITY"}),Object(l.jsx)("th",{className:"th-max-temp",children:"MAX-TEMP"}),Object(l.jsx)("th",{className:"th-min-temp",children:"MIN-TEMP"})]})}),Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:new Date(1e3*t.daily[0].dt).toLocaleString("en-us",{weekday:"long"})}),Object(l.jsx)("td",{children:Object(l.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(t.daily[0].weather[0].icon,"@4x.png"),alt:"weather-icon",className:"weather-icon"})}),Object(l.jsxs)("td",{className:"td-chanceofrain",children:[(100*t.daily[0].pop).toFixed(0),"%"]}),Object(l.jsxs)("td",{className:"td-humidity ",children:[t.daily[0].humidity,"%"]}),Object(l.jsxs)("td",{className:"td-max-temp",children:[(t.daily[0].temp.max-273.15).toFixed(0),"\xb0"]}),Object(l.jsxs)("td",{className:"td-min-temp",children:[(t.daily[0].temp.min-273.15).toFixed(0),"\xb0"]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:new Date(1e3*t.daily[1].dt).toLocaleString("en-us",{weekday:"long"})}),Object(l.jsx)("td",{children:Object(l.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(t.daily[1].weather[0].icon,"@4x.png"),alt:"weather-icon",className:"weather-icon"})}),Object(l.jsxs)("td",{className:"td-chanceofrain",children:[(100*t.daily[1].pop).toFixed(0),"%"]}),Object(l.jsxs)("td",{className:"td-humidity ",children:[t.daily[1].humidity,"%"]}),Object(l.jsxs)("td",{className:"td-max-temp",children:[(t.daily[1].temp.max-273.15).toFixed(0),"\xb0"]}),Object(l.jsxs)("td",{className:"td-min-temp",children:[(t.daily[1].temp.min-273.15).toFixed(0),"\xb0"]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:new Date(1e3*t.daily[2].dt).toLocaleString("en-us",{weekday:"long"})}),Object(l.jsx)("td",{children:Object(l.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(t.daily[2].weather[0].icon,"@4x.png"),alt:"weather-icon",className:"weather-icon"})}),Object(l.jsxs)("td",{className:"td-chanceofrain",children:[(100*t.daily[2].pop).toFixed(0),"%"]}),Object(l.jsxs)("td",{className:"td-humidity ",children:[t.daily[2].humidity,"%"]}),Object(l.jsxs)("td",{className:"td-max-temp",children:[(t.daily[2].temp.max-273.15).toFixed(0),"\xb0"]}),Object(l.jsxs)("td",{className:"td-min-temp",children:[(t.daily[2].temp.min-273.15).toFixed(0),"\xb0"]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:new Date(1e3*t.daily[3].dt).toLocaleString("en-us",{weekday:"long"})}),Object(l.jsx)("td",{children:Object(l.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(t.daily[3].weather[0].icon,"@4x.png"),alt:"weather-icon",className:"weather-icon"})}),Object(l.jsxs)("td",{className:"td-chanceofrain",children:[(100*t.daily[3].pop).toFixed(0),"%"]}),Object(l.jsxs)("td",{className:"td-humidity ",children:[t.daily[3].humidity,"%"]}),Object(l.jsxs)("td",{className:"td-max-temp",children:[(t.daily[3].temp.max-273.15).toFixed(0),"\xb0"]}),Object(l.jsxs)("td",{className:"td-min-temp",children:[(t.daily[3].temp.min-273.15).toFixed(0),"\xb0"]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:new Date(1e3*t.daily[4].dt).toLocaleString("en-us",{weekday:"long"})}),Object(l.jsx)("td",{children:Object(l.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(t.daily[4].weather[0].icon,"@4x.png"),alt:"weather-icon",className:"weather-icon"})}),Object(l.jsxs)("td",{className:"td-chanceofrain",children:[(100*t.daily[4].pop).toFixed(0),"%"]}),Object(l.jsxs)("td",{className:"td-humidity ",children:[t.daily[4].humidity,"%"]}),Object(l.jsxs)("td",{className:"td-max-temp",children:[(t.daily[4].temp.max-273.15).toFixed(0),"\xb0"]}),Object(l.jsxs)("td",{className:"td-min-temp",children:[(t.daily[4].temp.min-273.15).toFixed(0),"\xb0"]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:new Date(1e3*t.daily[5].dt).toLocaleString("en-us",{weekday:"long"})}),Object(l.jsx)("td",{children:Object(l.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(t.daily[5].weather[0].icon,"@4x.png"),alt:"weather-icon",className:"weather-icon"})}),Object(l.jsxs)("td",{className:"td-chanceofrain",children:[(100*t.daily[5].pop).toFixed(0),"%"]}),Object(l.jsxs)("td",{className:"td-humidity ",children:[t.daily[5].humidity,"%"]}),Object(l.jsxs)("td",{className:"td-max-temp",children:[(t.daily[5].temp.max-273.15).toFixed(0),"\xb0"]}),Object(l.jsxs)("td",{className:"td-min-temp",children:[(t.daily[5].temp.min-273.15).toFixed(0),"\xb0"]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:new Date(1e3*t.daily[6].dt).toLocaleString("en-us",{weekday:"long"})}),Object(l.jsx)("td",{children:Object(l.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(t.daily[6].weather[0].icon,"@4x.png"),alt:"weather-icon",className:"weather-icon"})}),Object(l.jsxs)("td",{className:"td-chanceofrain",children:[(100*t.daily[6].pop).toFixed(0),"%"]}),Object(l.jsxs)("td",{className:"td-humidity ",children:[t.daily[6].humidity,"%"]}),Object(l.jsxs)("td",{className:"td-max-temp",children:[(t.daily[6].temp.max-273.15).toFixed(0),"\xb0"]}),Object(l.jsxs)("td",{className:"td-min-temp",children:[(t.daily[6].temp.min-273.15).toFixed(0),"\xb0"]})]})]})]})})}),x=function(e){var t=e.weatherData,a=e.getCity;return Object(l.jsxs)("div",{className:"WeatherdataContainer",children:[Object(l.jsx)(o,{weatherData:t,getCity:a}),Object(l.jsx)(d,{weatherData:t}),Object(l.jsx)(j,{weatherData:t}),Object(l.jsx)(m,{weatherData:t})]})};var p=function(){var e=Object(c.useState)({lat:35.6895,lon:139.6917}),t=Object(n.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)(null),i=Object(n.a)(r,2),o=i[0],d=i[1],j=Object(c.useState)("tokyo"),m=Object(n.a)(j,2),p=m[0],b=m[1],w="https://api.openweathermap.org/data/2.5/onecall?lat=".concat(a.lat,"&lon=").concat(a.lon,"&exclude=minutely&appid=").concat("86b52f45450891ccba96a01f19197865");return Object(c.useEffect)((function(){fetch(w).then((function(e){if(!e.ok)throw Error("could not fetch the data for that resourse");return e.json()})).then((function(e){d(e)})).catch((function(e){return console.log(e)}))}),[a]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(h,{setUrlData:s,setGetCity:b}),Object(l.jsx)(x,{weatherData:o,getCity:p})]})};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.d35bbd52.chunk.js.map