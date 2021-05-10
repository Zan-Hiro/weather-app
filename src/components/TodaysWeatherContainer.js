import { useEffect } from 'react';
import '../css/TodaysWeatherContainer.css';

const TodaysWeatherContainer = ({ weatherData, getCity }) => {

	return (
		weatherData && (
			<div className='TodaysWeatherContainer'>
				<div className='todaysweather'>
					<h1 className='city-name'>{(getCity).toUpperCase()}</h1>
					<h2 className='weather'>
						{weatherData.current.weather.description}
					</h2>
					<h1 className='temp'>
						{(weatherData.current.temp - 273.15).toFixed(0)}°
					</h1>
					<p>
						H:
						<span className='max-temp'>
							{(weatherData.daily[0].temp.max - 273.15).toFixed(0)}°
						</span>{' '}
						L:
						<span className='min-temp'>
							{(weatherData.daily[0].temp.min - 273.15).toFixed(0)}°
						</span>
					</p>
				</div>

				<div className='weekly-weather'>
					<div className='hourly-weather'>
						<p className='hourly now'>Now</p>
						<img
							src={`https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@4x.png`}
							alt='weather-icon'
							className='weather-icon'
						/>
						<p className='air-temp'>
							{(weatherData.current.temp - 273.15).toFixed(0)}°
						</p>
					</div>

					<div className='hourly-weather'>
						<p className='hourly'>{new Date((weatherData.hourly[1].dt) * 1000).getHours()}</p>

						<img
							src={`https://openweathermap.org/img/wn/${weatherData.hourly[1].weather[0].icon}@4x.png`}
							alt='weather-icon'
							className='weather-icon'
						/>
						<p className='air-temp'>{(weatherData.hourly[1].temp - 273.15).toFixed(0)}°</p>
					</div>
					

					<div className='hourly-weather'>
						<p className='hourly'>{new Date((weatherData.hourly[2].dt) * 1000).getHours()}</p>

						<img
							src={`https://openweathermap.org/img/wn/${weatherData.hourly[2].weather[0].icon}@4x.png`}
							alt='weather-icon'
							className='weather-icon'
						/>
						<p className='air-temp'>{(weatherData.hourly[2].temp - 273.15).toFixed(0)}°</p>
					</div>
					

					<div className='hourly-weather'>
						<p className='hourly'>{new Date((weatherData.hourly[3].dt) * 1000).getHours()}</p>

						<img
							src={`https://openweathermap.org/img/wn/${weatherData.hourly[3].weather[0].icon}@4x.png`}
							alt='weather-icon'
							className='weather-icon'
						/>
						<p className='air-temp'>{(weatherData.hourly[3].temp - 273.15).toFixed(0)}°</p>
					</div>
					

					<div className='hourly-weather'>
						<p className='hourly'>{new Date((weatherData.hourly[4].dt) * 1000).getHours()}</p>

						<img
							src={`https://openweathermap.org/img/wn/${weatherData.hourly[4].weather[0].icon}@4x.png`}
							alt='weather-icon'
							className='weather-icon'
						/>
						<p className='air-temp'>{(weatherData.hourly[4].temp - 273.15).toFixed(0)}°</p>
					</div>
					

					<div className='hourly-weather'>
						<p className='hourly'>{new Date((weatherData.hourly[5].dt) * 1000).getHours()}</p>

						<img
							src={`https://openweathermap.org/img/wn/${weatherData.hourly[5].weather[0].icon}@4x.png`}
							alt='weather-icon'
							className='weather-icon'
						/>
						<p className='air-temp'>{(weatherData.hourly[5].temp - 273.15).toFixed(0)}°</p>
					</div>
					

					<div className='hourly-weather'>
						<p className='hourly'>{new Date((weatherData.hourly[6].dt) * 1000).getHours()}</p>

						<img
							src={`https://openweathermap.org/img/wn/${weatherData.hourly[6].weather[0].icon}@4x.png`}
							alt='weather-icon'
							className='weather-icon'
						/>
						<p className='air-temp'>{(weatherData.hourly[6].temp - 273.15).toFixed(0)}°</p>
					</div>
					

					<div className='hourly-weather'>
						<p className='hourly'>{new Date((weatherData.hourly[7].dt) * 1000).getHours()}</p>

						<img
							src={`https://openweathermap.org/img/wn/${weatherData.hourly[7].weather[0].icon}@4x.png`}
							alt='weather-icon'
							className='weather-icon'
						/>
						<p className='air-temp'>{(weatherData.hourly[7].temp - 273.15).toFixed(0)}°</p>
					</div>
					

					<div className='hourly-weather'>
						<p className='hourly'>{new Date((weatherData.hourly[8].dt) * 1000).getHours()}</p>

						<img
							src={`https://openweathermap.org/img/wn/${weatherData.hourly[8].weather[0].icon}@4x.png`}
							alt='weather-icon'
							className='weather-icon'
						/>
						<p className='air-temp'>{(weatherData.hourly[8].temp - 273.15).toFixed(0)}°</p>
					</div>
					

					<div className='hourly-weather'>
						<p className='hourly'>{new Date((weatherData.hourly[9].dt) * 1000).getHours()}</p>

						<img
							src={`https://openweathermap.org/img/wn/${weatherData.hourly[9].weather[0].icon}@4x.png`}
							alt='weather-icon'
							className='weather-icon'
						/>
						<p className='air-temp'>{(weatherData.hourly[9].temp - 273.15).toFixed(0)}°</p>
					</div>
					

					<div className='hourly-weather'>
						<p className='hourly'>{new Date((weatherData.hourly[10].dt) * 1000).getHours()}</p>

						<img
							src={`https://openweathermap.org/img/wn/${weatherData.hourly[10].weather[0].icon}@4x.png`}
							alt='weather-icon'
							className='weather-icon'
						/>
						<p className='air-temp'>{(weatherData.hourly[10].temp - 273.15).toFixed(0)}°</p>
					</div>
					

					<div className='hourly-weather'>
						<p className='hourly'>{new Date((weatherData.hourly[11].dt) * 1000).getHours()}</p>

						<img
							src={`https://openweathermap.org/img/wn/${weatherData.hourly[11].weather[0].icon}@4x.png`}
							alt='weather-icon'
							className='weather-icon'
						/>
						<p className='air-temp'>{(weatherData.hourly[11].temp - 273.15).toFixed(0)}°</p>
					</div>
					

					<div className='hourly-weather'>
						<p className='hourly'>{new Date((weatherData.hourly[12].dt) * 1000).getHours()}</p>

						<img
							src={`https://openweathermap.org/img/wn/${weatherData.hourly[12].weather[0].icon}@4x.png`}
							alt='weather-icon'
							className='weather-icon'
						/>
						<p className='air-temp'>{(weatherData.hourly[12].temp - 273.15).toFixed(0)}°</p>
					</div>
					

					<div className='hourly-weather'>
						<p className='hourly'>{new Date((weatherData.hourly[13].dt) * 1000).getHours()}</p>

						<img
							src={`https://openweathermap.org/img/wn/${weatherData.hourly[13].weather[0].icon}@4x.png`}
							alt='weather-icon'
							className='weather-icon'
						/>
						<p className='air-temp'>{(weatherData.hourly[13].temp - 273.15).toFixed(0)}°</p>
					</div>
					

					<div className='hourly-weather'>
						<p className='hourly'>{new Date((weatherData.hourly[14].dt) * 1000).getHours()}</p>

						<img
							src={`https://openweathermap.org/img/wn/${weatherData.hourly[14].weather[0].icon}@4x.png`}
							alt='weather-icon'
							className='weather-icon'
						/>
						<p className='air-temp'>{(weatherData.hourly[14].temp - 273.15).toFixed(0)}°</p>
					</div>
					

					<div className='hourly-weather'>
						<p className='hourly'>{new Date((weatherData.hourly[15].dt) * 1000).getHours()}</p>

						<img
							src={`https://openweathermap.org/img/wn/${weatherData.hourly[15].weather[0].icon}@4x.png`}
							alt='weather-icon'
							className='weather-icon'
						/>
						<p className='air-temp'>{(weatherData.hourly[15].temp - 273.15).toFixed(0)}°</p>
					</div>
					

					<div className='hourly-weather'>
						<p className='hourly'>{new Date((weatherData.hourly[16].dt) * 1000).getHours()}</p>

						<img
							src={`https://openweathermap.org/img/wn/${weatherData.hourly[16].weather[0].icon}@4x.png`}
							alt='weather-icon'
							className='weather-icon'
						/>
						<p className='air-temp'>{(weatherData.hourly[16].temp - 273.15).toFixed(0)}°</p>
					</div>
					

					<div className='hourly-weather'>
						<p className='hourly'>{new Date((weatherData.hourly[17].dt) * 1000).getHours()}</p>

						<img
							src={`https://openweathermap.org/img/wn/${weatherData.hourly[17].weather[0].icon}@4x.png`}
							alt='weather-icon'
							className='weather-icon'
						/>
						<p className='air-temp'>{(weatherData.hourly[17].temp - 273.15).toFixed(0)}°</p>
					</div>
					

					<div className='hourly-weather'>
						<p className='hourly'>{new Date((weatherData.hourly[18].dt) * 1000).getHours()}</p>

						<img
							src={`https://openweathermap.org/img/wn/${weatherData.hourly[18].weather[0].icon}@4x.png`}
							alt='weather-icon'
							className='weather-icon'
						/>
						<p className='air-temp'>{(weatherData.hourly[18].temp - 273.15).toFixed(0)}°</p>
					</div>
					

					<div className='hourly-weather'>
						<p className='hourly'>{new Date((weatherData.hourly[19].dt) * 1000).getHours()}</p>

						<img
							src={`https://openweathermap.org/img/wn/${weatherData.hourly[19].weather[0].icon}@4x.png`}
							alt='weather-icon'
							className='weather-icon'
						/>
						<p className='air-temp'>{(weatherData.hourly[19].temp - 273.15).toFixed(0)}°</p>
					</div>
					
					
				</div>
			</div>
		)
	);
};

export default TodaysWeatherContainer;
