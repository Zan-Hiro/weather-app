import '../css/DetailTodaysWeatherContainer.css';

const DetailTodaysWeatherContainer = ({ weatherData }) => {
  
  return (weatherData &&
    <div className='DetailTodaysWeatherContainer'>
      <div className='DetailTodaysWeatherContainer-sunrise'>
        <p>SUNRISE</p>
        <h1>{new Date((weatherData.current.sunrise) * 1000).toLocaleTimeString("ja").slice(0, -3)}</h1>
      </div>
      <div className='DetailTodaysWeatherContainer-sunset'>
        <p>SUNSET</p>
        <h1>{new Date((weatherData.current.sunset) * 1000).toLocaleTimeString("ja").slice(0, -3)}</h1>
      </div>
      <div className='DetailTodaysWeatherContainer-pressure'>
      <p>PRESSURE</p>
        <h1>{weatherData.current.pressure} hPa</h1>
      </div>
      <div className='DetailTodaysWeatherContainer-humidity'>
        <p>HUMIDITY</p>
      <h1>{weatherData.current.humidity}%</h1>
      </div>
      <div className='DetailTodaysWeatherContainer-wind'>
        <p>WIND</p>
      <h1>ssw {weatherData.current.wind_gust} km/hr</h1>
      </div>
      <div className='DetailTodaysWeatherContainer-feelslike'>
        <p>FEELS LIKE</p>
      <h1>{(weatherData.current.feels_like- 273.15).toFixed(0)}°</h1>
      </div>
      <div className='DetailTodaysWeatherContainer-prescipitation'>
        <p>MOONRISE</p>
        <h1>{new Date((weatherData.daily[0].moonrise) * 1000).toLocaleTimeString("ja").slice(0, -3)}</h1>
      </div>
      <div className='DetailTodaysWeatherContainer-pressure'>
        <p>MOONSET</p>
        <h1>{new Date((weatherData.daily[0].moonset) * 1000).toLocaleTimeString("ja").slice(0, -3)}</h1>
      </div>
      <div className='DetailTodaysWeatherContainer-visibility'>
        <p>Chance of Rain</p>
        <h1>{((weatherData.daily[0].pop)*100).toFixed(0)} %</h1>
      </div>
      <div className='DetailTodaysWeatherContainer-uvindex'>
        <p>UV INDEX</p>
      <h1>{weatherData.current.uvi}</h1>
      </div>
    </div>
  )
}

export default DetailTodaysWeatherContainer
