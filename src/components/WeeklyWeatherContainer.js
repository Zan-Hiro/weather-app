import '../css/WeeklyWeatherContainer.css';

const WeeklyWeatherContainer = ({ weatherData }) => {
	return (
		weatherData && (
			<div className='WeeklyWeatherContainer'>
				<table>
					<thead>
						<tr>
							<th>DAY</th>
							<th>WEATHER</th>
							<th className='th-chanceofrain'>CHANCE OF RAIN</th>
							<th className='th-humidity'>HUMIDITY</th>
							<th className='th-max-temp'>MAX-TEMP</th>
							<th className='th-min-temp'>MIN-TEMP</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								{new Date(
									weatherData.daily[0].dt * 1000
								).toLocaleString('en-us', { weekday: 'long' })}
							</td>
							<td>
								<img
									src={`https://openweathermap.org/img/wn/${weatherData.daily[0].weather[0].icon}@4x.png`}
									alt='weather-icon'
									className='weather-icon'
								/>
							</td>
							<td className='td-chanceofrain'>
							{(weatherData.daily[0].pop * 100).toFixed(0)}%
							</td>
							<td className='td-humidity '>{weatherData.daily[0].humidity}%</td>
							<td className='td-max-temp'>
								{(weatherData.daily[0].temp.max - 273.15).toFixed(0)}°
							</td>
							<td className='td-min-temp'>
								{(weatherData.daily[0].temp.min - 273.15).toFixed(0)}°
							</td>
						</tr>

						<tr>
							<td>
								{new Date(
									weatherData.daily[1].dt * 1000
								).toLocaleString('en-us', { weekday: 'long' })}
							</td>
							<td>
								<img
									src={`https://openweathermap.org/img/wn/${weatherData.daily[1].weather[0].icon}@4x.png`}
									alt='weather-icon'
									className='weather-icon'
								/>
							</td>
							<td className='td-chanceofrain'>
							{(weatherData.daily[1].pop * 100).toFixed(0)}%
							</td>
							<td className='td-humidity '>{weatherData.daily[1].humidity}%</td>
							<td className='td-max-temp'>
								{(weatherData.daily[1].temp.max - 273.15).toFixed(0)}°
							</td>
							<td className='td-min-temp'>
								{(weatherData.daily[1].temp.min - 273.15).toFixed(0)}°
							</td>
						</tr>

						<tr>
							<td>
								{new Date(
									weatherData.daily[2].dt * 1000
								).toLocaleString('en-us', { weekday: 'long' })}
							</td>
							<td>
								<img
									src={`https://openweathermap.org/img/wn/${weatherData.daily[2].weather[0].icon}@4x.png`}
									alt='weather-icon'
									className='weather-icon'
								/>
							</td>
							<td className='td-chanceofrain'>
								{(weatherData.daily[2].pop * 100).toFixed(0)}%
							</td>
							<td className='td-humidity '>{weatherData.daily[2].humidity}%</td>
							<td className='td-max-temp'>
								{(weatherData.daily[2].temp.max - 273.15).toFixed(0)}°
							</td>
							<td className='td-min-temp'>
								{(weatherData.daily[2].temp.min - 273.15).toFixed(0)}°
							</td>
						</tr>

						<tr>
							<td>
								{new Date(
									weatherData.daily[3].dt * 1000
								).toLocaleString('en-us', { weekday: 'long' })}
							</td>
							<td>
								<img
									src={`https://openweathermap.org/img/wn/${weatherData.daily[3].weather[0].icon}@4x.png`}
									alt='weather-icon'
									className='weather-icon'
								/>
							</td>
							<td className='td-chanceofrain'>
							{(weatherData.daily[3].pop * 100).toFixed(0)}%
							</td>
							<td className='td-humidity '>{weatherData.daily[3].humidity}%</td>
							<td className='td-max-temp'>
								{(weatherData.daily[3].temp.max - 273.15).toFixed(0)}°
							</td>
							<td className='td-min-temp'>
								{(weatherData.daily[3].temp.min - 273.15).toFixed(0)}°
							</td>
						</tr>

						<tr>
							<td>
								{new Date(
									weatherData.daily[4].dt * 1000
								).toLocaleString('en-us', { weekday: 'long' })}
							</td>
							<td>
								<img
									src={`https://openweathermap.org/img/wn/${weatherData.daily[4].weather[0].icon}@4x.png`}
									alt='weather-icon'
									className='weather-icon'
								/>
							</td>
							<td className='td-chanceofrain'>
							{(weatherData.daily[4].pop * 100).toFixed(0)}%
							</td>
							<td className='td-humidity '>{weatherData.daily[4].humidity}%</td>
							<td className='td-max-temp'>
								{(weatherData.daily[4].temp.max - 273.15).toFixed(0)}°
							</td>
							<td className='td-min-temp'>
								{(weatherData.daily[4].temp.min - 273.15).toFixed(0)}°
							</td>
						</tr>

						<tr>
							<td>
								{new Date(
									weatherData.daily[5].dt * 1000
								).toLocaleString('en-us', { weekday: 'long' })}
							</td>
							<td>
								<img
									src={`https://openweathermap.org/img/wn/${weatherData.daily[5].weather[0].icon}@4x.png`}
									alt='weather-icon'
									className='weather-icon'
								/>
							</td>
							<td className='td-chanceofrain'>
							{(weatherData.daily[5].pop * 100).toFixed(0)}%
							</td>
							<td className='td-humidity '>{weatherData.daily[5].humidity}%</td>
							<td className='td-max-temp'>
								{(weatherData.daily[5].temp.max - 273.15).toFixed(0)}°
							</td>
							<td className='td-min-temp'>
								{(weatherData.daily[5].temp.min - 273.15).toFixed(0)}°
							</td>
						</tr>

						<tr>
							<td>
								{new Date(
									weatherData.daily[6].dt * 1000
								).toLocaleString('en-us', { weekday: 'long' })}
							</td>
							<td>
								<img
									src={`https://openweathermap.org/img/wn/${weatherData.daily[6].weather[0].icon}@4x.png`}
									alt='weather-icon'
									className='weather-icon'
								/>
							</td>
							<td className='td-chanceofrain'>
							{(weatherData.daily[6].pop * 100).toFixed(0)}%
							</td>
							<td className='td-humidity '>{weatherData.daily[6].humidity}%</td>
							<td className='td-max-temp'>
								{(weatherData.daily[6].temp.max - 273.15).toFixed(0)}°
							</td>
							<td className='td-min-temp'>
								{(weatherData.daily[6].temp.min - 273.15).toFixed(0)}°
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	);
};

export default WeeklyWeatherContainer;
